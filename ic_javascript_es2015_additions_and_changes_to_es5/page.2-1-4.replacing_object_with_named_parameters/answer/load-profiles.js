function loadProfiles(userNames = [], {profilesClass, reverseSort} = {}) {

  profilesClass = profilesClass || ".user-profile";
  reverseSort   = reverseSort   || false;

  if(reverseSort) {
    userNames = _reverse(userNames);
  }

  _loadProfilesToSideBar(userNames, profilesClass);
}
