document.addEventListener("DOMContentLoaded", function() {
    let message = `/*大家好，我是安安，这
* 是我的第一个javascript小案例：制作一个太极
* 首先，准备一个DIV
* 然后添加样式
*/
#content {
    width: 200px;
    height: 200px;
    box-shadow: 0 0 3px rgba(0, 0, 0, .4);
}
/*然后将DIV变成一个圆形*/
#content {
    border-radius: 50%;
}
/*太极分阴阳
* 混沌初开
* 阴阳两仪
*/
#content {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*分而为二以象两
* 易有太极，阴阳二爻
*/
#content::before,
#content::after {
    width: 100px;
    height: 100px;
    border: 1px solid red;
    border-radius: 50%
}
#content::after {
    background-color: #fff;
    border: 0;
}
#content::before {
    background-color: #000;
    border:0;
}
/*阴阳相汇
* 生生不息
*/
#content::before {
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 27%, rgba(0,0,0,1) 100%);
}
#content::after {
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 27%, rgba(255,255,255,1) 100%);
}
/*
* 道生一
* 一生二
* 二生三
* 三生万物
*/
#container {
    animation: rotate 3s linear infinite;
}
@keyframes rotate{from{transform: rotate(0deg)}
to{transform: rotate(-360deg)}
`
    let newMessage = '';
    let container = document.getElementById('container');
    let content = document.getElementById('content');
    let operation = document.getElementById('operation');
    let style = document.getElementById('style');

    let index = 0;

    function step() {

        setTimeout(() => {
            if (message[index] === '\n') {
                newMessage += '<br>'
            } else if (message[index] === ' ') {
                newMessage += '&nbsp;'
            } else {
                newMessage += message[index]
            }
            operation.innerHTML = newMessage;
            // css添加不能替换回车和换行，用字符串截取的方式添加
            style.innerHTML = message.substring(0, index);
            operation.scrollTo(0, 99999);
            window.scrollTo(0, 99999);
            if (index < message.length - 1) {
                index++
                step()
            }
        }, 40)
    }
    step()
})