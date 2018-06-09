const TOTAL=250;
var pipes=[];
var ninja=[];
var savedBrain=[];
var best=0;
var speedSlider;
var counter=0;

function setup(){
  speedSlider=select("#speedSlider");
  createCanvas(500,300);

  pipes.push(new Pipe());

  for(let i=0;i<TOTAL;i++){
    ninja.push(new Ninja());
  }
}

function draw(){

  background(0);
  baseLine();

  let cycles=speedSlider.value();
  for(let c=0;c<cycles;c++){
    if(ninja.length==0){
      nextGen();
      pipes=[];
      pipes.push(new Pipe());
    }

    for(let i=0;i<ninja.length;i++){
      ninja[i].show();
      ninja[i].brain.fitness++;
    }

    makeGuess();
    pipeInteraction();
    remgenPipe();

    counter++;
  }

}

function makeGuess(){
  for(let i=0;i<ninja.length;i++){
    ninja[i].inputs(pipes);
    let output=ninja[i].brain.getAV();
    if(output[0]>output[1]){
      ninja[i].togle(0);
    }else{
      ninja[i].togle(1);
    }
  }
}

function baseLine(){
  stroke(255);
  strokeWeight(2);
  line(0,height/2,width,height/2);
}

function pipeInteraction(){
  for(let i=0;i<pipes.length;i++){

    for(let j=ninja.length-1;j>=0;j--){
      if(pipes[i].hit(ninja[j])){
        savedBrain.push(ninja.splice(j,1)[0].brain);
      }
    }

    pipes[i].show();
    pipes[i].update();
  }
}

function remgenPipe(){
  for(let i=pipes.length-1;i>=0;i--){
    if(pipes[i].offscreen()){
      pipes.splice(i,1);
    }
  }
  if(counter % 50 == 0){
    pipes.push(new Pipe());
  }
}
