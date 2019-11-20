<template>
  <div>
    <div class="mycontainer" style="background: none">
      <div class="mycontainer" style="background: none">
        <div class="productserchnav">
          <span class="lightgrey">用户中心 &gt;</span>
          <span>寄件人设置</span>
        </div>
      </div>
      <div class="mynavs">
        <div class="tittle reds">寄件人设置</div>
      </div>
    </div>
    <div class="mycontainer" style="background: #fff; padding-top: 25px;">
      <div class="tipmess">发货人信息可用于打印快递单时，发件人部分的信息</div>
      <div class="formbox">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="姓名：" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="手机号：" prop="telphone">
            <el-input v-model="ruleForm.telphone" placeholder="请输入手机"></el-input>
          </el-form-item>
          <el-form-item label="固话：" prop="number">
            <el-input v-model="ruleForm.number" placeholder="请输入固话"></el-input>
          </el-form-item>
          <el-form-item label="发货地址：" prop="number">
            <div style="display: flex;">
              <div class="m8">
                <el-select
                  v-model="sheng"
                  @change="choseProvince"
                  placeholder="省级地区">
                  <el-option
                    v-for="item in province"
                    :key="item.id"
                    :label="item.value"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
              <div class="m8">
                <el-select
                  v-model="shi"
                  @change="choseCity"
                  placeholder="市级地区">
                  <el-option
                    v-for="item in shi1"
                    :key="item.id"
                    :label="item.value"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
              <div>
                <el-select
                  v-model="qu"
                  @change="choseBlock"
                  placeholder="区级地区">
                  <el-option
                    v-for="item in qu1"
                    :key="item.id"
                    :label="item.value"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div style="margin-top: 8px">
              <el-input v-model="ruleForm.address" placeholder="请输入详细地址"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="邮编：" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>

          <el-form-item>
            <div @click="submitForm('ruleForm')" class="reds submits">保存发件人信息</div>
          </el-form-item>
        </el-form>
      </div>
    </div>

  </div>

</template>
<script>

  import map from '../../assets/map.json'
  const checkPhone = (rule, value, callback) => {
    if (!value) {
      callback(new Error('请输入联系方式'))
    } else {
      const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
      if (reg.test(value)) {
        callback()
      } else {
        return callback(new Error('请输入正确的电话'))
      }
    }
  }

  export default {
    data() {
      return {
        mapJson: '../../assets/map.json',
        province: '',
        sheng: '',
        shi: '',
        shi1: [],
        qu: '',
        qu1: [],
        city: '',
        block: '',
        ruleForm: {
          name: '',
          telphone: '',
          number: '',
          address: '',
          email: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          telphone: [
            {required: true, trigger: 'blur',validator: checkPhone}
          ]
        }
      }
    },
    methods: {
      // 加载china地点数据，三级
      getCityData: function () {
        var that = this
        var data = map
        that.province = []
        that.city = []
        that.block = []
        // 省市区数据分类
        for (var item in data) {
          if (item.match(/0000$/)) {//省
            that.province.push({id: item, value: data[item], children: []})
          } else if (item.match(/00$/)) {//市
            that.city.push({id: item, value: data[item], children: []})
          } else {//区
            that.block.push({id: item, value: data[item]})
          }
        }
        // 分类市级
        for (var index in that.province) {
          for (var index1 in that.city) {
            if (that.province[index].id.slice(0, 2) === that.city[index1].id.slice(0, 2)) {
              that.province[index].children.push(that.city[index1])
            }
          }
        }
        // 分类区级
        for (var item1 in that.city) {
          for (var item2 in that.block) {
            if (that.block[item2].id.slice(0, 4) === that.city[item1].id.slice(0, 4)) {
              that.city[item1].children.push(that.block[item2])
            }
          }
        }


      },
      // 选省
      choseProvince: function (e) {
        for (var index2 in this.province) {
          if (e === this.province[index2].id) {
            this.shi1 = this.province[index2].children
            this.shi = this.province[index2].children[0].value
            this.qu1 = this.province[index2].children[0].children
            this.qu = this.province[index2].children[0].children[0].value
            this.E = this.qu1[0].id
          }
        }
      },
      // 选市
      choseCity: function (e) {
        for (var index3 in this.city) {
          if (e === this.city[index3].id) {
            this.qu1 = this.city[index3].children
            this.qu = this.city[index3].children[0].value
            this.E = this.qu1[0].id
            // console.log(this.E)
          }
        }
      },
      // 选区
      choseBlock: function (e) {
        this.E = e;
        // console.log(this.E)
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    created: function () {
      this.getCityData()
    },
    mounted() {

    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        document.title = '寄件人设置'
      })
    }
  }
