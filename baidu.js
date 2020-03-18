$(function(){
    var $but1=$('#but1');
    var $input1=$('#input1');
    var $input2=$('#input2');
    var $input3=$('#input3');
    var $input4=$('#input4');
    var $but2=$('#but2');
    var $id='';
    $but1.click(function(e){
        var num=60;
        var timer=setInterval(function(){
            if(num===0){
                $but1.val("获取验证码").removeAttr("disabled");
                $but1.css('background', '#fff');
                clearInterval(timer);
                $('#input40').html('请求超时，请稍后再试');
                $input4.select();
                return false;
            }else{
                num--;
                $but1.val("重新发送(" + num + ")").attr("disabled", "disabled");
                $but1.css('background', '#B8B8B8');
                $('#input40').html('');
            }
        },1000)
        $id=e.target.id; 
        console.log($id);
    })
    
    $but2.click(function(){
        if(!validate('#input1')|| !validate('#input2')|| !validate('#input3')|| !validate('#input4') ) return false;

    })
    $input1.focusout(function(){
        if(!validate('#input1')) $input1.select();
    });
    $input2.focusout(function(){
        if(!validate('#input2')) $input2.select();
    });
    $input3.focusout(function(){
        if(!validate('#input3')) $input3.select();
    });
    $input4.focusout(function(){
        if(!validate('#input4')) $input4.select();
    });
    function validate(field){
        var $data=$(field),
            $msg=$(field+'0');
        //用户名验证
        if($msg.selector==='#input10'){
            //验证空值
            if($data.val()===''){
                $msg.html('用户名不能为空！');
                $data.css('outline-color', 'red');
                $data.select();
                return false;
            }
            //验证中英文、数字和下划线
            if(/[^\u4E00-\u9FA5\w]/.test($data.val())){
                $msg.html('用户名仅支持中英文、数字和下划线,且不能为纯数字');
                $data.css('outline-color', 'red');
                $data.select();
                return false;
            }
            //验证纯数字
            if(!/\D/.test($data.val())){
                $msg.html('用户名仅支持中英文、数字和下划线,且不能为纯数字');
                $data.css('outline-color', 'red');
                $data.select();
                return false;
            }
            //验证字符长度
            var len = 0;
            for(var i=0;i<$data.val().length;i++){
                if(/[\u4e00-\u9fa5]/g.test($data.val().split("")[i])) {
                    len+=2;
                }else{
                    len+=1;
                }
            }
            if(len>14){
                $msg.html('用户名不能超过7个汉字或14个字符');
                $data.css('outline-color', 'red');
                $data.select();
                return false
            }
            
        }
        //手机号验证
        if($msg.selector==='#input20'){
            //验证空值
            if($data.val()===''){
                $msg.html('手机号不能为空！');
                $data.css('outline-color', 'red');
                $data.select();
                return false;
            }
            //验证手机号格式
            if(!(/^1[3456789]\d{9}$/.test($data.val()))){
                $msg.html('手机号码格式不正确');
                $data.css('outline-color', 'red');
                $data.select();
                return false;
            }
        }
        //密码验证
        if($msg.selector==='#input30'){
            //验证空值
            if($data.val()===''){
                $msg.html('密码不能为空！');
                $data.css('outline-color', 'red');
                $data.select();
                return false;
            }
            if(!(/((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))(?!^.*[\u4E00-\u9FA5].*$)^\S{8,14}$/.test($data.val()))){
                $msg.html('密码设置不符合要求');
                $data.css('outline-color', 'red');
                $data.select();
                return false;
            }
        }
        //验证码验证
        if($msg.selector==='#input40'){
            //验证空值
            if($data.val()===''){
                $msg.html('验证码不能为空！');
                $data.css('outline-color', 'red');
                $data.select();
                return false;
            }
        }
        $msg.html('');
        return true;
    }
}

)
