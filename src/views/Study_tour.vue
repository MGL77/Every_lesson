<template>
  <div class="Study">
    <!-- 头部 -->
    <div class="Guidance">
      <img src="../assets/img/ooooo.png" alt @click="Return" />
      <p>{{ header }}</p>
      <img src="../assets/img/日历.png" alt @click="See_also_the_calendar" />
    </div>
    <!-- 视频课时 -->
    <div id="times">
      <p>共{{ section_num }}课时</p>
      <van-progress :percentage="0" />
      <p>已学习{{ progress_rate }}%</p>
    </div>
    <!-- 视频目录 -->
    <div id="Catalog">
      <ul>
        <li v-for="(item,index) in periods" :key="index" @click="GoSHI">
          <p>
            [回放]
            <span>{{ item.periods_title }}</span>
          </p>
          <!-- <h6>{{ item.teachers[0].teacher_name }} {{ item.start_play }} - {{ item.end_play }}</h6> -->
          <h4>
            <van-progress :percentage="0" />
            <p>已观看{{ item.progress_rate }}%</p>
          </h4>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getPlayToken, getvideolist } from "../../src/http/api";
export default {
  data() {
    return {
      // 数据渲染
      header: "",
      progress_rate: "",
      section_num: "",
      periods: "",
      video_id: ""
    };
  },
  created() {
    let id = this.$route.query.id;
    let token = localStorage.getItem("token");
    getvideolist({ token, id }).then(res => {
      console.log("视频", res);
      // 头部
      this.header = res.data.data.course.title;
      this.progress_rate = res.data.data.course.progress_rate;
      this.section_num = res.data.data.course.section_num;
      this.periods = res.data.data.periods;
      console.log("...........", this.periods);
      console.log(res);
      this.video_id = res.data.data.periods[0].video_id;
    });
  },
  mounted() {},
  methods: {
    // 日历
    See_also_the_calendar() {
      this.$router.push({ path: "/See_also_the_calendar" });
    },
    // 返回按钮
    Return() {
      this.$router.go(-1);
    },
    // 跳转到视频页面
    GoSHI() {
      this.$router.push({
        path: "/Abandonment",
        query: {
          video_id: this.video_id,
          title: this.header,
          id: this.$route.query.id
        }
      });
    }
  }
};
</script>

<style lang="scss">
.Study {
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
      width: 4.75rem;
      color: #5a5a5a;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  #times {
    width: 7.1rem;
    height: 0.8rem;
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.02rem solid #f5f5f5f5;
    p {
      font-size: 0.25rem;
      color: #666666;
    }
    .van-progress {
      position: relative;
      height: 4px;
      background: #ebedf0;
      border-radius: 4px;
      width: 4.19rem;
    }
    .van-progress__pivot {
      display: none;
      position: absolute;
      top: 50%;
      box-sizing: border-box;
      min-width: 3.6em;
      padding: 0 5px;
      color: #fff;
      font-size: 10px;
      line-height: 1.6;
      text-align: center;
      word-break: keep-all;
      background-color: #1989fa;
      border-radius: 1em;
      -webkit-transform: translate(0, -50%);
      transform: translate(0, -50%);
    }
  }
  #Catalog {
    width: 7.1rem;
    padding: 0.2rem;
  }
  #Catalog {
    ul {
      li {
        width: 6.6rem;
        height: 1.3rem;
        border-radius: 0.08rem;
        border: 0.04rem solid #f5f5f5;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 0.2rem;
        margin-top: 0.2rem;
        p {
          font-size: 0.2rem;
          color: #e95100;
          span {
            font-size: 0.24rem;
            color: #686868;
          }
        }
        h6 {
          font-size: 0.23rem;
          color: #757575;
          width: 100%;
        }
        h4 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          .van-progress {
            position: relative;
            height: 4px;
            background: #ebedf0;
            border-radius: 4px;
            width: 4.63rem;
          }
          .van-progress__pivot {
            display: none;
            position: absolute;
            top: 50%;
            box-sizing: border-box;
            min-width: 3.6em;
            padding: 0 5px;
            color: #fff;
            font-size: 10px;
            line-height: 1.6;
            text-align: center;
            word-break: keep-all;
            background-color: #1989fa;
            border-radius: 1em;
            -webkit-transform: translate(0, -50%);
            transform: translate(0, -50%);
          }
          p {
            font-size: 0.23rem;
            color: #b6b6b6;
          }
        }
      }
    }
  }
}
</style>