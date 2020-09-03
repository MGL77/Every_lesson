<template>
  <div class="Study_card">
    <van-nav-bar
      title="我的学习卡"
      right-text="学习兑换卡"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <img src="../assets/img/rr.png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push({ path: "/Study_card_exchange" });
    }
  }
};
</script>

<style lang="scss">
.Study_card {
  img {
    width: 3rem;
    height: 3rem;
    margin: 0.5rem auto;
  }
}
</style>