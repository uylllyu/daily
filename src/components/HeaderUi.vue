<template>
  <div class="carousel" @click="top">
    <div class="carousel-left">
      <div class="date">
        <div>{{ currentDate }}</div>
        <div class="month">{{ currentMonth }}月</div>
      </div>
      <p>知乎日报</p>
    </div>
    <router-view></router-view>
    <router-link
    tag="div"
    to="/login"
    class="carousel-right"
    >
    <img src="../assets/img/account_avatar.png" alt="" />
    </router-link>
  </div>
</template>
  <script>
import number from "lodash-es/number";
export default {
    
  props: {
    currentMonth: String,
    currentDate: number,
  },
 
  methods: {
    top() {
      scrollTo(0, 0);
      console.log(this.currentMonth);
    },

  },
};
</script>

  <style lang="scss" scoped>
.carousel {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.9vw 4vw;
  background-color: #fff;
  .carousel-left {
    display: flex;
    align-items: center;
    .date {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-right: 3vw;
      border-right: 1.5px #999 solid;
      div {
        font-size: 5vw;
        color: #000;
      }
      .month {
        margin-top: 1vw;
        font-size: 3.5vw;
        color: #555;
      }
    }

    p {
      font-size: 5vw;
      color: #000;
      font-weight: 700;
      padding-left: 3vw;
    }
  }
  .carousel-right {
    img {
      width: 10vw;
      border-radius: 100vw;
    }
  }
}
</style>