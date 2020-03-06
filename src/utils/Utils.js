import React from "react";

export const GetDateCount = (startDate) => {
    startDate = startDate.substring(0, 19);
    startDate = startDate.replace(/-/g, '/'); //必须把日期'-'转为'/'
    let sendTime = new Date(startDate).getTime();
    //计算时间
    console.log(sendTime);
    //当前时间
    let nowTime = (new Date()).valueOf();
    console.log(nowTime);
    //差值
    let date3 = nowTime - sendTime;
    console.log(date3);
   //天
    let days = Math.floor(date3 / (24 * 3600 * 1000))
   //时
    let leave1 = date3 % (24 * 3600 * 1000)
    let hours = Math.floor(leave1 / (3600 * 1000))
    //分
    let leave2 = leave1 % (3600 * 1000)
    let minutes = Math.floor(leave2 / (60 * 1000))
    //秒
    let leave3 = leave2 % (60 * 1000)
    let seconds = Math.round(leave3 / 1000)
    console.log("GetDateCount()" + days + "天" + hours + "时" + minutes + "分" + seconds + "秒");
    return [days,hours,minutes,seconds];
}


Element.prototype.typewriter = function (a) {
    let d = this,
        c = d.innerHTML,
        b = 0;
    d.innerHTML = "";
    let e = setInterval(function () {
        let f = c.substr(b, 1);
        if (f == "<") {
            b = c.indexOf(">", b) + 1
        } else {
            b++
        }
        d.innerHTML = c.substring(0, b) + (b & 1 ? "_" : "");
        if (b >= c.length) {
            clearInterval(e)
        }
    }, 150)
    return this

}

