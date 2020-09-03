<template>
  <div class="my_discount_coupon">
    <van-nav-bar title="我的优惠券" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <van-tabs v-model="active" line-width="12px" title-active-color="#EB6100">
      <van-tab title="未使用"></van-tab>
      <van-tab title="已使用"></van-tab>
      <van-tab title="已过期"></van-tab>
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
.my_discount_coupon {
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