<template>
  <div id="Wmembers">
    <van-nav-bar title="开通会员" left-arrow @click-left="onClickLeft" />
    <div class="bigD">
      <img :src="join_membership.avatar" alt />
      <div class="texts">
        <p>{{ join_membership.nickname }}</p>
        <p>开通会员免费学习</p>
      </div>
    </div>
    <div class="bottoms">
      <div class="SM">
        <p>
          购买会员
          <span>购买会员后可免费观看会员课程</span>
        </p>
        <ul>
          <li
            v-for="(item,index) in Buy_membership"
            :key="index"
            :class="iNow == index ? 'active':''"
            @click="membership(index)"
          >
            <p>{{ item.name }}</p>
            <div class="Its">
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                alt
              />
              <span>{{ item.price }}</span>
            </div>
          </li>
        </ul>
      </div>
      <button class="btn" @click="showPopup">立即支付</button>
      <van-popup v-model="show">
        <div class="TS">
          <span>提示</span>
          <h6 @click="Clean">x</h6>
        </div>
        <div class="IPS">
          <img src="../assets/img/警告.png" alt />
          <span>您确定购买此会员吗？</span>
        </div>
        <div class="bt">
          <van-button size="mini" color="#d5a220">确定</van-button>
          <van-button type="default" size="mini" @click="cancel">取消</van-button>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      join_membership: "",
      Buy_membership: "",
      iNow: 0,
      show: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    membership(index) {
      this.iNow = index;
    },
    showPopup() {
      this.show = true;
    },
    cancel() {
      this.show = false;
    },
    Clean() {
      this.show = false;
    }
  },
  created() {
    let token = localStorage.getItem("token");
    this.http
      .get("https://www.365msmk.com/api/app/userInfo", {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        this.join_membership = res.data.data;
        console.log("开通会员", this.join_membership);
      });

    this.http
      .get("https://www.365msmk.com/api/app/vip/grade", {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        this.Buy_membership = res.data.data;
        console.log("购买会员", this.Buy_membership);
      });
  }
};
</script>

<style lang="scss">
#Wmembers {
  .bigD {
    width: 6.96rem;
    height: 0.91rem;
    padding: 0.27rem;
    display: flex;
    align-items: center;
    img {
      width: 0.88rem;
      height: 0.88rem;
    }
    .texts {
      height: 0.64rem;
      width: 2rem;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-left: 0.2rem;
      p {
        width: 2rem;
        font-size: 0.24rem;
        color: #5a5a5a;
      }
    }
  }
  .bottoms {
    width: 7.5rem;
    height: 10.97rem;
    background-color: #f0f2f5;
    .SM {
      width: 6.9rem;
      height: 3rem;
      padding: 0.72rem 0.3rem;
      p {
        display: flex;
        align-items: center;
        font-size: 0.28rem;
        color: #777878;
        span {
          font-size: 0.22rem;
          color: #989999;
          margin-left: 0.1rem;
        }
      }
      ul {
        width: 100%;
        height: 2.25rem;
        margin-top: 0.39rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          width: 1.99rem;
          height: 2.25rem;
          border-radius: 2.13333vw;
          border: 0.26667vw solid #d9d9d9;
          background-color: #fff;
          p {
            font-size: 0.25rem;
            color: #484848;
            text-align: center;
            display: block;
            margin: 0.6rem 0rem 0.26rem 0rem;
            font-weight: bold;
          }
          .Its {
            display: flex;
            align-items: center;
            width: 1.99rem;
            justify-content: center;
            img {
              width: 0.29rem;
              height: 0.33rem;
              margin: 0;
              padding: 0;
            }
            span {
              font-size: 0.5rem;
              font-weight: bold;
              color: #d5a220;
            }
          }
        }
        .active {
          border: 0.26667vw solid #e6c37f;
          background-color: #f9f0d9;
        }
      }
    }
    .btn {
      width: 92vw;
      height: 11.73333vw;
      background: linear-gradient(90deg, #eac687, #c8ae84);
      border-radius: 5.86667vw;
      font-size: 4.53333vw;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #fff;
      line-height: 0.73333vw;
      text-align: center;
      position: fixed;
      left: 50%;
      bottom: 8vw;
      transform: translateX(-50%);
      z-index: 999;
      border: none;
    }
    .van-popup--center {
      top: 50%;
      left: 50%;
      -webkit-transform: translate3d(-50%, -50%, 0);
      transform: translate3d(-50%, -50%, 0);
      display: inline-block;
      width: 56vw;
      padding-bottom: 1.33333vw;
      vertical-align: middle;
      background-color: #fff;
      border-radius: 0.53333vw;
      border: 1px solid #ebeef5;
      font-size: 2.4vw;
      box-shadow: 0 0.26667vw 1.6vw 0 rgba(0, 0, 0, 0.1);
      text-align: left;
      overflow: hidden;
      backface-visibility: hidden;
      .TS {
        padding: 2vw 2vw 1.33333vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          font-size: 0.12rem;
        }
        h6 {
          font-size: 0.12rem;
        }
      }
      .IPS {
        display: flex;
        align-items: center;
        padding: 1.33333vw 2vw;
        color: #606266;
        font-size: 1.86667vw;
        img {
          width: 0.2rem;
          height: 0.2rem;
          margin-right: 0.12rem;
          margin: 0;
        }
      }
      .bt {
        padding: 0.66667vw 2vw 0;
        text-align: right;
      }
    }
  }
}
</style>