<template>
    <div>
      <headTop></headTop>
      <main>
         <div class="paybox">
           <section class="head-layout">
             <img src="../assets/img/logo.png" alt="">
             <el-steps :active="2" style="width: 60%;float: right">
               <el-step title="购物车" icon="el-icon-goods"></el-step>
               <el-step title="填写购物信息" icon="el-icon-edit"></el-step>
               <el-step title="支付提交" icon="el-icon-tickets"></el-step>
               <el-step title="订单完成" icon="el-icon-check"></el-step>
             </el-steps>
           </section>
           <section class="information">
               <p>填写核对购物信息</p>
               <ul>
                 <li>1，请仔细核对填写数据，发票等信息，以确保物流快递及时准确投递</li>
                 <li>2，最终运费以实际称重为准，多退少补</li>
               </ul>
           </section>
           <section class="orderInfo">
               <span v-for="(item,index) in orderTypes" :class="{active:index===activeIndex}" @click="activeIndex=index">{{item}}</span>
               <div class="senderBox" v-show="activeIndex==0">
                   <h2>寄件人信息</h2>
                   <section class="">
                     <img v-if="isNewsender" src="../assets/img/Check.png" alt="" >
                     <img v-else src="../assets/img/notCheck.png" alt="" @click="uesNewsender">
                     <span style="display: inline-block">使用新寄件人</span></section>
                     <el-form v-show="isNewsender" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
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
                 <section class="" v-for="(row,index) in senderList" @click="checkOrnot(index,'senderList')">
                   <img v-if="row.check==0" src="../assets/img/notCheck.png" alt="">
                   <img v-else src="../assets/img/Check.png" alt="">
                   <span style="display: inline-block">{{row.name}}</span> <span style="color:#606266;">{{row.address}}</span><span style="color: #d8504d;" @click="deleteA(row.id)">删除</span>
                 </section>
               </div>
             <div class="senderBox" v-show="activeIndex==1">
               <h2>提货人信息</h2>
               <section class="">
                 <img v-if="isNewsupply" src="../assets/img/Check.png" alt="" >
                 <img v-else src="../assets/img/notCheck.png" alt="" @click="uesNewsupply">
                 <span style="display: inline-block">使用新提货人</span></section>
               <el-form v-show="isNewsupply" :model="supplyForm" :rules="rules" ref="supplyForm" label-width="100px" class="demo-ruleForm">
                 <el-form-item label="提货人姓名" prop="name">
                   <el-input v-model="supplyForm.name"></el-input>
                 </el-form-item>
                 <el-form-item label="提货人手机" prop="phone" class="phoneBox">
                   <el-input v-model="supplyForm.phone"></el-input>（或）电话   <el-input v-model="ruleForm.phone"></el-input>
                 </el-form-item>
                 <el-form-item label="配送地址" prop="address">
                   <el-input v-model="supplyForm.address" type="textarea"></el-input>
                 </el-form-item>
                 <el-form-item style="padding-left: 0">
                   <el-button type="primary" @click="submitForm('ruleForm')">保存提货人信息</el-button>
                 </el-form-item>
               </el-form>
               <section class="" v-for="(row,index) in supplyList" @click="checkOrnot(index,'supplyList')">
                 <img v-if="row.check==0" src="../assets/img/notCheck.png" alt="">
                 <img v-else src="../assets/img/Check.png" alt="">
                 <span style="display: inline-block">{{row.name}}</span> <span style="color:#606266;">{{row.address}}</span><span style="color: #d8504d;" @click="deleteA(row.id)">删除</span>
               </section>
             </div>
             <div class="senderBox" v-show="activeIndex==0">
               <h2>收货人信息</h2>
               <section class="">
                 <img v-if="isNewconsignee" src="../assets/img/Check.png" alt="" >
                 <img v-else src="../assets/img/notCheck.png" alt="" @click="uesNewconsignee">
                 <span style="display: inline-block">使用新地址</span> <span style="color: #d8504d;">使用自提服务站</span></section>
                 <el-form v-show="isNewconsignee" :model="consigneeForm" :rules="rules" ref="consigneeForm" label-width="120px" class="demo-ruleForm">
                 <el-form-item label="模糊地址识别" class="textarea" prop="name">
                   <el-input type="textarea" v-model="consigneeForm.text"></el-input>
                 </el-form-item>
                 <el-form-item label="收货人姓名" prop="name">
                   <el-input v-model="consigneeForm.name"></el-input>
                 </el-form-item>
                 <el-form-item label="所在地区" prop="address" class="Area">
                   <el-select v-model="consigneeForm.province" placeholder="请选择" @change="showCity">
                     <el-option v-for="row in provices" :label="row.name" :value="row.name" :key="row.name">{{row.name}}</el-option>
                   </el-select>
                   <el-select v-model="consigneeForm.city" placeholder="请选择" @change="showDis" v-if="citys.length>0">
                     <el-option v-for="row in citys" :label="row.name" :value="row.name" :key="row.name">{{row.name}}</el-option>
                   </el-select>
                   <el-select v-model="consigneeForm.districtAndCounty" placeholder="请选择" @change="showDis" v-if="districtAndCounties.length>0">
                     <el-option v-for="row in districtAndCounties" :label="row" :value="row" :key="row">{{row}}</el-option>
                   </el-select>
                 </el-form-item>
                 <el-form-item label="详细地址" prop="address">
                   <el-input v-model="consigneeForm.address"></el-input>
                   <p style="color: #8b8b8b">请填写真实地址，不需要重复填写所在地区</p>
                 </el-form-item>
                 <el-form-item label="手机号码" prop="phone" class="phoneBox">
                   <el-input v-model="consigneeForm.phone"></el-input>（或）电话   <el-input v-model="ruleForm.phone"></el-input>
                 </el-form-item>
                 <el-form-item style="padding-left: 0">
                   <el-button type="primary" @click="submitForm('consigneeForm')">保存收货人信息</el-button>
                 </el-form-item>
                 </el-form>
               <section class="" v-for="(row,index) in consigneeList" @click="checkOrnot(index,'consigneeList')">
                 <img v-if="row.check==0" src="../assets/img/notCheck.png" alt="">
                 <img v-else src="../assets/img/Check.png" alt="">
                 <span style="display: inline-block">{{row.name}}</span> <span style="color:#606266;">{{row.address}}</span><span style="color: #d8504d;" @click="deleteA(row.id)">删除</span>
               </section>
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
               <tr>
                 <th class="shopName" colspan="20">店铺：潘多拉</th>
               </tr>
               <tr v-for="(item,index) in tableData" style="background: #fffdef">
                 <td>{{ item.name }}</td>
                 <td>{{ item.weight }}</td>
                 <td>{{ item.unit }}</td>
                 <td>{{ item.num }}</td>
                 <td>{{ item.amount }}</td>
               </tr>
               <tr class="DHLbox">
                 <th colspan="20">
                   快递选择：
                   <el-select v-model="value" placeholder="请选择">
                     <el-option v-for="item in DHLoptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                   </el-select>
                   <span>[商家快递说明]床垫 记泡核算运费</span>
                 </th>
               </tr>
               <tr class="giftBox">
                 <th colspan="20">
                    赠品列表
                 </th>
               </tr>
               <tr class="giftBox" >
                 <th colspan="20" style="padding-top: 10px">
                   <el-checkbox-group v-model="checkedGifts" :min="1" :max="2">
                     <el-checkbox v-for="item in gifts" :label="item.name" :key="item.id">{{item.name}} 数量:<el-input v-model="item.num"></el-input>
                     </el-checkbox>
                   </el-checkbox-group>
                 </th>
               </tr>
               <tr class="priceList priceList1"><th colspan="20">运费：<span>4.00元</span></th></tr>
               <tr class="priceList priceList2"><th colspan="20">商品金额：<span>90.00元</span></th></tr>
               <tr class="priceList priceList3"><th colspan="20">本店合计：<span>94.00元</span></th></tr>
               <tr class="priceList sumPrice"><th colspan="20">
                 <span>(注意:最终运费以实际称重为准，多退少补）</span>（不含税价）订单总金额：<span>94.00</span>元
               </th></tr>
             </table>
             <div class="postOrderPre">
               <p>我已同意并阅读《<span>找家纺代发合作协议</span>》</p><img src="../assets/img/check.png" alt="">
             </div>
             <div class="postButton">
               <router-link :to="{path:'/Pay'}">提交订单</router-link>
             </div>
           </section>
         </div>
      </main>
    </div>
</template>
<script>
  import Vue from 'vue'
  import headTop from '../config/headTop'
  import area from '../assets/js/area'
  export default {
    data(){
      return{
        provices:area.provice,citys:[],districtAndCounties:[],
        //是否选用新寄件人新地址
        isNewsender:false,
        //是否选用新提货人
        isNewsupply:false,
        //是否选用新货人新地址
        isNewconsignee:false,
        //寄件人列表
        senderList:[{id:1,name:'等先生',address:'湖北  武汉  江岸 唐家墩街道',check:1},{id:2,name:'邓先生',address:'湖北  武汉  江岸 唐家墩街道1',check:0}],
        //收货人列表
        consigneeList:[{id:1,name:'等先生',address:'湖北  武汉  江岸 唐家墩街道',check:1},{id:2,name:'邓先生',address:'湖北  武汉  江岸 唐家墩街道1',check:0}],
        //提货人列表
        supplyList:[{id:1,name:'等先生',address:'湖北  武汉  江岸 唐家墩街道',check:1},{id:2,name:'邓先生',address:'湖北  武汉  江岸 唐家墩街道1',check:0}],
        supplyForm:{name:'',phone:'',address:''},
        current : {prov: '', city: '', country: ''},
        checkedGifts:[],
        gifts:[
          {id:1,name:'冰丝席专用手提袋（1.60)',num:''},
          {id:2,name:'小方巾（1.50）',num:''},
          {id:3,name:'大号仿皮包装（6.00）',num:''},
          {id:4,name:'中号仿皮包装（5.00）',num:''},{id:5,name:'小号仿皮包装（5.00）',num:''},{id:6,name:'礼盒（含外包装）（9.00）',num:''},{id:7,name:'手拎袋（1.60）',num:''},{id:8,name:'精品毛巾（3.00）',num:''}],
        DHLoptions:[{
          value: '选项1',
          label: '申通'
        }, {
          value: '选项2',
          label: '圆通'
        }, {
          value: '选项3',
          label: '中通'
        }, {
          value: '选项4',
          label: '韵达'
        }, {
          value: '选项5',
          label: 'ems'
        }],
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
        consigneeForm: {
          name: '',
          text: '',
          province: '',
          city: '',
          districtAndCounty: '',
          address: '',
          phone: ''
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
    methods:{
      uesNewsender(){
        this.isNewsender=true
        for (let i = 0; i <this.consigneeList.length ; i++) {
          this.senderList[i].check=0
        }
      },
      uesNewsupply(){
        this.isNewsupply=true
        for (let i = 0; i <this.supplyList.length ; i++) {
          this.supplyList[i].check=0
        }
      },
      //删除收货人地址
      deleteA(e){

      },
      uesNewconsignee(){
        this.isNewconsignee=true
        for (let i = 0; i <this.consigneeList.length ; i++) {
            this.consigneeList[i].check=0
        }
      },
      checkOrnot(index,name){
        if(name=='senderList'){
          this.isNewsender=false
        }else if(name=='supplyList'){
          this.isNewsupply=false
        }else{
          this.isNewconsignee=false
        }
        for (let i = 0; i <this[name].length ; i++) {
          if(i==index){
            this[name][i].check=1
          }else{
            this[name][i].check=0
          }
        }

      },
      showCity(e){
        console.log(e)
        console.log(this.provices)
        for(var i=0;i<this.provices.length;i++){
          if(this.provices[i].name==e){
            this.citys=this.provices[i].city
          }
        }

        console.log(this.citys)
      },
      showDis(e){
        console.log(e)
        console.log(this.citys)
        for(var i=0;i<this.citys.length;i++){
          if(this.citys[i].name==e){
            this.districtAndCounties=this.citys[i].districtAndCounty
          }
        }

      }

    }

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
         color:#c9c9c9;
        & > p{
          font-size: 26px;
        }
      }
      .orderInfo{
        margin-top: 15px;
        & > span{
          width: 100px;height: 40px;line-height: 40px;text-align: center;background: #b7b5b2;font-size: 14px;display: inline-block;margin-right: 5px;
          color:#fff;cursor: pointer;
        }
        span.active{
          background: #fd9827;
        }
        .senderBox{
          width: 100%;border:2px solid #d73a19;height: auto;padding: 20px;
          & > section{
            height: 20px;margin-top: 20px;margin-bottom: 20px;
            img{width: 18px;height: 18px;float: left;margin-right: 10px}
            span{
              float: left;margin-right: 10px;
            }
          }
        }

      }
      .goodsList{
        .listTitle{
          margin-top: 20px;
        }
        table {
          width: 100%;
          height: 100%;
          margin-top: 20px;border-top:2px solid #a2a2a2;border-bottom:2px solid #a2a2a2;
          & > tr:nth-of-type(1){
            background: #FAFAFA;
          }
          tr {
            height: 45px;
            font-size: 14px;
            font-family: 'xh';
            text-align: center;
            th{
              font-weight: normal;border-bottom: 1px solid #ececec;
              color: #a0a0a0;text-align: center;
            }
            & > th:nth-of-type(1),& > td:nth-of-type(1){
              width: 50%;
            }
           & > td:nth-of-type(1){
            text-align: left;padding-left: 20px;
          }
            td{
              color: #535353;text-align: center;
            }

          }
          tr:hover{
            background: #fafafa;
          }
          .shopName{
            text-align: left;background: #dbf0fd;padding-left: 10px;height: 40px;line-height: 40px;width: calc(100% - 10px);
          }
          .DHLbox{
           th{
             text-align: left;padding-left:20px;
             span{
             color:#f3463a;margin-left: 10px;
           }
           }
          }
          .giftBox{
            th{
              text-align: left;

            }
          }
          .priceList{
            th{
              border-bottom: none;text-align: right;padding-right: 30px;
              span{
                margin-left: 30px;
              }
            }

          }
          .priceList1 th{color:#bebebe;}
          .priceList2 th{color:#333;}
          .priceList3 th{color:#3e859b;}
          .sumPrice{
            background: #f9f9f9;
            span{
              color: #f3463a;
            }
            & > th  span:nth-of-type(2){
              font-size: 18px;
            }
          }
        }
        .postOrderPre{
          text-align: right;margin-top: 40px;height: 40px;line-height: 40px;
          img{
            margin-right: 10px;margin-top: 12px;float: right;
          }
          p{
            float: right;
          }
          span{
            cursor: pointer;color:#409EFF;
          }
        }
        .postButton{
          height: 45px;margin-top: 40px;
          a{
            width: 120px;height: 40px;line-height: 40px;text-align: center;float: right;background: #f5f5f5;border:1px solid #c5c5c5;
          }
        }

      }
    }
  }
</style>
