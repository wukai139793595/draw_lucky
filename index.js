(function () {
    var totalTime = 5000;
    var xinm = new Array();
    xinm[0] = "林黛玉"
    xinm[1] = "贾宝玉"
    xinm[2] = "唐僧"
    xinm[3] = "成哥"
    xinm[4] = "猪八戒"
    xinm[5] = "邓哥"
    xinm[6] = "刘德华"
    xinm[7] = "梅艳芳"
    xinm[8] = "小燕子"
    xinm[9] = "赵云"
    xinm[10] = "梁河"
    xinm[11] = "张舒省"
    xinm[12] = "张梁合"
    xinm[13] = "舒凉凉"
    xinm[14] = "张飞量"
    xinm[15] = "张喝潶"
    xinm[16] = "关羽"
    xinm[17] = "刘备"
    xinm[18] = "曹操"

    var phone = new Array();
    phone[0] = "15161584615"
    phone[1] = "18024631478"
    phone[2] = "1581635485"
    phone[3] = "13513154899"
    phone[4] = "18286479113"
    phone[5] = "18011111111"
    phone[6] = "18631549875"
    phone[7] = "18312345678"
    phone[8] = "15800000000"
    phone[9] = "13712365487"
    phone[10] = "13222225487"
    phone[11] = "13233225487"
    phone[12] = "13233225487"
    phone[13] = "13233225487"
    phone[14] = "13233225487"
    phone[15] = "13233225487"
    phone[16] = "13233225487"
    phone[17] = "13233225487"
    phone[18] = "13233225487"
    var totalArr = [];
    var tempArr = [];
    var totalNum = 10;
    var s = '00';
    var m = '00';
    var h = '00';
    var d = '00';
    var oDay = document.getElementsByClassName('day')[0];
    var oHour = document.getElementsByClassName('hour')[0];
    var oMinute = document.getElementsByClassName('minute')[0];
    var oSecond = document.getElementsByClassName('second')[0];
    var oPeople = document.getElementsByClassName('people')[0];
    var oPhone = document.getElementsByClassName('phone')[0];
    var oUl = document.getElementsByClassName('list_box')[0];
    var oTop = document.getElementsByClassName('top')[0];
    for (let i = 0; i < 18; i++) {
        totalArr[i] = new Array();
        tempArr[i] = new Array();
        totalArr[i][0] = xinm[i];
        totalArr[i][1] = phone[i];
        tempArr[i][0] = xinm[i];
        tempArr[i][1] = phone[i];
    }
    init();

    function init() {
        countTime(totalTime);
        showTime();
        var timer = setInterval(() => {
            totalTime -= 1000;
            countTime(totalTime);
            showTime();
            if (totalTime <= 0) {
                clearInterval(timer);
                selectInfo(tempArr);
                oTop.innerText = '正在抽奖，请稍后。。。';
            }
        }, 1000)
    }

    function countTime(time) {
        s = (time / 1000) % 60;
        m = Math.floor(time / 1000 / 60) % 60;
        h = Math.floor(time / 1000 / 60 / 60) % 24;
        d = Math.floor(time / 1000 / 60 / 24);
        if (s < 10) {
            s = '0' + s;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (h < 10) {
            h = '0' + h;
        }
        if (d < 10) {
            d = '0' + d;
        }
    }

    function showTime() {
        oDay.innerText = d;
        oMinute.innerText = m;
        oHour.innerText = h;
        oSecond.innerText = s;
    }

    function selectInfo(arr) {
        var len = arr.length;
        var num = 20;
        var randNum;
        var timer = setInterval(() => {
            if (num >= 0) {
                randNum = Math.floor(Math.random() * len);
                oPeople.innerText = arr[randNum][0];
                oPhone.innerText = arr[randNum][1];
                num--;
            } else {
                clearInterval(timer);
                var result = arr.splice(randNum, 1);
                console.log(result);
                var oLi = document.createElement('li');
                oLi.innerText = `${totalNum} ${result[0][0]} -- ${result[0][1]}`;
                oUl.insertBefore(oLi, oUl.children[0]);
                totalNum --;
                waitMoment();
            }
        }, 100)
    }

    function waitMoment() {
        if(totalNum > 0) {
            setTimeout(() => {
                selectInfo(tempArr);
            }, 2000)
        }else{
            oTop.innerText = '抽奖结束，恭喜以上获奖者';
        }
    }
})()