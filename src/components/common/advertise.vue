<template>
  <div class="adver">
    <!-- 标题 -->
    <div class="adver_title">商家大牌广告</div>
    <!-- 广告列表 -->
    <ul class="adver_list">
      <li v-for="(item,index) in adList" :key="index" class="adver_list_content">
        <img :src="item.imgUrl" alt class="adver_list_content_img" />
        <div class="adver_list_content_text">
          <p class="title">{{item.adTitle}}</p>
          <p class="text">{{item.adText}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      adList: [
        {
          id: 1,
          imgUrl: require("@/assets/images/person.png"),
          adTitle: "超时代",
          adText: "2019超时代夏季衣服"
        },
        {
          id: 2,
          imgUrl: require("@/assets/images/person.png"),
          adTitle: "超时代",
          adText: "2019超时代夏季衣服"
        },
        {
          id: 3,
          imgUrl: require("@/assets/images/person.png"),
          adTitle: "超时代",
          adText: "2019超时代夏季衣服"
        },
        {
          id: 4,
          imgUrl: require("@/assets/images/person.png"),
          adTitle: "超时代",
          adText: "2019超时代夏季衣服"
        },
        {
          id: 5,
          imgUrl: require("@/assets/images/person.png"),
          adTitle: "超时代",
          adText: "2019超时代夏季衣服"
        },
        {
          id: 6,
          imgUrl: require("@/assets/images/person.png"),
          adTitle: "超时代",
          adText: "2019超时代夏季衣服"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.adver {
  background-color: #fff;
  margin-bottom: 16px;
  &_title {
    height: 58px;
    line-height: 58px;
    font-size: 18px;
    color: #333;
    text-indent: 36px;
  }
  &_list {
    width: 1200px;
    height: 240px;
    overflow-x: auto;
    &_content {
      display: inline-block;
      position: relative;
      width: 188px;
      height: 240px;
      margin-right: 10px;
      &_img {
        position: absolute;
        width: 190px;
        height: 240px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
      }
      &_text {
        width: 168px;
        height: 54px;
        position: absolute;
        left: 10px;
        bottom: 27px;
        z-index: 1;
        background-color: rgba(246, 245, 245, 0.7);
        .title {
          text-align: center;
          line-height: 16px;
          font-size: 16px;
          margin: 7px 0;
          color: #010101;
        }
        .text {
          text-align: center;
          height: 12px;
          line-height: 12px;
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(102, 102, 102, 1);
        }
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>