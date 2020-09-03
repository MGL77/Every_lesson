<template>
  <div>
    <router-view />
    <div class="boss">
      <van-tabbar v-model="active" active-color="#FF821C" inactive-color="#B7B7B7" @change="change">
        <van-tabbar-item replace to="one" icon="smile-comment">首页</van-tabbar-item>
        <van-tabbar-item replace to="two" icon="column">课程</van-tabbar-item>
        <van-tabbar-item replace to="three" icon="good-job">约课记录</van-tabbar-item>
        <van-tabbar-item replace to="four" icon="comment">练习</van-tabbar-item>
        <van-tabbar-item replace to="My" icon="manager">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  mounted(){
    this.active = this.$store.state.active
  },
  methods:{
    change(index){
      // console.log(index)
      this.$store.commit("activeIndex",index)
    }
  }
};
</script>

<style lang="scss">
</style>
