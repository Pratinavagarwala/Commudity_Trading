class Oil {

    constructor() {
      this.c=createElement('h4');
      this.k=createElement('h4');
      this.p=createElement('h4');
      this.d=createElement('h4');
    }
    display(){
        this.c.html("The Current Value of CRUDE OIL per litre :5,000 ");
        this.c.position(200,200);
        this.k.html("The Current Value of KEROSENE per litre :11.20 ");
        this.k.position(300,200);
        this.p.html("The Current Value of PATROL per litre :77.50 ");
        this.p.position(400,200);
        this.d.html("The Current Value of DIESEL per gram :65.50 ");
        this.d.position(500,200);
    }
}
