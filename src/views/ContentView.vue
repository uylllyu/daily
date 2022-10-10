<template>
  <div class="carousel">
    <div v-if="dataContent">
      <div class="carousel-top">
        <div><img :src="dataContent.image" /></div>
        <div class="title">{{ dataContent.title }}</div>
      </div>
      <div class="carousel-mid">
        <div v-html="dataContent.body"></div>
      </div>

      <div
        v-if="dataContent.section"
        class="section"
        @click="getSection(dataContent.section.id)"
      >
        <img :src="dataContent.section.thumbnail" />
        <div class="name-text">
          <div class="from">本文来自</div>
          <div>{{ dataContent.section.name }} · 合集</div>
        </div>
      </div>

      <div class="carousel-bottom">
        <div class="back" @click="back">
          <img src="../assets/img/4/ic_arrow_down_24dp.png" alt="" />
        </div>

        <div @click="getLongComment(dataContent.id)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            width="16px"
            height="16.00px"
            viewBox="0 0 1024 1024"
            version="1.1"
          >
            <path
              fill="#707070"
              d="M821.333333 800H547.584l-86.464 96.074667a32 32 0 1 1-47.573333-42.816l96-106.666667A32 32 0 0 1 533.333333 736h288a53.333333 53.333333 0 0 0 53.333334-53.333333V234.666667a53.333333 53.333333 0 0 0-53.333334-53.333334H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333334v448a53.333333 53.333333 0 0 0 53.333334 53.333333h138.666666a32 32 0 0 1 0 64H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V234.666667c0-64.8 52.533333-117.333333 117.333334-117.333334h618.666666c64.8 0 117.333333 52.533333 117.333334 117.333334v448c0 64.8-52.533333 117.333333-117.333334 117.333333zM704 341.333333a32 32 0 0 1 0 64H320a32 32 0 0 1 0-64h384zM512 512a32 32 0 0 1 0 64H320a32 32 0 0 1 0-64h192z"
            />
          </svg>
          <span>{{ extra.comments }}</span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            width="16px"
            height="16.00px"
            viewBox="0 0 1024 1024"
            version="1.1"
          >
            <path
              fill="#707070"
              d="M667.786667 117.333333C832.864 117.333333 938.666667 249.706667 938.666667 427.861333c0 138.250667-125.098667 290.506667-371.573334 461.589334a96.768 96.768 0 0 1-110.186666 0C210.432 718.368 85.333333 566.112 85.333333 427.861333 85.333333 249.706667 191.136 117.333333 356.213333 117.333333c59.616 0 100.053333 20.832 155.786667 68.096C567.744 138.176 608.170667 117.333333 667.786667 117.333333z m0 63.146667c-41.44 0-70.261333 15.189333-116.96 55.04-2.165333 1.845333-14.4 12.373333-17.941334 15.381333a32.32 32.32 0 0 1-41.770666 0c-3.541333-3.018667-15.776-13.536-17.941334-15.381333-46.698667-39.850667-75.52-55.04-116.96-55.04C230.186667 180.48 149.333333 281.258667 149.333333 426.698667 149.333333 537.6 262.858667 675.242667 493.632 834.826667a32.352 32.352 0 0 0 36.736 0C761.141333 675.253333 874.666667 537.6 874.666667 426.698667c0-145.44-80.853333-246.218667-206.88-246.218667z"
            />
          </svg>
          <span>{{ extra.popularity }}</span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            width="16px"
            height="16.00px"
            viewBox="0 0 1024 1024"
            version="1.1"
          >
            <path
              fill="#707070"
              d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24zM551.786667 756.032l170.976 106.24c2.624 1.621333 5.717333 2.122667 8.650666 1.408 6.410667-1.557333 10.56-8.426667 8.928-15.424l-46.485333-198.24a77.141333 77.141333 0 0 1 24.277333-75.733333L870.293333 441.706667c2.485333-2.165333 4.053333-5.312 4.330667-8.746667 0.565333-7.136-4.490667-13.173333-10.976-13.696l-199.712-16.288a75.989333 75.989333 0 0 1-64.064-47.168l-76.938667-188.16a12.309333 12.309333 0 0 0-6.538666-6.741333c-5.898667-2.496-12.725333 0.373333-15.328 6.741333l-76.949334 188.16a75.989333 75.989333 0 0 1-64.064 47.168l-199.701333 16.288a11.68 11.68 0 0 0-7.978667 4.181333 13.226667 13.226667 0 0 0 1.333334 18.261334l152.16 132.586666a77.141333 77.141333 0 0 1 24.277333 75.733334l-46.485333 198.229333a13.333333 13.333333 0 0 0 1.514666 9.877333c3.488 5.792 10.581333 7.530667 16.064 4.128l170.986667-106.229333a75.296 75.296 0 0 1 79.562667 0z"
            />
          </svg>
          <!-- <span>{{collection}}</span> -->
        </div>
        <div class="svgpic">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            width="16px"
            height="16.00px"
            viewBox="0 0 1024 1024"
            version="1.1"
          >
            <path
              fill="#707070"
              d="M395.946667 234.666667v64H256v469.333333h512V522.666667h64V768a64 64 0 0 1-64 64H256a64 64 0 0 1-64-64V298.666667a64 64 0 0 1 64-64h139.946667z m335.850666-87.914667l150.848 150.826667-158.378666 158.4-45.269334-45.248L748.394667 341.333333H672c-121.685333 0-220.714667 97.024-223.914667 217.941334L448 565.333333v85.333334h-64v-85.333334C384 406.272 512.938667 277.333333 672 277.333333h99.861333l-85.312-85.333333 45.248-45.248z"
            />
          </svg>
        </div>
      </div>
      <wd-popup v-model="commentsShow" position="bottom">
        <CommentLive :comments="comments" :longComments="longComments"></CommentLive>
      </wd-popup>
    </div>
  </div>
