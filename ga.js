function nextGen(){
  if(best<savedBrain[TOTAL-1].fitness)best=savedBrain[TOTAL-1].fitness;
  console.log(best);
  for(let i=0;i<TOTAL;i++){
    ninja[i]=new Ninja();
    ninja[i].brain.copy(savedBrain[TOTAL-1]);
    ninja[i].brain.mutate(0.1);
  }
  savedBrain=[];
}
