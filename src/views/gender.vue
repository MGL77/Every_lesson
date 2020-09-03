<template>
  <div class="Study_card">
    <van-nav-bar
      title="修改个人信息"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div id="text">
      <p>男</p>
      <span>女</span>
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
    onClickRight() {
      alert("s");
    }
  }
};
</script>

<style lang="scss">
.Study_card {
  #text {
    width: 7.5rem;
    height: 12.4rem;
    background-color: #f0f2f5;
    p {
      width: 6.94rem;
      height: 0.92rem;
      display: block;
      line-height: 0.92rem;
      padding-left: 0.27rem;
      padding-right: 0.27rem;
      font-size: 0.25rem;
      background-color: #fff;
      color: #323233;
      border-top: 0.17rem solid #f0f2f5;
    }
    span {
      width: 6.94rem;
      height: 0.92rem;
      display: block;
      line-height: 0.92rem;
      padding-left: 0.27rem;
      padding-right: 0.27rem;
      font-size: 0.25rem;
      background-color: #fff;
      border-top: 0.01rem solid #f0f2f5;
      color: #323233;
    }
  }
}
</style>