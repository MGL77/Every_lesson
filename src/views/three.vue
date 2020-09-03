<template>
  <div class="three">
    <div class="headers">约课记录</div>

    <!-- 选项卡 -->
    <van-tabs v-model="activeName" title-active-color="#ed6c12" color="#ed6c12" line-width="14px">
      <van-tab title="待上课" name="a">
        <div class="no">
          <img src="../assets/img/no-message.8d3ca5af.png" alt />
          <b>还没有待上课记录哦</b>
          <van-button type="primary" size="small" color="#eb6100" @click="yue">立即约课</van-button>
        </div>
      </van-tab>
      <van-tab title="已上课" name="b">
        <div class="no">
          <img src="../assets/img/no-message.8d3ca5af.png" alt />
          <b>还没有上课记录哦</b>
          <van-button type="primary" size="small" color="#eb6100" @click="yue">立即约课</van-button>
        </div>
      </van-tab>
      <van-tab title="已取消" name="c">
        <div class="no">
          <img src="../assets/img/no-message.8d3ca5af.png" alt />
          <b>还没有取消上课记录哦</b>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "a"
    };
  },
  methods: {
    yue() {
      this.$router.push({ path: "/tutoring" });
    }
  }
};
</script>

<style lang="scss">
.headers {
  width: 100%;
  height: 0.92rem;
  text-align: center;
  line-height: 0.92rem;
  font-size: 0.32rem;
  color: #646464;
}
.no {
  width: 100%;
  height: 9.19rem;
  background-color: #f0f2f5;
  padding-top: 2.02rem;
  img {
    width: 3.53rem;
    height: 2.61rem;
    margin: 0 auto;
    // margin-top: 2.02rem;
  }
  b {
    font-size: 0.28rem;
    text-align: center;
    display: block;
    color: #b8b8b8;
    margin: 0.2rem 0rem 0.54rem 0rem;
  }
  .van-button {
    display: block;
    margin: 0 auto;
  }
}
</style>