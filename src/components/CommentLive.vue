<template>
  <div class="carousel">
    <!-- 长评 -->
    <div v-if="longComments.comments">
      <div class="comment-length" v-if="longComments.comments.length">
        {{ longComments.comments.length }} 条长评
      </div>
      <div
        class="carousel-comments"
        v-for="c in longComments.comments"
        :key="c.id"
      >
        <div class="avatar"><img :src="c.avatar" /></div>
        <div class="comment-all">
          <div class="author">{{ c.author }}</div>
          <div class="comment-content">{{ c.content }}</div>
          <div class="reply" v-if="c.reply_to">
            <div v-if="c.reply_to.status == '0'">
              //{{ c.reply_to.author }}: {{ c.reply_to.content }}
            </div>
            <div v-if="c.reply_to.status == '1'">原评论以删除</div>
          </div>
          <div class="comment-bottom">
            <div class="time">{{ sendTime(c.time) }}</div>
            <div class="likes">
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
              {{ c.likes }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 短评 -->
    <div v-if="comments.comments">
      <div class="comment-length" v-if="comments.comments.length">
        {{ comments.comments.length }} 条短评
      </div>
      <div class="carousel-comments" v-for="c in comments.comments" :key="c.id">
        <div class="avatar"><img :src="c.avatar" /></div>
        <div class="comment-all">
          <div class="author">{{ c.author }}</div>
          <div class="comment-content">{{ c.content }}</div>
          <div class="reply" v-if="c.reply_to">
            <div v-if="c.reply_to.status == '0'">
              //{{ c.reply_to.author }}: {{ c.reply_to.content }}
            </div>
            <div v-if="c.reply_to.status == '1'">原评论以删除</div>
          </div>
          <div class="comment-bottom">
            <div class="time">{{ sendTime(c.time) }}</div>
            <div class="likes">
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
              {{ c.likes }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-bottom"><div>显示全部评论</div></div>
    <div class="carousel-sticky"><input type="text" /></div>
  </div>
</template>
<script>
export default {
  props: {
    comments: Object,
    longComments: Object,
  },
  methods: {
    sendTime(times) {
      let time = times + "000";

      let nowTime = new Date().getTime();
      console.log(time);
      console.log(nowTime);

      let betweenDate = nowTime - parseInt(time);
      console.log(betweenDate);
      let sendDate = "";
      if (parseInt(betweenDate / 86400000) == 0) {
        sendDate = "今天";
      } else {
        sendDate = parseInt(betweenDate / 86400000) + "天前";
      }
      console.log(sendDate);

      let sendTime = new Date(times);
      let sendHours = sendTime.getHours();
      let sendMin = sendTime.getMinutes();
      return `${sendDate} ${sendHours}:${sendMin}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.carousel {
  width: 100vw;
  max-height: 60vh;
  .comment-length {
    padding: 4vw 3.5vw;
    font-size: 4.2vw;
    font-weight: 600;
    border-top: 1px #ccc solid;
  }
  .carousel-comments {
    display: flex;
    padding: 5vw 3.5vw 3.2vw;
    border-top: 1px #ccc solid;

    .comment-all {
      flex: 1;
      .author {
        font-size: 4.2vw;
        font-weight: 600;
        padding: 0 0 2vw;
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
      .comment-bottom {
        display: flex;
        margin-top: 5vw;
        padding: 0 1vw;
        font-size: 3.5vw;
        justify-content: space-between;
        align-items: center;

        svg {
          width: 5vw;
          height: 5vw;
        }
      }
    }
    .avatar {
      margin-right: 3vw;
      img {
        width: 10vw;
        border-radius: 10vw;
      }
    }
  }
  .carousel-bottom {
    display: flex;
    justify-content: center;
    font-size: 4.2vw;
    padding: 6vw;
    color: #ccc;
    border-top: 1px #ccc solid;
  }
  .carousel-sticky {
    position: sticky;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    input {
      box-sizing: border-box;
      width: 100%;
      height: 10vw;
      font-size: 6vw;
      padding: 1vw 6vw;
      outline: none;
      border: none;
      border-radius: 10vw;
      color: #999;
      background-color: rgb(231, 231, 231);
    }
  }
}
</style>