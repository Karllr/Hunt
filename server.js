var express=require('express');
var players=[];
var items=[];
function Player(id,x,y,name){
    this.id=id;
    this.x=x;
    this.y=y;
    this.h=20;
    this.name=name;
}
function Item(x,y,type){
    this.x=x;
    this.y=y;
    this.type=type;
}
var blocks=[];
function Block(x,y,type){
    this.x=x;
    this.y=y;
    this.type=type;
}
function Erase(set){
    set.length=0;
}

//function Tree(x,y){
//    blocks.push(
//        new Block(x-50,y-150,"leaf"),
//        new Block(x+50,y-150,"leaf"),
//        new Block(x,y-200,"leaf"),
//        new Block(x,y-50,"wood"),
//        new Block(x,y-100,"wood"),
//        new Block(x,y-150,"wood"),
//    );
//}

var worldMap=[];
var grassCoords=[];

function InitMap(){
    for(var i=-100;i<100;i++){
        worldMap.push([])
    }
    for(var i=0;i<worldMap.length;i++){
        for(var j=0;j<100;j++){
            worldMap[i].push("")
        }
    }
    
}
function createGrid(cols, rows) {
    let grid = new Array(cols);
    for (let i = 0; i < cols; i++) {
        grid[i] = new Array(rows);
    }
    return grid;
}

function makeBase(){
    let yVal=0;
    for(var i=0;i<worldMap[0].length;i++){
        if(yVal<2){
            yVal+=Math.round(Math.random()*2);
        }
        else{
            yVal+=Math.round(Math.random()*4-2)
        }
        if(worldMap[yVal][i]!=="e"){
            worldMap[yVal][i]="grass"
        }
        grassCoords.push(yVal);
    }
    for(var i=0;i<worldMap.length;i++){
        for(var j=0;j<worldMap[i].length;j++){
            if(worldMap[i][j]==="grass"){
                let amountOfDirtUnder=Math.round(Math.random()*8+2);
                for(var k=0;k<amountOfDirtUnder;k++){
                    if(worldMap[i+k+1][j]!=="e"){
                        worldMap[i+k+1][j]="dirt";
                    }
                }
            }
        }
    }
}

function addStone(){
    for(var i=0;i<worldMap.length;i++){
        for(var j=0;j<worldMap[i].length;j++){
            for(var k=0;k<worldMap.length-i-1;k++){
                if(worldMap[i+k+1][j]!=="e"&&
                worldMap[i+k+1][j]!=="grass"&&
                worldMap[i+k+1][j]!=="dirt"&&
                i+k+1>grassCoords[j]
                ){
                    worldMap[i+k+1][j]="stone"
                }
            }
        }
    }
}

function addOres(){
    for(var i=0;i<worldMap.length;i++){
        for(var j=0;j<worldMap[i].length;j++){
            if(worldMap[i][j]==="stone"){
                if(Math.round(Math.random()*15+1)===1){
                    worldMap[i][j]="iron_ore"
                }
                if(Math.round(Math.random()*15+1)===1){
                    worldMap[i][j]="gold_ore"
                }
                if(Math.round(Math.random()*31+1)===1){
                    worldMap[i][j]="diamond_ore"
                }
            }
        }
    }
}
function preThinkCaves(){
    for(var i=0;i<worldMap.length;i++){
        for(var j=0;j<worldMap[i].length;j++){
            if(Math.random()>Math.random()*0.1+0.45){
                worldMap[i][j]="e";
            }
        }
    }
}

function countEmptNeighbors(grid,x,y){
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            let col = (x + i + worldMap[0].length) % worldMap[0].length;
            let row = (y + j + worldMap.length) % worldMap.length;
            if(grid[row][col]!==""){
                sum++;
            }
        }
    }
    if(grid[y][x]!=="e"){
        sum--;
    }
    return sum;
}

