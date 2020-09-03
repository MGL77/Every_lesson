<template>
  <div class="Study_card_exchange">
    <van-nav-bar title="学习卡兑换" left-arrow @click-left="onClickLeft" />
    <div class="Password">
      <van-cell-group>
        <van-field label="卡号" placeholder="请输入学习卡号" />
      </van-cell-group>
      <van-cell-group>
        <van-field label="密码" placeholder="请输入学习卡密码" />
      </van-cell-group>
      <div style="height:70px"></div>
      <van-button type="default" block color="#EB6100">默认按钮</van-button>
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
    }
  }
};
</script>

<style lang="scss">
.Study_card_exchange {
  width: 100%;
  height: 13.3rem;
  background-color: #f0f2f5;
  .Password {
    padding: 0.2rem;
    width: 7.1rem;
    height: 4.6rem;
    background-color: #fff;
    margin-top: 0.16rem;
  }
}
</style>