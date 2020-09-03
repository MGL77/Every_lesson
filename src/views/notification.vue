<template>
  <div class="notification">
    <van-nav-bar title="消息通知" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="lists">
      <ul>
        <li @click="notice">
          <img src="../assets/img/icon-msg-course.d8a2c8d5.png" alt />
          <div class="listC">
            <p>课程通知</p>
            <span>{{ news }}</span>
          </div>
        </li>
        <li @click="system_notification">
          <img src="../assets/img/icon-msg-system.db56e51b.png" alt />
          <div class="listC">
            <p>系统通知</p>
            <span>暂无消息</span>
          </div>
        </li>
        <li @click="Order_notification">
          <img src="../assets/img/icon-msg-order.41755990.png" alt />
          <div class="listC">
            <p>订单通知</p>
            <span>{{ Notice }}</span>
          </div>
        </li>
        <li @click="Appointment_notice">
          <img src="../assets/img/icon-msg-course.d8a2c8d5.png" alt />
          <div class="listC">
            <p>约课通知</p>
            <span>暂无消息</span>
          </div>
        </li>
        <li @click="Exam_notice">
          <img src="../assets/img/icon-msg-exam.8a210fd7.png" alt />
          <div class="listC">
            <p>考试通知</p>
            <span>暂无消息</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: "",
      Notice: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    notice() {
      this.$router.push({ path: "/notice" });
    },
    system_notification() {
      this.$router.push({ path: "/system_notification" });
    },
    Appointment_notice() {
      this.$router.push({ path: "/Appointment_notice" });
    },
    Exam_notice() {
      this.$router.push({ path: "/Exam_notice" });
    },
    Order_notification() {
      this.$router.push({ path: "/Order_notification" });
    }
  },
  created() {
    let token = localStorage.getItem("token");
    this.http
      .post(
        "https://www.365msmk.com/api/app/message/classifyMessage",
        {},
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => {
        this.news = res.data.data[0].content;
        this.Notice = res.data.data[1].content;
        // console.log("消息通知...............", this.news);
        console.log("消息通知...............", this.Notice);
      });
  }
};
</script>

<style lang="scss">
.notification {
  .lists {
    display: block;
    width: 7.5rem;
    position: fixed;
    top: 0;
    margin-top: 1rem;
    ul {
      width: 7.5rem;
      li {
        width: 7.5rem;
        height: 1.34rem;
        border-bottom: 0.01rem solid #f5f5f5;
        display: flex;
        justify-content: space-around;
        align-items: center;

        img {
          width: 0.88rem;
          height: 0.88rem;
        }
        .listC {
          width: 5.69rem;
          height: 0.84rem;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          p {
            font-size: 0.29rem;
            color: #494949;
          }
          span {
            font-size: 0.22rem;
            color: #494949;
            width: 5.69rem;
          }
        }
      }
    }
  }
}
</style>