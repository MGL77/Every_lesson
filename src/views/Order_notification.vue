<template>
  <div class="Order_notification">
    <van-nav-bar left-arrow title="订单通知" @click-left="onClickLeft"></van-nav-bar>
    <ul>
      <li v-for="(item,index) in Order" :key="index">
        <p>08月31日 20：26</p>
        <h6>{{ item.content }}</h6>
        <h3 @click="order_details(item.order_id)">点击支付 >></h3>
      </li>
    </ul>
    <h2>没有更多了</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Order: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    order_details(id) {
      console.log(id);
      this.$router.push({ path: "/order_details", query: { id } });
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
            message_classify: "order",
            page: 1
          }
        }
      )
      .then(res => {
        this.Order = res.data.data.list;
        console.log("订单...............", this.Order);
      });
  }
};
</script>

<style lang="scss">
.Order_notification {
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
  h3 {
    font-size: 0.2rem;
    color: #fc5500;
    position: fixed;
    top: 4.16rem;
    right: 0.4rem;
  }
}
</style>