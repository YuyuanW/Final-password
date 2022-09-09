// index.js
// const app = getApp()
// const { envList } = require('../../envList.js');

Page({
  data: {
    message:'真的服了小程序这个开发的登陆界面',
    n : 0
  },
  addOne(){
    this.setData(
     { n:this.data.n+1}
    )
    console.log(this.data)
  }
});