function createCaves(){
    for (let i = 0; i < 3; i++) { // Repeat for 5 iterations
        let next = createGrid(worldMap[0].length, worldMap.length);
        for (let x = 0; x < worldMap[0].length; x++) {
            for (let y = 0; y < worldMap.length; y++) {
                let neighbors = countEmptNeighbors(worldMap, x, y);
                if (neighbors < 4) {
                    next[x][y] = "e"; // Set block to empty if it has fewer than 4 empty neighbors
                } else if (neighbors > 4) {
                    next[x][y] = ""; // Set block to solid if it has more than 4 empty neighbors
                } else {
                    next[x][y] = worldMap[y][x]; // Preserve the current state
                }
            }
        }
        worldMap = next;
    }
}

function Load(){
    for(var i=0;i<worldMap.length;i++){
        for(var j=0;j<worldMap[i].length;j++){
            if(worldMap[i][j]!=='e'&&worldMap[i][j]!==''){
                blocks.push(new Block(j*50,i*50,worldMap[i][j]))
            }
        }
    }
}
InitMap();
preThinkCaves();
createCaves();
makeBase();
addStone();
addOres();
Load();
var lowestPoint=0;
for(var i=0;i<blocks.length;i++){
    if(blocks[i].y>lowestPoint){
        lowestPoint=blocks[i].y+50;
    }
}
var app=express();
var server=app.listen(process.env.PORT,'0.0.0.0');
app.use(express.static('public'))
console.log("This server happens to be running");
console.log(blocks)

var socket=require('socket.io')

var io=socket(server);

setInterval(heartbeat, 4);

function heartbeat(){
    io.sockets.emit('heartbeat', players);
}
io.sockets.on(
    'connection',
    function(socket){
        socket.emit('blocks',
            {
                blocks:blocks,
                lp:lowestPoint
            }
        );
        socket.emit('items',items);
        // console.log("it appears that "+socket.id+" has joined us");
        console.log("A new client has appeard:"+socket.id);
        socket.on(
            'start',
            function(data){
                var player=new Player(socket.id,data.x,data.y,data.name);
                players.push(player)
            }
        )

        socket.on(
            'update',
            function(data){
                var player;
                for(var i=0;i<players.length;i++){
                    if(socket.id===players[i].id){
                        player=players[i];
                    }
                }
                player.x=data.x;
                player.y=data.y;
                player.h=data.h;
            }
        )

        socket.on(
            'blockRemoved',
            function(data){
                blocks.splice(data.index,1);
                socket.broadcast.emit('lackOfBlock', data);
            }
        )
        socket.on(
            'blockPlaced',
            function(data){
                blocks.push(
                    {
                        x:data.x,
                        y:data.y,
                        type:data.type
                    }
                )
                checkOverlap();
                socket.broadcast.emit('newBlock',data);
            }
        )

        socket.on(
            'itemAdded',
            function(data){
                var item=new Item(
                    data.x,
                    data.y,
                    data.type
                )
                items.push(item);
                socket.broadcast.emit('newItem', item)
            }
        )

        socket.on(
            'ATTACK',
            function(data){
                console.log("Oh dear. There has been an attack at: "+ data.x+", "+data.y)
                socket.broadcast.emit('ATTACK',data);
            }
        )
        socket.on(
            'disconnect',
            function() {
                console.log('Unfortunately,'+socket.id+'has left the game');
                for(var i=0;i<players.length;i++){
                    if(socket.id===players[i].id){
                        players.splice(i,1);
                    }
                }
            }
        );

        socket.on(
            "itemPicked",
            function(data){
                items.splice(data,1);
                socket.broadcast.emit('itemLacked',data);
            }
        )

        socket.on(
            'death',
            function(data){
                console.log(data+" died")
            }
        )
        // socket.on(
        //     'player',
        //     function(data){
        //         socket.broadcast.emit('player', data)
        //         console.log(data);
        //     }
        // )
    }
)
