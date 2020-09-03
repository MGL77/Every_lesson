<template>
  <div id="search">
    <div class="wxw_top">
      <img @click="back" src="../assets/img/ooooo.png" alt />
      <input type="text" v-model="value" @keyup="zeyo" />
      <span class="wxw_gray" v-if="value.length == 0">取消</span>
      <span class="wxw_black" v-else @click="getList()">搜索</span>
    </div>
    <div class="wxw_search" v-if="show">
      <p v-if="value.length == 0 ">
        历史搜索
        <van-icon name="delete" color="#d4d3d3" @click="clearhis" />
      </p>
      <ul v-if="value.length == 0 ">
        <li v-for="(item,index) in hisList" :key="index" @click="backhis(item)">{{ item.title }}</li>
      </ul>
    </div>

    <div>
      <!--  -->
      <ul class="wxw_storTwo" v-if=" list.length !=0 && value.length != 0 ">
        <li
          v-for="(itemChild,indexChild) in list"
          :key="indexChild"
          @click="goDetailsClass(itemChild.id)"
        >
          <div>{{ itemChild.title}}</div>
          <p>共{{ itemChild.total_periods }}课时</p>
          <div v-for="(teach,indexTeach) in itemChild.teachers_list" :key="indexTeach">
            <img :src="teach.teacher_avatar" alt />
            <span>{{ teach.teacher_name }}</span>
          </div>
          <p>
            <span>{{ itemChild.sales_num }}人已报名</span>
            <font class="wxw_free" v-if="itemChild.price == 0">免费</font>
            <font v-else>
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                alt
              />
              {{ itemChild.price }}
            </font>
          </p>
        </li>
      </ul>
      <!--  -->
    </div>
  </div>
</template>

<script>
// import { courseBasis } from "../http/api";
export default {
  data() {
    return {
      value: "",
      list: "",
      show: true,
      hisList: [{ title: "初一" }]
    };
  },
  // 侦听器
  watch: {},
  created() {
    if (localStorage.getItem("list")) {
      this.hisList = JSON.parse(localStorage.getItem("list"));
    } else {
      this.hisList = [];
    }
  },
  mounted() {},
  // 组件方法
  methods: {
    // 完善
    zeyo() {
      if (this.value.length == "") {
        this.show = true;
      }
      if (localStorage.getItem("list")) {
        this.hisList = JSON.parse(localStorage.getItem("list"));
      }
    },
    // 获取数据
    getList() {
      let token = "";
      if (localStorage.getItem("token")) {
        token = `Bearer ${localStorage.getItem("token")}`;
      }
      let data = {
        limit: 10,
        page: 1,
        course_type: 0,
        keywords: this.value
      };
      console.log(localStorage.getItem("token"));
      // 获取数据开始
      this.http
        .get("https://www.365msmk.com/api/app/courseBasis", {
          params: data,
          headers: { token }
        })
        .then(res => {
          console.log("搜索数据", res);
          this.list = res.data.data.list;
          this.show = false;
        });
      // 获取数据结束

      // courseBasis({
      //   data,
      //   token
      // }).then(res => {
      //   this.list = res.data.data.list;
      //   this.show = false;
      // });
      let obj = {
        title: `${this.value}`
      };

      // console.log(obj)
      let i = this.hisList.findIndex(item => {
        return item.title == obj.title;
      });
      if (i == -1) {
        this.hisList.push(obj);
      }

      let arr = JSON.stringify(this.hisList);

      localStorage.setItem("list", arr);
    },
    // 回退历史
    backhis(str) {
      this.value = str.title;
    },
    //清空历史
    clearhis() {
      localStorage.removeItem("list");
      this.hisList = [];
    },
    // 回到上一页
    back() {
      this.$router.go(-1);
    },
    //跳到详学生详情页
    goDetailsClass(id) {
      console.log(id);
      this.$router.push({
        path: "/Featured_lesson_content",
        query: {
          id
        }
      });
    }
  },
  // 计算属性
  computed: {}
};
</script>

<style lang="scss" scoped>
#search {
  background: #f5f5f5;
  //顶部样式
  > .wxw_top {
    height: 0.95rem;
    line-height: 0.95rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.3rem;
    box-sizing: border-box;
    border-bottom: 0.01rem solid #eaeaea;
    > img {
      width: 0.48rem;
      height: 0.36rem;
      // padding-left: 0.3rem;
    }
    > input {
      height: 0.6rem;
      border: none;
      width: 5.37rem;
      border-radius: 0.4rem;
      background: #e4e7ed;
      text-indent: 0.4rem;
      font-size: 0.12rem;
    }
    > span {
      font-size: 0.28rem;
    }
    .wxw_gray {
      color: #d2d2d1;
    }
    .wxw_black {
      color: black;
    }
  }
  //历史搜索
  > .wxw_search {
    height: 92.9vh;
    background: #fff;
    padding: 0 0.5rem 0;
    > p {
      padding: 0.5rem 0rem 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.3rem;
      /deep/.van-icon {
        font-size: 0.3rem;
      }
    }
    > ul {
      padding-left: 0.2rem;
      display: flex;
      justify-content: start;
      align-items: center;
      > li {
        padding: 0.1rem 0.2rem;
        height: 0.48rem;
        font-size: 0.24rem;
        background: #f7f7f7;
        text-align: center;
        line-height: 0.48rem;
        margin: 0 0.14rem 0;
        border-radius: 0.1rem;
      }
    }
  }
  //
  .wxw_storTwo {
    padding: 0.3rem;
    li {
      margin-bottom: 0.3rem;
      padding: 0 0.28rem;
      background: #fff;
      height: 3.72rem;
      position: relative;
      border-radius: 0.06rem;
      div:nth-of-type(1) {
        padding-top: 0.3rem;
        font-size: 0.32rem;
        height: 0.94rem;
      }
      p:nth-of-type(1) {
        font-size: 0.24rem;
        height: 0.5rem;
        line-height: 0.5rem;
      }
      div:nth-of-type(2) {
        height: 1.28rem;
        display: flex;
        align-items: center;
        border-bottom: 0.01rem solid #f5f5f5;
        img {
          width: 0.54rem;
          height: 0.54rem;
          border-radius: 50%;
        }
        span {
          font-size: 0.24rem;
          margin-left: 0.26rem;
          color: rgba(0, 0, 0, 0.45);
        }
      }
      p:nth-of-type(2) {
        height: 0.9rem;
        line-height: 0.9rem;
        display: flex;
        justify-content: space-between;
        span {
          flex: 1;
          color: rgba(0, 0, 0, 0.45);
          font-size: 0.26rem;
        }
        .wxw_free {
          color: #44a426;
          font-size: 0.26rem;
        }
        font {
          flex: none;
          color: #ee1f1f;
          img {
            width: 0.24rem;
            height: 0.26rem;
          }
        }
      }
    }
  }
}
</style>
