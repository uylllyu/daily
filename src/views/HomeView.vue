<template>
  <div>
    <HeaderUi
      :currentMonth="dateMonth"
      :currentDate="currentDate"
    />
    <CarouselUi
      :dataList="dataList"
      :currentIndex="currentIndex"
    />
    <StoriesUi
      @loadmore="loadmore"
      :dataList="dataList"
      :refresh="refresh"
      :beforeData="beforeData"
    />
  </div>
</template>
  <script>
import HeaderUi from "@/components/HeaderUi.vue";
import StoriesUi from "@/components/StoriesUi.vue";
import CarouselUi from "@/components/CarouselUi.vue";
import { monthChList } from "@/utils/dateMonth";
export default {
  data: () => ({
    dataList: {
      date: "",
      stories: [],
      topStories: [],
    },
    beforeData: [],
    timer: null,
    currentIndex: 0,
    currentMonth: new Date().getMonth(),
    currentDate: new Date().getDate(),
    beDate: "",
    refresh: false,
  }),
  components: {
    HeaderUi,
    StoriesUi,
    CarouselUi,
  },
  computed: {
    dateMonth(){
      return monthChList[this.currentMonth]
    },
    //上一张
    prevIndex() {
      if (this.currentIndex == 0) {
        return 5;
      } else {
        return this.currentIndex - 1;
      }
    },
    //下一张
    nextIndex() {
      if (this.currentIndex == 5) {
        return 0;
      } else {
        return this.currentIndex + 1;
      }
    },
  },
  created() {
    this.getData();
    this.timer = setInterval(() => {
      this.nextPic(this.nextIndex);
    }, 3000);
  },

  beforeDestroy(){
    this.timer=null
  },

  methods: {
    loadmore() {
      console.log(this.beDate);
      this.getBefore(this.beDate);
    },
    getData() {
      this.$axios
        .get("https://apis.netstart.cn/zhihudaily/stories/latest")
        .then(({ data }) => {
          // console.log(data);
          this.beDate = data.date;
          this.dataList.date = data.date;
          this.dataList.stories = data.stories;
          this.dataList.topStories = data.top_stories;
          // console.log(this.beDate);
          this.getBefore(this.beDate);
        });
    },
    getBefore(date) {
      this.refresh = true;
      this.$axios
        .get("https://apis.netstart.cn/zhihudaily/stories/before/" + date)
        .then(({ data }) => {
          this.beDate = data.date;
          this.beforeData = [
            ...this.beforeData,
            {
              date: data.date,
              stories: data.stories,
              topStories: data.top_stories,
            },
          ];
          this.$nextTick(() => {
            this.refresh = false;
          });
        });
    },

    nextPic() {
      this.currentIndex = (this.currentIndex + 1) % 5;
    },
   
  },
};
</script>
    
 
    