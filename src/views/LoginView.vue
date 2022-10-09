<template>
  <div class="carousel">
    <div class="carousel-header">
      <div @click="back">
        <img src="../assets/img/4/ic_arrow_down_24dp.png" alt="" />
      </div>
    </div>
    <div class="carousel-mid">
      <div class="prompt">登录知乎日报</div>
      <p>选择登录方式</p>
      <div class="select-login">
        <div @click="login"><img src="../assets/img/zh-login.png" /></div>
        <!-- <router-view></router-view> -->
        <div><img src="../assets/img/eibo_logo.png" /></div>
      </div>
      <div class="accept">
        <div @click="agreeProtocol()">
          <transition-group name="showProtocol">
            <img
              key="no"
              v-show="!protocol"
              src="../assets/img/abc_btn_radio_to_on_mtrl_000.png"
              alt=""
            />

            <img
              key="yes"
              v-show="protocol"
              src="../assets/img/v4/abc_btn_radio_to_on_mtrl_015.png"
              alt=""
            />
          </transition-group>
        </div>

        <div>
          我同意<a href="">《知乎协议》</a>和<a href="">《个人信息保护指引》</a>
        </div>
        <wd-popup v-model="popupShow" :style="{ 'padding': '10px 40px' }"  closable>
          请同意用户协议
        </wd-popup>
      </div>
    </div>
    <div class="carousel-bottom">
      <div>
        <img src="" />
        <p>夜间模式</p>
      </div>
      <div>
        <img src="" />
        <p>设置</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    protocol: false,
    popupShow: false,
  }),
  methods: {
    back() {
      this.$router.go(-1);
    },
    agreeProtocol() {
      this.protocol = !this.protocol;
    },
    login() {
      if (this.protocol) {
        console.log("登录");
        this.$router.push({ path: "/registerLogin" });
      } else {
        console.log("请勾选");
        this.popupShow = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.showProtocol-enter {
  transform: scale(0.3);
}

.showProtocol-enter-active {
  transition: all 0.2s linear;
}

.showProtocol-enter-to {
  transform: scale(1);
}

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

    .prompt {
      color: #000;
      font-size: 7.2vw;
      font-weight: 600;
      margin-bottom: 3vh;
    }
    p {
      font-size: 4vw;
      color: #aaa;
    }
    .accept {
      display: flex;
      align-items: center;
      color: #aaa;
      font-size: 4vw;
      a {
        text-decoration: none;
        color: rgb(8, 8, 159);
      }
      img {
        width: 9vw;
      }
    }
    .select-login {
      margin: 4.1vh 0;
      display: flex;
      div {
        margin: 0 3vw;
      }
      img {
        width: 15vw;
        border-radius: 100vw;
      }
    }
  }
  .carousel-bottom {
    margin-top: 40vh;
    display: flex;
    justify-content: center;
    width: 100vw;
    font-size: 4.9vw;

    div {
      padding: 0 5vw;
    }
  }
}
</style>