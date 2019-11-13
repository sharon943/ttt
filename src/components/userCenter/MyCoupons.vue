<template>
  <div>
    <!--<headTop></headTop>-->
    <main>
      <p>用户中心 > <span>优惠券</span></p>
      <div class="main">
        <ul class="topUL">
          <li class="active">优惠券</li>
        </ul>
        <section class="tableBox">
          <table cellspacing="0" cellpadding="0">
            <tr>
              <th>优惠券名称</th>
              <th>优惠券编码</th>
              <th>面额</th>
              <th>生效日期</th>
              <th>失效日期</th>
              <th>状态</th>
              <th>操作</th>
              <th>来源</th>
            </tr>
            <tr v-for="(item,index) in tableData">
              <td>{{ item.name }}</td>
              <td>{{ item.No }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.beginTime }}</td>
              <td>{{ item.endTime }}</td>
              <td>{{ item.status }}</td>
              <td style="cursor: pointer">查看详情</td>
              <td>{{ item.resource }}</td>

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
          {name:'hah',No:'12345678',price:'15.00元',beginTime:'2019-09-30 14:06',endTime:'2019-10-21 14:06',status:'0.00',resource:'15.90',},
          {name:'hah',No:'12345678',price:'15.00元',beginTime:'2019-09-30 14:06',endTime:'2019-10-21 14:06',status:'0.00',resource:'15.90',},
        ]
      }
    },
    components:{
      // headTop,
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
