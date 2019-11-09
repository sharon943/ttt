<template>
    <div>
      <headTop></headTop>
      <main>
         <div class="paybox">
            <section class=""></section>
           <section class="information">
               <p>填写核对购物信息</p>
               <ul>
                 <li>1，请仔细核对填写数据，发票等信息，以确保物流快递及时准确投递</li>
                 <li>2，最终运费以实际称重为准，多退少补</li>
               </ul>
           </section>
           <section class="orderInfo">
               <span v-for="(item,index) in orderTypes" :class="{active:index===activeIndex}">{{item}}</span>
               <div class="senderBox">
                   <h2>寄件人信息</h2>
                   <section class=""><img src="../assets/img/check.png" alt=""><span style="display: inline-block">使用新寄件人</span></section>
                 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                   <el-form-item label="寄件人名称" prop="name">
                     <el-input v-model="ruleForm.name"></el-input>
                   </el-form-item>
                   <el-form-item label="寄件人地址" prop="address">
                     <el-input v-model="ruleForm.address"></el-input>
                   </el-form-item>
                   <el-form-item label="寄件人手机" prop="phone" class="phoneBox">
                     <el-input v-model="ruleForm.phone"></el-input>（或）电话   <el-input v-model="ruleForm.phone"></el-input>
                   </el-form-item>
                   <el-form-item style="padding-left: 0">
                     <el-button type="primary" @click="submitForm('ruleForm')">保存寄件人信息</el-button>
                   </el-form-item>
                 </el-form>
               </div>
             <div class="senderBox consignee">
               <h2>收货人信息</h2>
               <section class=""><img src="../assets/img/check.png" alt=""><span style="display: inline-block">使用新地址</span> <span style="color: #d8504d;">使用自提服务站</span></section>
               <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                 <el-form-item label="模糊地址识别" class="textarea" prop="name">
                   <el-input type="textarea" v-model="ruleForm.name"></el-input>
                 </el-form-item>
                 <el-form-item label="收货人姓名" prop="name">
                   <el-input v-model="ruleForm.name"></el-input>
                 </el-form-item>
                 <el-form-item label="详细地址" prop="address">
                   <el-input v-model="ruleForm.address"></el-input>
                   <p style="color: #8b8b8b">请填写真实地址，不需要重复填写所在地区</p>
                 </el-form-item>
                 <el-form-item label="手机号码" prop="phone" class="phoneBox">
                   <el-input v-model="ruleForm.phone"></el-input>（或）电话   <el-input v-model="ruleForm.phone"></el-input>
                 </el-form-item>
                 <el-form-item style="padding-left: 0">
                   <el-button type="primary" @click="submitForm('ruleForm')">保存收货人信息</el-button>
                 </el-form-item>
                 </el-form>
               </div>
           </section>
           <section class="goodsList">
              <p class="listTitle">商品清单</p>
             <table cellspacing="0" cellpadding="0" >
               <tr>
                 <th>商品</th>
                 <th>参考重量（kg)</th>
                 <th>单元（元）</th>
                 <th>数量</th>
                 <th>小计（元）</th>
               </tr>
               <tr v-for="(item,index) in tableData">
                 <td>{{ item.name }}</td>
                 <td>{{ item.weight }}</td>
                 <td>{{ item.unit }}</td>
                 <td>{{ item.num }}</td>
                 <td>{{ item.amount }}</td>
               </tr>
             </table>
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
        tableData: [{name: '2019新款棉加绒', weight: 10, unit: 100, num: 100, amount: 100},
          {name: '2019新款棉加绒', weight: 10, unit: 100, num: 100, amount: 100}],
        orderTypes:['普通订单','自提订单'],activeIndex:0,
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
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
      .information{
         color:#c9c9c9;
        & > p{
          font-size: 26px;
        }
      }
      .orderInfo{
        margin-top: 15px;
        & > span{
          width: 100px;height: 40px;line-height: 40px;text-align: center;background: #b7b5b2;font-size: 14px;display: inline-block;margin-right: 5px;
          color:#fff;
        }
        span.active{
          background: #fd9827;
        }
        .senderBox{
          width: 100%;margin-top: 20px;border:2px solid #d73a19;height: auto;padding: 20px;
          & > section{
            height: 20px;margin-top: 20px;margin-bottom: 20px;
            img{width: 18px;height: 18px;float: left;margin-top: 2px;margin-right: 10px}
            span{
              float: left;margin-right: 10px;
            }
          }
        }
        .consignee{
          margin-top:0;
        }
      }
      .goodsList{
        .listTitle{
          margin-top: 20px;
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
            text-align: center;
            th{
              font-weight: normal;
              color: #a0a0a0;text-align: center;
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
