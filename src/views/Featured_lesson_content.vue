<template>
  <div class="Featured_lesson_content">
    <!-- 特色课课程详情 -->
    <van-nav-bar title="课程详情" left-arrow @click-left="onClickLeft">
      <template #right>
        <!-- <van-icon name="cluster-o" size="24" color="#000" is-link  /> -->
        <img src="../assets/img/分 享.png" alt id="imgs" @click="showPopup" />
      </template>
    </van-nav-bar>

    <div class="love">
      <h1>{{ Details.title }}</h1>
      <span>免费</span>
      <p>共{{ Details.total_periods }}课时 | {{ Details.sales_num }}人已报名</p>
      <div class="img">
        <van-icon size="0.35rem" :name="name" color="#eb6100" @click="add()" />
      </div>
    </div>
    <!-- 教学团队 -->
    <div class="Course_details">
      <p>教学团队</p>
      <img :src="Detailss.avatar" alt @click="Picture_details(Detailss.teacher_id)" />
      <!-- <span>{{ Detailss.teacher_name }}</span> -->
    </div>
    <!-- 课程介绍 -->
    <div class="Introduction">
      <p>课程介绍</p>
      <span>自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题</span>
    </div>
    <!-- 课程大纲 -->
    <div class="big">
      <p class="bigP">课程大纲</p>
      <ul>
        <li v-for="(item,index) in Course_Outline" :key="index">
          <h1>
            <b>回放</b>
            <span>{{ item.periods_title }}</span>
          </h1>
          <p>
            <!-- <span>{{ item.teachers[0].teacher_name }}</span> -->
            <b>{{ item.start_play}} - {{ item.end_play }}</b>
          </p>
        </li>
      </ul>
    </div>
    <!-- 课程评论 -->
    <div class="comment">
      <p>课程评论</p>
      <ul>
        <li v-for="(items,indexs) in comment" :key="indexs">
          <h1>
            <img :src="items.avatar" alt />
            <span>{{ items.nickname }} {{ items.grade }}</span>
          </h1>
          <p>
            <b>{{ items.content }}</b>
          </p>
        </li>
      </ul>
    </div>
    <van-button type="primary" block color="#eb6100" @click="Standing_report_name">立即报名</van-button>
    <van-button type="primary" block color="#eb6100" v-if="S" @click="Standing_school">立即学习</van-button>
    <!-- 二维码 -->
    <van-popup v-model="show">
      <b>分享</b>
      <img :src="imrUrl" />
    </van-popup>
  </div>
</template>

<script>
// 二维码
import QRCode from "qrcode";
export default {
  data() {
    return {
      Details: "",
      Detailss: "",
      Course_Outline: "",
      comment: "",
      flag: 1,
      S: false,
      // 二维码
      show: false,
      imrUrl: "",
      // 收藏
      name: "star-o"
    };
  },
  methods: {
    // 二维码开始
    showPopup() {
      this.show = true;
      let url = location.href; //获取当前地址栏的地址
      console.log(url);
      QRCode.toDataURL(url)
        .then(tpian => {
          console.log(tpian);
          this.imrUrl = tpian;
        })
        .catch(err => {
          console.error(err);
        });
    },
    // 二维码结束
    onClickLeft() {
      this.$router.go(-1);
    },
    Picture_details(id) {
      this.$router.push({ path: `/Famous_teacher_lineup?teacher_id=${id}` });
    },

    // 收藏开始
    Click_on_Favorites() {
      alert("s");
    },
    // 收藏结束

    // 立即报名
    Standing_report_name() {
      this.S = true;
      this.$toast.success("报名成功");
    },
    // 立即学习
    Standing_school() {
      this.$router.push({
        path: "/Study_tour",
        query: { id: this.Details.id }
      });
    },
    //收藏
    add() {
      let id = this.$route.query.id;
      let type = 1;
      let token = localStorage.getItem("token");
      if (this.name === "star-o") {
        this.name = "star";
        this.http
          .post(
            "https://www.365msmk.com/api/app/collect",
            {
              course_basis_id: id,
              type: 1
            },
            {
              headers: {
                authorization: `Bearer ${token}`
              }
            }
          )
          .then(res => {
            console.log("收藏", res);
          });

        this.http
          .put(
            `https://www.365msmk.com/api/app/collect/cancel/${id}/${type}`,
            {},
            {
              headers: {
                authorization: `Bearer ${token}`
              }
            }
          )
          .then(res => {
            console.log("取消", res);
          });
      } else {
        this.name = "star";
      }
    }
  },
  mounted() {},
  created() {
    this.id = this.$route.query.id; // 获取ID
    this.http
      .get("https://www.365msmk.com/api/app/courseInfo/basis_id=" + this.id)
      .then(res => {
        // console.log(res);
        this.Details = res.data.data.info;
        this.Detailss = res.data.data.teachers[0];

        // console.log("详细信息", this.Details);
        // console.log("详细信息", this.Detailss);
      });
    // this.getData();

    // 课程大纲
    this.http
      .post("https://www.365msmk.com/api/app/courseChapter", {
        id: this.$route.query.id
      })
      .then(res => {
        this.Course_Outline = res.data.data;
        // console.log("课程大纲", this.Course_Outline);
      });

    // 课程评论
    this.http
      .post("https://www.365msmk.com/api/app/courseComment", {
        id: this.$route.query.id
      })
      .then(res => {
        this.comment = res.data.data.list;
        console.log("课程评论", this.comment);
      });
  }
};
</script>

