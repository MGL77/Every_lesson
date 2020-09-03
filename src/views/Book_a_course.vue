<template>
  <div class="Famous_teacher_lineup">
    <!-- 导航和讲师信息 -->
    <div class="header">
      <div class="headerO">
        <img src="../assets/img/MM.png" alt @click="onClickLeft" />
        <p>预约课程</p>
      </div>
      <div class="headerT">
        <div class="good">
          <ul>
            <li>
              <img :src="information.avatar" alt />
              <div class="text">
                <p class="p">
                  {{ information.teacher_name }}
                  <span>{{ information.level_name }}</span>
                </p>
                <p>{{ information.sex==0?'男':'女' }} {{ information.teach_age }}年教龄</p>
              </div>
              <van-button type="info" @click="m">查看详情</van-button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 时间 -->
    <div class="data">
      <p>
        选择时间
        <span>(北京时间)</span>
      </p>
    </div>
    <div class="Detailed_time">
      <ul>
        <li>
          <p>周一</p>
          <p>08/17</p>
        </li>
        <li>
          <p>周二</p>
          <p>08/18</p>
        </li>
        <li>
          <p>周三</p>
          <p>08/19</p>
        </li>
        <li>
          <p>周四</p>
          <p>08/20</p>
        </li>
        <li>
          <p>周五</p>
          <p>08/21</p>
        </li>
        <li>
          <p>周六</p>
          <p>08/27</p>
        </li>
      </ul>
    </div>
    <!-- 图 -->
    <div class="imgg">
      <img src="../assets/img/rr.png" alt />
      <b>暂无信息</b>
    </div>
    <!-- 底部按钮 -->
    <van-button type="primary" block color="#eb6100">立即预约</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.query.id,
      information: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // see_details(id) {
    //   this.$router.push({ path: "/Famous_teacher_lineup" });
    // }
    m() {
      this.$router.push({
        path: "/Famous_teacher_lineup",
        query: {
          teacher_id: this.$route.query.id
        }
      });
    }
  },
  created() {
    this.id = this.$route.query.id; // 获取ID
    console.log(localStorage.getItem("token"));
    let token = localStorage.getItem("token");
    this.http
      .get("https://www.365msmk.com/api/app/teacher/" + this.id, {
        headers: {
          "Content-Type": "application/json",
          DeviceType: "H5",
          Authorization: "Bearer " + token
        }
      })
      .then(res => {
        this.information = res.data.data.teacher;
        console.log("预约课程", this.information);
      });
  },
  mounted() {}
};
</script>

<style lang="scss">
.Famous_teacher_lineup {
  width: 100%;
  height: 13.3rem;
  background-color: #f0f2f5;
  .header {
    width: 7.1rem;
    height: 2rem;
    background-image: linear-gradient(to bottom, #61b2fb, #5083e6);
    padding: 0rem 0.2rem 0rem 0.2rem;
    .headerO {
      width: 7.1rem;
      height: 0.86rem;
      display: flex;
      align-items: center;
      img {
        width: 0.23rem;
        height: 0.35rem;
      }
      p {
        color: #ffff;
        font-size: 0.36rem;
        margin-left: 2.57rem;
      }
    }
    .headerT {
      width: 7.1rem;
      height: 1.84rem;
      background-color: #fff;
      border-radius: 0.14rem;
      .good ul li {
        width: 7.07rem;
        margin: 0 auto;
        border-radius: 0.08rem;
        height: 1.84rem;
        background-color: #ffff;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 0.17rem;
        img {
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;
        }
        .text {
          height: 1.6rem;
          width: 2.4rem;
          .p {
            margin-top: 0.4rem;
            margin-bottom: 0.1rem;
            font-size: 0.29rem;
            color: #777777;
            span {
              font-size: 0.2rem;
              color: #fa6a0f;
            }
          }
          p {
            font-size: 0.26rem;
            width: 5.4rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 0.24rem;
            color: #d6d6d6;
          }
        }
        .van-button--normal {
          padding: 0 15px;
          font-size: 14px;
          width: 2rem;
          height: 0.6rem;
          border-radius: 0.3rem;
          color: #eb8a4a;
          border: 0.01rem solid #eb8a4a;
          background-color: #fff;
        }
      }
    }
  }
  .data {
    width: 7.07rem;
    margin: 0 auto;
    height: 0.93rem;
    margin-top: 0.77rem;
    display: flex;
    align-items: center;
    p {
      font-size: 0.3rem;
      color: #686969;
      border-left: 0.07rem solid #eb5f00;
      text-indent: 0.3rem;
      span {
        font-size: 0.26rem;
        font-size: 0.23rem;
        color: #686969;
      }
    }
  }
  .Detailed_time {
    width: 7.06rem;
    margin: 0 auto;
    height: 1.52rem;
    background-color: #fff;
    border-radius: 0.1rem;
    ul {
      display: flex;
      li {
        width: 1.17rem;
        height: 1.22rem;
        border-bottom: 0.02rem solid rgb(240, 238, 238);
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        p {
          font-size: 0.27rem;
          width: 1.17rem;
          text-align: center;
          color: #ccc;
        }
      }
    }
  }
  .imgg {
    img {
      width: 3.05rem;
      height: 3.09rem;
      margin: 0.2rem auto;
    }
    b {
      font-size: 0.28em;
      color: #99989a;
      display: block;
      text-align: center;
    }
  }
}
</style>