<template>
  <div class="two">
    <!-- header -->
    <van-nav-bar title="特色课">
      <template #right>
        <van-icon name="search" size="24" color="#000" @click="search" />
      </template>
    </van-nav-bar>
    <!-- 下拉菜单开始-->

    <van-dropdown-menu active-color="#ee741d">
      <!-- 分类 -->
      <van-dropdown-item title="分类" ref="hao">
        <div class="classification">
          <p>{{ grade.name }}</p>
          <ul>
            <li
              v-for="(item,index) in junior_high_school"
              :key="index"
              :class="iNow == index ? 'active':''"
              @click="child_active(index,item.id)"
            >{{ item.name }}</li>
          </ul>
        </div>
        <div class="Subject">
          <p>{{ gradeT.name }}</p>
          <ul>
            <li
              v-for="(item,index) in junior_high_schoolT"
              :key="index"
              :class="iNows == index ? 'actives':''"
              @click="child_actives(index,item.id)"
            >{{ item.name }}</li>
          </ul>
        </div>
        <div class="btnS">
          <van-button type="default" @click="out_Hao(false)">重置</van-button>
          <van-button type="default" color="#eb6100" @click="out_Hao(true)">确定</van-button>
        </div>
      </van-dropdown-item>
      <!-- 排序 -->
      <van-dropdown-item title="排序" ref="haos">
        <div class="Sort">
          <ul>
            <li
              v-for="(item,index) in list"
              :key="index"
              @click="Click_to_sort(index)"
              :class="iNowss == index ? 'activess':''"
            >{{ item.title }}</li>
          </ul>
        </div>
      </van-dropdown-item>
      <!-- 筛选 -->
      <van-dropdown-item title="筛选" ref="haoss">
        <div class="filter">
          <ul>
            <li
              v-for="(item,index) in Handsome"
              :key="index"
              @click="Click_the_course_button(index,item.id)"
              :class="iNowsss == index ? 'activesss':''"
            >{{ item.title }}</li>
          </ul>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>

    <!-- 下拉菜单结束-->
    <!-- 开课了 -->
    <div class="Class_opening">
      <ul>
        <li v-for="(item,index) in curriculum" :key="index" @click="goDetails(item.id)">
          <b class="title">{{ item.title }}</b>
          <p class="titles">共{{ item.total_periods }}课时</p>
          <div class="Nimgs" v-for="(items,indexs) in item.teachers_list" :key="indexs">
            <img :src="items.teacher_avatar" alt />
            <b>{{ items.teacher_name }}</b>
          </div>
          <div class="pepoles">
            <p>{{ item.sales_num }}人已报名</p>
            <b>免费</b>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curriculum: "",
      // 下拉
      grade: "",
      junior_high_school: "",
      gradeT: "",
      junior_high_schoolT: "",
      iNow: -1,
      iNows: -1,
      iNowss: -1,
      iNowsss: -1,
      IvIdo: 0,
      IvIdt: 0,
      list: [
        { id: 0, title: "综合排序" },
        { id: 1, title: "最新" },
        { id: 2, title: "最热" },
        { id: 3, title: "价格从低到高" },
        { id: 4, title: "价格从高到低" }
      ],
      Handsome: [
        { id: 0, title: "全部" },
        { id: 2, title: "大班课" },
        { id: 3, title: "小班课" },
        { id: 4, title: "公开课" },
        { id: 5, title: "点播课" },
        { id: 6, title: "面授课" },
        { id: 7, title: "音频课" },
        { id: 8, title: "系统课" },
        { id: 9, title: "图文课" },
        { id: 0, title: "会员课" }
      ]
    };
  },
  created() {
    // 特色课信息
    this.http.get("https://www.365msmk.com/api/app/courseBasis").then(res => {
      this.curriculum = res.data.data.list;
      console.log("课程", this.curriculum);
    });

    // 下拉菜单分类
    this.http
      .get("https://www.365msmk.com/api/app/courseClassify?")
      .then(res => {
        this.grade = res.data.data.attrclassify[0];
        this.gradeT = res.data.data.attrclassify[1];
        this.junior_high_school = res.data.data.attrclassify[0].child;
        this.junior_high_schoolT = res.data.data.attrclassify[1].child;
        console.log("分类", this.junior_high_school);
      });
  },
  methods: {
    // 搜索
    search() {
      this.$router.push({ path: "/Search" });
    },
    // 讲师详情页
    goDetails(id) {
      this.$router.push({
        path: "/Featured_lesson_content",
        query: { id }
      });
    },
    // 下拉开始
    child_active(index, id) {
      this.iNow = index;
      this.IvIdo = id;
      console.log(this.IvIdo);
    },
    child_actives(index, id) {
      this.iNows = index;
      this.IvIdt = id;
      console.log(this.IvIdt);
    },
    out_Hao(type = false) {
      if (type) {
        let numbers;
        if (this.IvIdo == 0) {
          numbers = `${this.IvIdt}`;
        } else if (this.IvIdt == 0) {
          numbers = `${this.IvIdo}`;
        } else {
          numbers = `${this.IvIdo},${this.IvIdt}`;
        }
        this.http
          .get(
            `https://www.365msmk.com/api/app/courseBasis?attr_val_id=${numbers}`
          )
          .then(res => {
            this.curriculum = res.data.data.list;
            console.log("课程", this.curriculum);
          });
        this.$refs.hao.toggle();
      } else {
        (this.iNow = -1),
          (this.iNows = -1),
          this.http
            .get(`https://www.365msmk.com/api/app/courseBasis?`)
            .then(res => {
              this.curriculum = res.data.data.list;
              console.log("课程", this.curriculum);
            });
        this.$refs.hao.toggle();
      }
    },
    Click_to_sort(index) {
      this.iNowss = index;

      this.http
        .get(`https://www.365msmk.com/api/app/courseBasis?order_by=${index}`)
        .then(res => {
          this.curriculum = res.data.data.list;
          console.log("课程", this.curriculum);
        });
      this.$refs.haos.toggle();
    },
    Click_the_course_button(index, id) {
      this.iNowsss = index;
      this.http
        .get(`https://www.365msmk.com/api/app/courseBasis?course_type=${id}`)
        .then(res => {
          this.curriculum = res.data.data.list;
          console.log("课程", this.curriculum);
        });
      this.$refs.haoss.toggle();
    }
    // 下拉结束
  }
};
</script>

