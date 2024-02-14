function createSeed(){
    return round(random(-9223372036854775808, 9223372036854775807));
}
function makeBase(seed){
    var yVal=0;
    for(var i=-50;i<50;i++){
        yVal+=round(randomGaussian(0,2))*50
        //console.log(yVal)
        blocks.push(new Block(i*50,yVal/*+height/2+(height/2)%50*/,"grass"));
    }
    for(var i=0;i<blocks.length;i++){
        if(blocks[i].type==="grass"){
            let amountOfDirtUnder=round(random(2,10));
            //console.log(amountOfDirtUnder);
            for(var j=0;j<amountOfDirtUnder;j++){
                blocks.push(new Block(blocks[i].x,blocks[i].y+(j+1)*50,"dirt"))
            }
        }
    }
    for(var i=0;i<blocks.length;i++){
        if(blocks[i].type==="grass"){
            if(round(random(1,10))===1){
                Tree(blocks[i].x,blocks[i].y);
            }
        }
    }
}
function addStone(){
    for(var i=0;i<blocks.length;i++){
        if(blocks[i].type==="dirt"&&!blocks[i].blockBelow){
            let amountOtStoneUnder=round(random(40,50));
            for(var j=0;j<amountOtStoneUnder;j++){
                blocks.push(new Block(blocks[i].x,blocks[i].y+(j+1)*50,"stone"));
            }
        }
    }
}
function addOres(){
    for(var i=0;i<blocks.length;i++){
        if(blocks[i].type==="stone"){
            if(round(random(1,16))===1){
                blocks[i].type="iron_ore"
            }
            if(round(random(1,32))===1&&blocks[i].y>40*50){
                blocks[i].type="gold_ore"
            }
            if(round(random(1,32))===1&&blocks[i].y>40*50){
                blocks[i].type="diamond_ore";
            }
        }
    }
}
function checkOverlap(){
    for(var i=0;i<blocksInRender.length;i++){
        for(var j=0;j<blocksInRender.length;j++){
            if(blocksInRender[i].x===blocksInRender[j].x&&blocksInRender[i].y===blocksInRender[j].y&&i!==j){
                if(j>i){
                    for(var k=0;k<blocks.length;k++){
                        if(blocksInRender[j].x===blocks[k].x&&blocksInRender[j].y===blocks[k].y){
                            console.log("these blocks just might be the same")
                            blocks.splice(k,1);
                        }
                    }
                }
            }
        }
    }
}