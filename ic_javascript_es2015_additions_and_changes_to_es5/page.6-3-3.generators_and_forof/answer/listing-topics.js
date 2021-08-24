function *topicList(){
  yield "ES2015";
  yield "Semi-colons: good or bad?";
  yield "TypeScript";
}

for(let topic of topicList()){
  console.log( topic );
}
