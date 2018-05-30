class Auth{

  static setToken(token) {
    localStorage.setItem('token', token);
  }

  static getToken(){
    return localStorage.getItem('token');
  }

  static logout(){
    localStorage.removeItem('token');
  }

  static getPayLoad(){
    const token = this.getToken();
    if(!token) return null;
    const parts = token.split('.');
    if(parts.length < 3) return null;
    return JSON.parse(atob(parts[1]));
  }

  static isAuthenticated(){
    const payLoad = this.getPayLoad();
    if(!payLoad) return false;
    const now = Math.round(Date.now() / 1000);
    return now < payLoad.exp;
  }

  static isCurrentUser(user){
    return this.isAuthenticated() && user._id === this.getPayLoad().sub;
  }

}

export default Auth;
