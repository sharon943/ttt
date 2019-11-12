<template>
  <div style="height: 100%">
    <headTop></headTop>
    <main>
      <p>用户中心 > <span>消息通知</span></p>
      <div class="main">
        <ul class="topUL">
          <li class="active">系统信息</li>
        </ul>
        <ul class="messageBox">
           <li v-for="row in messagesData">
             <div class="t_left">
               <img src="../assets/img/erweima.png" alt="">
               <section>
                 <p>{{row.title}}</p>
                 <span>{{row.remark}}</span>
               </section>
             </div>
             <button>发送站内信</button>
           </li>
        </ul>

      </div>
    </main>

  </div>
</template>
<script>
  import headTop from '../config/headTop'
  export default {
    data(){

      return {
        messagesData:[
          {img:'../assets/img/erweima.png',title:'这是一条童淘淘官方标题',remark:'这是一条童淘淘官方标题这是一条童淘淘官方标题'},
          {img:'../assets/img/erweima.png',title:'这是一条童淘淘官方标题',remark:'这是一条童淘淘官方标题这是一条童淘淘官方标题'}
          ]
      }
    },
    components:{
      headTop,
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style scoped lang="scss">
  main{
    margin:0 auto;background:#f6f5f5;height: 100%;border-top: 1px solid #f3463a;
    & >p{
      width: 1200px;margin:20px auto 0;color:#666;cursor: pointer;
      span{
        font-size: 16px;color:#333;
      }
    }
    .main{
      width: 1200px;border-top: 1px solid #f3463a;height: 100%;margin:50px auto 0;position: relative;background: #fff;
      .topUL{
        width: 50%;display: flex;justify-content: space-between;position: absolute;top:-40px;left: 0;cursor: pointer;
        li{
          width: 150px;text-align: center;height: 40px;line-height: 40px;
        }
        li.active{
          background: #f3463a;color: #fff;
        }
      }
      .messageBox{
          li{
            display: flex;justify-content: space-between;padding: 20px 0;width: 90%;margin:0 auto;border-bottom: 1px solid #dadada;
            .t_left{
              img{
                width: 80px;height: 80px;border-radius: 50%;display: inline-block;
              }
              section{
                display: inline-block;vertical-align: top;

                span{
                  color:#898989;margin-top: 35px;display: block;
                }
              }
            }
            button{
              width: 150px;height: 35px;line-height: 35px;background: #fc6c21;color:#fff;border-radius: 10px;margin-top: 25px;
            }
          }
      }
    }
  }

</style>
