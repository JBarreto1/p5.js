var particle;
var particles = [];

function setup(){
    createCanvas(700,500);
}

function mousePressed(){
    particles.push(new Particle(mouseX,mouseY));
}

function draw(){
    background(200)
    for (var i = 0; i <particles.length; i++){
        particles[i].update();
        particles[i].show();
        //console.log(particles[i].pos())
        var tempParts = particles;
        for (var j = i+1; j <particles.length; j++){
            var a = particles[i].pos()
            var b = particles[j].pos()
            if((a.x - b.x < 12) && (a.y - b.y < 12)){
                tempParts.splice(j,1);
                console.log("removed: "+particles[j-1])
            }
        }
        particles = tempParts

    }

    // for (var i = 0; i < particles.length; i++){
    //     for (var j = 0; j < particles.length; j++){
    //         if (this.)
    //     }
    // }

}

