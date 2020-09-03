<template>
  <div id="app">
    <router-view />

    <!-- 信息 拖拽开始-->
    <float-icons padding="10 10 60 10" class="icons-warp">
      <div class="emial" @click="information">
        <img src="./assets/img/信.png" alt />
      </div>
    </float-icons>
    <!-- 信息 拖拽结束-->
  </div>
</template>

<script>
import FloatIcons from "@/components/s-icons";
export default {
  components: {
    "float-icons": FloatIcons
  },

  methods: {
    // 点击按钮
    handleIcons(router) {
      console.log("router", router);
      this.$router.push(router);
    },
    information() {
      this.$router.push({ path: "/Information_page" });
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
img {
  display: block;
}

// 信息拖拽样式开始
.icons-warp {
  border-radius: 50%;
  .emial {
    width: 1.28rem;
    height: 1.28rem;
    border-radius: 50%;
    background-color: #007aff;
    border: 1px solid 007aff;
    box-shadow: darkgrey 10px 10px 30px 5px;
    img {
      width: 0.48rem;
      height: 0.4rem;
      margin: 23px auto;
    }
  }
}
// 信息拖拽样式结束
</style>
