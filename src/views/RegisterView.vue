<template>
  <div class="carousel">
    <div class="carousel-header">
      <div @click="back">
        <img src="../assets/img/4/ic_arrow_down_24dp.png" alt="" />
      </div>
    </div>
    <div class="carousel-form">
      <form action="">
        <div class="phone">
          <label>账号：<input type="text" placeholder="请输入账号" /></label>
        </div>
        <div class="password">
          <label>密码：<input type="password" placeholder="请输入密码" /></label>
        </div>
        <button class="login">注册</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.carousel {
  width: 100vw;
  margin-top: 1vw;
  .carousel-header {
    margin-bottom: 18vh;
    img {
      width: 10vw;
      transform: rotate(90deg);
    }
  }

  .carousel-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;

    .phone,
    .password {
      position: relative;
      margin: 8vw 0;
      font-size: 5vw;
      padding: 0;

      input {
        width: 50vw;
        height: 5vw;
        font-size: 4.5vw;
        padding: 0;
        outline: none;
        border: none;
        border-bottom: 1px #000 solid;
      }
    }
    .login {
      width: 100%;
      font-size: 4.5vw;
      padding: 2vw 5vw;
      background-color: #ccc;
      border: none;
    }
  }
  .login-bottom {
    margin-top: 1.5vh;
    display: flex;
    justify-content: space-between;
    width: 100%;

    div {
      font-size: 4vw;
    }
  }
}
</style>