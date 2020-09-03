<template>
  <div class="Study_card">
    <van-nav-bar
      title="修改个人信息"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div id="profession">
      <p>
        <van-checkbox v-model="checked" checked-color="#EF853B" shape="square">语文</van-checkbox>
      </p>
      <p>
        <van-checkbox v-model="checked1" checked-color="#EF853B" shape="square">数学</van-checkbox>
      </p>
      <p>
        <van-checkbox v-model="checked2" checked-color="#EF853B" shape="square">英语</van-checkbox>
      </p>
      <p>
        <van-checkbox v-model="checked3" checked-color="#EF853B" shape="square">物理</van-checkbox>
      </p>
      <p>
        <van-checkbox v-model="checked4" checked-color="#EF853B" shape="square">化学</van-checkbox>
      </p>
      <p>
        <van-checkbox v-model="checked5" checked-color="#EF853B" shape="square">生物</van-checkbox>
      </p>
      <p>
        <van-checkbox v-model="checked6" checked-color="#EF853B" shape="square">政治</van-checkbox>
      </p>
      <p>
        <van-checkbox v-model="checked7" checked-color="#EF853B" shape="square">信息技术</van-checkbox>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: "",
      checked1: "",
      checked2: "",
      checked3: "",
      checked4: "",
      checked5: "",
      checked6: "",
      checked7: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      alert("s");
    }
  }
};
</script>

<style lang="scss">
.Study_card {
  #profession {
    width: 7.5rem;
    height: 12.2rem;
    background-color: #f0f2f5;
    p {
      width: 6.94rem;
      height: 1.1rem;
      display: block;
      line-height: 1.1rem;
      padding-left: 0.27rem;
      padding-right: 0.27rem;
      font-size: 0.25rem;
      background-color: #fff;
      color: #323233;
      display: flex;
      border-bottom: 0.01rem solid #f5f5f5;
    }
  }
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
    border-bottom: 0.2rem solid #f0f2f5;
  }
}
</style>