<template>
  <div class="goods">
    <ul>
      <li class="goods_list" v-for="(item,index) in list" :key="index">
        <img :src='item.imgUrl' alt class="goods_list_img" />
        <div class="goods_list_info">
          <div class="goods_list_info_top">
            <div class="left">
              <span>￥</span>
              {{item.price}}
            </div>
            <div class="riight">
              <span>分销数</span>
              {{item.count}}
            </div>
          </div>
          <div class="goods_list_info_name">{{item.name}}</div>
          <div class="goods_list_info_title">{{item.title}}</div>
          <div class="goods_list_info_tips">
            <div class="left">
              <span>新</span>
              <span>货</span>
            </div>
            <div class="right">收藏{{item.savetimes}}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          imgUrl: require("@/assets/images/person.png"),
          price: 120,
          count: 20,
          name: "轩于宝宝",
          title: "2019新款儿童羽绒服女童中长",
          savetimes:20
        },
         {
          id: 2,
          imgUrl: require("@/assets/images/person.png"),
          price: 120,
          count: 20,
          name: "轩于宝宝",
          title: "2019新款儿童羽绒服女童中长",
          savetimes:20
        },
        {
          id: 3,
          imgUrl: require("@/assets/images/person.png"),
          price: 120,
          count: 20,
          name: "轩于宝宝",
          title: "2019新款儿童羽绒服女童中长",
          savetimes:20
        },
         {
          id: 4,
          imgUrl: require("@/assets/images/person.png"),
          price: 120,
          count: 20,
          name: "轩于宝宝",
          title: "2019新款儿童羽绒服女童中长",
          savetimes:20
        },
        {
          id: 5,
          imgUrl: require("@/assets/images/person.png"),
          price: 120,
          count: 20,
          name: "轩于宝宝",
          title: "2019新款儿童羽绒服女童中长",
          savetimes:20
        },
         {
          id: 6,
          imgUrl: require("@/assets/images/person.png"),
          price: 120,
          count: 20,
          name: "轩于宝宝",
          title: "2019新款儿童羽绒服女童中长",
          savetimes:20
        },
        {
          id: 7,
          imgUrl: require("@/assets/images/person.png"),
          price: 120,
          count: 20,
          name: "轩于宝宝",
          title: "2019新款儿童羽绒服女童中长",
          savetimes:20
        },
         {
          id: 8,
          imgUrl: require("@/assets/images/person.png"),
          price: 120,
          count: 20,
          name: "轩于宝宝",
          title: "2019新款儿童羽绒服女童中长",
          savetimes:20
        },
        {
          id: 9,
          imgUrl: require("@/assets/images/person.png"),
          price: 120,
          count: 20,
          name: "轩于宝宝",
          title: "2019新款儿童羽绒服女童中长",
          savetimes:20
        },
         {
          id: 10,
          imgUrl: require("@/assets/images/person.png"),
          price: 120,
          count: 20,
          name: "轩于宝宝",
          title: "2019新款儿童羽绒服女童中长",
          savetimes:20
        },
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.goods {
  background-color: #f6f5f5;
  &_list {
    display: inline-block;
    background-color: #fff;
    width: 225px;
    height: 340px;
    margin-bottom: 16px;
    margin-right: 18px;
    &:nth-child(5n) {
      margin-right: 0;
    }
    &_img {
      display: block;
      width: 100%;
      height: 225px;
    }
    &_info {
      height: 115px;
      padding: 12px;
      box-sizing: border-box;
      &_top {
        display: flex;
        justify-content: space-between;
        height: 16px;
        align-items: center;
        .left {
          color: #f54539;
          font-size: 16px;
          span {
              display: inline-block;
            font-size: 14px;
            color: #333;
          }
        }
        .right {
          
          color: #666;
          span {
            color: #fa9966; display: inline-block;
            font-size: 12px;
          }
        }
      }
      &_name {
        height: 14px;
        line-height: 14px;
        font-size: 14px;
        color: #333;
        margin: 10px 0;
      }
      &_title {
        font-size: 12px;
        color: #666;
        line-height: 12px;
        height: 12px;
        overflow: hidden;
      }
      &_tips {
          margin-top: 9px;
        display: flex;
        justify-content: space-between;
        height: 18px;
        font-size: 18px;
        align-items: center;
        color: #fa9966;
        .left {
          span {
            border: 1px solid #fa9966;
            width: 18px;
            height: 18px;
            margin-right: 4px;
            display: inline-block;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
          }
        }
        .right {
          border: 1px solid #fa9966;
          // width: 18px;
          height: 18px;
          line-height: 18px;
          font-size: 14px;
          padding: 0 4px;
        }
      }
    }
  }
}
</style>