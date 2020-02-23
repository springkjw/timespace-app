import {observable, action, decorate} from 'mobx';

class userStore {
  isLoggedIn = false;
}

export default decorate(userStore, {
  isLoggedIn: observable,
});
