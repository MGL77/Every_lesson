<template>
  <div class="Course_details">
    <van-nav-bar title="课程详情" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="cluster-o" size="24" color="#000" />
      </template>
    </van-nav-bar>

    <div class="love">
      <h1>每时每课特级教师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题</h1>
      <span>免费</span>
      <p>共1课时 | 99人已报名</p>
      <img src="../assets/img/wu.png" alt />
    </div>
    <!-- 教学团队 -->
    <div class="Course_details">
      <p>教学团队</p>
      <img src="../assets/img/书 (1).png" alt />
      <span>杨德胜</span>
    </div>
    <!-- 课程介绍 -->
    <div class="Introduction">
      <p>课程介绍</p>
      <span>自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题</span>
    </div>
    <!-- 课程大纲 -->
    <div class="big">
      <p>课程介绍</p>
      <span>自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题</span>
    </div>
    <!-- 课程评论 -->
    <div class="comment">
      <p>课程介绍</p>
      <ul>
        <li></li>
      </ul>
    </div>
    <van-button type="primary" block color="#eb6100">立即报名</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.Course_details {
  width: 100%;
  background-color: #f0f2f5;
  .love {
    width: 6.9rem;
    height: 2.21rem;
    background-color: #fff;
    padding: 0.3rem;
    line-height: 0.54rem;
    position: relative;
    img {
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
    }
    span {
      color: #cccccc;
      font-size: 0.25rem;
      display: block;
      margin-left: 0.3rem;
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
    height: 1.97rem;
    margin-top: 0.28rem;
    background-color: #fff;
    padding: 0.3rem;
    p {
      color: #4d4d4d;
      font-size: 0.29rem;
    }
    span {
      color: #8a8a8a;
      font-size: 0.2rem;
      display: block;
      margin: 0.36rem 0rem 0rem 0.22rem;
    }
  }
  .comment {
    width: 6.9rem;
    height: 1.97rem;
    margin-top: 0.28rem;
    background-color: slateblue;
    padding: 0.3rem;
    p {
      color: #4d4d4d;
      font-size: 0.29rem;
    }
  }
  .van-button--block {
    display: block;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>