getReplies(1)
.then(function(replies){
  return replies.filter( reply => !reply.isAbuse );
})
.then(function(filteredReplies){
  console.log( filteredReplies );
})
.catch(function(error){
  console.log(error);
});
