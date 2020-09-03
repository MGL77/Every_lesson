<template>
  <div class="BOSS">
    <div class="page">
      <b>给我们留言</b>
      <van-icon name="arrow-down" size="20px" color="#fff" @click="gotop" />
    </div>

    <div class="goods">
      <p>您好,很抱歉我们暂时无法为您提供服务,如需帮助,请留言,我们将尽快联系并解决您的问题</p>
      <span>手机</span>
    </div>

    <van-cell-group>
      <van-field placeholder="请输入用户名" />
    </van-cell-group>

    <div class="p">留言内容 *</div>
    <van-field rows="2" autosize type="textarea" maxlength="50" placeholder="请输入" show-word-limit />
    <div class="btn">
      <van-button type="primary" block color="#007aff">提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    gotop() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.page {
  height: 1.18rem;
  width: 7.1rem;
  background-color: #007aff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 0.2rem 0rem 0.2rem;
  b {
    font-size: 0.28rem;
    color: #fff;
  }
}
.BOSS {
  background-color: #f2f3f5;
  height: 13.2rem;
}
.goods {
  width: 91%;
  height: 1.2rem;
  padding: 0.33rem 0.33rem 0.33rem 0.33rem;
  p {
    font-size: 0.2rem;
    color: #7c7d7c;
    display: block;
  }
  span {
    font-size: 0.26rem;
    display: block;
    color: #000;
    margin-top: 0.2rem;
  }
}
.p {
  margin-top: 0.26rem;
  text-indent: 0.3rem;
  color: #000;
  font-size: 0.26rem;
  margin-bottom: 0.26rem;
}
.btn {
  width: 89%;
  height: 1rem;
  padding: 0.4rem;
}
</style>