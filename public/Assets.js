function Block(x,y,type){
    this.x=x;
    this.y=y;
    this.Sz=50;
    this.type=type;
    this.blockBelow=false;
    this.break={
        timeDone:0,
        timeToDo:0,
    }
    this.inRenderDistance=false;
    this.show=function(){
        noStroke();
        switch(this.type){
            case "grass":
                this.break.timeToDo=frameRate();
                // noFill();
                // stroke(0);
                // strokeWeight(2);
                // rect(this.x,this.y,this.Sz,this.Sz);
                fill('#64A43A');
                    rect(this.x,this.y,this.Sz,this.Sz/8*3)
                fill('#7AB54E');
                    rect(this.x+this.Sz/8,this.y+this.Sz/8,this.Sz/8*6,this.Sz/8)
                    rect(this.x+this.Sz/4,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/2,this.y+this.Sz/4,this.Sz/4,this.Sz/8);
                fill('#805B3E');
                    rect(this.x, this.y+this.Sz/8*3, this.Sz,this.Sz/8*5);
                fill('#8C6344');
                    rect(this.x+this.Sz/8,this.y+this.Sz/2,this.Sz/4*3,this.Sz/8*3)
                fill('#805B3E');
                    rect(this.x+this.Sz/4, this.y+this.Sz/2,this.Sz/8, this.Sz/8)
                    rect(this.x+this.Sz/2, this.y+this.Sz/2,this.Sz/4, this.Sz/8)
                fill('#64A43A');
                    rect(this.x+this.Sz/4, this.y+this.Sz/8*3,this.Sz/8, this.Sz/8)
                    rect(this.x+this.Sz/2, this.y+this.Sz/8*3,this.Sz/4, this.Sz/8)
                fill('#846C5A');
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/4,this.y+this.Sz/4*3,this.Sz/8,this.Sz/8);
            break;
            case "dirt":
                this.break.timeToDo=frameRate();
                fill("#805B3E");
                    rect(this.x,this.y,this.Sz,this.Sz);
                fill('#8C6344');
                    rect(this.x+this.Sz/8,this.y+this.Sz/8,this.Sz/4*3,this.Sz/4*3);
                fill('#805B3E');
                    rect(this.x+this.Sz/8*3,this.y+this.Sz/8*2,this.Sz/8,this.Sz/8)
                    rect(this.x+this.Sz/8*2,this.y+this.Sz/8*3,this.Sz/8,this.Sz/8)
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*2,this.Sz/8,this.Sz/8)
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*4,this.Sz/8,this.Sz/8)
                    rect(this.x+this.Sz/8*4,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8)
                    rect(this.x+this.Sz/8*2,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8)
                fill('#85674F');
                    rect(this.x+this.Sz/8*2,this.y+this.Sz/8*2,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
            break;
            case "stone":
                this.break.timeToDo=frameRate()*5;
                fill("#717171");
                    rect(this.x,this.y,this.Sz,this.Sz);
                fill("#808080");
                    rect(this.x+this.Sz/8,this.y+this.Sz/8,this.Sz/4*3,this.Sz/4*3);
                fill("#717171");
                    rect(this.x+this.Sz/4,this.y+this.Sz/4,this.Sz/4,this.Sz/8)
                    rect(this.x+this.Sz/2,this.y+this.Sz/8*5,this.Sz/4,this.Sz/8);
            break;
            case "iron_ore":
                this.break.timeToDo=frameRate()*7;
                fill("#717171");
                    rect(this.x,this.y,this.Sz,this.Sz);
                fill("#808080");
                    rect(this.x+this.Sz/8,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*3,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/2,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/2,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8,this.y+this.Sz/8*3,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*3,this.y+this.Sz/8*3,this.Sz/4,this.Sz/4);
                fill("#D8AF93");
                    rect(this.x+this.Sz/4,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/4,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
                fill("#AF8E77");
                    rect(this.x+this.Sz/4,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/4,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
            break;
            case "gold_ore":
                this.break.timeToDo=frameRate()*7;
                fill("#717171");
                    rect(this.x,this.y,this.Sz,this.Sz);
                fill("#808080");
                    rect(this.x+this.Sz/8,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*3,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/2,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/2,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8,this.y+this.Sz/8*3,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*3,this.y+this.Sz/8*3,this.Sz/4,this.Sz/4);
                fill("#FFFFB5");
                    rect(this.x+this.Sz/4,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/4,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
                fill("#F8AF2B");
                    rect(this.x+this.Sz/4,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/4,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                fill("#FCEE4B");
                    rect(this.x+this.Sz/8,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
            break;
            case "diamond_ore":
                this.break.timeToDo=frameRate()*10;
                fill("#717171");
                    rect(this.x,this.y,this.Sz,this.Sz);
                fill("#808080");
                    rect(this.x+this.Sz/8,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*3,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/2,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/2,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8,this.y+this.Sz/8*3,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*3,this.y+this.Sz/8*3,this.Sz/4,this.Sz/4);
                fill("#C7E7FE");
                    rect(this.x+this.Sz/4,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/4,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
                fill("#77CEFB");
                    rect(this.x+this.Sz/4,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/4,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                fill("#5DECF5");
                    rect(this.x+this.Sz/8,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
            break;
            case "wood":
                this.break.timeToDo=frameRate()*2;
                fill("#534228");
                    rect(this.x,this.y,this.Sz,this.Sz);
                fill("#695433");
                    rect(this.x+this.Sz/8,this.y,this.Sz/4*3,this.Sz);
                fill("#534228");
                    rect(this.x+this.Sz/4,this.y+this.Sz/8,this.Sz/8,this.Sz/4)
                    rect(this.x+this.Sz/4,this.y+this.Sz/8*5,this.Sz/8,this.Sz/4)
                    rect(this.x+this.Sz/8*5,this.y,this.Sz/8,this.Sz/4)
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*3,this.Sz/8,this.Sz/4)
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*6,this.Sz/8,this.Sz/4)
            break;
            case "leaf":
                this.break.timeToDo=frameRate()*0.25;
                fill("#317F10");
                rect(this.x,this.y,this.Sz,this.Sz/8);
                rect(this.x,this.y,this.Sz/8,this.Sz);
                rect(this.x+this.Sz/8*7,this.y,this.Sz/8,this.Sz);
                rect(this.x,this.y+this.Sz/8*7,this.Sz,this.Sz/8);
            break;
        }
    }
    this.update=function(blocks){
        for(var i=0;i<blocks.length;i++){
            var b=blocks[i];
            if(dist(this.x,this.y,b.x,b.y)===50){
                if(this.y-b.y===-50){
                    this.blockBelow=true;
                }
            }
        }
    }
}

function Tree(x,y){
    blocks.push(
        new Block(x-50,y-150,"leaf"),
        new Block(x+50,y-150,"leaf"),
        new Block(x,y-200,"leaf"),
        new Block(x,y-50,"wood"),
        new Block(x,y-100,"wood"),
        new Block(x,y-150,"wood"),
    );
}


function Item(x,y,type){
    this.x=x;
    this.y=y;
    this.type=type;
    this.Sz=20;
    this.yvel=0;
    this.gravity=0.5;
    this.xvel=0;
    this.friction=0.7;
    this.show=function(){
        noStroke();
        switch(this.type){
            case "grass":
                fill('#64A43A');
                    rect(this.x,this.y,this.Sz,this.Sz/8*3)
                fill('#7AB54E');
                    rect(this.x+this.Sz/8,this.y+this.Sz/8,this.Sz/8*6,this.Sz/8)
                    rect(this.x+this.Sz/4,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/2,this.y+this.Sz/4,this.Sz/4,this.Sz/8);
                fill('#805B3E');
                    rect(this.x, this.y+this.Sz/8*3, this.Sz,this.Sz/8*5);
                fill('#8C6344');
                    rect(this.x+this.Sz/8,this.y+this.Sz/2,this.Sz/4*3,this.Sz/8*3)
                fill('#805B3E');
                    rect(this.x+this.Sz/4, this.y+this.Sz/2,this.Sz/8, this.Sz/8)
                    rect(this.x+this.Sz/2, this.y+this.Sz/2,this.Sz/4, this.Sz/8)
                fill('#64A43A');
                    rect(this.x+this.Sz/4, this.y+this.Sz/8*3,this.Sz/8, this.Sz/8)
                    rect(this.x+this.Sz/2, this.y+this.Sz/8*3,this.Sz/4, this.Sz/8)
                fill('#846C5A');
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/4,this.y+this.Sz/4*3,this.Sz/8,this.Sz/8);
            break;
            case "dirt":
                fill("#805B3E");
                    rect(this.x,this.y,this.Sz,this.Sz);
                fill('#8C6344');
                    rect(this.x+this.Sz/8,this.y+this.Sz/8,this.Sz/4*3,this.Sz/4*3);
                fill('#805B3E');
                    rect(this.x+this.Sz/8*3,this.y+this.Sz/8*2,this.Sz/8,this.Sz/8)
                    rect(this.x+this.Sz/8*2,this.y+this.Sz/8*3,this.Sz/8,this.Sz/8)
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*2,this.Sz/8,this.Sz/8)
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*4,this.Sz/8,this.Sz/8)
                    rect(this.x+this.Sz/8*4,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8)
                    rect(this.x+this.Sz/8*2,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8)
                fill('#85674F');
                    rect(this.x+this.Sz/8*2,this.y+this.Sz/8*2,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
            break;
            case "stone":
                fill("#717171");
                    rect(this.x,this.y,this.Sz,this.Sz);
                fill("#808080");
                    rect(this.x+this.Sz/8,this.y+this.Sz/8,this.Sz/4*3,this.Sz/4*3);
                fill("#717171");
                    rect(this.x+this.Sz/4,this.y+this.Sz/4,this.Sz/4,this.Sz/8)
                    rect(this.x+this.Sz/2,this.y+this.Sz/8*5,this.Sz/4,this.Sz/8);
            break;
            case "iron_ore":
                fill("#717171");
                    rect(this.x,this.y,this.Sz,this.Sz);
                fill("#808080");
                    rect(this.x+this.Sz/8,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*3,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/2,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/2,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8,this.y+this.Sz/8*3,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*3,this.y+this.Sz/8*3,this.Sz/4,this.Sz/4);
                fill("#D8AF93");
                    rect(this.x+this.Sz/4,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/4,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
                fill("#AF8E77");
                    rect(this.x+this.Sz/4,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/4,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
            break;
            case "gold_ore":
                fill("#717171");
                    rect(this.x,this.y,this.Sz,this.Sz);
                fill("#808080");
                    rect(this.x+this.Sz/8,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*3,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/2,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/2,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8,this.y+this.Sz/8*3,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*3,this.y+this.Sz/8*3,this.Sz/4,this.Sz/4);
                fill("#FFFFB5");
                    rect(this.x+this.Sz/4,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/4,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
                fill("#F8AF2B");
                    rect(this.x+this.Sz/4,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/4,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                fill("#FCEE4B");
                    rect(this.x+this.Sz/8,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
            break;
            case "diamond_ore":
                fill("#717171");
                    rect(this.x,this.y,this.Sz,this.Sz);
                fill("#808080");
                    rect(this.x+this.Sz/8,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*3,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/2,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/2,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8,this.y+this.Sz/8*3,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*3,this.y+this.Sz/8*3,this.Sz/4,this.Sz/4);
                fill("#C7E7FE");
                    rect(this.x+this.Sz/4,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/4,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
                fill("#77CEFB");
                    rect(this.x+this.Sz/4,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/4,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*6,this.Sz/8,this.Sz/8);
                fill("#5DECF5");
                    rect(this.x+this.Sz/8,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/4,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
                    rect(this.x+this.Sz/8*6,this.y+this.Sz/8*5,this.Sz/8,this.Sz/8);
            break;
            case "wood":
                fill("#534228");
                    rect(this.x,this.y,this.Sz,this.Sz);
                fill("#695433");
                    rect(this.x+this.Sz/8,this.y,this.Sz/4*3,this.Sz);
                fill("#534228");
                    rect(this.x+this.Sz/4,this.y+this.Sz/8,this.Sz/8,this.Sz/4)
                    rect(this.x+this.Sz/4,this.y+this.Sz/8*5,this.Sz/8,this.Sz/4)
                    rect(this.x+this.Sz/8*5,this.y,this.Sz/8,this.Sz/4)
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*3,this.Sz/8,this.Sz/4)
                    rect(this.x+this.Sz/8*5,this.y+this.Sz/8*6,this.Sz/8,this.Sz/4)
            break;
            case "leaf":
                fill("#317F10");
                rect(this.x,this.y,this.Sz,this.Sz/8);
                rect(this.x,this.y,this.Sz/8,this.Sz);
                rect(this.x+this.Sz/8*7,this.y,this.Sz/8,this.Sz);
                rect(this.x,this.y+this.Sz/8*7,this.Sz,this.Sz/8);
            break;
        }
    }
    this.update=function(blocks){
        this.x+=this.xvel;
        this.xvel*=this.friction;
        this.yvel+=this.gravity;
        this.collideWith(this.xvel,0,blocks);
        this.y+=this.yvel;
        this.collideWith(0,this.yvel,blocks);
    }
    this.collideWith=function(xv,yv,blocks){
        for(var i=0;i<blocks.length;i++){
            var b=blocks[i];
            if(this.y+this.Sz > b.y &&
                this.y        < b.y+b.Sz &&
                this.x+this.Sz > b.x &&
                this.x        < b.x+b.Sz){
                    //console.log("A collision is occuring")
                    // switch(b.type){
                    //     default:
                            if (yv > 0) {
                                this.yvel = 0;
                                this.y = b.y - this.Sz;
                            }
                            // TOP
                            if (yv < 0) {
                                this.yvel = 0;
                                this.y = b.y + b.Sz;
                            }
                            // RIGHT
                            if (xv > 0) {
                                this.xvel = 0;
                                this.x = b.x - this.Sz;
                            }
                            // LEFT
                            if (xv < 0) {
                                this.xvel = 0;
                                this.x = b.x + b.Sz;
                            }
                    //     break;
                    // }
            }
        }
    }
}