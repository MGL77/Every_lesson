<template>
  <div class="Course_order">
    <van-nav-bar title="课程订单" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <van-tabs v-model="active" line-width="12px" title-active-color="#EB6100">
      <van-tab title="全部订单">
        <div class="All_orders">
          <ul>
            <li v-for="(item,index) in All" :key="index" @click="GO_order_details">
              <p>
                <span>订单编号：{{ item.order_number }}</span>
                <b>交易完成</b>
              </p>
              <h2>{{ item.title }}</h2>
              <h3>时间：2020.08.28 20:17</h3>
              <h4>
                实付款：
                <img
                  src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                  alt
                />
                {{ item.order_price }}
              </h4>
            </li>
            <h1>没有更多了</h1>
          </ul>
        </div>
      </van-tab>
      <van-tab title="待支付">
        <img src="../assets/img/rr.png" alt />
        <h1>暂无订单</h1>
      </van-tab>
      <van-tab title="已完成">
        <div class="All_orders">
          <ul>
            <li v-for="(item,index) in All" :key="index">
              <p>
                <span>订单编号：{{ item.order_number }}</span>
                <b>交易完成</b>
              </p>
              <h2>{{ item.title }}</h2>
              <h3>时间：2020.08.28 20:17</h3>
              <h4>
                实付款：
                <img
                  src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                  alt
                />
                {{ item.order_price }}
              </h4>
            </li>
            <h1>没有更多了</h1>
          </ul>
        </div>
      </van-tab>
      <van-tab title="已取消">
        <img src="../assets/img/rr.png" alt />
        <h1>暂无订单</h1>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      All: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    GO_order_details() {
      // let id = this.$route.query.order_id;
      // this.$router.push({ path: "/order_details", query: { id } });
      alert("s")
    }
  },
  created() {
    let token = localStorage.getItem("token");
    this.http
      .post(
        "https://www.365msmk.com/api/app/myOrder",
        {},
        {
          headers: {
            authorization: `Bearer ${token}`
          },
          params: {
            limit: 10,
            order_status: 0,
            order_type: 2,
            page: 1
          }
        }
      )
      .then(res => {
        this.All = res.data.data.list;
        console.log("课程订单...............", this.All);
      });
  }
};
</script>

<style lang="scss">
.Course_order {
  h1 {
    font-size: 0.2rem;
    color: #ccc;
    text-align: center;
    margin: 0.3rem;
  }
  img {
    width: 3rem;
    height: 3rem;
    margin: 0.5rem auto;
  }

  .van-tabs--line .van-tabs__wrap {
    height: 44px;
    border-bottom: 0.03rem solid #f5f5f5;
  }

  .All_orders {
    ul {
      width: 7.1rem;
      padding: 0.2rem;
      height: 4rem;

      li {
        margin-bottom: 0.3rem;
        width: 92%;
        height: 2rem;
        border: 0.01rem solid rgb(243, 239, 239);
        border-radius: 0.1rem;
        padding: 0.3rem;
        box-shadow: 0 0 2vw rgba(0, 0, 0, 0.1);
        p {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 0.01rem solid rgb(241, 238, 238);
          padding-bottom: 0.18rem;
          margin-bottom: 0.18rem;
          span {
            font-size: 0.2rem;
            color: #696969;
          }
          b {
            font-size: 0.25rem;
            color: #ea7c31;
          }
        }
        h2 {
          font-size: 0.27rem;
          color: #5e5e5e;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        h3 {
          font-size: 0.27rem;
          color: #9b9b9b;
          margin-top: 0.15rem;
          margin-bottom: 0.15rem;
        }

        h4 {
          font-size: 0.27rem;
          color: #9b9b9b;
          width: 1.6rem;
          display: flex;
          align-items: center;
          justify-content: space-around;
          img {
            width: 0.27rem;
            height: 0.3rem;
            display: block;
            margin: 0;
            padding: 0;
          }
        }
      }
    }
  }
}
</style>