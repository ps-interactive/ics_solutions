function getUsersAvatars(userNames, cb){
  let url = "/userAvatars/";
  
  for(let index in userNames){
    _fetchAvatar(url + userNames[index], function(avatarUrl){
      _displayAvatar(userNames[index], avatarUrl);
    });
  }
}
