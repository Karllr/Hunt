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

function Erase(set){
    set.length=0;
}

function makeBase(seed){
    var yVal=0;
    for(var i=-50;i<50;i++){
        yVal+=Math.round(Math.random()*4-2)*50
        //console.log(yVal)
        blocks.push(
            {
                x:i*50,
                y:yVal,
                type:"grass"
            }
        );
    }
    for(var i=0;i<blocks.length;i++){
        if(blocks[i].type==="grass"){
            let amountOfDirtUnder=Math.round(Math.random()*8+2);
            //console.log(amountOfDirtUnder);
            for(var j=0;j<amountOfDirtUnder;j++){
                blocks.push(
                    {
                        x:blocks[i].x,
                        y:blocks[i].y+(j+1)*50,
                        type:"dirt"
                    }
                )
            }
        }
    }
    // for(var i=0;i<blocks.length;i++){
    //     if(blocks[i].type==="grass"){
    //         if(round(random(1,10))===1){
    //             Tree(blocks[i].x,blocks[i].y);
    //         }
    //     }
    // }
}
function addStone(){
    for(var i=0;i<blocks.length;i++){
        if(blocks[i].type==="dirt"&&!blocks[i].blockBelow){
            let amountOtStoneUnder=Math.round(Math.random()*10+40);
            for(var j=0;j<amountOtStoneUnder;j++){
                blocks.push(
                    {
                        x:blocks[i].x,
                        y:blocks[i].y+(j+1)*50,
                        type:"stone"
                    }
                );
            }
        }
    }
}
function addOres(){
    for(var i=0;i<blocks.length;i++){
        if(blocks[i].type==="stone"){
            if(Math.round(Math.random()*15+1)===1){
                blocks[i].type="iron_ore"
            }
            if(Math.round(Math.random()*31+1)===1&&blocks[i].y>40*50){
                blocks[i].type="gold_ore"
            }
            if(Math.round(Math.random()*31+1)===1&&blocks[i].y>40*50){
                blocks[i].type="diamond_ore";
            }
        }
    }
}
function checkOverlap(){
    for(var i=0;i<blocks.length;i++){
        for(var j=0;j<blocks.length;j++){
            if(i!==j&&blocks[i].x===blocks[j].x&&blocks[i].y===blocks[j].y){
                if(j>i){
                    blocks.splice(j,1);
                }
                if(i>j){
                    blocks.splice(i,1);
                }
            }
        }
    }
}
makeBase();
addStone();
addOres();
checkOverlap();
var app=express();
var server=app.listen(process.env.PORT,'0.0.0.0');
app.use(express.static('public'))
console.log("This server happens to be running");

var socket=require('socket.io')

var io=socket(server);

setInterval(heartbeat, 4);

function heartbeat(){
    io.sockets.emit('heartbeat', players);
}
io.sockets.on(
    'connection',
    function(socket){
        socket.emit('blocks', blocks);
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
