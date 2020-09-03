<template>
  <div id="attention">
    <van-nav-bar title="我的关注" left-arrow @click-left="onClickLeft" />
    <div class="wxw_content">
      <ul class="wxw_storOne" v-if="list.length != 0">
        <li v-for="(itemChild,indexChild) in list" :key="indexChild">
          <img :src="itemChild.avatar" alt @click="goDetails(itemChild.teacher_id)" />
          <div @click="goDetails(itemChild.teacher_id)">
            <p>
              <span>{{ itemChild.teacher_name }}</span>
              <font>{{itemChild.level_name}}</font>
            </p>
            <p>{{itemChild.introduction}}</p>
          </div>
          <p @click="cancel(itemChild.teacher_id)">取消关注</p>
        </li>
      </ul>

      <div class="empty" v-else>
        <img src="../assets/img/empty.0d284c2e.png" />
        <p>暂无关注</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  // 侦听器
  watch: {},
  created() {
    this.getData();
  },
  mounted() {},
  // 组件方法
  methods: {
    //返回
    onClickLeft() {
      this.$toast("返回");
      this.$router.go(-1);
    },
    //获取数据
    getData() {
      let token = localStorage.getItem("token");

      this.http
        .get(`https://www.365msmk.com/api/app/collect`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            page: 1,
            limit: 10,
            type: 2
          }
        })
        .then(res => {
          this.list = res.data.data.list;
          console.log("我的关注数据》》》》》》", this.list);
        });
    },
    //取消关注
    cancel(id) {
      let token = localStorage.getItem("token");
      this.http
        .get(` https://www.365msmk.com/api/app/teacher/collect/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          console.log("取消关注》》》》》》", res);
          this.getData();
        });
    },
    //跳到详情页
    goDetails(id) {
      if (!localStorage.getItem("token")) {
        return alert("没有token");
      }
      this.$router.push({
        path: "/Famous_teacher_lineup",
        query: {
          teacher_id: id
        }
      });
    }
  },
  // 计算属性
  computed: {}
};
</script>

<style lang="scss" scoped>
#attention {
  background: #f0f2f5;
  min-height: 100vh;
  .wxw_content {
    .wxw_storOne {
      padding: 0.09rem 0.2rem 0.4rem;
      li {
        padding: 0 0.3rem;
        margin: 0.2rem 0 0;
        background: #fff;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        height: 1.62rem;
        img {
          width: 0.8rem;
          height: 0.8rem;
          margin: 0 0.24rem 0 0;
          border-radius: 50%;
          flex: none;
        }
        div {
          // flex: 1;
          p:nth-of-type(1) {
            height: 0.48rem;
            line-height: 0rem;
          }
          p:nth-of-type(2) {
            width: 3.6rem;
            color: #b7b7b7;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 0.24rem;
          }
          span {
            font-size: 0.3rem;
            padding-right: 0.09rem;
          }
          font {
            font-size: 0.24rem;
            color: #ea7a2f;
          }
        }
        > p {
          font-size: 0.24rem;
          width: 1.52rem;
          height: 0.56rem;
          line-height: 0.56rem;
          text-align: center;
          background: rgba(235, 97, 0, 0.1);
          color: #eb6100;
          border-radius: 0.34rem;
          margin-left: 0.26rem;
          box-sizing: border-box;
        }
      }
    }
    > .empty {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      > img {
        width: 4rem;
        width: 40vw;
        height: 4rem;
        height: 40vw;
      }
      > p {
        font-size: 0.4rem;
        font-size: 4vw;
        color: #8c8c8c;
        margin-top: 0.53333rem;
        margin-top: 5.33333vw;
      }
    }
  }
}
</style>
