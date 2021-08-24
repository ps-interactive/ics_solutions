function loadProfiles(userNames){

  const MAX_USERS = 15;

  if(userNames.length > MAX_USERS){
  	return false;
  }

	for(let i=0; i < userNames.length; i++){
  	_fetchProfile(userNames[i], function(data){
    	_addToSidebar(userNames[i], data);
    });
  }
}
