<template>
  <div class="carousel">
    <div class="carousel-header">
      <div @click="back">
        <img src="../assets/img/4/ic_arrow_down_24dp.png" alt="" />
      </div>
    </div>
    <div class="carousel-mid">
      <div class="carousel-form">
        <div class="login-select">
          <div :class="show==true?'border-bottom':''" @click="show=true">验证码登录</div>
          <div :class="show==false?'border-bottom':''" @click="show=false">密码登录</div>
        </div>
        <form action="" v-show="show">
          <div class="phone">
            <label>手机号：<input type="text" placeholder="请输入手机号" /></label>
          </div>
          <div class="password">
            <label>验证码：<input type="text" placeholder="请输入验证码" /></label>
            <div class="send">发送验证码</div>
          </div>
          <button class="login">登录</button>
          <div class="login-bottom">
          </div>
        </form>

        <form action="" v-show="!show">
          <div class="phone">
            <label>账号：<input type="text" placeholder="请输入账号" /></label>
          </div>
          <div class="password">
            <label>密码：<input type="password" placeholder="请输入密码" /></label>
          </div>
          <button class="login">登录</button>
          <div class="login-bottom">
            <div>找回密码</div>
            <div @click="register">注册</div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data:()=>({
        show:true
    }),
   
  methods: {
    back() {
      this.$router.go(-1);
    },
   
    register(){
        this.$router.push({path:'/register'})
    }

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
  .carousel-mid {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    .carousel-form {
      .login-select {
        display: flex;
        justify-content: space-around;
        margin-bottom: 6vw;
        
        font-size: 6vw;
        div{
            padding: 4px 0;
        }
        .border-bottom{
            border-bottom: 2px #000 solid;
        }
      }
      .phone,
      .password {
        position: relative;
        margin: 8vw 0;
        font-size: 5vw;
        padding: 0;
        .send{
            position: absolute;
            top: -1.3vw;
            right: 0vw;
            font-size: 3.6vw;
            padding: 1vw;
            border: 1px #000 solid;
            border-radius: 5vw;
        }
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