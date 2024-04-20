function Block(x,y,type){
    this.x=x;
    this.y=y;
    this.Sz=50;
    this.type=type;
    this.blockAround=[false,false, false, false, false];// General, up, down, left, right
    this.caveAround=[false, false, false, false];//Up, down, left, right order
    this.blockBelow=false;
    this.break={
        timeDone:0,
        timeToDo:0,
    }
    this.inRenderDistance=false;
    this.shouldBeCave=false;
    this.show=function(){
        noStroke();
        switch(this.type){
            case "grass":
                this.break.timeToDo=60;
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
                this.break.timeToDo=60;
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
                this.break.timeToDo=60*5;
                fill("#717171");
                    rect(this.x,this.y,this.Sz,this.Sz);
                fill("#808080");
                    rect(this.x+this.Sz/8,this.y+this.Sz/8,this.Sz/4*3,this.Sz/4*3);
                fill("#717171");
                    rect(this.x+this.Sz/4,this.y+this.Sz/4,this.Sz/4,this.Sz/8)
                    rect(this.x+this.Sz/2,this.y+this.Sz/8*5,this.Sz/4,this.Sz/8);
            break;
            case "iron_ore":
                this.break.timeToDo=60*7;
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
                this.break.timeToDo=60*7;
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
                this.break.timeToDo=60*10;
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
                this.break.timeToDo=60*2;
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
                this.break.timeToDo=60*0.25;
                fill("#317F10");
                rect(this.x,this.y,this.Sz,this.Sz/8);
                rect(this.x,this.y,this.Sz/8,this.Sz);
                rect(this.x+this.Sz/8*7,this.y,this.Sz/8,this.Sz);
                rect(this.x,this.y+this.Sz/8*7,this.Sz,this.Sz/8);
            break;
            case "water":
                fill(0,50,100,100);
                rect(this.x,this.y,this.Sz,this.Sz);
            break;
            case "sand":
                this.break.timeToDo=60;
                fill("#D1CB93");
                rect(this.x,this.y,this.Sz,this.Sz);
                fill("#E3DAA9");
                rect(this.x+this.Sz/8,this.y+this.Sz/8,this.Sz*3/4,this.Sz*3/4)
                fill("#D1CB93");
                rect(this.x+this.Sz*3/8,this.y+this.Sz*1/4,this.Sz/8,this.Sz/8)
                rect(this.x+this.Sz*5/8,this.y+this.Sz*1/4,this.Sz/8,this.Sz/8)
                rect(this.x+this.Sz*5/8,this.y+this.Sz*1/2,this.Sz/8,this.Sz/8)
                rect(this.x+this.Sz*1/2,this.y+this.Sz*5/8,this.Sz/8,this.Sz/8)
                rect(this.x+this.Sz*1/4,this.y+this.Sz*5/8,this.Sz/8,this.Sz/8)
                rect(this.x+this.Sz*1/4,this.y+this.Sz*3/8,this.Sz/8,this.Sz/8)
            break;
            case "sandstone":
                this.break.timeToDo=5*60;
                fill("#C0BA78");
                rect(this.x,this.y,this.Sz,this.Sz);
                fill("#DFD7A2");
                rect(this.x+this.Sz/8,this.y+this.Sz/8,this.Sz*3/4,this.Sz*3/4)
                fill("#C0BA78");
                rect(this.x+this.Sz/8,this.y+this.Sz/4,this.Sz*3/4,this.Sz/8)
                rect(this.x+this.Sz/4,this.y+this.Sz*3/8,this.Sz/8,this.Sz/4)
                rect(this.x+this.Sz/8,this.y+this.Sz/2, this.Sz/8,this.Sz/8)
                rect(this.x+this.Sz*5/8,this.y+this.Sz*3/8,this.Sz/8,this.Sz/4)
                rect(this.x+this.Sz*3/8,this.y+this.Sz*5/8,this.Sz/4,this.Sz/8)
                rect(this.x+this.Sz*3/8,this.y+this.Sz*3/4,this.Sz/8,this.Sz/8)
            break
        }
    }
    this.update=function(blocks){
        for(var i=0;i<blocks.length;i++){
            var b=blocks[i];
            //console.log(b.shouldBeCave);
            if(dist(this.x,this.y,b.x,b.y)===50){
                if(b.shouldBeCave){
                    if(b.type==="grass"&&this.type==="dirt"){
                        this.shouldBeCave=true;
                    }
                    if(this.y-b.y===-50){
                        this.caveAround[0]=true;
                    }
                    if(this.y-b.y===50){
                        this.caveAround[1]=true;
                    }
                    if(this.x-b.x===-50){
                        this.caveAround[2]=true;
                    }
                    if(this.x-b.x===50){
                        this.caveAround[3]=true;
                    }
                }
                this.blockAround[0]=true;
                if(this.y-b.y===-50){
                    this.blockBelow=true;
                    this.blockAround[1]=true;
                }
                if(this.y-b.y===50){
                    this.blockAround[2]=true;
                }
                if(this.x-b.x===-50){
                    this.blockAround[4]=true;
                }
                if(this.x-b.x===50){
                    this.blockAround[3]=true;
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
    this.collidedWithPlayer=false;
    this.show=function(){
        noStroke();
        switch(this.type){
            case "grass":
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
            case "water":
                fill(0,50,100,100);
                rect(this.x,this.y,this.Sz,this.Sz);
            break;
            case "sand":
                fill("#D1CB93");
                rect(this.x,this.y,this.Sz,this.Sz);
                fill("#E3DAA9");
                rect(this.x+this.Sz/8,this.y+this.Sz/8,this.Sz*3/4,this.Sz*3/4)
                fill("#D1CB93");
                rect(this.x+this.Sz*3/8,this.y+this.Sz*1/4,this.Sz/8,this.Sz/8)
                rect(this.x+this.Sz*5/8,this.y+this.Sz*1/4,this.Sz/8,this.Sz/8)
                rect(this.x+this.Sz*5/8,this.y+this.Sz*1/2,this.Sz/8,this.Sz/8)
                rect(this.x+this.Sz*1/2,this.y+this.Sz*5/8,this.Sz/8,this.Sz/8)
                rect(this.x+this.Sz*1/4,this.y+this.Sz*5/8,this.Sz/8,this.Sz/8)
                rect(this.x+this.Sz*1/4,this.y+this.Sz*3/8,this.Sz/8,this.Sz/8)
            break;
            case "sandstone":
                fill("#C0BA78");
                rect(this.x,this.y,this.Sz,this.Sz);
                fill("#DFD7A2");
                rect(this.x+this.Sz/8,this.y+this.Sz/8,this.Sz*3/4,this.Sz*3/4)
                fill("#C0BA78");
                rect(this.x+this.Sz/8,this.y+this.Sz/4,this.Sz*3/4,this.Sz/8)
                rect(this.x+this.Sz/4,this.y+this.Sz*3/8,this.Sz/8,this.Sz/4)
                rect(this.x+this.Sz/8,this.y+this.Sz/2, this.Sz/8,this.Sz/8)
                rect(this.x+this.Sz*5/8,this.y+this.Sz*3/8,this.Sz/8,this.Sz/4)
                rect(this.x+this.Sz*3/8,this.y+this.Sz*5/8,this.Sz/4,this.Sz/8)
                rect(this.x+this.Sz*3/8,this.y+this.Sz*3/4,this.Sz/8,this.Sz/8)
            break
        }
    }
    this.update=function(blocks,runner){
        this.x+=this.xvel;
        this.xvel*=this.friction;
        this.yvel+=this.gravity;
        this.collideWith(this.xvel,0,blocks);
        this.y+=this.yvel;
        this.collideWith(0,this.yvel,blocks);
        this.collideWithPlayer(runner)
    }
    this.collideWith=function(xv,yv,blocks){
        for(var i=0;i<blocks.length;i++){
            for(var j=0;j<blocks[i].length;j++){
                var b=blocks[i][j];
                if(this.y+this.Sz > b.y &&
                    this.y        < b.y+b.Sz &&
                    this.x+this.Sz > b.x &&
                    this.x        < b.x+b.Sz){
                        //console.log("A collision is occuring")
                        switch(b.type){
                            default:
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
                            break;
                            case "e":
                            case '':
                            break;
                        }
                }
            }
        }
    }
    this.collideWithPlayer=function(player){
        if(this.y+this.Sz > player.y &&
            this.y        < player.y+player.h &&
            this.x+this.Sz > player.x &&
            this.x        < player.x+player.w){
                this.collidedWithPlayer=true;
            }
    }
}

function PhantomItem(x,y,type,Sz){
    noStroke();
    switch(type){
        case "grass":
            // noFill();
            // stroke(0);
            // strokeWeight(2);
            // rect(x,y,Sz,Sz);
            fill('#64A43A');
                rect(x,y,Sz,Sz/8*3)
            fill('#7AB54E');
                rect(x+Sz/8,y+Sz/8,Sz/8*6,Sz/8)
                rect(x+Sz/4,y+Sz/4,Sz/8,Sz/8);
                rect(x+Sz/2,y+Sz/4,Sz/4,Sz/8);
            fill('#805B3E');
                rect(x, y+Sz/8*3, Sz,Sz/8*5);
            fill('#8C6344');
                rect(x+Sz/8,y+Sz/2,Sz/4*3,Sz/8*3)
            fill('#805B3E');
                rect(x+Sz/4, y+Sz/2,Sz/8, Sz/8)
                rect(x+Sz/2, y+Sz/2,Sz/4, Sz/8)
            fill('#64A43A');
                rect(x+Sz/4, y+Sz/8*3,Sz/8, Sz/8)
                rect(x+Sz/2, y+Sz/8*3,Sz/4, Sz/8)
            fill('#846C5A');
                rect(x+Sz/8*5,y+Sz/8*5,Sz/8,Sz/8);
                rect(x+Sz/4,y+Sz/4*3,Sz/8,Sz/8);
        break;
        case "dirt":
            fill("#805B3E");
                rect(x,y,Sz,Sz);
            fill('#8C6344');
                rect(x+Sz/8,y+Sz/8,Sz/4*3,Sz/4*3);
            fill('#805B3E');
                rect(x+Sz/8*3,y+Sz/8*2,Sz/8,Sz/8)
                rect(x+Sz/8*2,y+Sz/8*3,Sz/8,Sz/8)
                rect(x+Sz/8*5,y+Sz/8*2,Sz/8,Sz/8)
                rect(x+Sz/8*5,y+Sz/8*4,Sz/8,Sz/8)
                rect(x+Sz/8*4,y+Sz/8*5,Sz/8,Sz/8)
                rect(x+Sz/8*2,y+Sz/8*5,Sz/8,Sz/8)
            fill('#85674F');
                rect(x+Sz/8*2,y+Sz/8*2,Sz/8,Sz/8);
                rect(x+Sz/8*5,y+Sz/8*5,Sz/8,Sz/8);
        break;
        case "stone":
            fill("#717171");
                rect(x,y,Sz,Sz);
            fill("#808080");
                rect(x+Sz/8,y+Sz/8,Sz/4*3,Sz/4*3);
            fill("#717171");
                rect(x+Sz/4,y+Sz/4,Sz/4,Sz/8)
                rect(x+Sz/2,y+Sz/8*5,Sz/4,Sz/8);
        break;
        case "iron_ore":
            fill("#717171");
                rect(x,y,Sz,Sz);
            fill("#808080");
                rect(x+Sz/8,y+Sz/8,Sz/8,Sz/8);
                rect(x+Sz/8*3,y+Sz/8,Sz/8,Sz/8);
                rect(x+Sz/8*6,y+Sz/8,Sz/8,Sz/8);
                rect(x+Sz/8*6,y+Sz/2,Sz/8,Sz/8);
                rect(x+Sz/8*6,y+Sz/8*6,Sz/8,Sz/8);
                rect(x+Sz/2,y+Sz/8*6,Sz/8,Sz/8);
                rect(x+Sz/8,y+Sz/8*6,Sz/8,Sz/8);
                rect(x+Sz/8,y+Sz/8*3,Sz/8,Sz/8);
                rect(x+Sz/8*3,y+Sz/8*3,Sz/4,Sz/4);
            fill("#D8AF93");
                rect(x+Sz/4,y+Sz/4,Sz/8,Sz/8);
                rect(x+Sz/4,y+Sz/8*5,Sz/8,Sz/8);
                rect(x+Sz/8*5,y+Sz/4,Sz/8,Sz/8);
                rect(x+Sz/8*5,y+Sz/8*5,Sz/8,Sz/8);
            fill("#AF8E77");
                rect(x+Sz/4,y+Sz/8,Sz/8,Sz/8);
                rect(x+Sz/8,y+Sz/4,Sz/8,Sz/8);
                rect(x+Sz/8*5,y+Sz/8,Sz/8,Sz/8);
                rect(x+Sz/8*6,y+Sz/4,Sz/8,Sz/8);
                rect(x+Sz/8,y+Sz/8*5,Sz/8,Sz/8);
                rect(x+Sz/4,y+Sz/8*6,Sz/8,Sz/8);
                rect(x+Sz/8*5,y+Sz/8*6,Sz/8,Sz/8);
                rect(x+Sz/8*6,y+Sz/8*5,Sz/8,Sz/8);
        break;
        case "gold_ore":
            fill("#717171");
                rect(x,y,Sz,Sz);
            fill("#808080");
                rect(x+Sz/8,y+Sz/8,Sz/8,Sz/8);
                rect(x+Sz/8*3,y+Sz/8,Sz/8,Sz/8);
                rect(x+Sz/8*6,y+Sz/8,Sz/8,Sz/8);
                rect(x+Sz/8*6,y+Sz/2,Sz/8,Sz/8);
                rect(x+Sz/8*6,y+Sz/8*6,Sz/8,Sz/8);
                rect(x+Sz/2,y+Sz/8*6,Sz/8,Sz/8);
                rect(x+Sz/8,y+Sz/8*6,Sz/8,Sz/8);
                rect(x+Sz/8,y+Sz/8*3,Sz/8,Sz/8);
                rect(x+Sz/8*3,y+Sz/8*3,Sz/4,Sz/4);
            fill("#FFFFB5");
                rect(x+Sz/4,y+Sz/4,Sz/8,Sz/8);
                rect(x+Sz/4,y+Sz/8*5,Sz/8,Sz/8);
                rect(x+Sz/8*5,y+Sz/4,Sz/8,Sz/8);
                rect(x+Sz/8*5,y+Sz/8*5,Sz/8,Sz/8);
            fill("#F8AF2B");
                rect(x+Sz/4,y+Sz/8,Sz/8,Sz/8);
                rect(x+Sz/8*5,y+Sz/8,Sz/8,Sz/8);
                rect(x+Sz/4,y+Sz/8*6,Sz/8,Sz/8);
                rect(x+Sz/8*5,y+Sz/8*6,Sz/8,Sz/8);
            fill("#FCEE4B");
                rect(x+Sz/8,y+Sz/4,Sz/8,Sz/8);
                rect(x+Sz/8*6,y+Sz/4,Sz/8,Sz/8);
                rect(x+Sz/8,y+Sz/8*5,Sz/8,Sz/8);
                rect(x+Sz/8*6,y+Sz/8*5,Sz/8,Sz/8);
        break;
        case "diamond_ore":
            fill("#717171");
                rect(x,y,Sz,Sz);
            fill("#808080");
                rect(x+Sz/8,y+Sz/8,Sz/8,Sz/8);
                rect(x+Sz/8*3,y+Sz/8,Sz/8,Sz/8);
                rect(x+Sz/8*6,y+Sz/8,Sz/8,Sz/8);
                rect(x+Sz/8*6,y+Sz/2,Sz/8,Sz/8);
                rect(x+Sz/8*6,y+Sz/8*6,Sz/8,Sz/8);
                rect(x+Sz/2,y+Sz/8*6,Sz/8,Sz/8);
                rect(x+Sz/8,y+Sz/8*6,Sz/8,Sz/8);
                rect(x+Sz/8,y+Sz/8*3,Sz/8,Sz/8);
                rect(x+Sz/8*3,y+Sz/8*3,Sz/4,Sz/4);
            fill("#C7E7FE");
                rect(x+Sz/4,y+Sz/4,Sz/8,Sz/8);
                rect(x+Sz/4,y+Sz/8*5,Sz/8,Sz/8);
                rect(x+Sz/8*5,y+Sz/4,Sz/8,Sz/8);
                rect(x+Sz/8*5,y+Sz/8*5,Sz/8,Sz/8);
            fill("#77CEFB");
                rect(x+Sz/4,y+Sz/8,Sz/8,Sz/8);
                rect(x+Sz/8*5,y+Sz/8,Sz/8,Sz/8);
                rect(x+Sz/4,y+Sz/8*6,Sz/8,Sz/8);
                rect(x+Sz/8*5,y+Sz/8*6,Sz/8,Sz/8);
            fill("#5DECF5");
                rect(x+Sz/8,y+Sz/4,Sz/8,Sz/8);
                rect(x+Sz/8*6,y+Sz/4,Sz/8,Sz/8);
                rect(x+Sz/8,y+Sz/8*5,Sz/8,Sz/8);
                rect(x+Sz/8*6,y+Sz/8*5,Sz/8,Sz/8);
        break;
        case "wood":
            fill("#534228");
                rect(x,y,Sz,Sz);
            fill("#695433");
                rect(x+Sz/8,y,Sz/4*3,Sz);
            fill("#534228");
                rect(x+Sz/4,y+Sz/8,Sz/8,Sz/4)
                rect(x+Sz/4,y+Sz/8*5,Sz/8,Sz/4)
                rect(x+Sz/8*5,y,Sz/8,Sz/4)
                rect(x+Sz/8*5,y+Sz/8*3,Sz/8,Sz/4)
                rect(x+Sz/8*5,y+Sz/8*6,Sz/8,Sz/4)
        break;
        case "leaf":
            fill("#317F10");
            rect(x,y,Sz,Sz/8);
            rect(x,y,Sz/8,Sz);
            rect(x+Sz/8*7,y,Sz/8,Sz);
            rect(x,y+Sz/8*7,Sz,Sz/8);
        break;
        case "sand":
            fill("#D1CB93");
            rect(x,y,Sz,Sz);
            fill("#E3DAA9");
            rect(x+Sz/8,y+Sz/8,Sz*3/4,Sz*3/4)
            fill("#D1CB93");
            rect(x+Sz*3/8,y+Sz*1/4,Sz/8,Sz/8)
            rect(x+Sz*5/8,y+Sz*1/4,Sz/8,Sz/8)
            rect(x+Sz*5/8,y+Sz*1/2,Sz/8,Sz/8)
            rect(x+Sz*1/2,y+Sz*5/8,Sz/8,Sz/8)
            rect(x+Sz*1/4,y+Sz*5/8,Sz/8,Sz/8)
            rect(x+Sz*1/4,y+Sz*3/8,Sz/8,Sz/8)
        break;
        case "sandstone":
            fill("#C0BA78");
            rect(x,y,Sz,Sz);
            fill("#DFD7A2");
            rect(x+Sz/8,y+Sz/8,Sz*3/4,Sz*3/4)
            fill("#C0BA78");
            rect(x+Sz/8,y+Sz/4,Sz*3/4,Sz/8)
            rect(x+Sz/4,y+Sz*3/8,Sz/8,Sz/4)
            rect(x+Sz/8,y+Sz/2, Sz/8,Sz/8)
            rect(x+Sz*5/8,y+Sz*3/8,Sz/8,Sz/4)
            rect(x+Sz*3/8,y+Sz*5/8,Sz/4,Sz/8)
            rect(x+Sz*3/8,y+Sz*3/4,Sz/8,Sz/8)
        break
    }
}

function OpenInventory(){
    noStroke()
    fill(0,0,0,200)
    rect(0,0,width,height);
    strokeWeight(5);
    stroke(255);
    noFill();
    rect(width/2+10,height/2-(height*0.8)/2,width/3,height*0.8,5)
    document.getElementById("inventory").style.display="block";
}
function ShowHotbar(){
}
