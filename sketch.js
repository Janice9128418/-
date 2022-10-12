function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#62929e");
  // stroke("#ade8f4") //框線顏色
  noFill() //不要充滿顏色
  rectMode(CENTER)  //以方框中心點為座標點

  for(var j=0;j<(height/50);j++) //j++=j=j+1
  {
  
    for(var i=0;i<(width/50);i++) //i++=i=i+1
    {
     ellipse(25+(i*50),25+(j*50),50+mouseX/20) 
     rect(25+(i*50),25+(j*50),15+mouseX/15)
     stroke("#e7c6ff")
     rect(25+(i*50),25+(j*50),50) 
     stroke("#d8e2dc")
     ellipse(50+(i*50),50+(j*50),50+mouseY/20)
     stroke("#fe6d73")
    }   
  }  
}