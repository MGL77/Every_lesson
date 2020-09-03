<template>
  <div class="My_special_class">
    <!-- 头部 -->
    <div class="Guidance">
      <img src="../assets/img/ooooo.png" alt @click="Return" />
      <p>我的学习</p>
      <img src="../assets/img/日历.png" alt @click="See_also_the_calendar" />
    </div>
    <!-- 选项卡 -->
    <van-tabs color="#eb6100">
      <van-tab title="直播课(3)">
        <div class="All_orders">
          <ul>
            <li v-for="(item,index) in content" :key="index">
              <h2>{{ item.title }}</h2>
              <h3>
                <img src="../assets/img/时间.png" alt />
                <p>03月16日 18:30 ~ 03月22日 15:00 | 共{{ item.section_num }}课时</p>
              </h3>
              <h4>
                <van-progress percentage="20" />
                <span>已学习0%</span>
              </h4>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="点播课(3)">
        <div class="h">
          <img src="../assets/img/empty.0d284c2e.png" alt />
          <b>还没有课程，快去选择课程学习吧</b>
          <van-button type="primary" size="small" color="#eb6100">选择课程</van-button>
        </div>
      </van-tab>
      <van-tab title="音频课(0)">
        <div class="h">
          <img src="../assets/img/empty.0d284c2e.png" alt />
          <b>还没有课程，快去选择课程学习吧</b>
          <van-button type="primary" size="small" color="#eb6100">选择课程</van-button>
        </div>
      </van-tab>
      <van-tab title="图文课(0)">
        <div class="h">
          <img src="../assets/img/empty.0d284c2e.png" alt />
          <b>还没有课程，快去选择课程学习吧</b>
          <van-button type="primary" size="small" color="#eb6100">选择课程</van-button>
        </div>
      </van-tab>
      <van-tab title="面授课(0)">
        <div class="h">
          <img src="../assets/img/empty.0d284c2e.png" alt />
          <b>还没有课程，快去选择课程学习吧</b>
          <van-button type="primary" size="small" color="#eb6100">选择课程</van-button>
        </div>
      </van-tab>
      <van-tab title="会员课(0)">
        <div class="h">
          <img src="../assets/img/empty.0d284c2e.png" alt />
          <b>还没有课程，快去选择课程学习吧</b>
          <van-button type="primary" size="small" color="#eb6100">选择课程</van-button>
        </div>
      </van-tab>
    </van-tabs>
    <!-- .. -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      typeNum: "",
      content: ""
    };
  },
  methods: {
    // 日历
    See_also_the_calendar() {
      this.$router.push({ path: "/See_also_the_calendar" });
    },
    // 返回按钮
    Return() {
      this.$router.go(-1);
    }
  },
  created() {
    // let id = this.$route.query.id;
    let token = localStorage.getItem("token");
    this.http
      .get("https://www.365msmk.com/api/app/myStudy/2", {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        this.typeNum = res.data.data.typeNum;
        this.content = res.data.data.courseList;
        // console.log("课程.....", this.typeNum);
        console.log("内容.....", this.content);
      });
  }
};
</script>

<style lang="scss">
.My_special_class {
  .Guidance {
    width: 7.1rem;
    height: 0.4rem;
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 0.34rem;
      height: 0.34rem;
    }
    p {
      font-size: 0.34rem;
      color: #5a5a5a;
    }
  }

  .All_orders {
    ul {
      width: 7.1rem;
      padding: 0.2rem;
      height: 4rem;
      li {
        margin-top: 0.3rem;
        width: 92%;
        height: 2rem;
        border: 0.01rem solid rgb(243, 239, 239);
        border-radius: 0.1rem;
        padding: 0.3rem;
        box-shadow: 0 0 2vw rgba(0, 0, 0, 0.1);
        h2 {
          font-size: 0.33rem;
          color: #424242;
        }
        h3 {
          display: flex;
          align-items: center;
          position: relative;
          img {
            width: 0.26rem;
            display: block;
            height: 0.26rem;
            position: absolute;
            top: 14px;
            left: 0px;
          }
          p {
            font-size: 0.19rem;
            color: #777777;
            display: block;
            padding: 0.26rem 0rem 0.63rem 0rem;
            margin-left: 0.4rem;
          }
        }
        h4 {
          width: 3.1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          span {
            font-size: 0.22rem;
            color: #a1a1a1;
          }
          .van-progress__pivot {
            display: none;
          }
          .van-progress {
            width: 1.78rem;
          }
        }
      }
    }
  }
  .h {
    width: 100%;
    height: 9.63rem;
    padding-top: 2.02rem;
    img {
      width: 3rem;
      height: 3rem;
      margin: 0 auto;
      margin-top: 1rem;
    }
    b {
      font-size: 0.28rem;
      text-align: center;
      display: block;
      color: #b8b8b8;
      margin: 0.2rem 0rem 0.54rem 0rem;
    }
    .van-button {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>