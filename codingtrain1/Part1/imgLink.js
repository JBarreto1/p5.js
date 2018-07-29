var fruits = ['apple','orange','banna','mango']
var added = [];

function setup(){
    noCanvas();
    for (var i = 0; i<fruits.length; i++){
        var p = createP('Here is a link: ');
        p.style('background-color','#CCC');
        p.style('padding','24px');
        var a = createA('#',fruits[i]);
        a.mousePressed(eatIt);

        a.parent(p);
    }
    var button = select("#button");
    button.mousePressed(clearStuff);
}

function eatIt(){
    var paragraph = this.parent();
    var fru = this.value();
    var ate = createP('you ate the ' + this.name);
    added.push(ate)
    ate.parent(paragraph)
}

function clearStuff(){
    for(var i=0;i<added.length;i++){
        added[i].remove();
    }
}