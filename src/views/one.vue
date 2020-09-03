<template>
  <div class="ones">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in banner" :key="index">
        <img :src="item.banner_img" alt />
      </van-swipe-item>
    </van-swipe>

    <!-- 轮播图上方导航 -->
    <div class="list">
      <div class="One" @click="goSpecial_class">
        <img src="../assets/img/书 (1).png" alt />
        <p>特色课</p>
      </div>
      <div class="Two" @click="One_on_one_tutoring">
        <img src="../assets/img/一对一调研.png" alt />
        <p>一对一辅导</p>
      </div>
      <div class="Three" @click="Go_H_calendar">
        <img src="../assets/img/书.png" alt />
        <p>学习日历</p>
      </div>
    </div>

    <!-- 名师阵容 -->
    <div class="teacher">
      <b>名师阵容</b>
    </div>
    <div class="good">
      <ul>
        <li v-for="(item,index) in Famous_teacher" :key="index" @click="Nteacher(item.teacher_id)">
          <img :src="item.teacher_avatar" alt />
          <div class="text">
            <p class="p">{{ item.teacher_name }}</p>
            <p>{{ item.introduction }}</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- 精品课程 -->
    <div class="book">
      <b>精品课程</b>
    </div>
    <div class="books">
      <ul>
        <li v-for="(item,index) in Boutique" :key="index" @click="GOCourse_details(item.id)">
          <b class="title">{{ item.title }}</b>
          <p class="titles">共{{ item.total_periods }}课时</p>
          <div class="Nimgs" v-for="(items,indexs) in item.teachers_list" :key="indexs">
            <img :src="items.teacher_avatar" alt />
            <b>{{ items.teacher_name }}</b>
          </div>
          <div class="pepoles">
            <p>{{ item.sales_num }}人已报名</p>
            <b>免费</b>
          </div>
          <img src="../assets/img/has-buy.6cfbd83d.png" alt id="img" />
        </li>
      </ul>
    </div>

    <!-- 推荐课程 -->
    <div class="recommend">
      <b>推荐课程</b>
    </div>
    <div class="gos">
      <ul>
        <li v-for="(item,index) in recommend" :key="index" @click="Recommended_courses(item.id)">
          <b class="title">{{ item.title }}</b>
          <p class="titles">共{{ item.total_periods }}课时</p>
          <div class="Nimgs" v-for="(items,indexs) in item.teachers_list" :key="indexs">
            <img :src="items.teacher_avatar" alt />
            <b>{{ items.teacher_name }}</b>
          </div>
          <div class="pepoles">
            <p>{{ item.sales_num }}人已报名</p>
            <b>免费</b>
          </div>
        </li>
      </ul>
    </div>

    <!-- 明星讲师 -->
    <div class="Star">
      <b>明星讲师</b>
    </div>
    <div class="StarTeacher">
      <ul>
        <!-- @click="show = true" -->
        <li v-for="(item,index) in Star" :key="index" @click="Nteacher(item.teacher_id)">
          <img :src="item.teacher_avatar" alt />
          <div class="text">
            <p class="p">
              {{ item.teacher_name }}
              <span>{{ item.level_name }}</span>
            </p>
            <p>{{ item.introduction }}</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 遮罩层 -->
    <van-overlay :show="show" @click="show = false">
      <div class="Pop_up_layer">
        <img src="../assets/img/feiji.decaf161.png" alt />
        <b>赶紧登录一下吧</b>
        <p>立即预约一对一辅导，浏览更多视频课程~</p>
        <van-button type="info" round color="#eb6100" @click="log_in_immediately">立即登录</van-button>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { getBanners } from "../../src/http/api";
