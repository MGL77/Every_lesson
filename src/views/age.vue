<template>
  <div class="learning">
    <van-nav-bar
      title="我的余额"
      right-text="余额明细"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div id="text">
      <span class="span">
        <span>我的余额</span>
        <b>{{ Learning_coin.coin_icon }} {{ Learning_coin.coin_name }}</b>
      </span>
      <ul>
        <li
          v-for="(item,index) in My_balance"
          :key="index"
          :class="iNow == index ? 'active':''"
          @click="kk(index)"
        >
          <span>{{ item.coin }}学习币</span>
          <b>￥ {{ item.rmb }}</b>
        </li>
      </ul>
      <div class="btnn">
        <van-button color="#eb6100" block v-if="Kagezo" @click="showPopup">立即充值</van-button>
        <van-button color="#ccc" v-else block>立即充值</van-button>
      </div>
    </div>
    <div class="Recharge_instructions">
      <p>充值说明</p>
      <span>{{ Learning_coin.agreement }}</span>
    </div>
    <!-- 充值弹出层 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '26%' }">
      <p>支付方式</p>
      <van-radio-group v-model="radio">
        <van-radio name="1" icon-size="14px">
          <img src="../assets/img/微信 (2).png" alt />
          微信
        </van-radio>
        <van-radio name="2" icon-size="14px">
          <img src="../assets/img/支付宝.png" alt />
          支付宝
        </van-radio>
      </van-radio-group>
      <van-button color="#eb6100" block @click="nn">立即充值</van-button>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      My_balance: "",
      Learning_coin: "",
      iNow: -1,
      Kagezo: false,
      show: false,
      radio: "1"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push({ path: "/Balance_details" });
    },
    kk(index) {
      this.iNow = index;
      this.Kagezo = true;
    },
    Recharge_now() {
      alert("ss");
    },
    showPopup() {
      this.show = true;
    },
    nn() {
      alert("ss");
    }
  },
  created() {
    let token = localStorage.getItem("token");
    this.http
      .get("https://www.365msmk.com/api/app/coin/coinRank", {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        console.log(res);
        this.My_balance = res.data.data.list;
        this.Learning_coin = res.data.data.coinInfo;
        // console.log("我的余额...............", this.My_balance);
        console.log("我的余额...............", this.Learning_coin);
      });
  }
};
</script>

<style lang="scss">
.learning {
  #text {
    width: 7.5rem;
    height: 12.4rem;
    background-color: #f0f2f5;
    ul {
      li {
        width: 6.44rem;
        height: 0.6rem;
        background-color: #fff;
        color: #323233;
        margin: 0.3rem auto;
        padding: 0.2rem;
        border-radius: 0.12rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          font-size: 0.2rem;
          color: #333333;
        }
        b {
          font-size: 0.2rem;
          color: #e90000;
        }
      }
      .active {
        background: #fcede2;
        border: 0.26667vw solid #eb6100;
        box-shadow: 0 0.66667vw 0.66667vw 0 rgba(235, 97, 0, 0.75);
        border-radius: 2.13333vw;
      }
    }
    .span {
      width: 6.7rem;
      background-color: #f0f2f5;
      height: 0.4rem;
      display: block;
      color: #323233;
      background-color: #fff;
      padding: 0.4rem;
      display: flex;
      align-items: center;
      span {
        margin-right: 0.25rem;
        font-size: 0.3rem;
      }
      b {
        font-size: 0.3rem;
        color: #dc692a;
      }
    }
    .btnn {
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  }
  .Recharge_instructions {
    width: 7.5rem;
    height: 2.1rem;
    margin-bottom: 1rem;
    padding-top: 0.32rem;
    p {
      font-size: 0.27rem;
      width: 2rem;
      border-left: 0.06rem solid #dc6a2c;
      text-indent: 0.3rem;
      color: #565656;
      font-weight: bold;
    }
    span {
      font-size: 0.2rem;
      display: block;
      width: 6.7rem;
      height: 0.5rem;
      padding: 0.4rem;
      color: #6b6b6b;
    }
  }
  .van-popup {
    position: fixed;
    max-height: 100%;
    overflow-y: auto;
    background-color: #fff;
    /* -webkit-transition: -webkit-transform .3s; */
    transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
    // -webkit-overflow-scrolling: touch;

    p {
      font-size: 0.27rem;
      width: 2rem;
      border-left: 0.06rem solid #dc6a2c;
      text-indent: 0.3rem;
      color: #565656;
      font-weight: bold;
      margin: 0.3rem;
      margin-left: 0rem;
    }
    .van-radio {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      overflow: hidden;
      cursor: pointer;
      -webkit-user-select: none;
      user-select: none;
      font-size: 0.12rem;
      margin-left: 0.2rem;
      margin-bottom: 0.4rem;
      img {
        width: 0.4rem;
        height: 0.4rem;
        margin-right: 0.1rem;
      }
      .van-radio__label {
        margin-left: 8px;
        color: #323233;
        line-height: 20px;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>