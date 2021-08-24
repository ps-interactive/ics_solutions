function loadProfiles(userNames){
  let message = "Loading " + userNames.length + " user(s)";

  _displayFlash(message);

  _fetchProfiles(userNames, function(data){
    let profiles = data.profiles;
    _addToPage(profiles);
  });
}
