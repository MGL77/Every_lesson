<template>
  <div class="order_details">
    <van-nav-bar left-arrow title="订单详情" @click-left="onClickLeft"></van-nav-bar>
    <p class="p">
      <span>交易关闭</span>
    </p>
    <div class="boss">
      <div class="child">
        <b class="b">{{ smell.shop_name }}</b>
        <ul>
          <li>
            <p>
              <span>订单编号：</span>
              <b>{{ smell.order_number }}</b>
            </p>
            <p>
              <span>下单时间：</span>
              <b>2020.08.31 10:36</b>
            </p>
            <p>
              <span>支付方式：</span>
              <b>微信</b>
            </p>
            <p>
              <span>商品原价：</span>
              <b>{{ smell.original_price }}</b>
            </p>
            <p>
              <span>优惠券：</span>
              <b>{{ smell.is_join_study }}</b>
            </p>
            <p>
              <span class="spans">实付金额：</span>
              <b class="bs">
                <img
                  src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                  alt
                />
                <span>{{ smell.order_price }}</span>
              </b>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      smell: ""
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
        "https://www.365msmk.com/api/app/myOrder/detail",
        {},
        {
          headers: {
            authorization: `Bearer ${token}`
          },
          data: {
            order_id: this.$route.query.id
          }
        }
      )
      .then(res => {
        this.smell = res.data.data;
        console.log("交易", this.smell);
      });
  }
};
</script>

<style lang="scss">
.order_details {
  .van-nav-bar {
    background: #d3cce3; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #e9e4f0,
      #d3cce3
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #e9e4f0,
      #d3cce3
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .p {
    span {
      font-size: 0.32rem;
      color: #fff;
      margin-left: 2.8rem;
    }
    width: 7.5rem;
    height: 1.36rem;

    margin: 0;

    line-height: 1.36rem;
    background: #d3cce3; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #e9e4f0,
      #d3cce3
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #e9e4f0,
      #d3cce3
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .boss {
    width: 7.1rem;
    height: 10.6rem;
    background-color: #f0f2f5;
    padding: 0.2rem;
    .child {
      width: 92%;
      height: 4.5rem;
      background-color: #ffff;
      border-radius: 0.1rem;
      padding-left: 0.3rem;
      padding-right: 0.3rem;
      .b {
        width: 100%;
        height: 1.04rem;
        border-bottom: 0.01rem solid rgb(231, 231, 231);
        font-size: 0.3rem;
        color: #363636;
        display: block;
        line-height: 1.04rem;
      }
      ul {
        border-bottom: 0.01rem solid rgb(231, 231, 231);
        li {
          p {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0.2rem 0rem 0.2rem 0rem;
            width: 100%;
            span {
              font-size: 0.2rem;
              color: #a0a0a0;
            }
            b {
              font-size: 0.2rem;
              color: #a0a0a0;
            }
            .spans {
              font-size: 0.27rem;
              color: #7a7a7a;
            }
            .bs {
              width: 1.4rem;
              display: flex;
              align-items: center;
              justify-content: space-around;
              span {
                font-size: 0.27rem;
                color: #e43d3d;
              }
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
  }
}
</style>