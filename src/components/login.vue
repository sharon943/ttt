<template>
  <header>
    <img src="../assets/img/top.png" alt="">
    <div class="black_box">
      <section class="inside">
        <p>您好，欢迎来到童淘淘 <span>登录</span> <span>注册</span> </p>
        <ul>
          <li>免费代发</li>
          <li>功能服务</li>
          <li>我是厂家</li>
          <li>用户中心</li>
          <li>运费测算</li>
          <li>在线客服</li>
        </ul>
        <p>手机童淘淘</p>
      </section>
    </div>
    <div class="top_bottomLogin">
      <section class="box">
        <img src="../assets/img/logo.png" alt="" class="logo">
        <span></span>
        <p>欢迎来到童淘淘</p>
      </section>
    </div>
    <div class="loginbox">
      <img src="../assets/img/login/login-bg.png" alt="">
      <section class="box">
        <div class="title">
          <p id="defaultshow">账户密码登录</p>
          <p id="mobileshow">手机动态登录</p>
        </div>
        <div id="tabs_container" class="tabs-container" style="height: 312px;">
          <div id="default" class="tabs-content hideflip" style="position: absolute;top: 0px;">
            <form id="login_form" class="nc-login-form" method="post" action="">
              <dl>
                <dt>账&nbsp;&nbsp;号：</dt>
                <dd>
                  <input type="text" class="text" autocomplete="off"  name="user_name" placeholder="可使用已注册的用户名或手机号登录" id="user_name">
                </dd>
              </dl>
              <dl>
                <dt>密&nbsp;&nbsp;&nbsp;码：</dt>
                <dd>
                  <input type="password" class="text" name="password" autocomplete="off" placeholder="6-20个大小写英文字母、符号或数字" id="password">
                </dd>
              </dl>
              <div class="code-div mt15">
                <dl>
                  <dt>验证码：</dt>
                  <dd>
                    <input type="text" name="captcha" autocomplete="off" class="text w100" placeholder="输入验证码" id="captcha" size="10" />
                  </dd>
                </dl>
                <span><img src="" name="codeimage" id="codeimage"> <a class="makecode" href="javascript:void(0)" onclick="javascript:document.getElementById('codeimage').src='' + Math.random();">看不清，换一张</a></span></div>
              <div class="submit-div">
                <input type="submit" class="submit" value="登&nbsp;&nbsp;&nbsp;录">
                <input type="hidden" value="" name="ref_url">
              </div>
              <div class="handle-div"><a class="forget" href="">忘记密码</a></div>
            </form>
          </div>
          <div id="mobile" class="tabs-content " style="position: absolute; top: 0px;">
            <form id="post_form" method="post" class="nc-login-form" action="">
              <input type='hidden' name='formhash' value='nt0ToE9_bvt4ApjL_Lot8Oq0t_cfRmD' />            <input type="hidden" name="form_submit" value="ok" />
              <input name="nchash" type="hidden" value="ad6a68a5" />
              <dl>
                <dt>手机号：</dt>
                <dd>
                  <input name="phone" type="text" class="text" id="phone" placeholder="可填写已注册的手机号接收短信" autocomplete="off" value="" >
                </dd>
              </dl>
              <div class="code-div">
                <dl>
                  <dt>验证码：</dt>
                  <dd>
                    <input type="text" name="captcha" class="text w100" placeholder="输入验证码" id="image_captcha" size="10" />
                  </dd>
                </dl>

                <span id="verificationCode" class="verificationCode">
                                <!--<img src="" name="codeimage" id="sms_codeimage">-->
                                <canvas id="canvas" width="120" height="54"></canvas>
                  <!--<img src="" alt="" id="code_img">-->
                  <!--<a class="makecode" href="javascript:void(0);" onclick="javascript:document.getElementById('sms_codeimage').src='' + Math.random();">看不清，换一张</a>-->
                            </span>
              </div>

              <div class="tiptext" id="sms_text">正确输入上方验证码后，点击<span> <a href="javascript:void(0);" onclick="get_sms_captcha('2')"><i class="icon-mobile-phone"></i>发送手机动态码</a></span>，查收短信将系统发送的“6位手机动态码”输入到下方验证后登录。</div>
              <dl>
                <dt>动态码：</dt>
                <dd>
                  <input type="text" name="sms_captcha" autocomplete="off" class="text" placeholder="输入6位手机动态码" id="sms_captcha" size="15" />
                </dd>
              </dl>
              <div class="submit-div">
                <input type="submit" id="submit" class="submit" value="登&nbsp;&nbsp;&nbsp;录">
              </div>
            </form>
          </div>
        </div>
        <div class="otherLoginway">
          <span>其他账户登录：</span>
          <img src="../assets/img/login/wechatlogo.png" alt="">
          <img src="../assets/img/login/qqlogo.png" alt="">
          <p>立即注册</p>
        </div>
      </section>

    </div>
  </header>
