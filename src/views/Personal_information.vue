<template>
  <div class="Personal_information">
    <van-nav-bar title="信息填写" left-arrow @click-left="onClickLeft" />
    <div class="Personal">
      <ul>
        <li is-link @click="showPopup">
          <b>头像</b>
          <div class="go">
            <!-- <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg" alt  /> -->
            <img :src="img" alt class="imgT" />
            <img src="../assets/img/jian.png" alt />
          </div>
        </li>

        <li>
          <b>昵称</b>
          <div class="go">
            <p>155****3810</p>
            <img src="../assets/img/jian.png" alt @click="GOnickname" />
          </div>
        </li>

        <li>
          <b>性别</b>
          <div class="go">
            <p>保密</p>
            <img src="../assets/img/jian.png" alt @click="GOgender" />
          </div>
        </li>

        <li>
          <b>出生日期</b>
          <div class="go">
            <p>请选择</p>
            <img src="../assets/img/jian.png" alt @click="Pop_up_layer" />
          </div>
        </li>
        <!-- 日期弹出层 -->
        <van-popup v-model="o" position="bottom" :style="{ height: '47%' }">
          <van-picker show-toolbar :columns="columns" />
        </van-popup>

        <li>
          <b>所在城市</b>
          <div class="go">
            <p>请选择</p>
            <img src="../assets/img/jian.png" alt @click="city" />
          </div>
        </li>
        <!-- 城市弹出层 -->
        <van-popup v-model="c" position="bottom" :style="{ height: '47%' }"></van-popup>

        <li>
          <b>学科</b>
          <div class="go">
            <p>语文</p>
            <img src="../assets/img/jian.png" alt @click="GOSubject" />
          </div>
        </li>

        <li>
          <b>年纪</b>
          <div class="go">
            <p>请选择</p>
            <img src="../assets/img/jian.png" alt @click="age" />
          </div>
        </li>
        <!-- 年纪弹出层 -->
        <van-popup v-model="n" position="bottom" :style="{ height: '47%' }"></van-popup>
      </ul>
      <!-- <van-button type="default" block>提交信息</van-button> -->
      <!-- 弹出层 -->
      <van-popup v-model="show" position="bottom">
        <ul class="ul">
          <li>
            拍照
            <input
              class="input"
              type="file"
              accept="image/*"
              capture="camera"
              @change="Take_pictures($event)"
            />
          </li>
          <li>从手机相册选择</li>
          <li @click="Nshow">取消</li>
        </ul>
      </van-popup>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 头像弹出层
      show: false,
      // 头像
      img: "",
      // 年纪
      n: false,
      // 城市
      c: false,
      // 日期弹出层
      o: false,
      columns: [
        // 第一列
        {
          values: [
            "1993",
            "1994",
            "1995",
            "1996",
            "1997",
            "1998",
            "1999",
            "2000",
            "2001"
          ],
          defaultIndex: 3
        },
        // 第二列
        {
          values: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13"
          ],
          defaultIndex: 2
        },
        // 第三列
        {
          values: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13"
          ],
          defaultIndex: 3
        }
      ]
    };
  },

  mounted() {
    let token = localStorage.getItem("token");
    // 更换头像
    this.http
      .get("https://www.365msmk.com/api/app/userInfo", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        console.log(res);
        this.img = res.data.data.avatar;
      });
    // this.Take_pictures();
  },
  methods: {
    Take_pictures(e) {
      console.log(e);
      let token = localStorage.getItem("token");
      console.log(token);
      let formData = new FormData();
      formData.append("file", e.target.files[0]);
      //调用上传图片接口上传照片
      this.http
        .post("https://www.365msmk.com/api/app/public/img", formData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          console.log(res);
          if (res.data.code === 200) {
            //设置头像接口
            this.http
              .put(
                "https://www.365msmk.com/api/app/user",
                {
                  avatar: res.data.data.path
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`
                  }
                }
              )
              .then(ress => {
                console.log("图像路径", ress);
                this.img = res.data.data.avatar;
              });
          }
        });
      this.show = false;
    },
    // 弹出层
    showPopup() {
      this.show = true;
    },
    // 关闭弹出层
    Nshow() {
      this.show = false;
    },
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },
    // 设置昵称
    GOnickname() {
      this.$router.push({ path: "/nickname" });
    },
    // 设置性别
    GOgender() {
      this.$router.push({ path: "/gender" });
    },
    // 设置出生日期
    Pop_up_layer() {
      this.o = true;
    },
    // 设置所在城市
    city() {
      this.c = true;
    },
    // 设置学科
    GOSubject() {
      this.$router.push({ path: "/Subject" });
    },
    // 设置年纪
    age() {
      this.n = true;
    }
  }
};
</script>

<style lang="scss">
.Personal {
  width: 100%;
  height: 12.2rem;
  background-color: #f0f2f5;
  padding-top: 0.2rem;
  .input {
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    opacity: 0;
    height: 0.89rem;
    // background-color: teal;
  }
  ul {
    li {
      width: 6.86rem;
      height: 1.05rem;
      border-bottom: 0.04rem solid #f8f8f8;
      padding: 0rem 0.28rem 0rem 0.36rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fff;
      b {
        font-size: 0.28rem;
        color: #828282;
      }
      .go {
        height: 1.05rem;
        width: 1.62rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
          font-size: 0.24rem;
          color: #8a8a8a;
        }
        img {
          width: 0.34rem;
          height: 0.33rem;
        }
        .imgT {
          width: 0.7rem;
          height: 0.7rem;
        }
      }
    }
  }
  .van-button--normal {
    width: 6.86rem;
    margin: 1.72rem auto;
    background-color: #eb6100;
    border-radius: 0.12rem;
    color: #fff;
  }
  .ul {
    li {
      font-size: 0.3rem;
      display: block;
      height: 0.89rem;
      text-align: center;
      line-height: 0.89rem;
    }
  }
}
</style>