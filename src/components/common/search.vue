<template>
  <div class="search">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
           <el-breadcrumb-item :to="{ path: '/' }">所有分类</el-breadcrumb-item>
        </el-breadcrumb>
    <div class="search_hot">
      <div class="search_hot_title">热款推荐:</div>
      <ul class="search_hot_menu">
          <li v-for="item in list1" :key="item.id"  class="search_hot_menu_list">
              {{item.name}}
          </li>
      </ul>
    </div>
    <div class="search_hot">
      <div class="search_hot_title">属性选款:</div>
      <ul class="search_hot_menu">
          <li v-for="item in list2" :key="item.id"  class="search_hot_menu_list search_hot_menu_listed" @mouseenter="handle(item.id)" @mouseleave="handleout(item.id)">
             <span :class="natureIndex==item.id?'actived':''">{{item.name}}</span>  <i class="el-icon-arrow-down"></i>
              <el-collapse-transition>
                    <div class="search_hot_menu_listed_box" v-if="natureIndex==item.id">
                        {{item.id}}
                    </div>
              </el-collapse-transition>
             
          </li>
      </ul>
    </div>
     <div class="search_hot">
      <!-- <div class="search_hot_title">热款推荐:</div> -->
      <ul class="search_hot_menu">
          <li v-for="item in list1" :key="item.id"  class="search_hot_menu_list">
              {{item.name}}
          </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        list1: [
            {id:1,name:'运动'},{id:2,name:'休闲'},{id:3,name:'学院'},{id:4,name:'名族风'},{id:5,name:'百搭'},
            {id:6,name:'原创设计'},{id:7,name:'风衣'},{id:8,name:'牛仔裤'},{id:9,name:'家居服'},{id:10,name:'外套'},
        ],
        list2: [
            {id:1,name:'适用性别'},{id:2,name:'价格范围'},{id:3,name:'流行元素'},{id:4,name:'面料'},{id:5,name:'参考身高'},
            {id:6,name:'图案'},{id:7,name:'款式'},{id:8,name:'适用季节'}
        ],
        natureIndex:null,
    };
  },
  methods:{
      handle(index){
          console.log(index);
          this.natureIndex = index;
      },
      handleout(index){
           console.log(index);
           this.natureIndex = null;
      }
  }
};
</script>
<style lang="scss" scoped>
.search {
  width: 1200px;
  
  background-color: #fff;
  .breadcrumb{
     padding-top:  18px;
     padding-bottom: 5px;
      padding-left: 20px;
  }
  &_hot {
    display: flex;
    flex-direction: row;
    height: 48px;
    border-bottom: 1px solid #ECECEC;
    &_title{
        font-size: 14px;
        color: #333;
        line-height: 48px;
        width: 100px;
        padding-left: 20px;
        font-family:PingFang SC;
        font-weight:600;
    }
    &_menu{
        &_list{
            display: inline-block;
            line-height: 48px;
            margin-left: 20px;
            padding: 0 5px;
            color: #666;
            cursor: pointer;
        }
    }
  }
  .actived{
      color: #ff6c00;
  }
  .search_hot_menu_listed{
      position: relative;
      &_box{
          position: absolute;
          top: 48px;
          left: 0;
          width: 300px;
          height: 300px;
          border: 1px solid #f6f6f6;
          border-radius: 5px;
          background-color: #fff;
      }
  }
}
</style>