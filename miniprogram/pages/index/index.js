// index.js
// const app = getApp()
// const { envList } = require('../../envList.js');

Page({
    jump: function(){
      wx.navigateTo({
        url:'../games/index',
        success : function(res){
        },
        fail:function(res){

        },
        complete :function(res){

        }

      })
    }
});
