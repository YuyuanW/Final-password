// index.js
// const app = getApp()
// const { envList } = require('../../envList.js');


Page({
    data:{
        numberArray: [],
        numberIndex: [0, 0],
        n : 0,
        // res: '' ,
        // num : 0,
        
    },
    onReady(){
        const _this = this;
        let numberStart = [],
            numberEnd = [],
            numberArray = [];
        for (let i = 0; i < 10; i++) {
            numberStart.push(`${i}`);
            numberEnd.push(`${i}`)
        }
        numberArray.push(numberStart);
        numberArray.push(numberEnd);
        _this.setData({
            numberArray: numberArray
        })

    },
    //确定时触发该事件
    bindMultiPickerChange(e) {
        this.setData({
            numberIndex: e.detail.value
        })
        
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
        data.numberIndex[1] = currentColumnIndex;
        this.setData(data)
        console.log(numberArray)
    },
})