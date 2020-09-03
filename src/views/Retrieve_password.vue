<template>
  <div>
    <van-nav-bar title="找回密码" left-arrow @click-left="onClickLeft" />

    <div class="Retrieve">
      <div class="over">
        <input type="text" placeholder="请输入手机号" style="margin-top:1.33rem" class="input" />
        <b>获取验证码</b>
      </div>
      <input type="text" placeholder="请输入验证码" />
      <input type="text" placeholder="请输入密码" />
      <van-button round type="info" block size="large">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/Sign_in" });
    }
  }
};
</script>

<style lang="scss">
.Retrieve {
  width: 79%;
  height: 7rem;
  padding: 0rem 0.78rem 0rem 0.78rem;

  input {
    font-size: 0.28rem;
    height: 0.93rem;
    color: #000;
    border: none;
    width: 100%;
    display: block;
  }
  input::-webkit-input-placeholder {
    color: #cccc;
    font-size: 0.28rem;
  }
  .van-button--round {
    border-radius: 133.2vw;
    height: 0.9rem;
    margin-top: 0.93rem;
    background-image: linear-gradient(to right, #ff944b, #fc5500);
    border: none;
  }
  .over {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .input {
      width: 3rem;
    }
    b {
      font-size: 0.2rem;
      margin-top: 1.23rem;
      color: #fc5500;
    }
  }
}
</style>


