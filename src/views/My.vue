<template>
  <div>
    <!-- 个人信息背景 -->
    <div class="my_child">
      <img src="../assets/img/user_bg.ab306a5c.png" alt />
    </div>
    <!-- 个人信息 -->
    <div class="people">
      <div class="pep">
        <img :src="img.avatar" alt @click="Personal_information" />
        <img src="../assets/img/皇冠 (1).png" alt class="HGimg" />
        <p>
          {{ img.nickname }}
          <img src="../assets/img/oo (2).png" alt @click="GOpersonal" />
        </p>
        <b @click="GO_tutoring">去约课</b>
      </div>
      <div class="status">
        <ul>
          <li @click="My_special_class">
            <b>{{ course }}</b>
            <p>我的特色课</p>
            <span>已购特色课程的学习</span>
          </li>
          <li @click="Coaching">
            <b>0</b>
            <p>一对一辅导</p>
            <span>我的一对一老师辅导</span>
          </li>
          <li @click="learning ">
            <b>0.00</b>
            <p>剩余学习币</p>
            <span>查看剩余学习币</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 邀请好友以下排版 -->
    <div class="guide">
      <!-- 邀请好友注册APP -->
      <div class="invitation" @click="showPopup">
        <img src="../assets/img/yao.png" alt class="Io" />
        <div class="App">
          <p>邀请好友注册APP，享多重好礼</p>
          <p>限时特惠，多邀多得</p>
        </div>
        <img src="../assets/img/you.png" alt class="It" />
      </div>
      <!-- 弹出层 -->
      <van-popup v-model="show" @click="btn">
        <img src="../assets/img/icon_home_finger.b4a78c3f.png" alt />
        <b>长按保存到相册</b>
      </van-popup>

      <div class="show" v-if="just_now" @click="disappear">
        <img
          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2020SJ7sE4b6411598201595.png"
          alt
        />
      </div>
      <!-- 课程相关 -->
      <div class="relevant">
        <p>课程相关</p>
        <div class="follow">
          <ul>
            <li @click="Followed_teacher">
              <img src="../assets/img/wo.png" alt />
              <p>关注的老师</p>
            </li>
            <li @click="my_collection">
              <img src="../assets/img/cang.png" alt />
              <p>我的收藏</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 订单相关 -->
      <div class="order">
        <p>订单相关</p>
        <div class="follow">
          <ul>
            <li @click="Course_order">
              <img src="../assets/img/dan.png" alt />
              <p>课程订单</p>
            </li>
            <li @click="Member_order">
              <img src="../assets/img/dan.png" alt />
              <p>会员订单</p>
            </li>
            <li @click="Schedule_order">
              <img src="../assets/img/dan.png" alt />
              <p>约课订单</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 我的账户 -->
      <div class="account">
        <p>我的账户</p>
        <div class="follow">
          <ul>
            <li @click="my_discount_coupon">
              <img src="../assets/img/xue (2).png" alt />
              <p>优惠券</p>
            </li>
            <li @click="Study_card">
              <img src="../assets/img/xue (1).png" alt />
              <p>学习卡</p>
            </li>
            <li @click="member">
              <img src="../assets/img/xue (3).png" alt />
              <p>会员</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 自助服务 -->
      <div class="help">
        <p>自助服务</p>
        <div class="follow">
          <ul>
            <li @click="notification">
              <img src="../assets/img/ling (1).png" alt />
              <p>我的消息</p>
            </li>
            <li @click="Reluctance">
              <img src="../assets/img/ling (3).png" alt />
              <p>意见反馈</p>
            </li>
            <li>
              <img src="../assets/img/ling (4).png" alt />
              <p>在线客服</p>
            </li>
            <li @click="out">
              <img src="../assets/img/ling (2).png" alt />
              <p>设置</p>
            </li>
          </ul>
        </div>
      </div>
      <div style="height:50px"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false, // 弹出层默认为隐藏
      just_now: false,
      img: "",
      course: ""
    };
  },
  methods: {
    showPopup() {
      // 点击弹出层显示
      this.show = true;
    },
    out() {
      // localStorage.clear()
      // window.location.reload()
      this.$router.push({ path: "/sign_out" });
    },
    GO_tutoring() {
      this.$router.push({ path: "/tutoring" });
    },
    btn() {
      this.just_now = true;
      this.show = false;
    },
    disappear() {
      this.just_now = false;
    },
    // 课程订单
    Course_order() {
      this.$router.push({ path: "/Course_order" });
    },
    // 会员订单
    Member_order() {
      this.$router.push({ path: "/Member_order" });
    },
    // 约课订单
    Schedule_order() {
      this.$router.push({ path: "/Schedule_order" });
    },
    // 优惠券
    my_discount_coupon() {
      this.$router.push({ path: "/my_discount_coupon" });
    },
    // 关注的老师
    Followed_teacher() {
      this.$router.push({ path: "/Followed_teacher" });
    },
    // 我的收藏
    my_collection() {
      this.$router.push({ path: "/my_collection" });
    },
    // 消息通知
    notification() {
      this.$router.push({ path: "/notification" });
    },
    // 个人信息
    Personal_information() {
      this.$router.push({ path: "/Personal_information" });
    },
    // 跳转到个人信息页
    GOpersonal() {
      this.$router.push({ path: "/Personal_information" });
    },
    // 学习卡
    Study_card() {
      this.$router.push({ path: "/Study_card" });
    },
    // 意见反馈
    Reluctance() {
      this.$router.push({ path: "/Reluctance" });
    },
    // 一对一辅导
    Coaching() {
      this.$router.push({ path: "/boss/three" });
    },
    // 剩余学习币
    learning() {
      this.$router.push({ path: "/age" });
    },
    // 会员
    member() {
      this.$router.push({ path: "/member" });
    },
    // 我的特色课
    My_special_class() {
      this.$router.push({ path: "/My_special_class" });
    }
  },
  mounted() {
    var token = localStorage.getItem("token");
    if (!token) {
      this.$router.push("/Sign_in");
    }

    // 个人信息
    this.http
      .get("https://www.365msmk.com/api/app/userInfo", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        this.img = res.data.data;
        console.log("............", this.img);
      });
  },
  created() {
    let token = localStorage.getItem("token");
    this.http
      .get("https://www.365msmk.com/api/app/getUCenterInfo", {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        this.course = res.data.data.courses;
        console.log("课程", this.course);
      });
  }
};
</script>

