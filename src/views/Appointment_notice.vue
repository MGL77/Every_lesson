<template>
  <div class="system_notification">
    <van-nav-bar title="约课通知" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="bottoms">
      <img src="../assets/img/rr.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.system_notification {
  .bottoms {
    width: 7.5rem;
    height: 11rem;
    img {
      width: 3rem;
      height: 3rem;
      margin: 0.4rem auto;
    }
  }
}
</style>