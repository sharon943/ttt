<template>
  <div style="height:100%">
    <!--<headTop></headTop>-->
    <main>
      <div class="mycontainer" style="background: none">
        <div class="productserchnav">
          <span class="lightgrey" @click="backTohome">用户中心 &gt;</span>
          <span>我的积分</span>
        </div>
      </div>
      <div class="main">
        <ul>
          <li v-for="(item,index) in categories" :class="{active:index==activeindex}" @click="activeindex=index">{{item}}</li>
        </ul>
        <section class="pointsBox erweima" v-if="activeindex==0">
          <img src="../../assets/img/erweima.png" alt="">
        </section>
        <section class="pointsBox" v-else-if="activeindex==1">
          <table cellspacing="0" cellpadding="0">
            <tr>
              <th>注册成功的账户名</th>
              <th>积分变化</th>
              <th>日期</th>
            </tr>
            <tr v-for="(item,index) in tableData">
              <td><img src="../../assets/img/erweima.png" alt=""><span>{{ item.Nname }}</span></td>
              <td>{{ item.pontsChange }}</td>
              <td>{{ item.date }}</td>
            </tr>
          </table>
        </section>
        <section class="pointsBox" v-else-if="activeindex==2">
          <ul class="topbox">
            <li><p>可用的积分</p><h2>6133</h2></li>
            <li><p>去年过期的积分</p><h2>0</h2></li>
            <li><button>我要兑换优惠券</button></li>
          </ul>
        </section>
      </div>
    </main>
  </div>
</template>
<script>
  // import headTop from '../config/headTop'
  export default {
    data(){
      return {
        categories:['我的二维码','推广列表','推广收入'],
        activeindex:2,
        tableData:[
          {Nname:'618购物津贴',pontsChange:+50,date:'2019年6月2日 13：24：30',img:''},
          {Nname:'618购物津贴',pontsChange:+50,date:'2019年6月2日 13：24：30',img:''},
        ],
      }
    },
    methods:{
      backTohome(){
        this.$parent.fatherMethod();
      },
    },
    components:{
      // headTop,
    },
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
      background: #fff;width: 1200px;border-top: 1px solid #f3463a;height: 100%;margin:50px auto 0;position: relative;
      & > ul{
        width: 25%;display: flex;justify-content: space-between;position: absolute;top:-40px;left: 0;cursor: pointer;
        li{
          width: 150px;text-align: center;height: 40px;line-height: 40px;
        }
        li.active{
          background: #f3463a;color: #fff;
        }
      }
      .pointsBox{
        padding: 50px 30px;height: 100%;
        table {
          width: 100%;
          & > tr:nth-of-type(1){
            background: #FAFAFA;
          }
          tr {
            height: 45px;
            font-size: 14px;
            font-family: 'xh';
            text-align: center;border-bottom:1px solid #666;
            th{
              font-weight: normal;border-bottom: 1px solid #ececec;
              color: #a0a0a0;text-align: center;
            }
            td{
              color: #535353;text-align: center;vertical-align: middle;
            }
            img{
              width: 35px;
              height: 35px;border-radius: 50%;display: inline-block;
            }
          }
          tr:hover{
            background: #fafafa;
          }

        }
        .topbox{
          display: flex;justify-content: space-between;
          li{
            width: 25%;text-align: center;border:1px solid #dadada;height: 100px;text-align: center;line-height: 63px;
          }
          & > li:nth-of-type(1){
            color:#666;
            h2{
              color:#fc6c21;line-height: 0px;
            }
          }
          & > li:nth-of-type(2){
            color:#666;
            h2{
              color:#999999;line-height: 0px;
            }
          }
          & > li:nth-of-type(3){
            width: 35%;
            button{
              width: 200px;height: 35px;line-height: 35px;background: #fc6c21;color:#fff;margin-top: 32.5px;
            }
          }
        }
      }
      .erweima{
        img{
          width: 150px;height: 150px;margin:100px auto 0;display: block;
        }
      }
    }
  }

</style>
