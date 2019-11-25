<template>
  <div class="week">
    <THeader></THeader>
    <MHeader></MHeader>
    <main>
      <Search></Search>
      <Advertise></Advertise>
      <Goods></Goods>
      <div class="pageView">
        <el-pagination
          :current-page="4"
          :page-size="10"
          layout=" prev, pager, next,sizes,total,  jumper"
          :total="400"
        ></el-pagination>
      </div>
    </main>
  </div>
</template>
<script>
import THeader from "@/components/common/headerTop";
import MHeader from "@/components/common/header";
import Search from "@/components/common/search";
import Advertise from "@/components/common/advertise";
import Goods from "@/components/common/goods";

export default {
  components: {
    THeader,
    MHeader,
    Search,
    Advertise,
    Goods
  }
};
</script>
<style lang="scss" scoped>
main {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  .pageView{
      height: 90px;
      background-color: #F6F5F5;
      display: flex;
      justify-content: center;
      align-items: center;
     margin-bottom: 100px;
     padding-top: 40px;
  }
}
</style>