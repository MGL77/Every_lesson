<template>
  <div class="Famous_teacher_lineup">
    <!-- 导航和讲师信息 -->
    <div class="header">
      <div class="headerO">
        <img src="../assets/img/MM.png" alt @click="onClickLeft" />
        <p>讲师详情</p>
      </div>
      <div class="headerT">
        <div class="good">
          <ul>
            <li>
              <img :src="lecturer.avatar" alt />
              <div class="text">
                <p class="p">
                  {{ lecturer.teacher_name }}
                  <span>{{ lecturer.level_name }}</span>
                </p>
                <p>{{ lecturer.sex==0?'男':'女' }} {{ lecturer.teach_age }}年教龄</p>
              </div>
              <van-button type="info" v-if="flag==2" @click="UPS">关注</van-button>
              <van-button type="info" v-else @click="UPS">已关注</van-button>
              <!-- <div class="yue" @click="book_now">立即预约</div> -->
            </li>
          </ul>
        </div>
        <div class="status">
          <ul>
            <li v-for="(item,index) in Student" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 选项卡 -->
    <van-tabs v-model="active" color="#ed6c12" line-width="14px" title-active-color="#ed6c12">
      <van-tab title="讲师介绍">
        <div class="Introduction">
          <p>
            {{ bian }}
            <span>{{ liang }}</span>
          </p>
          <p>
            {{ bianO }}
            <span>{{ liangO }}</span>
          </p>
          <div class="bao">
            <div class="lefts">老师简介</div>
            <div class="rights">{{ Lecturer_Jian_Shao.intro }}</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="主讲课程">
        <div class="Speaker">
          <div class="books">
            <ul>
              <li v-for="(item,index) in Main_course_rendering" :key="index">
                <b class="title">{{ item.title }}</b>
                <p class="titles">共{{ item.total_periods }}课时</p>
                <div class="Nimgs">
                  <img :src="item.teachers_list[0].teacher_avatar" alt />
                  <b>{{ item.teachers_list[0].teacher_name }}</b>
                </div>
                <div class="pepoles">
                  <p>{{ item.sales_num }}人已报名</p>
                  <b>免费</b>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </van-tab>
      <van-tab title="学员评价">
        <div class="three">
          <div class="Student_evaluation">
            <ul>
              <li
                v-for="(item,index) in Student_evaluation"
                :key="index"
              >{{ item.title }}({{ item.count }})</li>
            </ul>
          </div>
          <img src="../assets/img/empty.0d284c2e.png" alt />
          <p>暂无评论</p>
        </div>
      </van-tab>
    </van-tabs>
    <div class="J"></div>
    <!-- 底部按钮 -->
    <van-button type="primary" block color="#eb6100" @click="book_now">立即预约</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      lecturer: "",
      Lecturer_Jian_Shao: "",
      bian: "",
      liang: "",
      bianO: "",
      liangO: "",
      Main_course_rendering: "",
      Student_evaluation: "",
      Student: "",
      flag: 1
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 关注
    UPS() {
      // this.$toast.success("已关注");
      let token = localStorage.getItem("token");
      let id = this.$route.query.teacher_id;
      console.log("............................", id);
      this.http
        .get(`https://www.365msmk.com/api/app/teacher/collect/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          console.log("关注", res);
          this.flag = res.data.data.flag;
          //  this.$toast.success('已取消');
        });
    },
    // 立即预约
    book_now() {
      let id = this.$route.query.teacher_id;
      this.$router.push({ path: "/Book_a_course", query: { id } });
    }
  },
  mounted() {
    let token = localStorage.getItem("token");
    // this.http.post( `https://www.365msmk.com/api/app/teacher/comment?limit=2&page=1&teacher_id=${this.$route.query.teacher_id}&token=${token}`).then(res => {
    //       console.log("详情",res);
    //     })
    // console.log(this.$route.query.teacher_id)

    this.http(
      `https://www.365msmk.com/api/app/teacher/info/${this.$route.query.teacher_id}`
    ).then(res => {
      // console.log("详情2", res);
      this.Lecturer_Jian_Shao = res.data.data;
      this.bian = this.Lecturer_Jian_Shao.attr[0].attr_name;
      this.liang = this.Lecturer_Jian_Shao.attr[0].attr_value[0].attr_value_name;

      this.bianO = this.Lecturer_Jian_Shao.attr[1].attr_name;
      this.liangO = this.Lecturer_Jian_Shao.attr[1].attr_value[0].attr_value_name;
      // console.log("详情2", this.Lecturer_Jian_Shao);
    });

    // 头部讲师详情内容

    this.http
      .get(
        `https://www.365msmk.com/api/app/teacher/${this.$route.query.teacher_id}`,
        {
          headers: {
            DeviceType: "H5",
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => {
        console.log("详情.....", res);
        this.lecturer = res.data.data.teacher;
        this.Student = res.data.data.teacher.tag_content;
        this.flag = res.data.data.flag;
        console.log("-------", this.flag, res.data.data.flag);
        // console.log("详情1", this.lecturer);
        // console.log("学生评价", this.Student);
      });

    // 主讲课程
    this.http
      .post(`https://www.365msmk.com/api/app/teacher/mainCourse`, {
        data: {
          limit: 10,
          page: 1,
          teacher_id: this.$route.query.teacher_id
        }
      })
      .then(res => {
        this.Main_course_rendering = res.data.data.list;
        // console.log("主讲课程", this.Main_course_rendering);
      });

    // 学员评价
    this.http
      .post(
        "https://www.365msmk.com/api/app/teacher/comment",
        {
          limit: 10,
          page: 3,
          teacher_id: this.$route.query.teacher_id
        },
        {
          headers: {
            "Content-Type": "application/json",
            DeviceType: "H5",
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => {
        this.Student_evaluation = res.data.data.tag;
        // console.log("学员评价", this.Student_evaluation);
      });
  }
};
</script>

<style lang="scss">
.Famous_teacher_lineup {
  width: 100%;
  height: 13.3rem;
  background-color: #f0f2f5;
  .yue {
    width: 7.5rem;
    height: 0.89rem;
    background-color: #fa6a0f;
    position: fixed;
    color: #fff;
    font-size: 0.26rem;
    text-align: center;
    line-height: 0.89rem;
    bottom: 0;
    z-index: 9999999;
  }
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
      position: relative;
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
          width: 5.4rem;
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
      }
      .status {
        position: absolute;
        top: 1.3rem;
        left: 0;
        width: 7.07rem;
        height: 0.5rem;
        ul {
          display: flex;
          align-items: center;
          justify-content: space-around;
          li {
            font-size: 0.12rem;
            width: 1.44rem;
            height: 0.39rem;
            border-radius: 0.3rem;
            background-color: #ffe4d3;
            text-align: center;
            line-height: 0.39rem;
            margin-top: 0.1rem;
            color: #ef9052;
          }
        }
      }
    }
  }
  .van-tabs--line .van-tabs__wrap {
    height: 44px;
    margin-top: 0.96rem;
    border-bottom: 0.03rem solid #f7f7f7;
  }

  .van-button--block {
    display: block;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
  }

  .three {
    width: 100%;
    height: 4rem;
    background-color: #fff;
    font-size: 0.12rem;
    padding-top: 0.27rem;
    img {
      width: 3.05rem;
      height: 3.05rem;
      margin: 0 auto;
    }
    p {
      font-size: 0.3rem;
      color: #a2a2a2;
      text-align: center;
      margin-top: 0.34rem;
    }
    .Student_evaluation {
      width: 7.1rem;
      height: 2.95rem;
      margin: 0 auto;
      border-radius: 0.1rem;
      ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        li {
          width: 1.8rem;
          height: 0.5rem;
          border-radius: 0.06rem;
          border: 0.01rem solid #ea5100;
          color: #ec8a48;
          text-align: center;
          line-height: 0.5rem;
          font-size: 0.25rem;
          margin-bottom: 0.18rem;
        }
      }
    }
  }
  .Speaker {
    width: 100%;
    background-color: #fff;
    .books ul li {
      width: 6.51rem;
      margin: 0 auto;
      border-radius: 0.08rem;
      height: 3.15rem;
      background-color: #fff;
      height: 3.17rem;
      padding: 0.28rem;
      display: flex;
      margin-bottom: 0.26rem;
      // align-items: center;
      // justify-content: space-between;
      flex-wrap: wrap;

      .title {
        font-size: 0.28rem;
        width: 6.51rem;
        color: #333333;
        height: 0.46rem;
      }
      .titles {
        font-size: 0.23rem;
        width: 6.51rem;
        color: #666666;
      }
      .Nimgs {
        display: flex;
        width: 6.51rem;
        align-items: center;
        img {
          width: 0.56rem;
          height: 0.56rem;
          border-radius: 50%;
        }
        b {
          font-size: 0.23rem;
          color: #8c8c8c;
          margin-left: 0.14rem;
        }
      }
      .pepoles {
        display: flex;
        width: 6.51rem;
        align-items: center;
        justify-content: space-between;
        border-top: 0.01rem solid #fafafa;
        p {
          font-size: 0.24rem;
          color: #a2a2a2;
        }
        b {
          font-size: 0.3rem;
          color: #63b34a;
        }
      }
    }
  }
  .Introduction {
    width: 6.7rem;
    background-color: #fff;
    padding: 0.4rem;
    p {
      font-size: 0.27rem;
      color: #9b9b9b;
      margin-bottom: 0.7rem;
      span {
        font-size: 0.27rem;
        color: #9b9b9b;
        margin-left: 0.4rem;
      }
    }
    .bao {
      width: 6.7rem;
      height: 6rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.27rem;
      color: #9b9b9b;
      .lefts {
        height: 6rem;
        width: 1.08rem;
      }
      .rights {
        height: 6rem;
        width: 5.2rem;
        line-height: 0.56rem;
      }
    }
  }
  .J {
    height: 1rem;
  }
}
</style>