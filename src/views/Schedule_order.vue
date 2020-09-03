<template>
  <div class="Schedule_order">
    <van-nav-bar title="约课订单" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <van-tabs v-model="active" line-width="12px" title-active-color="#EB6100">
      <van-tab title="全部订单"></van-tab>
      <van-tab title="待支付"></van-tab>
      <van-tab title="已完成"></van-tab>
      <van-tab title="已取消"></van-tab>
    </van-tabs>
    <img src="../assets/img/rr.png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.Schedule_order {
  img {
    width: 3rem;
    height: 3rem;
    margin: 0.5rem auto;
  }

  .van-tabs--line .van-tabs__wrap {
    height: 44px;
    border-bottom: 0.03rem solid #f5f5f5;
  }
}
</style>