<template>
  <div class="carousel">
    <div class="carousel-top">
      <div class="back" @click="back">
        <img src="../assets/img/4/ic_arrow_down_24dp.png" />
      </div>
      <div class="name-title">{{ sectionList.name }} · 合集</div>
    </div>

    <div class="section" v-for="s in sectionList.stories" :key="s.id" @click="sectionContent(s.id)">
      <div>
        <div>{{ s.title }}</div>
        <div class="date">{{ s.display_date }}</div>
      </div>
      <div><img :src="s.images" /></div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    sectionList: {},
    extra:{}
  }),
  created(){
    this.getSection(this.$route.query.id)
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    sectionContent(id){
        console.log(id);
        this.$router.push({path:'/content',query:{id:id}})
    },
    getSection(id) {
      console.log(id);
      this.$axios
        .get("https://apis.netstart.cn/zhihudaily/section/" + id)
        .then(({ data }) => {
          console.log(data);
          this.sectionList = data;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  .carousel-top {
    display: flex;
    position: sticky;
    top: 0;
    left: 0;
    background-color: #fff;
    border-bottom: 1px #ccc solid;
    align-items: center;
    .back {
      padding: 1.2vw 0;
      img {
        width: 10vw;
        transform: rotate(90deg);
      }
    }
    .name-title {
      margin-left: 41vw;
      transform: translateX(-50%);
      font-size: 5vw;
    }
  }

  .section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3vw;
    border-bottom: 1px #ccc solid;
    font-size: 4vw;
    .date {
      font-size: 3vw;
      padding: 3vw 0 1vw;
    }
    img {
      width: 20vw;
    }
  }
}
</style>