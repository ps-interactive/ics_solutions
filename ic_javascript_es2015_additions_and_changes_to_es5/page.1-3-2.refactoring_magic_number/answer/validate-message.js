function validateMessage(author, message){
  const MAX_MESSAGE_LENGTH = 140;

  if(message.length > MAX_MESSAGE_LENGTH){
    message = _trimMessage(message);
  }

  _postMessage(author, message);
}
