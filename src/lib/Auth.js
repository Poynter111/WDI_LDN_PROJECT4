// import axios from 'axios';

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

  // static isCoach(){
  //   const userId = this.getPayLoad().sub;
  //   console.log(userId);
  //   axios.get(`/api/users/${userId}`)
  //     .then(res => {
  //       console.log('AXIOS RES.DATA.ROLE--->',res.data.role);
  //       return res.data.role === 'coach';
  //     });
  //   return
  // }

  // static isCoach(){
  //   // let isCoachOrNot;
  //   axios.get(`/api/users/${this.getPayLoad().sub}`)
  //     .then(res => {
  //       console.log('After just setting the LET--->',res.data.role);
  //       return res.data.role === 'coach';
  //     });
  // }


  static isCoach(user) {
    // console.log('isCoach Function taking user---->',user);
    return user.role === 'coach';
  }

  static isCurrentUser(user){
    return this.isAuthenticated() && user._id === this.getPayLoad().sub;
  }

}

export default Auth;
