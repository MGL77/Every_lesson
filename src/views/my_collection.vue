<template>
  <div class="my_collection">
    <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="BJ">
      <div class="Class_opening">
        <ul>
          <li v-for="(item,index) in Harvest" :key="index">
            <b class="title">{{ item.title }}</b>
            <div class="names">
              <van-icon
                size="0.35rem"
                name="star"
                color="#eb6100"
                @click="quxiao(item.collect_id)"
              />
            </div>
            <p class="titles">共{{ item.section_num }}课时</p>
            <div class="Nimgs">
              <img :src="item.teachersAvatar" alt />
              <b>{{ item.teachers }}</b>
            </div>
            <div class="pepoles">
              <p>{{ item.sales_num }}人已报名</p>
              <b>免费</b>
            </div>
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
      active: 2,
      Harvest: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 取消收藏
    quxiao(id) {
      let token = localStorage.getItem("token");
      this.http
        .put(
          `https://www.365msmk.com/api/app/collect/cancel/${id}/1`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              DeviceType: "H5",
              authorization: `Bearer ${token}`
            }
          }
        )
        .then(res => {
          console.log("收藏", res);
          location.reload();
        });
    }
  },
  created() {
    let token = localStorage.getItem("token");
    this.http
      .get("https://www.365msmk.com/api/app/collect", {
        params: {
          page: 1,
          limit: 10,
          type: 1
        },
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        console.log("收藏...............", res);
        this.Harvest = res.data.data.list;
      });
  }
};
</script>

<style lang="scss">
.my_collection {
  .BJ {
    width: 7.02rem;
    height: 11.92rem;
    background-color: #f0f2f5;
    padding: 0.24rem;
    .Class_opening ul li {
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
      margin-top: 0.26rem;
      position: relative;

      .title {
        font-size: 0.28rem;
        width: 5.51rem;
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
        margin-bottom: 0.2rem;
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
        border-top: 0.03rem solid #f5f5f5;
        padding-top: 0.2rem;
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
}
.names {
  position: absolute;
  top: 0rem;
  right: 0.42rem;
}
</style>