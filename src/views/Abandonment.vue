<template>
  <div class="Abandonment">
    <div class="Guidance">
      <img src="../assets/img/ooooo.png" alt @click="Return" />
      <p>{{ title }}</p>
    </div>
    <!-- 视频开始 -->
    <div id="hao"></div>
    <!-- 视频结束 -->
  </div>
</template>

<script>
import { getPlayToken, getvideolist } from "../../src/http/api";
export default {
  data() {
    return {
      course_id: "",
      video_id: "",
      title: "",
      video_token: "",
      title: ""
    };
  },
  created() {
    this.course_id = this.$route.query.id;
    this.video_id = this.$route.query.video_id;
    this.title = this.$route.query.title;

    let id = this.$route.query.id;

    let token = localStorage.getItem("token");
    getvideolist({ token, id }).then(res => {
      this.title = res.data.data.periods[0].periods_title;
      // console.log("视频*****", res);
    });
    this.getPlayTokens();
  },
  mounted() {},
  methods: {
    // 视频
    getPlayTokens() {
      let token = `Bearer ${localStorage.getItem("token")}`;
      // console.log(token)

      return getPlayToken({
        token,
        video_id: this.video_id,
        course_id: this.course_id
      }).then(res => {
        console.log("视频11", res);

        var player = new bjcPlayer("#hao", {
          token: res.data.data.token,
          definition: "low", // hign 高清 low 低清
          media: "video"
        });
        player.play(res.data.data.video_id);
      });
    },
    Return() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.Abandonment {
  .Guidance {
    width: 7.1rem;
    height: 0.4rem;
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 0.34rem;
      height: 0.34rem;
    }
    p {
      font-size: 0.34rem;
      width: 5rem;
      color: #5a5a5a;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  #hao {
    width: 7.5rem;
    height: 66.66667vw;
  }
}
</style>