<style lang="scss">
.van-dropdown-item__content {
  position: absolute;
  display: flex;
  width: 7.5rem;
  flex-wrap: wrap;
  .filter {
    width: 7.1rem;
    padding: 0.2rem;
    height: 3.6rem;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 1.4rem;
        height: 0.66rem;
        margin: 0.2rem 0.15rem 0.2rem 0.2rem;
        line-height: 0.66rem;
        text-align: center;
        font-size: 0.24rem;
        color: #3a3a3a;
        background-color: #f5f5f5;
        border-radius: 0.06rem;
      }
      .activesss {
        color: seagreen;
      }
    }
  }
  .Sort {
    width: 7.1rem;
    padding: 0.2rem;
    ul {
      li {
        width: 7.1rem;
        height: 1rem;
        border-bottom: 0.01rem solid #f5f5f5;
        text-align: center;
        line-height: 1rem;
        color: #3a3a3a;

        font-size: 0.26rem;
      }
      .activess {
        color: fuchsia;
      }
    }
  }
  .classification {
    width: 7.1rem;
    padding: 0.2rem;
    height: 2rem;
    p {
      font-size: 0.24rem;
      margin-bottom: 0.1rem;
      color: #696969;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin: 0rem 0.17rem 0.17rem 0rem;
        font-size: 0.26rem;
        width: 1.6rem;
        color: #3a3a3a;
        text-align: center;
        line-height: 0.6rem;
        height: 0.6rem;
        border-radius: 0.06rem;
        background-color: #f5f5f5;
      }
      .active {
        color: red;
      }
    }
  }
  .Subject {
    width: 7.1rem;
    padding: 0.2rem;
    height: 2rem;
    p {
      font-size: 0.24rem;
      margin-bottom: 0.1rem;
      color: #696969;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin: 0rem 0.17rem 0.17rem 0rem;
        font-size: 0.26rem;
        width: 1.6rem;
        text-align: center;
        color: #3a3a3a;
        line-height: 0.6rem;
        height: 0.6rem;
        border-radius: 0.06rem;
        background-color: #f5f5f5;
      }
      .actives {
        color: #63b34a;
      }
    }
  }
  .btnS {
    width: 7.1rem;
    padding: 0.2rem;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    .van-button--default {
      width: 3rem;
    }
  }
}

.two {
  background-color: #f0f2f5;
}

.Class_opening ul li {
  width: 6.51rem;
  margin: 0 auto;
  border-radius: 0.08rem;
  height: 3.15rem;
  background-color: #fff;
  height: 3.17rem;
  padding: 0.28rem;
  display: flex;
  margin-bottom: 0.26rem;
  // align-items: center;
  // justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 0.26rem;

  .title {
    font-size: 0.28rem;
    width: 6.51rem;
    color: #333333;
    height: 0.46rem;
  }
  .titles {
    font-size: 0.23rem;
    width: 6.51rem;
    color: #666666;
  }
  .Nimgs {
    display: flex;
    width: 6.51rem;
    align-items: center;
    margin-bottom: 0.2rem;
    img {
      width: 0.56rem;
      height: 0.56rem;
      border-radius: 50%;
    }
    b {
      font-size: 0.23rem;
      color: #8c8c8c;
      margin-left: 0.14rem;
    }
  }
  .pepoles {
    display: flex;
    width: 6.51rem;
    align-items: center;
    justify-content: space-between;
    border-top: 0.03rem solid #f5f5f5;
    padding-top: 0.2rem;
    p {
      font-size: 0.24rem;
      color: #a2a2a2;
    }
    b {
      font-size: 0.3rem;
      color: #63b34a;
    }
  }
}
</style>