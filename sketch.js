var hr,mn,sc;
var hrangle,mnangle,scangle,bg;


function setup() {
  createCanvas(700,600);
  angleMode(DEGREES);
  bg=loadImage("gradientsky.jpg")
}

function draw() {
  background(bg);  
hr = hour();
mn = minute();
sc = second();

textSize (50);
textFont("algerian")

stroke ("yellow")
fill ("turquoise")
text (hr+ ":",250,550)

stroke ("yellow")
fill ("red")
text(mn+":",320,550)

stroke("black")
fill ("yellow")
text (sc+"",390,550)

textFont("arial");
    textSize(34);
    stroke("black")
    fill("white");
    text("12", 345,120);

    stroke("black");
    fill("white");
    text("3", 480,255);

    stroke("black");
    fill("white");
    text("9", 190,255);

    stroke("black");
    fill("white");
    text("6", 350,400);

translate (350,250)
rotate (-90)


strokeWeight(8);
stroke(255, 150, 235);
noFill();
scangle = map(sc, 0, 60, 0, 360);
strokeWeight(8);
stroke(154, 234, 101);
mnangle = map(mn,0,60,0,360);
strokeWeight(8);
stroke(137, 96, 253);
hrangle = map(hr % 12,0,12,0,360);

//drawing seconds hand
push();
rotate(scangle); 
stroke(255,0,0);
strokeWeight(5);
line(0,0,150,0);
pop()

//drawing minutes hand
push();
rotate(mnangle);
stroke(0,255,0);
strokeWeight(7.5);
line(0,0,115,0);
pop()


push();
rotate(hrangle);
stroke(0,0,255);
strokeWeight(10);
line(0,0,75,0);
pop()

stroke(255,0,255);
point(0,0)

//drawing the arcs
strokeWeight(5);
noFill();
//Seconds
stroke(255,0,0);
arc(0,0,400,400,0,scangle);
//Minutes
strokeWeight(7.5);
stroke(0,255,0);
arc(0,0,370,370,0,mnangle);
//Hour
strokeWeight(10);
stroke(0,0,255);
arc(0,0,340,340,0,hrangle);


  drawSprites();
}