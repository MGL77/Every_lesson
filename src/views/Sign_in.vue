<template>
  <div class="five">
    <!-- 登录页 -->
    <img src="../assets/img/2019pILfAg7Avr1567732916.png" alt />
    <input type="text" placeholder="请输入手机号" style="margin-top:1.33rem" v-model="mobile" />
    <input type="password" placeholder="请输入密码" v-model="password" />
    <div class="pass">
      <p @click="goPass">找回密码</p>
      <span @click="goRegister">注册/验证码登陆</span>
    </div>
    <van-button round type="info" block size="large" @click="GoSign">登录</van-button>
  </div>
</template>

<script>
import { login } from "../http/api";
export default {
  data() {
    return {
      value: "",
      values: "",
      mobile: "",
      password: ""
    };
  },
  methods: {
    goRegister() {
      this.$router.push({ path: "/register" });
    },
    goPass() {
      this.$router.push({ path: "/Retrieve_password" });
    },
    // 登录开始
    GoSign() {
      // this.$router.push({ path: "/My" });
      // this.$router.push({ path: "/set_password" });
      login({
        mobile: this.mobile,
        password: this.password,
        type: 1
      }).then(res => {
        console.log(res);
        // console.log("登录", res);
        // console.log(res.data.data.remember_token);
        // if (res.data.code != 200) {
        //    this.$toast(res.data.msg);
        //   //  alert('11')
        // }
        // localStorage.setItem(
        //   "remember_token",
        //   JSON.stringify(res.data.data.remember_token)
        // );
        // this.$router.push('/My')
        if (res.data.code == 200) {
          this.$toast.success(res.data.msg);
          localStorage.setItem("userId", res.data.data.id);
          localStorage.setItem("token", res.data.data.remember_token);
          this.$router.push("/boss/My");
        } else {
          this.$toast.fail(res.data.msg);
        }
      });
    }
  }
};
</script>

<style lang="scss">
.five {
  width: 79%;
  height: 7rem;
  // background-color: sandybrown;/
  padding: 1rem 0.78rem 0rem 0.78rem;
  img {
    width: 4.74rem;
    height: 1.06rem;
    margin: 0 auto;
  }
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
  .pass {
    width: 100%;
    height: 0.93rem;
    border-top: 0.03rem solid #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      color: #cccc;
      font-size: 0.22rem;
    }
    span {
      color: #cccc;
      font-size: 0.22rem;
    }
  }
  .van-button--round {
    border-radius: 133.2vw;
    height: 0.9rem;
    margin-top: 0.93rem;
    background-image: linear-gradient(to right, #ff944b, #fc5500);
    border: none;
  }
}
</style>