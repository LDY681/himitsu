$(document).ready(function(){
    main();
});

function main(){
    //检测网络协议
    if (window.location.protocol !== "https:") {
        alert("屏蔽before.min.js，请关闭控台，重登然后重新运行脚本。。。");
        if (location.protocol !== 'https:') {
            location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
        }
    }else{
        //检测框架
        if (typeof SceneManager === "undefined"){
            alert("检测到您当前框架不为index.php，请自行百度“XX浏览器控制台切换框架”，然后重新运行脚本");
        }else{
            var username = prompt("脚本作者LDY681，仅限内部使用！请输入账号");
            var password = prompt("请输入密码");
            if (username !== null && password !== null){
                $.getScript("//cdn.jsdelivr.net/npm/leancloud-storage@3.14.0/dist/av-min.js", function(){
                    var { Query, User } = AV;
                    var APP_ID = 'NfWGojPRuRF4Oxap1AopJmwr-MdYXbMMI';
                    var APP_KEY = 'SenLjQ9pdilz63KeDxsWTmjL';
                    AV.init({
                        appId: APP_ID,
                        appKey: APP_KEY
                    });
                    AV.User.logOut();
                    AV.User.logIn(username, password).then(function(){
                        var query = new AV.Query('_File');
                        query.get("5e11dfcd6c073d0009a4fe8b").then(function (file) {
                            $.getScript(file.get("url"));
                        });
                    }, function () {
                        alert("请联系ldydyx@gmail.com");
                    });
                });
            }
        }
    }
}