export default {
  data() {
    return {
      banner: "",
      Famous_teacher: "",
      Boutique: "",
      recommend: "",
      Star: "",
      show: false
    };
  },

  // 获取轮播图数据开始
  async created() {
    const { data } = await this.http.get(
      "https://www.365msmk.com/api/app/banner",
      {
        headers: {
          "Content-Type": "application/json",
          DeviceType: "H5"
        }
      }
    );
    this.banner = data.data;
    // console.log(this.banner);
    // console.log(data)
    this.getData();
  },
  // 获取轮播图数据结束

  // 获取讲师信息开始
  methods: {
    getData() {
      this.http({
        url: "https://www.365msmk.com/api/app/recommend/appIndex?"
      }).then(res => {
        // console.log(res.data);
        this.Famous_teacher = res.data.data[0].list; //名师阵容
        console.log(this.Famous_teacher);
        this.Boutique = res.data.data[1].list; //精品课程
        this.recommend = res.data.data[2].list; //推荐课程
        this.Star = res.data.data[3].list; //明星讲师
        // this.data = res.data;
        console.log("精品课程", this.Boutique);
        console.log("推荐课程", this.recommend);
      });
    },
    // 跳转到特色课
    goSpecial_class() {
      this.$router.push({ path: "/boss/two" });
    },
    // 跳转到一对一辅导
    One_on_one_tutoring() {
      this.$router.push({ path: "/tutoring" });
    },
    // 跳转到名师阵容详情
    Nteacher(id) {
      this.$router.push({ path: `/Famous_teacher_lineup?teacher_id=${id}` });
    },
    // 跳转到精品课程详情页
    GOCourse_details(id) {
      this.$router.push({
        path: "/Featured_lesson_content",
        query: { id }
      });
    },
    // 跳转到推荐课程详情页
    Recommended_courses(id) {
      this.$router.push({
        path: "/Featured_lesson_content",
        query: { id }
      });
    },
    // 立即登录
    log_in_immediately() {
      this.$router.push({ path: "/Sign_in" });
    },
    // 日历
    Go_H_calendar() {
      this.$router.push({ path: "/H_calendar" });
    }
  }
  // 获取讲师信息结束
};
</script>

<style lang="scss">
.ones {
  // height: 9rem;
  background-color: #f0f2f5;
  margin-bottom: 1rem;
  // position: relative;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 3.96rem;
  img {
    width: 100%;
    height: 3.96rem;
  }
}

.list {
  width: 100%;
  height: 2.04rem;
  position: absolute;
  left: 0;
  top: 3.44rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .One,
  .Two,
  .Three {
    width: 2.04rem;
    height: 2.04rem;
    background-color: #ffff;
    border-radius: 0.16rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    img {
      width: 0.44rem;
      height: 0.4rem;
      margin-top: 0.56rem;
    }
    p {
      font-size: 0.24rem;
      color: #8c8c8c;
      width: 2.04rem;
      text-align: center;
      height: 0.7rem;
    }
  }
}

.teacher {
  height: 1.06rem;
  width: 3rem;
  margin-top: 19.86667vw;
  line-height: 1.06rem;
  font-size: 0.3rem;
  color: #79797a;
  margin-left: 0.24rem;
  b {
    border-left: 0.08rem solid #eb5400;
    padding-left: 0.16rem;
  }
}

.good ul li {
  width: 7.07rem;
  margin: 0 auto;
  border-radius: 0.08rem;
  height: 1.6rem;
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

.book {
  height: 1.06rem;
  width: 3rem;
  line-height: 1.06rem;
  font-size: 0.3rem;
  color: #79797a;
  margin-left: 0.24rem;
  b {
    border-left: 0.08rem solid #eb5400;
    padding-left: 0.16rem;
  }
}

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
  flex-wrap: wrap;
  position: relative;
  #img {
    width: 15.73333vw;
    height: 12.8vw;
    position: absolute;
    right: 0.2rem;
    top: 1rem;
  }

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

.recommend {
  height: 1.06rem;
  width: 3rem;
  line-height: 1.06rem;
  font-size: 0.3rem;
  color: #79797a;
  margin-left: 0.24rem;
  b {
    border-left: 0.08rem solid #eb5400;
    padding-left: 0.16rem;
  }
}
.gos ul li {
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
    color: #414141;
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

.Star {
  height: 1.06rem;
  width: 3rem;
  line-height: 1.06rem;
  font-size: 0.3rem;
  color: #79797a;
  margin-left: 0.24rem;
  b {
    border-left: 0.08rem solid #eb5400;
    padding-left: 0.16rem;
  }
}

.StarTeacher ul li {
  width: 7.07rem;
  margin: 0 auto;
  border-radius: 0.08rem;
  height: 1.6rem;
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
        color: #ed9254;
        font-size: 0.19rem;
        margin-left: 0.1rem;
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

.StarTeacher ul {
  padding-bottom: 0.2rem;
}
.Pop_up_layer {
  width: 5.6rem;
  height: 6.88rem;
  background-color: #fff;
  border-radius: 0.16rem;
  margin: 0 auto;
  position: relative;
  top: 20%;
  img {
    height: 4.12rem;
    border-radius: 0.16rem 0.16rem 0rem 0rem;
    width: 5.6rem;
  }
  b {
    font-size: 0.3rem;
    color: #565656;
    text-align: center;
    display: block;
    margin-top: 0.1rem;
  }
  p {
    text-align: center;
    font-size: 0.22rem;
    margin: 0.1rem 0rem 0.62rem 0rem;
    color: #b3b3b3;
  }
  .van-button--round {
    border-radius: 999px;
    width: 4.7rem;
    height: 0.79rem;
    margin: 0 auto;
    display: block;
  }
}
</style>