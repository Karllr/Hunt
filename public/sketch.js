var keys = [];
var blocks = [];
var blockData=[];
var entities=[];
var players=[];
var blocksInRender=[];
var runner;
var socket;
var HoldFactor=1;
var timeToPlace=0;
var deathTimer = 0;
var cam = {
    x: 0,
    y: 0
}
var name;
var selectedSlot = {
    x: undefined,
    y: undefined,
}
var settings = {
    renderDistance: 12,
}
function keyPressed() {
    keys[keyCode] = true;
}
function keyReleased() {
    keys[keyCode] = false;
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
function setup() {
    createCanvas(windowWidth,windowHeight);
    socket=io.connect("https://hunt-server-ig.onrender.com");
    runner = new Runner(200, 200);
    if(localStorage.getItem("name")!==null){
        name=localStorage.getItem("name");
    }else{
        name=prompt("Name ur player");
        localStorage.setItem("name",name);
    }
    runner.name=name;
    var data={
        x: runner.x,
        y:runner.y,
        h:runner.h,
        name:runner.name
    };
    socket.emit('start',data);
    //makeBase();
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].update(blocks);
    }
    //addStone();
    //addOres();
    //checkOverlap();
    socket.on(
        'blocks',
        function(data){
            //blocks=data;
            for(var i=0;i<data.length;i++){
                blocks.push(
                    new Block(
                        data[i].x,
                        data[i].y,
                        data[i].type
                    )
                )
            }
        }
    )
    socket.on(
        'items',
        function (data){
            Erase(entities)
            for(var i=0;i<data.length;i++){
                entities.push(
                    new Item(
                        data[i].x,
                        data[i].y,
                        data[i].type
                    )    
                );
            }
        }
    )
    socket.on('heartbeat', function(data) {
        //console.log(data);
        players = data;
    });
}

function draw() {
    background("#87CEEB");
    runner.update(blocks);
    var data = {
        x: runner.x,
        y: runner.y,
        h: runner.h,
    };
    socket.emit('update', data);
    push();
    translate(cam.x, cam.y);
    rotate(deathTimer / 1000);
    cam.x = lerp(cam.x, width / 2 - runner.x, 0.5);
    cam.y = lerp(cam.y, height / 2 - runner.y, 0.5);
    runner.show();
    Erase(blocksInRender);
    for(var i=0;i<entities.length;i++){
        entities[i].update(blocks,runner);
        entities[i].show();
        if(entities[i].collidedWithPlayer){
            entities.splice(i,1);
        }
    }
    for (var i = 0; i < blocks.length; i++) {
        if (dist(runner.x, runner.y, blocks[i].x, blocks[i].y) < 8 * 50) {
            blocks[i].inRenderDistance=true;
            blocks[i].show();
        }else{
            blocks[i].inRenderDistance=false;
        }
        if(blocks[i].inRenderDistance){
            blocksInRender.push(blocks[i])
            //console.log(blocksInRender);
        }
    }
    for (var i = -100; i < 100; i++) {
        for (var j = -100; j < 100; j++) {
            if (mouseX > i * 50 + cam.x && mouseX < (i + 1) * 50 + cam.x && mouseY > j * 50 + cam.y && mouseY < (j + 1) * 50 + cam.y) {
                selectedSlot.x = i;
                selectedSlot.y = j;
                noFill();
                stroke(0);
                strokeWeight(2);
                rect(i * 50, (j) * 50, 50, 50);
                //console.log(selectedSlot.x,selectedSlot.y);
            }
        }
    }
    if(mouseIsPressed){
        if (mouseButton === LEFT) {
            for (var i = 0; i < blocks.length; i++) {
                if (blocks[i].x === selectedSlot.x * 50 && blocks[i].y === selectedSlot.y*50&&blocks[i].type!=="air") {
                    blocks[i].break.timeDone++;
                    noStroke();
                    fill(0,0,0,100);
                    rect((selectedSlot.x*2-(blocks[i].break.timeDone/(blocks[i].break.timeToDo*HoldFactor))+1)*25,
                        (selectedSlot.y*2-(blocks[i].break.timeDone/(blocks[i].break.timeToDo*HoldFactor))+1)*25,
                        blocks[i].break.timeDone/(blocks[i].break.timeToDo*HoldFactor)*50,
                        blocks[i].break.timeDone/(blocks[i].break.timeToDo*HoldFactor)*50
                    )
                    //console.log(blocks[i].break.timeDone/blocks[i].break.timeToDo);
                }
                if(blocks[i].break.timeDone>blocks[i].break.timeToDo*HoldFactor){
                    entities.push(
                        new Item(
                            blocks[i].x,
                            blocks[i].y,
                            blocks[i].type
                        )
                    )
                    entities[entities.length-1].yvel=-4;
                    
                    socket.emit(
                        'blockRemoved',
                        {
                            index:i,
                            x:blocks[i].x,
                            y:blocks[i].y
                        }
                    )
                    socket.emit('itemAdded',
                            {
                                x:blocks[i].x,
                                y:blocks[i].y,
                                type:blocks[i].type
                            }
                    )
                    blocks.splice(i,1);
                }
            }
        }else{
            for(var i=0;i<blocks.length;i++){
                blocks[i].break.timeDone=0;
            }
        }
        if (mouseButton == RIGHT) {
            if(timeToPlace<1){
                timeToPlace=15;
                blocks.push(new Block(selectedSlot.x * 50, selectedSlot.y * 50, "grass"))
                checkOverlap();
                let blockD={
                    x:blocks[blocks.length-1].x,
                    y:blocks[blocks.length-1].y,
                    type:blocks[blocks.length-1].type,
                }
            socket.emit('blockPlaced', blockD)
            }else{
                timeToPlace--;
            }
            //console.log("you have LEFT clicked");
        }
    }

    for (var i = players.length - 1; i >= 0; i--) {
        var id = players[i].id;
        if (id.substring(2, id.length) !== socket.id) {
            fill(0, 0, 255);
            rect(players[i].x, players[i].y, 20, players[i].h);
            if(players[i].h>11){
                fill(0);
                noStroke();
                textSize(20);
                textAlign(CENTER);
                text(players[i].name, players[i].x, players[i].y - 30);
            }
        }
        // blobs[i].show();
        // if (blob.eats(blobs[i])) {
        //   blobs.splice(i, 1);
        // }
    }
    pop();
    socket.on(
        'blocks',
        function(data){
            Erase(blocks)
            for(var i=0;i<data.length;i++){
                blocks.push(
                    new Block(
                        data[i].x,
                        data[i].y,
                        data[i].type
                    )
                )
            }
        }
    )
    socket.on(
        'lackOfBlock',
        function(data){
            // Find the index of the block to remove
            var index = blocks.findIndex(
                function(block){
                    return block.x === data.x && block.y === data.y;
                }
            );
            console.log(index);
            // Remove the block if found
            if (index !== -1) {
                blocks.splice(index, 1);
            }
        }
    );
    socket.on(
        'newBlock',
        function(data){
            blocks.push(
                new Block(
                    data.x,
                    data.y,
                    data.type
                )
            )
        }
    )
    socket.on(
        'newItem',
        function(data){
            entities.push(
                new Item(
                    data.x,
                    data.y,
                    data.type
                )
            )
        }
    )
    //console.log(frameRate())
}

document.addEventListener(
    'contextmenu', 
    function(event) {
        event.preventDefault();
    }
);