<style lang="scss">
.my {
  margin-bottom: 50px;
}
.my_child {
  width: 100%;
  height: 2.11rem;
  background-attachment: fixed;
  border-radius: 0rem 0rem 0.6rem 0.6rem;
  position: relative;
  img {
    width: 100%;
    height: 2.11rem;
  }
}
.people {
  width: 6.92rem;
  height: 3.52rem;
  border-radius: 0.14rem;
  background-color: #fff;
  border: 0.04rem solid #f5f5f5f5;
  position: absolute;
  left: 0.28rem;
  top: 0.87rem;
  .pep {
    width: 6.92rem;
    height: 1.87rem;
    display: flex;
    align-items: center;
    position: relative;
    img {
      width: 1.25rem;
      height: 1.25rem;
      margin: 0rem 0.29rem 0rem 0.29rem;
    }
    p {
      font-size: 0.26rem;
      color: #808080;
      display: flex;
      width: 3.66rem;
      img {
        width: 0.27rem;
        height: 0.3rem;
        margin-left: 0.1rem;
      }
    }
    b {
      background-color: #eb6100;
      width: 1.1rem;
      height: 0.5rem;
      font-size: 0.23rem;
      color: #fff;
      display: block;
      line-height: 0.5rem;
      text-align: center;
      border-radius: 0.14rem 0rem 0rem 0.14rem;
      position: absolute;
      right: 0;
    }
    .HGimg {
      width: 27px;
      height: 27px;
      position: absolute;
      top: 8px;
      left: 33px;
    }
  }

  .status {
    width: 6.92rem;
    height: 1.66rem;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      li {
        height: 1.66rem;
        width: 2.25rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        b {
          font-size: 0.38rem;
          color: #ee7b2c;
          width: 2.25rem;
          text-align: center;
        }
        p {
          font-size: 0.26rem;
          color: #989898;
        }
        span {
          text-align: center;
          font-size: 0.22rem;
          color: #c3c3c3;
        }
      }
    }
  }
}
.guide {
  width: 6.94rem;
  height: 3.52rem;
  padding: 0rem 0.28rem 0rem 0.28rem;
  background-color: #fff;
  margin-top: 2.6rem;
  .invitation {
    width: 6.92rem;
    background-image: linear-gradient(to left, #f29757, #ec6302);
    border-radius: 0.42rem;
    height: 0.89rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .Io {
      width: 0.43rem;
      height: 0.36rem;
    }
    .App {
      width: 5.17rem;
      height: 3.52reem;
      p {
        font-size: 0.12rem;
        color: #fff;
      }
    }
    .It {
      width: 0.28rem;
      height: 0.35rem;
    }
  }

  .relevant {
    width: 6.92rem;
    height: 2.29rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 0.04rem solid #f5f5f5;
    p {
      font-size: 0.32rem;
      color: #777777;
    }
    .follow {
      width: 6.92rem;
      height: 0.93rem;
      ul {
        display: flex;
        li {
          width: 1.72rem;
          height: 0.93rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          img {
            width: 0.44rem;
            height: 0.44rem;
          }
          p {
            width: 1.72rem;
            font-size: 0.12rem;
            text-align: center;
          }
        }
      }
    }
  }
  .order {
    width: 6.92rem;
    height: 2.29rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 0.04rem solid #f5f5f5;
    p {
      font-size: 0.32rem;
      color: #777777;
    }
    .follow {
      width: 6.92rem;
      height: 0.93rem;
      ul {
        display: flex;
        li {
          width: 1.72rem;
          height: 0.93rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          img {
            width: 0.44rem;
            height: 0.44rem;
          }
          p {
            width: 1.72rem;
            font-size: 0.12rem;
            text-align: center;
          }
        }
      }
    }
  }
  .account {
    width: 6.92rem;
    height: 2.29rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 0.04rem solid #f5f5f5;
    p {
      font-size: 0.32rem;
      color: #777777;
    }
    .follow {
      width: 6.92rem;
      height: 0.93rem;
      ul {
        display: flex;
        li {
          width: 1.72rem;
          height: 0.93rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          img {
            width: 0.44rem;
            height: 0.44rem;
          }
          p {
            width: 1.72rem;
            font-size: 0.12rem;
            text-align: center;
          }
        }
      }
    }
  }
  .help {
    width: 6.92rem;
    height: 2.29rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 0.04rem solid #f5f5f5;
    p {
      font-size: 0.32rem;
      color: #777777;
    }
    .follow {
      width: 6.92rem;
      height: 0.93rem;
      ul {
        display: flex;
        li {
          width: 1.72rem;
          height: 0.93rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          img {
            width: 0.44rem;
            height: 0.44rem;
          }
          p {
            width: 1.72rem;
            font-size: 0.12rem;
            text-align: center;
          }
        }
      }
    }
  }
  /deep/.van-popup {
    position: fixed;
    max-height: 100%;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0);
    z-index: 9999999;
    -webkit-transition: -webkit-transform 0.3s;
    transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
    -webkit-overflow-scrolling: touch;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 0.48rem;
      height: 0.5rem;
      margin-right: 0.14rem;
    }
    b {
      font-size: 0.3rem;
      color: #fff;
    }
  }
  .show {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    img {
      width: 6.66rem;
      height: 11.8rem;
      margin: 0.27rem auto;
    }
  }
}
</style>