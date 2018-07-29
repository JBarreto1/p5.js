var input;
var slider;
var paragraph;
var apara;
var acs;
var ps;

function setup() {
    noCanvas();
    paragraph = createP('starting text');
    textbox = createInput('enter text');
    slider = createSlider(10,64,16);
    apara = select('#a');
    apara.style('background-color','red');
    
    acs = selectAll('.klas');
    for (var i = 0; i < acs.length; i++){
        acs[i].style('font-size','16pt');
        
    }
    ps = selectAll('p');
    for (var i = 0; i<ps.length; i++){
        ps[i].mouseOver(high);
        ps[i].mouseOut(unhigh);
    }
    
    slider.input(updateSize)
    textbox.input(updateText);
}

function updateSize(){
    paragraph.style("font-size", slider.value()+"pt");
    apara.style('background-color',"rgb(255,50,"+map(slider.value(),10,64,0,255)+")");
    //apara.style('background-color',"pink");
}

function updateText(){
    paragraph.html(textbox.value());
    //acs.style('font-size','16pt');
}

function high(){
    this.style("background-color","pink");
    this.style("font-size","15pt");
}

function unhigh(){
    this.style("font-size","10pt");
    this.style('background-color',"rgb(255,50,"+map(slider.value(),10,64,0,255)+")");
}