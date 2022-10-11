<template>
  <div class="carousel">
    <!-- 长评 -->
    <div v-if="longComments.comments">
      <div class="comment-length" v-if="longComments.comments.length">
        {{ longComments.comments.length }} 条长评
      </div>
      <div
        class="carousel-comments"
        v-for="(c, index) in longComments.comments"
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
              <div ref="heartLong" @click="chooseLong(index)">
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
                    d="M821.333333 800H547.584l-86.464 96.074667a32 32 0 1 1-47.573333-42.816l96-106.666667A32 32 0 0 1 533.333333 736h288a53.333333 53.333333 0 0 0 53.333334-53.333333V234.666667a53.333333 53.333333 0 0 0-53.333334-53.333334H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333334v448a53.333333 53.333333 0 0 0 53.333334 53.333333h138.666666a32 32 0 0 1 0 64H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V234.666667c0-64.8 52.533333-117.333333 117.333334-117.333334h618.666666c64.8 0 117.333333 52.533333 117.333334 117.333334v448c0 64.8-52.533333 117.333333-117.333334 117.333333zM704 341.333333a32 32 0 0 1 0 64H320a32 32 0 0 1 0-64h384zM512 512a32 32 0 0 1 0 64H320a32 32 0 0 1 0-64h192z"
                  />
                </svg>
              </div>
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
      <div
        class="carousel-comments"
        v-for="(c, index) in comments.comments"
        :key="c.id"
      >
        <div class="avatar"><img :src="c.avatar" /></div>
        <div class="comment-all">
          <div class="author">{{ c.author }}</div>
          <div class="comment-content">{{ c.content }}</div>
          <div class="reply" v-if="c.reply_to">
            <div v-if="c.reply_to.author&&c.reply_to.status == '0'">
              //{{ c.reply_to.author }}: {{ c.reply_to.content }}
            </div>
            <div v-if="c.reply_to.status == '1'">原评论以删除</div>
          </div>
          <div class="comment-bottom">
            <div class="time">{{ sendTime(c.time) }}</div>
            <div class="likes">
              <div ref="heart" @click="choose(index)">
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
              <div
                class="commentOther"
                @click="commentOther(c.author, c.content)"
              >
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-bottom"><div>已显示全部评论</div></div>
    <div class="carousel-sticky">
      <input type="text" v-model="inputText" @keyup.enter="sendComment()" />
      <div class="send-comment" @click="sendComment()">
        <img src="../assets/img/i/weibosdk_navigationbar_back.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    inputText: "",
    newComment: {
      avatar:
        "https://picx.zhimg.com/v2-1ae5f682bba916af97aaaddbf193a0f6_l.jpg?source=8673f162",
      author: "游客10086",
      content: "",
      // id: new Date().getTime()/1000 + Math.round(Math.random()*10),
      time: parseInt(new Date().getTime() / 1000),
      likes: 0,
      reply_to: {
        content: "",
        author: "",
        status: 0,
      },
    },
  }),

  props: {
    comments: Object,
    longComments: Object,
  },
  methods: {
    sendTime(times) {
      let time = parseInt(times + "000");

      let nowTime = new Date();
      let nowYear = nowTime.getFullYear();
      let nowMonth = nowTime.getMonth();
      let nowDate = nowTime.getDate();

      let betweenDate = "";

      let sendTime = new Date(time);
      let sendYear = sendTime.getFullYear();
      let sendMonth = sendTime.getMonth();
      let sendDate = sendTime.getDate();

      if (nowYear == sendYear) {
        if (nowMonth != sendMonth || nowDate != sendDate) {
          betweenDate = `${sendMonth + 1}-${sendDate}`;
        } else {
          betweenDate = `今天`;
        }
      } else {
        betweenDate = `${sendYear}-${sendMonth + 1}-${sendDate}`;
      }

      let sendHours = sendTime.getHours();
      let sendMin = sendTime.getMinutes();

      // console.log(betweenDate);

      return `${betweenDate} ${sendHours < 10 ? "0" + sendHours : sendHours}:${
        sendMin < 10 ? "0" + sendMin : sendMin
      }`;
    },
    sendComment() {
      this.newComment.content = this.inputText;
      console.log(this.newComment);
      this.$emit("send-comment", this.newComment);
      this.inputText = "";
      this.reply_to();
    },
    reply_to() {
      this.newComment.reply_to.content = "";
      this.newComment.reply_to.author = "";
    },
    choose(index) {
      if (this.$refs.heart[index].className == "") {
        this.$refs.heart[index].className = "thumbs-up";
        this.$refs.heart[index].lastChild.textContent =
          parseInt(this.$refs.heart[index].lastChild.textContent) + 1;
      } else {
        this.$refs.heart[index].className = "";
        this.$refs.heart[index].lastChild.textContent =
          parseInt(this.$refs.heart[index].lastChild.textContent) - 1;
      }
    },
    chooseLong(index) {
      if (this.$refs.heartLong[index].className == "") {
        this.$refs.heartLong[index].className = "thumbs-up";
        this.$refs.heartLong[index].lastChild.textContent =
          parseInt(this.$refs.heartLong[index].lastChild.textContent) + 1;
      } else {
        this.$refs.heartLong[index].className = "";
        this.$refs.heartLong[index].lastChild.textContent =
          parseInt(this.$refs.heartLong[index].lastChild.textContent) - 1;
      }
    },
    commentOther(authorOther, commentOther) {
      // console.log(commentOther);
      this.newComment.reply_to.content = commentOther;
      this.newComment.reply_to.author = authorOther;
      console.log(this.newComment);
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
        padding: 0 0 2vw 0;
        word-break: break-all;
      }
      .reply {
        font-size: 4vw;
        
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
        .time {
          color: #999;
        }

        .likes {
          color: #999;
          display: flex;
          justify-content: space-between;
          align-items: center;
          div {
            margin: 0 2vw;
          }
        }
        svg {
          width: 5vw;
          height: 5vw;
        }
        .thumbs-up {
          color: red;
          path {
            fill: red;
          }
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
    padding: 1vw 0;
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
      padding: 1vw 13vw 1vw 6vw;
      outline: none;
      border: none;
      border-radius: 10vw;
      color: #999;
      background-color: rgb(231, 231, 231);
    }

    .send-comment {
      position: absolute;
      right: 1vw;
      top: 50%;
      transform: translateY(-50%) rotateY(180deg);
      img {
        width: 9vw;
        height: 8vw;
      }
    }
  }
}
</style>