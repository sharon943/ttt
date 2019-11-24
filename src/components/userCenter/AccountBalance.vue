<template>
  <div>
    <!--<headTop></headTop>-->
    <main>
      <div class="mycontainer" style="background: none">
        <div class="productserchnav">
          <span class="lightgrey" @click="backTohome">用户中心 &gt;</span>
          <span>会员余额</span>
        </div>
      </div>
      <div class="main">
        <ul class="topUL">
          <li class="active">账户余额</li>
        </ul>
        <section class="tableBox">
          <ul class="topData">
            <li>
              <div>
                <p>账户余额</p>
                <p>2<span>.00元</span></p>
              </div>
              <div>
                <button>充值</button>
                <button>提现</button>
                <button>转账</button>
              </div>
            </li>
            <li>
              <div>
                <p>提现中 <span style="color:#339de9;cursor: pointer">[查看明细]</span></p>
                <p>2.00 <span>元</span></p>
              </div>
              <div>

              </div>
            </li>
          </ul>
          <div class="searchBox">
            <div>类型：<el-select v-model="value" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select></div>
            <div>支付方式：<el-select v-model="value" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select></div>
            <div><p>时间：</p><el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker></div>
            <div style="display:flex"><span>订单号</span><el-input v-model="input" placeholder="请输入内容"></el-input> </div>
            <button>搜索</button>
          </div>
          <table cellspacing="0" cellpadding="0">
            <tr>
              <th>时间</th>
              <th>交易对象</th>
              <th>交易说明转账说明</th>
              <th>类型</th>
              <th>支付方式</th>
              <th>收入</th>
              <th>支出</th>
              <th>账户余额</th>
              <th>操作</th>
            </tr>
            <tr v-for="(item,index) in tableData">
              <td>{{ item.date }}</td>
              <td>{{ item.obj }}</td>
              <td style="width: 200px">{{ item.remark }}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.payWay }}</td>
              <td>{{ item.earning }}</td>
              <td>{{ item.expense }}</td>
              <td>{{ item.balance }}</td>
              <td style="cursor: pointer">查看详情</td>

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
        tableData:[
          {date:'2019-09-30 14:06',obj:'无忧代发',remark:'订单支付15.00元',type:'订单',payWay:'在线支付',earning:'0.00',expense:'15.90',balance:'2.00',},
          {date:'2019-09-30 14:06',obj:'无忧代发',remark:'下载、发布【麦兜小屋王工&杨紫同款套装】拍去红包，金额：1.11元',type:'订单',payWay:'在线支付',earning:'0.00',expense:'15.90',balance:'2.00',}
        ]
      }
    },
    components:{
      // headTop,
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      backTohome(){
        this.$parent.fatherMethod();
      }
    }
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
      width: 1200px;border-top: 1px solid #f3463a;height: auto;margin:50px auto 0;position: relative;background: #fff;
      .topUL{
        width: 50%;display: flex;justify-content: space-between;position: absolute;top:-40px;left: 0;cursor: pointer;
        li{
          width: 150px;text-align: center;height: 40px;line-height: 40px;
        }
        li.active{
          background: #f3463a;color: #fff;
        }
      }
      .tableBox{
        padding:50px 20px ;
        .topData{
          display: flex;justify-content: space-between;height: 100px;
          & >li:nth-of-type(1){
            border-right:3px solid #efeeee;padding-left: 0;
          }
          li{
            width: 50%;display: flex;padding-left: 20px;height: 100%;
            & > div:nth-of-type(1){
              width: 50%;color:#333;
              &>p:nth-of-type(2){
                font-size: 20px;margin-top: 5px;
                span{
                  font-size: 14px;color: #666;
                }
              }
            }
            div{
              button{
                width: 70px;height: 30px;line-height: 30px;background: #535353;color:#fff;border-radius: 5px;
              }
              & > button:nth-of-type(1){
                background: #fc5146;
              }
            }
          }
        }
        .searchBox{
          display: flex;width: 100%;height: 50px;background: #f7f7f7;padding: 10px 0 0 5px;
          & > div{
            margin-right: 5px;
             &>span{
               width: 100px;border:1px solid #dcdfe6;height: 30px;line-height: 30px;background: #fff;text-align: center;border-radius: 5px;
             }
            & > p{
              line-height: 30px;display: inline-block;vertical-align:top;
            }
          }
          button{
            width: 50px;height: 30px;line-height: 30px;text-align: center;display: inline-block;
            background-color: #535353;color:#fff;border-radius: 5px;
          }
        }
        table {
          width: 100%;border:0;border-collapse:collapse;
          height: 100%;
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
              color: #535353;text-align: center;border:1px solid #f6f5f5;
            }

          }

        }
      }
    }
  }

</style>
