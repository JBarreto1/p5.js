var vertices = [];

function setup(){
    createCanvas(640,360);
}

function mousePressed(){
    var v = createVector(mouseX,mouseY);
    vertices.push(v);
}

function draw(){
    background(51);
    var reached = [];
    var unreached = [];

    for (var i = 0; i < vertices.length; i++){
        unreached.push(vertices[i])
    }

    reached.push(unreached[0]);
    unreached.splice(0,1);

    while(unreached.length>0){
        var record = { num: 10000, reach: 0, unreach: 0};
        for (var i = 0; i < reached.length; i++){
            for(var j = 0; j < unreached.length; j++){
                var d = dist(reached[i].x, reached[i].y, unreached[j].x, unreached[j].y);
                if(d<record.num){
                    record.num = d;
                    record.reach = i;
                    record.unreach = j;     
                }
            }
        }
        line(reached[record.reach].x, reached[record.reach].y, unreached[record.unreach].x, unreached[record.unreach].y)
        reached.push(unreached[record.unreach]);
        unreached.splice(record.unreach,1);
        
    }


    for(var i = 0; i < vertices.length; i++){
        fill(255)
        stroke(255);
        ellipse(vertices[i].x, vertices[i].y, 16, 16)
    }
}