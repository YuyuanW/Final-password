// index.js
// const app = getApp()
// const { envList } = require('../../envList.js');


Page({
    data:{
        numberArray: [],
        numberIndex: [0, 0],
        n : 0,
        res: 'yuyuan' ,
        num : Math.floor(Math.random() * 100),
    },
    onLoad(){
        const _this = this;
        let numberStart = [],
            numberEnd = [],
            numberArray = [];
        for (let i = 0; i < 10; i++) {
            numberStart.push(`${i}`);
        }
        for (let i = 0; i < 10; i++) {
            numberEnd.push(`${i}`);
        }
        numberArray.push(numberStart);
        numberArray.push(numberEnd);
        _this.setData({
            numberArray: numberArray
        })
        this.setData({
            num :  Math.floor(Math.random() * 100),
        })
    },
    //确定时触发该事件
    bindMultiPickerChange(e) {
        this.setData({
            numberIndex: e.detail.value,
        })
        const num = (this.data.numberIndex[0])*10+this.data.numberIndex[1]
        this.setData({
            n : num
        })
        // console.log((this.data.numberIndex[0])*10+this.data.numberIndex[1])
        console.log('fuck',this.data.num);
        let message = ''
        if(this.data.n > this.data.num){
            message = 'BIGGER'
        }else if(this.data.n < this.data.num){
            message = 'SMALLER'
        }else{
            message  ='EQUAL'
        }
        this.setData({
            res : message
        })
        if(this.data.n === this.data.num){
            this.animate('.equal', [
                { opacity: 1.0, rotateZ: 0 },
                { opacity: 0.5, rotateZ: 45},
                { opacity: 0.0, rotateZ: 90},
                ], 10000)
            setTimeout(()=>{
                    wx.showModal({
                        title: '结束！',
                        content: `最终密码就是${this.data.num}`,
                        success: function (res) {
                          if (res.confirm) {//这里是点击了确定以后
                            // console.log('用户点击确定')
                            wx.navigateTo({url:'../endpage/index'})
                          } else {//这里是点击了取消以后
                            wx.navigateTo({url:'../index/index'})
                            console.log('yuyuan');
                          }
                        }
                      })
                },3000)
        }else{
            this.animate('.text', [
                { opacity: 1.0, rotateZ: 90 },
                { opacity: 0.5, rotateZ: 45},
                { opacity: 0.0, rotateZ: 0},
                ], 2000)
        }
    },
    //滑动列时触发该事件
    bindMultiPickerColumnChange(e) {
        let currentColumn = e.detail.column; 
        let currentColumnIndex = e.detail.value; 
        let numberArray = this.data.numberArray
        console.log('修改的列为', currentColumn, '，值为', currentColumnIndex);
        let data = {
            numberArray: this.data.numberArray, 
            numberIndex: this.data.numberIndex 
        }
        data.numberIndex[currentColumn] = currentColumnIndex
        // data.numberIndex[1] = currentColumnIndex;
        this.setData(data)
        
    },
})