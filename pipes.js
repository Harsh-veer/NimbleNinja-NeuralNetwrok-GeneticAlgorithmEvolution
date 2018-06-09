function Pipe(){
  this.h=30;
  this.w=20;
  this.speed=6;
  this.y1=height/2-this.h;
  this.y2=height/2;
  this.x=width-this.w;
  this.y=random([this.y1,this.y2]);

  this.offscreen=function(){
    if(this.x+this.w<0)return true;
    else return false;
  }

  this.hit=function(ninja){
    if( (ninja.x+ninja.w>=this.x && ninja.x+ninja.w<=this.x+this.w) || (ninja.x>=this.x && ninja.x<=this.x+this.w) ){
      if(ninja.y==this.y){
        return true;
      }
    }
    return false;
  }

  this.show=function(){
    noStroke();
    fill(255);
    rect(this.x,this.y,this.w,this.h);
  }

  this.update=function(){
    this.x-=this.speed;
  }

}
