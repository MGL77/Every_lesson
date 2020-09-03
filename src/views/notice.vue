<template>
  <div class="notice">
    <van-nav-bar title="课程通知" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <ul>
      <li v-for="(item,index) in Course" :key="index">
        <p>08月31日 20：26</p>
        <h6>{{ item.content }}</h6>
      </li>
    </ul>
    <h2>没有更多了</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Course: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  created() {
    let token = localStorage.getItem("token");
    this.http
      .post(
        "https://www.365msmk.com/api/app/message/getMessage",
        {},
        {
          headers: {
            authorization: `Bearer ${token}`
          },
          params: {
            limit: 10,
            message_classify: "course",
            page: 1
          }
        }
      )
      .then(res => {
        this.Course = res.data.data.list;
        console.log("课程...............", this.Course);
      });
  }
};
</script>

<style lang="scss">
.notice {
  ul {
    li {
      width: 6.7rem;
      height: 1.34rem;
      padding: 0.4rem;
      border-bottom: 0.01rem solid #f5f5f5;
      p {
        width: 1.93rem;
        height: 0.46rem;
        background-color: #b7b7b7;
        font-size: 0.2rem;
        color: #fff;
        text-align: center;
        line-height: 0.46rem;

        display: block;
        border-radius: 0.04rem;
        margin: 0 auto;
      }
      h6 {
        font-size: 0.27rem;
        color: #8e8e8e;
        margin-top: 0.2rem;
      }
    }
  }
  h2 {
    font-size: 0.2rem;
    text-align: center;
    color: #ccc;
    margin: 0.2rem 0rem 0.1rem 0rem;
  }
}
</style>