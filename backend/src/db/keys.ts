export const Keys = {

  menu(id:string){
    return ["menu", id];
  },


  order(code:string){
    return ["orders", code];
  },


  payment(code:string){
    return ["payments", code];
  },


  admin(username:string){
    return ["admins", username];
  }

};
