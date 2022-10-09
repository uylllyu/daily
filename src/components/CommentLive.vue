<template>
  <div class="carousel">
    <div class="carousel-comments" v-for="c in comments.comments" :key="c.id">
      <div class="avatar"><img :src="c.avatar" /></div>
      <div>
        <div class="author">{{ c.author }}</div>
        <div class="comment-content">{{ c.content }}</div>
        <div class="reply" v-if="c.reply_to">
          //{{ c.reply_to.author }}: {{ c.reply_to.content }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    comments: Object,
  },
};
</script>
<style lang="scss" scoped>
.carousel {
  width: 100vw;
  min-height: 50vh;
  max-height: 60vh;
  .carousel-comments {
    display: flex;
    padding: 5vw 3.5vw;
    border-top: 1px #ccc solid;
    .avatar {
      margin-right: 3vw;
      img {
        width: 10vw;
        border-radius: 10vw;
      }
    }
    .author {
      font-size: 4.2vw;
      font-weight: 600;
      padding:  0 0 2vw;
    }

    .comment-content {
      font-size: 4vw;
      color: #000;
      line-height: 5.6vw;
    }
    .reply {
      font-size: 4vw;
      padding: 2vw 0;
      line-height: 5.6vw;
      color: #999;
    }
  }
}
</style>