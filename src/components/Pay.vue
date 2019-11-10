<template>
  <div>
    <headTop></headTop>
    <main>
      <div class="paybox">
        <section class="head-layout">
          <img src="../assets/img/logo.png" alt="">
          <el-steps :active="3" style="width: 60%;float: right">
            <el-step title="购物车" icon="el-icon-goods"></el-step>
            <el-step title="填写购物信息" icon="el-icon-edit"></el-step>
            <el-step title="支付提交" icon="el-icon-tickets"></el-step>
            <el-step title="订单完成" icon="el-icon-check"></el-step>
          </el-steps>
        </section>
        <section class="information">
          <p>支付提交</p>
          <div>订单详情内容可通过查看<span>我的订单</span>进行核对处理。</div>
        </section>
        <section class="tableBox">
          <p>请您及时付款，以便订单尽快处理！ 在线支付金额：<span>￥162.00</span></p>
          <table cellspacing="0" cellpadding="0" >
            <tr>
              <th>订单号</th>
              <th>支付方式</th>
              <th>金额</th>
              <th>物流</th>
            </tr>
            <tr v-for="(item,index) in tableData">
              <td>{{ item.seq }}</td>
              <td>{{ item.payType }}</td>
              <td>{{ item.amount }}</td>
              <td>{{ item.DHL }}</td>
            </tr>
          </table>
        </section>
        <section class="tableBox">
          <p>支付选择</p>
          <ul class="ncc-payment-list">
            <li><img src="../assets/img/alipay_logo.png" alt=""></li>
            <li><img src="../assets/img/wxpay_logo.png" alt=""></li>
          </ul>
        </section>
        <section class="bottom">
          <button><img src="../assets/img/icon-shield.png" alt=""></i> 确认提交支付</button>
        </section>
      </div>
    </main>
  </div>
</template>
<script>
  import headTop from '../config/headTop'
  export default {
    data(){
      return{
        tableData:[{seq:'2035439379687901',payType:'在线支付',amount:194,DHL:'快递'}],
      }
    },
    components:{
      headTop,

    },
  }
</script>
<style scoped lang="scss">
  main{
    border-top:1px solid #f3463a;background:#f6f5f5 ;
    .paybox{
      width: 1200px;margin:0 auto;background: #fff;
      padding: 5px;
      .head-layout{
        padding: 30px 100px;
      }
      .information{
        color:#c9c9c9;padding: 20px 0 15px;
        border-top: 1px solid #f3f3f3;
        & > p{
          font-size: 24px;
        }
        div {
          font-size: 12px;margin-top: 5px;
          span{
            color: #27A9E3;cursor: pointer;
          }
        }
      }
      .tableBox {
        border:1px solid #f3f3f3;padding:20px 20px 10px;
        p{
          span{
            color:#f3463a;font-size: 18px;
          }
        }
        table {
          width: 100%;
          height: 100%;
          margin-top: 20px;
          border-top: 2px solid #a2a2a2;
          border-bottom: 2px solid #a2a2a2;

          & > tr:nth-of-type(1) {
            background: #FAFAFA;
          }

          tr {
            height: 45px;
            font-size: 14px;
            font-family: 'xh';
            text-align: center;

            th {
              font-weight: normal;
              border-bottom: 1px solid #ececec;
              color: #a0a0a0;
              text-align: center;
            }

            td {
              color: #535353;
              text-align: center;
            }

          }

          tr:hover {
            background: #fafafa;
          }

          .shopName {
            text-align: left;
            background: #dbf0fd;
            padding-left: 10px;
            height: 40px;
            line-height: 40px;
            width: calc(100% - 10px);
          }

          .DHLbox {
            th {
              text-align: left;
              padding-left: 20px;

              span {
                color: #f3463a;
                margin-left: 10px;
              }
            }
          }

          .giftBox {
            th {
              text-align: left;

            }
          }

          .priceList {
            th {
              border-bottom: none;
              text-align: right;
              padding-right: 30px;

              span {
                margin-left: 30px;
              }
            }

          }

          .priceList1 th {
            color: #bebebe;
          }

          .priceList2 th {
            color: #333;
          }

          .priceList3 th {
            color: #3e859b;
          }

          .sumPrice {
            background: #f9f9f9;

            span {
              color: #f3463a;
            }

            & > th span:nth-of-type(2) {
              font-size: 18px;
            }
          }
        }
        .ncc-payment-list{
          display: flex;
          li {
          vertical-align: top;
          letter-spacing: normal;
          word-spacing: normal;
          text-align: center;
          display: inline-block;
          padding: 10px 30px;
          margin: 11px;
          border: solid 1px #E6E6E6;
          border-radius: 4px;
          position: relative;
          z-index: 1;
          }
          li:hover{
            border: solid 2px #52A452;margin: 10px;
          }
        }
        }
      .bottom{
        margin-top: 20px;
        button{
          width: 130px;height: 38px;line-height: 38px;background-color: #5BB75B;
          border-color: #52A452 #52A452 #448944 #52A452;color: #fff;margin:0 auto;display: block;
          img{
            width: 20px;margin-top:9px;float: left;margin-left: 10px;
          }
        }
      }
      }
    }

</style>