</template>
<script>
  import api from '../api/api'
  export default {
    data() {
      return {
        limits:[],
        limits_shop:[],limits_market:[],limits_goods:[],limits_member:[],limits_more:[],limits_report:[],limits_Pic:[],loading:false,
        formInline: {
          user: '',
          pwd: ''
        }
      }
    },
    created(){
    },
    mounted(){
    },
    methods: {


    }
  }
</script>
<style scoped lang="scss">
  *{
    margin:0;padding:0;list-style: none;
  }
  header img{
    width: 100%;
    height: 80px;
  }
  .black_box{
    width: 100%;background: #000;
    height: 30px;
  }
  .inside{
    width: 1200px;display: flex;height: 100%;line-height: 30px;margin:0 auto;position: relative;justify-content: space-between;
  }
  .inside p{
    font-size: 12px;color:#eee;
  }
  .inside ul{
    position: absolute;left:0;right:0;top:0;bottom: 0;margin:auto;
    width: 450px;height: 30px;
    color: #fff;
  }
  header ul{
    display: flex;justify-content: space-between;font-size:12px;
  }
  .top_bottomLogin{
    width: 1170px;background: #fff;margin:0 auto;
    height: 84px;font-size: 12px;padding: 16px 0 30px 30px;
  }
  .top_bottomLogin .box{
    width: 500px;height:100%;
    display: flex;
  }
  .logo{
    width: 190px;height: 68px;
  }
  .top_bottomLogin .box p{
    font-size: 34px;line-height: 68px;
    color: #bbbbbb;
  }
  .top_bottomLogin .box span {
    width: 2px;height: 53px;background: #bbbbbb;margin-top: 8.5px;margin-right: 15px;
  }
  .loginbox{
    width: 100%;height: 822px;position: relative;
  }
  .loginbox img{
    width: 100%;height: 100%;
  }
  .loginbox .box{
    position: absolute;right: 60px;top:0;bottom: 0;margin-top: auto;margin-bottom: auto;height: 485px;width: 430px;background: #fff;
  }
  .loginbox .title{
    display: flex;justify-content: space-between;padding: 30px;
  }
  .loginbox .title p{
    font-size: 18px;color: #333;width: calc(50% - 30px);text-align: center;cursor: pointer;
  }
  .tabs-nav {
    font-size: 0;
    word-spacing: -1em;
    border-bottom: solid 1px #E6E6E6;
  }
  .tabs-container {
    padding: 0 40px 0px 40px;
    position: relative;
    z-index: 1;
  }
  .tabs-content {
    width: 352px;opacity: 1;
  }
  .nc-login-form {
    display: block;
  }

  input, button, select, textarea {
    outline: none;
  }
  .nc-login-form dl {
    width: 348px;
  }
  .nc-login-form dl {
    background-color: #FFF;
    width: 348px;
    height: 52px;
    margin-top: -1px;
    border: solid 1px #E6E6E6;
    position: relative;
    z-index: 1;
  }
  .nc-login-form dl dt {
    font-size: 14px;
    line-height: 20px;
    color: #666;
    width: 72px;
    padding: 16px 0 16px 20px;
    float: left;
  }
  .nc-login-form dl dd {
    height: 28px;
    float: left;width: 250px;
    padding: 12px 0;
  }
  .nc-login-form dl dd .text {
    display: inherit;
  }
  .nc-login-form dl dd .text {
    font-family: "microsoft yahei";
    font-size: 14px;
    line-height: 28px;
    width: 250px;
    height: 28px;
    padding: 0;
    border: none 0;
  }
  .nc-login-form .code-div {
    width: 100%;
    height: 54px;margin-top: 20px;
  }
  .nc-login-form .code-div dl {
    width: 228px;
  }

  .nc-login-form dl {
    width: 348px;
  }
  .nc-login-form .code-div dl {
    width: 277px;
    float: left;
  }
  .nc-login-form dl {
    background-color: #FFF;
    width: 348px;
    height: 52px;
    margin-top: -1px;
    border: solid 1px #E6E6E6;
    position: relative;
    z-index: 1;
  }
  .nc-login-form dl{
    margin-top: 20px;
  }
  .nc-login-form dl:nth-of-type(1){
    margin-top: 0;
  }
  .nc-login-form .code-div span {
    width: 120px;
    height: 52px;
    float: left;
    margin: -1px 0 0 -1px;
    border: solid 1px #E6E6E6;
    position: relative;
    z-index: 1;
  }
  .code-div dl dd{
    width: 130px;
  }
  .nc-login-form .handle-div {
    line-height: 20px;
    margin-top: 15px;
    overflow: hidden;
  }
  .nc-login-form .handle-div .auto {
    color: #999;
    float: left;
  }
  .nc-login-form .handle-div .auto .checkbox {
    vertical-align: middle;
    display: inline-block;
    margin-right: 4px;
  }
  a:link, a:visited, a:active {
    text-decoration: none;
  }
  .nc-login-form .handle-div .forget {
    float: right;
  }
  a{
    color:#333;font-size: 14px;
  }
  a:hover, a:visited, a:link, a:active {
    outline-width: 0;
    color: #333;
  }
  .nc-login-form .submit-div {
    margin-top: 15px;
  }
  .nc-login-form .submit-div .submit {
    width: 348px;
  }

  .nc-login-form .submit-div .submit {
    font-family: "microsoft yahei";
    font-size: 16px;
    font-weight: 600;
    color: #FFF;
    background-color: #F32613;
    width: 348px;
    height: 42px;
    border: solid 1px #D91E17;
    border-radius: 3px;
    cursor: pointer;
  }
  .nc-login-form .code-div {
    width: 100%;
    height: 54px;
  }
  .nc-login-form .code-div dl {
    width: 228px;
  }
  .nc-login-form .code-div span {
    width: 120px;
    height: 52px;
    float: left;
    margin: -1px 0 0 -1px;
    border: solid 1px #E6E6E6;
    position: relative;
    z-index: 1;
  }
  .nc-login-form .code-div span a {
    font-size: 14px;
    text-decoration: none;
    line-height: 52px;
    color: #FFF;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled='true',startColorstr='#7F000000', endColorstr='#7F000000');
    background: rgba(0,0,0,0.5);
    text-align: center;
    display: none;
    width: 120px;
    height: 52px;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }
  .nc-login-form .tiptext {
    line-height: 20px;
    color: #999;
    margin: 15px 0;font-size: 13px;
  }

  .nc-login-form .tiptext a {
    line-height: 22px;
    color: #FFF;
    background-color: #21b384;
    vertical-align: middle;
    display: inline-block;
    height: 22px;
    padding: 0 8px;
    margin: 0 4px;
    border-radius: 2px;
  }
  .hideflip {
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    display: none\9;
    opacity: 0;
    -webkit-transform: rotatey(-90deg) scale(1.1);
    -moz-transform: rotatey(-90deg) scale(1.1);
    -o-transform: rotatey(-90deg) scale(1.1);
    -ms-transform: rotatey(-90deg) scale(1.1);
    transform: rotatey(-90deg) scale(1.1);
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }

  .make_transist {
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
  }
  .otherLoginway{
    height: 85px;line-height: 85px;font-size: 14px;padding: 0 40px;border-top:1px solid #eaeae9;margin-top: 35px;
  }
  .otherLoginway span{
    float: left;
  }
  .otherLoginway img{
    width: 40px;height: 40px;margin-top: 22.5px;
  }
  .otherLoginway p{
    float: right;
  }
</style>
