import { Advertisement } from "./advertisement-class";

class SidebarAdvertisement extends Advertisement {
  constructor(title, link){
    super(title, link);
  }
  
  _linkText(){
    return "Sign up now!";
  }
}

export { SidebarAdvertisement };
