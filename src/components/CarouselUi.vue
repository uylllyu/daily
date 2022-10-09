<template>
    <div class="carousel-container">
      <div class="carousel">
        <div
          class="carousel-content"
          v-for="(topStory, i) in dataList.topStories"
          :key="topStory.id"
          @click="getDataList(topStory.id)"
          v-show="currentIndex == i"
        >
          <img :src="topStory.image" />
          <div>
            <p class="title">{{ topStory.title }}</p>
            <p class="hint">{{ topStory.hint }}</p>
          </div>
        </div>
        </div>
      <div class="dots"></div>
    </div>
</template>
<script>
import number from 'lodash-es/number';

export default {
  props: {
    dataList: Object,
    currentIndex:number,
  },
  methods:{
    getDataList(id){
      this.$router.push({path:'/content',query:{id:id}})
      // console.log(id);
     
    }
  }
};
</script>
<style lang="scss" scoped>
  .carousel-container {
    width: 100vw;
    height: 90vw;
    overflow: hidden;
  
    .carousel {
      width: 500vw;
      display: flex;
    }
  
    .carousel-content {
      width: 100vw;
      position: relative;
  
      img {
        width: 100vw;
      }
  
      div {
        box-sizing: border-box;
        position: absolute;
        bottom: 10vw;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.381);
        padding: 3vw 4.5vw;
      }
  
      .title {
        font-size: 4.7vw;
        color: #fff;
        margin-bottom: 3.5vw;
      }
  
      .hint {
        font-size: 3vw;
        color: #ccc;
        margin-bottom: 4vw;
      }
    }
  }
  </style>>