function buildTopicElement(topic){
  let title = "<h2>" + topic.title + "</h2>";
  let author = "<small>" + topic.author + "</small>";
  let body = "<p>" + topic.body + "</p>";

  return { title, author, body };
}