<style lang="scss">
.Featured_lesson_content {
  width: 100%;
  background-color: #f0f2f5;
  .van-popup--center {
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    border-radius: 0.08rem;
    b {
      font-size: 0.3rem;
      display: block;
      text-align: center;
      padding-top: 0.2rem;
    }
  }
  .love {
    width: 6.9rem;
    height: 2.21rem;
    background-color: #fff;
    padding: 0.3rem;
    line-height: 0.54rem;
    position: relative;
    .img {
      width: 0.37rem;
      height: 0.37rem;
      position: absolute;
      top: 10px;
      right: 20px;
    }
    h1 {
      color: #828282;
      font-size: 0.31rem;
      width: 5.88rem;
    }
    span {
      color: #ec6b10;
      font-size: 0.33rem;
      display: block;
    }
    p {
      color: #a1a1a1;
      font-size: 0.3rem;
    }
  }
  .Course_details {
    width: 6.9rem;
    height: 2.3rem;
    background-color: #fff;
    padding: 0.3rem;
    margin-top: 0.28rem;
    p {
      color: #4d4d4d;
      font-size: 0.29rem;
    }
    img {
      width: 0.8rem;
      height: 0.8rem;
      margin: 0.43rem 0rem 0.12rem 0.3rem;
      border-radius: 50%;
    }
    span {
      color: #cccccc;
      font-size: 0.25rem;
      display: block;
      margin-left: 0.36rem;
    }
  }
  .Introduction {
    width: 6.9rem;
    height: 1.28rem;
    margin-top: 0.28rem;
    background-color: #fff;
    padding: 0.3rem;
    p {
      color: #4d4d4d;
      font-size: 0.29rem;
    }
    span {
      color: #4d4d4d;
      font-size: 0.27rem;
      display: block;
      margin: 0.26rem 0rem 0rem 0.12rem;
    }
  }
  .big {
    width: 6.9rem;
    margin-top: 0.28rem;
    background-color: #fff;
    padding: 0.3rem;
    .bigP {
      color: #4d4d4d;
      font-size: 0.29rem;
    }
    ul {
      li {
        line-height: 0.2rem;
        width: 5.85rem;
        height: 1.08rem;
        margin-left: 0.28rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        h1 {
          display: flex;
          width: 5.85rem;
          align-items: center;
          b {
            width: 0.67rem;
            height: 0.37rem;
            display: block;
            border-radius: 0.06rem;
            color: #ffff;
            background-color: #ea7a2f;
            line-height: 0.37rem;
            text-align: center;
            font-size: 0.26rem;
          }
          span {
            font-size: 0.26rem;
            color: #959595;
            margin-left: 0.15rem;
          }
        }
        p {
          width: 5.85rem;
          display: flex;

          span {
            font-size: 0.25rem;
            margin-right: 0.26rem;
            color: #a6a6a6;
          }
          b {
            font-size: 0.18rem;
            color: #a6a6a6;
          }
        }
      }
    }
  }
  .comment {
    width: 6.9rem;
    // padding-top: 0.28rem;
    margin-bottom: 1rem;
    margin-top: 0.28rem;
    background-color: #fff;
    padding: 0.3rem;
    p {
      color: #4d4d4d;
      font-size: 0.29rem;
    }
    ul {
      li {
        line-height: 0.2rem;
        width: 5.85rem;
        height: 1.08rem;
        margin-left: 0.28rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 0.2rem;
        img {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
        }
        h1 {
          display: flex;
          width: 5.85rem;
          align-items: center;
          b {
            width: 0.67rem;
            height: 0.37rem;
            display: block;
            border-radius: 0.06rem;
            color: #ffff;
            background-color: #ea7a2f;
            line-height: 0.37rem;
            text-align: center;
            font-size: 0.26rem;
          }
          span {
            font-size: 0.26rem;
            color: #959595;
            margin-left: 0.15rem;
          }
        }
        p {
          width: 5.85rem;
          display: flex;

          span {
            font-size: 0.25rem;
            margin-right: 0.26rem;
            color: #a6a6a6;
          }
          b {
            font-size: 0.18rem;
            color: #a6a6a6;
          }
        }
      }
    }
  }
  .van-button--block {
    display: block;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .Masking {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    .G {
      margin: 4rem auto;
      width: 4rem;
      height: 4rem;
      background-color: #fff;
      border-radius: 0.1rem;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    p {
      font-size: 0.4rem;
      color: #ccc;
      width: 4rem;
      text-align: center;
    }
    img {
      width: 2rem;
      height: 2rem;
      background-color: #fff;
    }
  }
}

#imgs {
  width: 0.4rem;
  height: 0.4rem;
}
</style>