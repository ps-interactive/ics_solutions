import { isTopicValid, isEmailAuthorized } from "./validators";

let author = { name: "Sam", email: "sam@codeschool.com", isBlocked: false };
let topic = {
  title: "ES2015",
  author
};

isTopicValid(topic);
isEmailAuthorized(author.email);
