function buildTopicInfo(topic){
  let title = `<h1>${topic.title}</h1>`;
  let author = `<small>${topic.author}<small>`;
  
  return [title, author];
}

let topic = getCurrentTopic();
let [topicTitle, topicAuthor] = buildTopicInfo(topic);
