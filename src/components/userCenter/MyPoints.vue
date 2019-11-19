<template>
  <div>
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
        <section class="pointsBox" v-if="activeindex==0">
            <ul class="topbox">
                <li><p>可用的积分</p><h2>6133</h2></li>
                <li><p>去年过期的积分</p><h2>0</h2></li>
                <li><button>我要兑换</button></li>
            </ul>
          <table cellspacing="0" cellpadding="0">
            <tr>
              <th>来源/用途</th>
              <th>积分变化</th>
              <th>日期</th>
              <th>备注</th>

            </tr>
            <tr v-for="(item,index) in tableData">
              <td>
                <img src="../../assets/img/erweima.png" alt="">
                <div>
                  <p>{{ item.from }}</p>
                  <span>编号：{{ item.NO }}</span>
                </div>

              </td>
              <td>{{ item.pontsChange }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.remark }}</td>

            </tr>
          </table>
        </section>
        <section class="pointsBox" v-else-if="activeindex==1">
          <!--积分记录展现部分，ui上没看到此部分展示内容，暂放-->
            <ul class="topbox">
                <li><p>可用的积分2</p><h2>6133</h2></li>
                <li><p>去年过期的积分2</p><h2>0</h2></li>
                <li><button>我要兑换2</button></li>
            </ul>
          <table cellspacing="0" cellpadding="0">
            <tr>
              <th>来源/用途</th>
              <th>积分变化</th>
              <th>兑换日期</th>
              <th>备注</th>

            </tr>
            <tr v-for="(item,index) in tableData">
              <td>
                <img src="../../assets/img/erweima.png" alt="">
                <div>
                  <p>{{ item.from }}</p>
                  <span>编号：{{ item.NO }}</span>
                </div>

              </td>
              <td>{{ item.pontsChange }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.remark }}</td>

            </tr>
          </table>
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
        categories:['积分明细','积分记录'],
        activeindex:0,
        tableData:[
          {from:'618购物津贴',NO:'1000069064645',img:'../../assets/img/erweima.png',pontsChange:-5,date:'2019年6月2日 13：24：30',remark:'618购物津贴'},
          {from:'618购物津贴',NO:'1000069064645',img:'../../assets/img/logo.png',pontsChange:-5,date:'2019年6月2日 13：24：30',remark:'618购物津贴'},
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
    margin:0 auto;background:#f6f5f5;height: auto;border-top: 1px solid #f3463a;
    & >p{
      width: 1200px;margin:20px auto 0;color:#666;cursor: pointer;
      span{
        font-size: 16px;color:#333;
      }
    }
    .main{
      background: #fff;width: 1200px;border-top: 1px solid #f3463a;height: auto;margin:50px auto 0;position: relative;
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
        padding: 20px 30px;
          .topbox{
            display: flex;justify-content: space-between;background: #f6f5f5;padding:30px 40px;
            li{
              width: 20%;text-align: center;
            }
            & > li:nth-of-type(1){
              color:#5e5c6f;
              h2{
                color:#288c29;
              }
            }
            & > li:nth-of-type(2){
             color:#908c91;
              h2{
                color:#999999;
              }
            }
            & > li:nth-of-type(3){
              width: 60%;
              button{
                width: 200px;height: 35px;line-height: 35px;background: #d83c59;color:#fff;margin-top: 10px;
              }
            }
          }
        table {
          width: 100%;
          height: 100%;
          margin-top: 20px;
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
            & > td:nth-of-type(1){
              text-align: left;padding: 20px;
              img{
                width: 53px;height: 53px;
              }
              span{
                 color:#898989;margin-top: 15px;display: block;
              }
              div{
                width:160px;display: inline-block;height: 53px;vertical-align: top;
              }
            }
            td{
              color: #535353;text-align: center;
            }

          }
          tr:hover{
            background: #fafafa;
          }

        }
      }
    }
  }

</style>
