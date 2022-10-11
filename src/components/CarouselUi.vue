<template>
  <div class="carousel-container">
    <wd-swipe height="90vw">
      <wd-swipe-item
        v-for="topStory in dataList.topStories"
        class="carousel-content"
        :key="topStory.id"
      >
        <img :src="topStory.image" @click="getDataList(topStory.id)" />
        <div class="title-hint" @click="getDataList(topStory.id)">
          <div class="title">{{ topStory.title }}</div>
          <div class="hint">{{ topStory.hint }}</div>
        </div>
      </wd-swipe-item>
    </wd-swipe>
  </div>
</template>
<script>
import number from "lodash-es/number";

export default {
  props: {
    dataList: Object,
    currentIndex: number,
  },
  methods: {
    getDataList(id) {
      console.log(id);
      this.$router.push({ path: "/content", query: { id: id } });
    },
  },
};
</script>
<style lang="scss" scoped>
.carousel-container {
  width: 100vw;
  height: 90vw;
  .carousel-content {
    width: 100vw;
    position: relative;

    img {
      width: 100vw;
    }

    .title-hint {
      box-sizing: border-box;
      position: absolute;
      bottom: 0vw;
      width: 100vw;
      background-color: rgba(0, 0, 0, 0.381);
      padding: 3vw 4.5vw;
    }

    .title {
      font-size: 4.7vw;
      color: #fff;
      margin: 3.5vw 0;
    }

    .hint {
      font-size: 3vw;
      color: #ccc;
      margin: 4vw 0;
    }

  }
}
</style>>