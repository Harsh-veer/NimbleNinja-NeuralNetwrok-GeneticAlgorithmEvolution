function Ninja(){
  this.h=30;
  this.w=20;
  this.x=width/4;
  this.y1=height/2-this.h;
  this.y2=height/2;
  this.y=this.y1;
  this.state=1;//1 up 0 down

  this.brain=new NN(6,12,2);

  this.show=function(){
    noStroke();
    fill(255,0,0);
    rect(this.x,this.y,this.w,this.h);
  }

  this.togle=function(t){
    if(t==0)this.y=this.y1;
    else this.y=this.y2;
  }

  this.inputs=function(pipes){

    let closestPipe=null;
    let record=Infinity;
    for(let i=0;i<pipes.length;i++){
      let diff=pipes[i].x-this.x;
      if(diff>0 && diff<record){
        record=diff;
        closestPipe=pipes[i];
      }
    }

    let inputs=[];
    if(closestPipe!=null){
      inputs[0]=this.y/height;
      inputs[1]=this.x/width;
      inputs[2]=this.w/width;
      inputs[3]=closestPipe.x/width;
      inputs[4]=closestPipe.y/height;
      inputs[5]=closestPipe.w/width;
    }

    this.brain.setINP(inputs);
  }

}
