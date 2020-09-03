<template>
  <div class="sign_out">
    <van-nav-bar title="设置" left-arrow @click-left="onClickLeft"></van-nav-bar>

    <div class="set_password">
      <div class="top">
        <b>设置密码</b>
        <img src="../assets/img/jjj.png" alt />
      </div>
      <van-button type="default" block @click="sign_out">退出登录</van-button>
    </div>
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
    sign_out() {
      localStorage.clear();
      this.$router.push({ path: "/boss/one" });
    }
  }
};
</script>

<style lang="scss">
.sign_out {
  width: 100%;
  height: 13.3rem;
  background-color: #f0f2f5;
  .set_password {
    margin-top: 0.2rem;
    width: 6.8rem;
    height: 3.92rem;
    background-color: #fff;
    padding: 0.35rem;
    .top {
      width: 100%;
      height: 0.85rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      b {
        font-size: 0.27rem;
        color: #717171;
      }
      img {
        width: 0.34rem;
        height: 0.32rem;
      }
    }
    .van-button--block {
      display: block;
      color: #fff;
      width: 100%;
      background-color: #eb6100;
      margin-top: 1.49rem;
      border-radius: 0.16rem;
    }
  }
}
</style>