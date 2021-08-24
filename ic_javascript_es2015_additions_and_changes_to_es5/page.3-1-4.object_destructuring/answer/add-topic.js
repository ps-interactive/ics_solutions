let { fullName } = buildUser("Tyler", "Williams");

let title  = "The New Object Syntax - Good or Bad?";
let author = fullName;
let body = "What do you all think of the new syntax? I like it!";

let topic = { title, author, body };

let element = buildTopicElement(topic);

addTopicToPage(element);
