console.log("running p5");

const s = ( sketch ) => {

    sketch.setup = function(){
        // console.log("start");
        // deselect text
        document.body.style['userSelect'] = "none";
        let h = document.body.clientHeight;
        let c = sketch.createCanvas(sketch.windowWidth,sketch.windowHeight);
        c.position(0,0);
        c.style("pointer-events" , "none");
        sketch.clear();
    }
    
    sketch.draw = function(){
        // console.log("looping");
        // background(45,120,10);
        sketch.stroke(0);
        sketch.strokeWeight(3);
        if(sketch.mouseIsPressed){
            sketch.line(sketch.mouseX , sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
        }
    }
};
  
var myp5 = new p5(s);