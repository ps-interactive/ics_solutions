let topicId = currentTopic();
let activeUsers = ["Sam", "Tyler", "Brook"];

for(let user of activeUsers){
  notifyTopicReply(topicId, user);
}
