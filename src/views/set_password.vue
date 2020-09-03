<template>
  <div class="set_password">
    <van-nav-bar title="设置密码" right-text="跳过" @click-right="onClickRight" />
    <div class="five">
      <input type="text" placeholder="请输入登录密码" v-model="password" />
      <input type="text" placeholder="请再次输入密码" v-model="dalpassword" />
      <van-button round type="info" block size="large" @click="determine">确定</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { password } from "../http/api";

export default {
  data() {
    return {
      password: "",
      dalpassword: ""
    };
  },
  methods: {
    onClickRight() {
      this.$router.push({ path: "/Personal_information" });
    },
    determine() {
      if (this.password == this.dalpassword) {
        console.log(this.$store.state);
        password({
          sms_code: this.$store.state.sms_code,
          mobile: this.$store.state.mobile,
          password: this.password
        }).then(res => {
          console.log(res);
          if (res.data.msg == "操作成功") {
            this.$toast.success(res.data.msg);
            this.$router.push("/Personal_information");
          } else {
            this.$toast(res.data.msg);
          }
          console.log(res);
        });
      }
    }
  }
};
</script>

<style lang="scss">
.set_password {
  .five {
    width: 6.74rem;
    height: 7rem;
    // background-color: sandybrown;/
    padding: 0rem 0.38rem 0rem 0.38rem;

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
  }
}
</style>