<template>
  <div class="five">
    <!-- 注册页 -->
    <img src="../assets/img/1597812455(1)_03.gif" alt />
    <div class="over">
      <input
        type="text"
        placeholder="请输入手机号"
        style="margin-top:1.33rem"
        class="input"
        v-model="mobile"
      />
      <b :disabled="disabled" @click="get_verification_code" class="sendcode">{{btntxt}}</b>
    </div>
    <input type="text" placeholder="请输入短信验证码" v-model="key" />
    <div class="pass">
      <p>*未注册的手机号将自动注册</p>
      <span @click="goSign_in">使用密码登录</span>
    </div>
    <van-button round type="info" block size="large" @click="remode">登录</van-button>
  </div>
</template>

<script>
import { get_sms_code, login } from "../http/api";
export default {
  data() {
    return {
      value: "",
      values: "",
      mobile: "",
      key: "",

      disabled: false,
      time: 61,
      btntxt: "获取验证码"
    };
  },
  methods: {
    goSign_in() {
      this.$router.push({ path: "/Sign_in" });
    },
    // 获取验证码开始
    get_verification_code() {
      // console.log(this.mobile)
      get_sms_code({
        mobile: this.mobile,
        sms_type: "login"
      }).then(res => {
        console.log("获取验证码", res);
        if (res.data.code != 200) {
          this.$toast(res.data.msg);
        }
      });

      this.time = 61;
      this.timer();
    },

    //发送手机验证码倒计时
    timer() {
      if (this.time > 0) {
        this.disabled = true;
        this.time--;
        this.btntxt = this.time + "S";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btntxt = "获取验证码";
        this.disabled = false;
      }
    },

    // 获取验证码结束
    remode() {
      login({
        mobile: this.mobile,
        sms_code: this.key,
        type: 2
      }).then(res => {
        if (res.data.code == 200) {
          if (res.data.data.is_new == 2) {
            this.$toast.success(res.data.msg);
            localStorage.setItem("userId", res.data.data.id);
            localStorage.setItem("token", res.data.data.remember_token);
            this.$router.push({ path: "/boss/My" });
          } else {
            this.$router.push("/set_password");
          }
        } else {
          this.$toast.fail(res.data.msg);
        }
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss">
.five {
  width: 79%;
  height: 7rem;
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
  .over {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .input {
      width: 3rem;
    }
    b {
      font-size: 0.2rem;
      margin-top: 1.26rem;
      color: #fc5500;
    }
  }
}
</style>