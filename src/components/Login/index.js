import Login from './Login.html';
import style from './style.css';
import $ from 'jquery';

// $(function(){
//     $('.submit').click(function(){
//         var password = $('[name="password"]').val();
//         var key = CryptoJS.enc.Latin1.parse('0482464415866281'); //为了避免补位，直接用16位的秘钥
//         var iv = CryptoJS.enc.Latin1.parse('8032084194424218'); //16位初始向量
//         var encrypted = CryptoJS.AES.encrypt(password, key, {
//             iv: iv,
//             mode:CryptoJS.mode.CBC,
//             padding:CryptoJS.pad.ZeroPadding
//         }).toString();
//         $('[name="password"]').val(encrypted);
//     });
//     //初始化Input的灰色提示信息
//     $('input[tipMsg]').inputTipText({pwd:'password'});
//     //登录方式切换
//     $('.nc-login-mode').tabulous({
//         effect: 'flip'//动画反转效果
//     });
//     var div_form = '#default';
//     $(".nc-login-mode .tabs-nav li a").click(function(){
//         if($(this).attr("href") !== div_form){
//             div_form = $(this).attr('href');
//             $(""+div_form).find(".makecode").trigger("click");
//         }
//     });
//
//     $("#login_form").validate({
//         errorPlacement: function(error, element){
//             var error_td = element.parent('dd');
//             error_td.append(error);
//             element.parents('dl:first').addClass('error');
//         },
//         success: function(label) {
//             label.parents('dl:first').removeClass('error').find('label').remove();
//         },
//         submitHandler:function(form){
//             ajaxpost('login_form', '', '', 'onerror');
//         },
//         onkeyup: false,
//         rules: {
//             user_name: "required",
//             password: "required"
//             ,captcha : {
//                 required : true,
//                 remote   : {
//                     url : 'index.php?act=seccode&op=check&nchash=ad6a68a5',
//                     type: 'get',
//                     data:{
//                         captcha : function(){
//                             return $('#captcha').val();
//                         }
//                     },
//                     complete: function(data) {
//                         if(data.responseText == 'false') {
//                             document.getElementById('codeimage').src='index.php?act=seccode&op=makecode&type=50,120&nchash=ad6a68a5&t=' + Math.random();
//                         }
//                     }
//                 }
//             }
//         },
//         messages: {
//             user_name: "<i class='icon-exclamation-sign'></i>请输入已注册的用户名或手机号",
//             password: "<i class='icon-exclamation-sign'></i>密码不能为空"
//             ,captcha : {
//                 required : '<i class="icon-remove-circle" title="验证码不能为空"></i>',
//                 remote   : '<i class="icon-remove-circle" title="验证码不能为空"></i>'
//             }
//         }
//     });
//
//     // 勾选自动登录显示隐藏文字
//     $('input[name="auto_login"]').click(function(){
//         if ($(this).attr('checked')){
//             $(this).attr('checked', true).next().show();
//         } else {
//             $(this).attr('checked', false).next().hide();
//         }
//     });
// });
//
//
//
// $(function(){
//     $("#post_form").validate({
//         errorPlacement: function(error, element){
//             var error_td = element.parent('dd');
//             error_td.append(error);
//             element.parents('dl:first').addClass('error');
//         },
//         success: function(label) {
//             label.parents('dl:first').removeClass('error').find('label').remove();
//         },
//         submitHandler:function(form){
//             ajaxpost('post_form', '', '', 'onerror');
//         },
//         onkeyup: false,
//         rules: {
//             phone: { required : true },
//             captcha : {
//                 required : true,
//                 minlength: 4,
//                 remote   : {
//                     url : 'index.php?act=seccode&op=check&nchash=ad6a68a5',
//                     type: 'get',
//                     data:{
//                         captcha : function(){
//                             return $('#image_captcha').val();
//                         }
//                     },
//                     complete: function(data) {
//                         if(data.responseText == 'false') {
//                             document.getElementById('sms_codeimage').src='index.php?act=seccode&op=makecode&type=50,120&nchash=ad6a68a5&t=' + Math.random();
//                         }
//                     }
//                 }
//             },
//             sms_captcha: {
//                 required : function(element) {
//                     return $("#image_captcha").val().length == 4;
//                 },
//                 minlength: 6
//             }
//         },
//         messages: {
//             phone: { required : '<i class="icon-exclamation-sign"></i>请输入正确的手机号' },
//             captcha: {
//                 required : '<i class="icon-remove-circle" title="请输入正确的验证码"></i>',
//                 minlength: '<i class="icon-remove-circle" title="请输入正确的验证码"></i>',
//                 remote   : '<i class="icon-remove-circle" title="请输入正确的验证码"></i>'
//             },
//             sms_captcha: {
//                 required : '<i class="icon-exclamation-sign"></i>请输入六位短信动态码',
//                 minlength: '<i class="icon-exclamation-sign"></i>请输入六位短信动态码'
//             }
//         }
//     });
// });
// $(function(){
//     var mySwiper = new Swiper('.swiper-container', {
//         autoplay: true,
//         loop : true,
//         pagination: {
//             el: '.swiper-pagination',
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     })
//     mySwiper.el.onmouseover = function(){
//         mySwiper.autoplay.stop();
//     }
//     mySwiper.el.onmouseout = function(){
//         mySwiper.autoplay.start();
//     }
// })

export default Login;