// ==UserScript==
// @name         疫情防控通自动填写与提交
// @namespace    https://github.com/npfjcg
// @version      0.0.1-alpha
// @license      GPLv3
// @description  a
// @author       npfjcg
// @include      *://app.upc.edu.cn/ncov/wap/default/index*
// ==/UserScript==

function exec(fn) {
    var script = document.createElement('script');
    script.setAttribute("type", "application/javascript");
    script.textContent = '(' + fn + ')();';
    document.body.appendChild(script);
    document.body.removeChild(script);
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

exec(function () {
    return vm.getLocation();
});

alert("正在获取位置中，请稍后");
sleep(500).then(() => {
    exec(function () {
        return vm.confirm();
    });
})