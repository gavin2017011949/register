$(function(){var i=$("#but1"),t=$("#input1"),e=$("#input2"),l=$("#input3"),u=$("#input4"),o=$("#but2"),n="";function c(t){var e=$(t),l=$(t+"0");if("#input10"===l.selector){if(""===e.val())return l.html("用户名不能为空！"),e.css("outline-color","red"),void e.select();if(/[^\u4E00-\u9FA5\w]/.test(e.val()))return l.html("用户名仅支持中英文、数字和下划线,且不能为纯数字"),e.css("outline-color","red"),void e.select();if(!/\D/.test(e.val()))return l.html("用户名仅支持中英文、数字和下划线,且不能为纯数字"),e.css("outline-color","red"),void e.select();for(var i=0,u=0;u<e.val().length;u++)/[\u4e00-\u9fa5]/g.test(e.val().split("")[u])?i+=2:i+=1;if(14<i)return l.html("用户名不能超过7个汉字或14个字符"),e.css("outline-color","red"),void e.select()}if("#input20"===l.selector){if(""===e.val())return l.html("手机号不能为空！"),e.css("outline-color","red"),void e.select();if(!/^1[3456789]\d{9}$/.test(e.val()))return l.html("手机号码格式不正确"),e.css("outline-color","red"),void e.select()}if("#input30"===l.selector){if(""===e.val())return l.html("密码不能为空！"),e.css("outline-color","red"),void e.select();if(!/((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))(?!^.*[\u4E00-\u9FA5].*$)^\S{8,14}$/.test(e.val()))return l.html("密码设置不符合要求"),e.css("outline-color","red"),void e.select()}return"#input40"===l.selector&&""===e.val()?(l.html("验证码不能为空！"),e.css("outline-color","red"),void e.select()):(l.html(""),1)}i.click(function(t){var e=60,l=setInterval(function(){if(0===e)return i.val("获取验证码").removeAttr("disabled"),i.css("background","#fff"),clearInterval(l),$("#input40").html("请求超时，请稍后再试"),u.select(),!1;e--,i.val("重新发送("+e+")").attr("disabled","disabled"),i.css("background","#B8B8B8"),$("#input40").html("")},1e3);n=t.target.id,console.log(n)}),o.click(function(){if(!(c("#input1")&&c("#input2")&&c("#input3")&&c("#input4")))return!1}),t.focusout(function(){c("#input1")||t.select()}),e.focusout(function(){c("#input2")||e.select()}),l.focusout(function(){c("#input3")||l.select()}),u.focusout(function(){c("#input4")||u.select()})});