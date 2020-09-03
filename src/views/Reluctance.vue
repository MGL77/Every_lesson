<template>
  <div class="Reluctance">
    <van-nav-bar title="意见反馈" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <van-field
      v-model="message"
      rows="2"
      autosize
      type="textarea"
      maxlength="500"
      placeholder="请输入留言"
      show-word-limit
    />
    <van-button type="default" color="#eb6100" block>提交</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
</style>