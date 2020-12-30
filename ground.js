class Ground
{


    constructor(x,y,wid,Hei)
    {
      
        var option = {
            isStatic : true 
        }


       this.body= Bodies.rectangle(x,y,wid,Hei,option)
       this.width = wid
       this.height = Hei
       
       World.add(world, this.body)



    }
    display()
    {
        var pos = this.body.position;
        rectMode(CENTER); 
        fill("orange"); 
        rect(pos.x,pos.y,this.width,this.height); 
    }


}