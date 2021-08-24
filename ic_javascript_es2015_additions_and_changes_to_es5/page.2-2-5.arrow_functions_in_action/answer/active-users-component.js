function ActiveUsersComponent(target, topicId){
  this.targetElement = target;
  this.topicId       = topicId;
}

ActiveUsersComponent.prototype.render = function(){
  getActiveUsers(this.topicId, (data) => {
    let userNameDivs = appendUserNames(...data.userNames);
    appendToSidebar(this.targetElement, userNameDivs);
  });
};

let component = new ActiveUsersComponent(".active-users", 17);
component.render();