</template>

<script>
import CommentLive from "../components/CommentLive.vue";
export default {
  data: () => ({
    sectionList: {},
    // collection:'',
    dataContent: {},
    extra: {},
    comments: {},
    longComments:{},
    commentsShow: false,
  }),
  components: {
    CommentLive,
  },
  created() {
    console.log(this.$route.query);
    this.getDataContent(this.$route.query.id);
  },
  methods: {
    back() {
      // this.$router.push(`/`);
      this.$router.go(-1);
    },
    getDataContent(id) {
      this.dataContent = {};
      this.$axios
        .get("https://apis.netstart.cn/zhihudaily/story/" + id)
        .then(({ data }) => {
          this.dataContent = data.story;
          console.log(this.dataContent);
        });
      this.getExtra(id);
    },
    getExtra(id) {
      this.$axios
        .get("https://apis.netstart.cn/zhihudaily/story/" + id + "/extra")
        .then(({ data }) => {
          console.log(data);
          this.extra = data;
        });
    },
    getSection(id) {
      console.log(id);
      this.$router.push({ path: "/section", query: { id: id } });
    },
    getLongComment(id) {
      console.log(id);
      this.commentsShow = true;
      this.$axios
        .get(`https://apis.netstart.cn/zhihudaily/story/${id}/long-comments`)
        .then(({ data }) => {
          console.log(data);
          this.longComments = data;
        });
        this.getComment(id)
    },
    getComment(id) {
      this.commentsShow = true;
      this.$axios
        .get(`https://apis.netstart.cn/zhihudaily/story/${id}/short-comments`)
        .then(({ data }) => {
          console.log(data);
          this.comments = data;
        });
    },
  },
};
</script>
<style scoped>
@import url(./content.css);
</style>

<style lang="scss" scoped>
.carousel {
  position: relative;
  width: 100vw;
  .carousel-top {
    position: relative;
    height: 90vw;
    overflow: hidden;
    img {
      width: 100vw;
    }
    .title {
      position: absolute;
      bottom: -3.5vw;
      width: 100vw;
      background-color: rgba(0, 0, 0, 0.381);
      padding: 6vw 4.5vw 8vw;
      font-size: 4.7vw;
      color: #fff;
      margin-bottom: 3.5vw;
    }
  }
  .carousel-mid {
    width: 100vw;
    word-wrap: break-word;
  }
  .section {
    display: flex;
    align-items: center;
    margin: 10vw auto;
    width: 90vw;
    height: 25vw;
    border-radius: 4vw;
    background-color: rgb(201, 77, 5);
    overflow: hidden;
    img {
      width: 26vw;
      transform: rotate(19deg);
    }
    .name-text {
      margin-left: 8vw;
      .from {
        font-size: 3.5vw;
        color: #bbb;
        margin-top: 0vw;
        margin-bottom: 2vw;
      }
      div {
        font-size: 5vw;
        color: #fef;
        font-weight: 600;
      }
    }
  }
  .carousel-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    width: 100vw;
    padding: 3vw 4vw;
    font-size: 8vw;
    position: sticky;
    bottom: 0;
    left: 0;

    .back {
      padding-right: 3vw;
      border-right: 1.5px #aaa solid;
      img {
        width: 10vw;
        transform: rotate(90deg);
      }
    }
    .svgpic {
      padding-right: 3vw;
    }
    svg {
      width: 7vw;
      height: 7vw;
    }
    span {
      font-size: 4vw;
    }
  }
}

//css
</style>