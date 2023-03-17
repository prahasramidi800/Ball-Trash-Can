class Ground{
    //constructor special function no need to call when we create object of this class will execute 
    constructor(x, y, w, h){
      var option = {
        isStatic: true
      }
      this.x = x
      this.y = y
      this.w = w
      this.h = h
      this.body = Bodies.rectangle(x, y, w, h, option)
      World.add(world, this.body)
    }
    //we need to call function
    display(){
        var pos=this.body.position;
        push()
        rectMode(CENTER)
        fill("teal")
        rect(pos.x, pos.y,this.w,this.h)
        pop()
    }
}