</script>
<style scoped>
  .mycar {
    font-size: 12px;
    background: #f6f5f5;
  }

  .mydetailtop {
    background: #fff;
    border-bottom: 1px solid #f43e31;

  }

  .storehome2top {
    background: #f6f5f5;
  }

  .tablist {
    background: #f6f5f5;
  }

  .consultingtop {
    width: 100%;
    height: 122px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .consultingtop > div:nth-child(1) {
    display: inline-block;
    height: auto;
  }

  .cursor {
    cursor: pointer;
  }

  .tabs {
    height: 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: #f6f5f5;

  }

  .tabs > div:nth-child(1) {
    display: flex;
    height: 100%;
    align-items: center;
  }

  .tabs > div > span {
    display: flex;
    height: 100%;
    padding: 0 22px;
    align-items: center;
  }

  .mytab > .active {
    background: #f43e31; /* 红色背景 */
    color: #fff;
  }

  .consultingtop .serachs {
    width: 562px;

  }

  .Consultingsearchbox {
    position: relative;
    height: 40px;
    display: flex;
    border: 2px solid #f24e48;
    border-radius: 50px;
    overflow: hidden;
    margin-bottom: 7px;
  }

  .Consultingsearchbox > div:nth-child(1) {
    width: 454px;
  }

  .Consultingsearchbox > div:nth-child(1) > input {
    display: block;
    width: 100%;
    height: 100%;
    outline: none;
    padding: 0 16px;
    border: none;
  }

  .Consultingsearchbox > div:nth-child(2) {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    width: 120px;
    align-items: center;
    border-radius: 50px;
    background-image: linear-gradient(90deg, #f24e48 0%, #ff6349 100%);
  }

  .Consultingsearchbox > div:nth-child(2) > span {
    display: inline-block;
    height: 20px;
    width: 50%;
    color: #fff;
    text-align: center;
    font-size: 18px;
    line-height: 20px;
  }

  .Consultingsearchbox > div:nth-child(2) > span:nth-child(1) {
    border-right: 1px solid #fff;
  }

  .selecttype {
    padding: 0 18px;
    display: flex;

  }

  .selecttype > span {
    width: 50px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    color: #666;
    border-radius: 50px;
    margin-bottom: 2px;
  }

  .selecttype > .active {
    background-image: linear-gradient(90deg, #f24e48 0%, #ff6349 100%);
    color: #fff;
  }

  .tjlist {
    display: flex;
    padding: 0 18px;
    color: #666;
  }

  .tjlist > span {
    margin-right: 25px;
  }

  .sdcode {
    width: 170px;
    display: flex;
    justify-content: space-between;
  }

  .sdcode > div {
    height: 80px;
    width: 80px;
    box-shadow: 2px 4px 10px #fdd9d8;
  }

  .productserchnav {
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
  }

  .mynavs {
    display: flex;
    border-bottom: 1px solid #f43e31;
  }

  .mynavs > div {
    padding: 0 30px;
    height: 40px;
    line-height: 40px;
  }

  .tipmess {
    background: #dadada;
    padding: 0 20px;
    height: 42px;
    line-height: 42px;
    color: #605f5c;

  }

  .formbox {
    width: 593px;
    margin: 0 auto;
    padding: 0 40px;
    margin-top: 40px;
  }

  .m8 {
    margin-right: 8px;
  }
  .submits{
    width: 168px;
    height: 34px;
    text-align: center;
    line-height: 34px;
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 30px;
  }
</style>
