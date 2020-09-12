var jew1;
var oil1;
class Form {

  constructor() {
    this.jew=createElement('h4');
    this.button=createButton("PRESS");

    this.oil=createElement('h4');
    this.button1=createButton("PRESS");

    this.title = createElement('h2');
    this.flag=0;
  }
  
  display(){
    
    background(immunity);
    this.re=createButton("RELOAD")
    this.re.position(window.innerWidth-1500,window.innerHeight-650);
    this.title.html("Commodity Trading");
    this.title.position(window.innerWidth/2 - 50, 0);
    this.jew.html("Jewellery Rate");
    this.jew.position(200,200);
    this.button.position(200,250);
    this.oil.position(400,200);
    this.button1.position(400,250);
    
   
   
    
    this.re.mousePressed(()=>{
      location.reload();
    });

    this.button.mousePressed(()=>{
      jew1=new Jewellery();
    });

    this.button1.mousePressed(()=>{
      oil1=new Oil();
    });

  }
}
