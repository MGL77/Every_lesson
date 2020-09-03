<template>
  <div id="Balance_details">
    <van-nav-bar title="余额明细" left-arrow @click-left="onClickLeft" />
    <p>没有更多了</p>
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
#Balance_details {
  p {
    font-size: 0.12rem;
    text-align: center;
    display: block;
    color: #ccc;
    margin: 0.1rem auto;
  }
}
</style>