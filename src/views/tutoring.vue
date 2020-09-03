<template>
  <div class="one_on_one">
    <!-- 导航栏 -->
    <van-nav-bar title="一对一辅导" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="24" color="#000" />
      </template>
    </van-nav-bar>
    <!-- 下拉菜单 -->
    <van-dropdown-menu active-color="#eb6100">
      <van-dropdown-item title="选择上课时间">
        <div class="Choose_class_time">
          <div class="date">
            <p>日期</p>
            <ul class="ulO">
              <li v-for="(item,index) in date" :key="index">
                <p>{{ item.title }}</p>
              </li>
            </ul>
            <ul class="ulT">
              <li v-for="(item,index) in numbers" :key="index">{{ item.num }}</li>
            </ul>
          </div>

          <div class="Time_period"></div>
        </div>
      </van-dropdown-item>
      <van-dropdown-item title="选择老师条件">ggg</van-dropdown-item>
    </van-dropdown-menu>
    <!-- 教师信息 -->
    <div class="reservation">
      <div class="good">
        <ul>
          <li
            v-for="(item,index) in Coaching"
            :key="index"
            @click="GO_Book_a_course(item.teacher_id)"
          >
            <img :src="item.avatar" alt />
            <div class="text">
              <p class="p">{{ item.real_name }}</p>
              <p>{{ item.sex==0?'男':'女' }} {{ item.teach_age }}年教龄</p>
            </div>
            <van-button type="info">预约</van-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      Coaching: "",
      date: [
        { id: 1, title: "周一" },
        { id: 2, title: "周二" },
        { id: 3, title: "周三" },
        { id: 4, title: "周四" },
        { id: 5, title: "周五" },
        { id: 6, title: "周六" },
        { id: 7, title: "周日" }
      ],
      numbers: [
        { id: 10, num: 24 },
        { id: 11, num: 25 },
        { id: 12, num: 26 },
        { id: 13, num: 27 },
        { id: 14, num: 28 },
        { id: 15, num: 29 },
        { id: 16, num: 30 },
        { id: 17, num: 31 },
        { id: 18, num: 1 },
        { id: 19, num: 2 },
        { id: 20, num: 3 },
        { id: 21, num: 4 },
        { id: 22, num: 5 },
        { id: 23, num: 6 }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    GO_Book_a_course(id) {
      console.log(id);
      this.$router.push({
        path: "/Book_a_course",
        query: { id }
      });
      // this.$router.push({ path: "/Book_a_course" });
    },
    // 下拉
    onConfirm() {
      this.$refs.item.toggle();
    }
  },
  async created() {
    const { data } = await this.http(
      "https://www.365msmk.com/api/app/otoCourse?page=1&limit=10&"
    );
    // console.log("一对一辅导", data);
    this.Coaching = data.data;
    console.log("一对一辅导", this.Coaching);
  }
};
</script>

<style lang="scss">
// 下拉开始
.Choose_class_time {
  width: 7.5rem;
  padding: 0.2rem;

  background-color: #f0f2f5;
  .date {
    width: 92%;
    height: 3.2rem;
    border-radius: 0.1rem;
    background-color: #fff;
    padding: 0.3rem;
    p {
      font-size: 0.24rem;
      color: #717171;
    }
    .ulO {
      display: flex;
      justify-content: space-around;

      li {
        width: 0.68rem;
        height: 1.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        p {
          font-size: 0.21rem;
          color: #676767;
        }
      }
    }
    .ulT {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      li {
        font-size: 0.34rem;
        width: 0.9rem;
        height: 0.9rem;
        color: #676767;
        text-align: center;
      }
    }
  }
  .Time_period {
    width: 92%;
    height: 1.3rem;
    border-radius: 0.1rem;
    background-color: #fff;
    padding: 0.3rem;
    margin-top: 0.2rem;
  }
}

// 下拉结束
.reservation {
  width: 7.16rem;
  background-color: #f0f2f5;
  padding: 0rem 0.17rem 0rem 0.17rem;
  .good ul li {
    width: 7.07rem;
    margin: 0 auto;
    border-radius: 0.08rem;
    height: 1.6rem;
    background-color: #ffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 0.17rem;
    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
    }
    .text {
      height: 1.6rem;
      width: 3.4rem;
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
    .van-button--normal {
      padding: 0 15px;
      font-size: 14px;
      width: 1.4rem;
      height: 0.6rem;
      border-radius: 0.3rem;
      color: #eb8a4a;
      background-color: #ebeefe;
      border: none;
    }
  }
  .good ul {
    padding-top: 0.17rem;
  }
}
</style>