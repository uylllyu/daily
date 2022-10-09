<template>
  <div>
    <div
      class="container"
      v-for="story in dataList.stories"
      :key="story.id"
      @click="getDataList(story.id)"
    >
      <div class="text">
        <p class="title">{{ story.title }}</p>
        <p class="hint">{{ story.hint }}</p>
      </div>
      <div class="image"><img :src="story.images" /></div>
    </div>

    <div v-for="beData in beforeData" :key="beData.date">
      <div class="beforeDate">
        <div>
          {{ beData.date.substring(4, 6) }}月{{ beData.date.substring(6, 8) }}日
        </div>
        <div class="line"></div>
      </div>
      <div
        class="container"
        v-for="story in beData.stories"
        :key="story.id"
        @click="getDataList(story.id)"
      >
        <div class="text">
          <p class="title">{{ story.title }}</p>
          <p class="hint">{{ story.hint }}</p>
        </div>
        <div class="image"><img :src="story.images" /></div>
      </div>
    </div>

    <wd-infinite-load
      ref="infinite"
      @loadmore="loadmore"
      :loading="refresh"
      v-if="beforeData.length"
    />
  </div>
</template>
<script>
export default {
  props: {
    dataList: Object,
    beforeData: Array,
    refresh: Boolean
  },
  methods: {
    loadmore(){
      this.$emit("loadmore",'')
    },
    getDataList(id) {
      console.log(id);
      this.$router.push({path:'/content',query:{id:id}})
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4vw;

  img {
    width: 20vw;
  }

  .text {
    padding-right: 2vw;
    .title {
      font-size: 4.2vw;
    }

    .hint {
      font-size: 3vw;
      padding: 3vw 0;
      color: #aaa;
    }
  }
}
.beforeDate {
  padding: 0 0 0 3vw;
  font-size: 4vw;
  color: #aaa;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .line {
    width: 75vw;
    height: 1px;
    background-color: #aaa;
  }
}
</style>