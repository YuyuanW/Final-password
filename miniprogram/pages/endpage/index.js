Page({

    jump: function(){
      wx.navigateTo({
        url:'../games/index',
      })
    },
    exit : function(){
      wx.navigateTo({
        url:'../index/index',
      })
    }
});