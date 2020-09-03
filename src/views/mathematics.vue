<template>
  <div class="mathematics">
    <van-nav-bar title="数学" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="mark">
      <div class="IT" @click="select">
        <img src="../assets/img/题库 (1).png" alt />
        <span>题库选择</span>
      </div>
      <img src="../assets/img/设 置.png" alt @click="showPopup" />
      <van-popup v-model="show" closeable position="bottom" :style="{ height: '30%' }">
        <div class="Exercise">
          <p>专点专练设置</p>
          <span>设置考点专练出题数量</span>

          <van-radio-group v-model="radio">
            <div class="radio">
              <van-radio name="1">随机15首</van-radio>
              <van-radio name="2">按顺序做题</van-radio>
            </div>
          </van-radio-group>

          <van-button type="default" color="#eb6100" block>确定</van-button>
        </div>
      </van-popup>
    </div>
    <!-- 分享 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      radio: "1"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    showPopup() {
      this.show = true;
    },
    select() {
      this.$router.push({ path: "/Test_site_practice" });
    }
  }
};
</script>

<style lang="scss">
.mathematics {
  .van-nav-bar {
    position: relative;
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 46px;
    line-height: 1.5;
    text-align: center;
    background-color: #fff;
    -webkit-user-select: none;
    user-select: none;
    border-bottom: 0.18rem solid #f0f2f5;
  }
  .mark {
    width: 7.1rem;
    height: 0.5rem;
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .IT {
      width: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      img {
        width: 0.32rem;
        height: 0.3rem;
      }
      span {
        font-size: 0.3rem;
        color: #4c4c4c;
      }
    }
    img {
      width: 0.31rem;
      height: 0.31rem;
    }
  }
  .Exercise {
    p {
      font-size: 0.3rem;
      text-align: center;
      padding: 0.32rem 0.2rem;
    }
    span {
      font-size: 0.2rem;
      padding: 0.3rem 0.3rem;
      display: block;
    }
    .radio {
      display: flex;
      padding: 0.08rem 0.3rem;
    }
  }
}
</style>