<template>
  <doc-header-jdt></doc-header-jdt>
  <div class="doc-jdt">
    <div class="doc-jdt-content">
      <div class="content-main">
        <div class="content-left">
          <div class="content-title">NutUI-JDT</div>
          <div class="content-subTitle">京东科技移动端组件库</div>
          <div class="content-desc">
            <i></i>
            <span>一处代码 多端运行</span>
          </div>

          <div class="content-button">
            <div class="leftButton">
              <a class="leftButtonText" href="#/zh-CN/guide/intro-jdt">开始使用</a>
            </div>
            <div class="rightButton">
              <div class="rightButtonText">扫码体验</div>

              <div class="qrcodepart">
                <div class="qrcode-text"> 请使用手机扫码体验 </div>
                <div class="qrcode qrcode-vue"> </div>
              </div>
            </div>
            <iframe
              style="margin-left: 12px"
              src="https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui&type=star&count=true&size=large"
              frameborder="0"
              scrolling="0"
              width="170"
              height="30"
              title="GitHub"
            ></iframe>
          </div>
          <div class="doc-ball ball0"><div></div></div>
        </div>
        <div class="content-ball">
          <div class="ball-main"></div>
        </div>
      </div>
      <div class="content-bottom">
        <div class="content-bottom-item">
          <img src="@/docs_jdt/assets/images/bottom-icon1.png" alt="" />
          <div class="content-bottom-text">
            <h2>京东科技风格</h2>
            <p>遵循京东科技体系 App 设计规范视觉、交互、功能一致性</p>
          </div>
        </div>
        <div class="content-bottom-item">
          <img src="@/docs_jdt/assets/images/bottom-icon2.png" alt="" />
          <div class="content-bottom-text">
            <h2>适配多端</h2>
            <p>基于 Taro 轻松开发多端小程序一处代码搞定多端</p>
          </div>
        </div>
        <div class="content-bottom-item">
          <img src="@/docs_jdt/assets/images/bottom-icon3.png" alt="" />
          <div class="content-bottom-text">
            <h2>组件丰富</h2>
            <p>70+ 组件，覆盖多数业务场景满足开发需求</p>
          </div>
        </div>
      </div>
    </div>
    <div class="ball-group">
      <div class="doc-ball ball1"><div></div></div>
      <div class="doc-ball ball2"><div></div></div>
      <div class="doc-ball ball3"><div></div></div>
      <div class="doc-ball ball4"><div></div></div>
      <div class="doc-ball ball5"><div></div></div>
      <div class="doc-ball ball6"><div></div></div>
      <div class="doc-ball ball7"><div></div></div>
    </div>
  </div>
  <div class="footer-jdt">
    <p>Copyright © 2018~2022 京东零售平台产品主站体验设计部 & 京东科技企业金融研发部</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Header from './Header.vue';
import 'swiper/swiper.min.css';
import Footer from '@/components/Footer.vue';
export default defineComponent({
  name: 'main',
  components: {
    [Header.name]: Header
  }
});
</script>

<style lang="scss" scoped>
.footer-jdt {
  display: flex;
  font-size: 12px;
  background-color: #1d1d21;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 100px;
}

@font-face {
  font-family: JDZhengHT;
  src: url(https://storage.360buyimg.com/qy-base/fonts/JDZhengHT-Blod.ttf);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeInBottom {
  from {
    opacity: 0;
    transform: translate3d(0, 50%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInZoom {
  from {
    opacity: 0;
    transform: scale(0.45);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes rotateMain {
  from {
    transform: rotate(0deg) translateY(25px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateY(25px) rotate(-360deg);
  }
}

@keyframes rotateType1 {
  from {
    transform: rotate(0deg) translateY(-25px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateY(-25px) rotate(-360deg);
  }
}

@keyframes rotateType2 {
  from {
    transform: rotate(0deg) translateY(-50px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateY(-50px) rotate(-360deg);
  }
}

@keyframes rotateType3 {
  from {
    transform: rotate(360deg) translateY(-25px) rotate(-360deg);
  }
  to {
    transform: rotate(0deg) translateY(-25px) rotate(0deg);
  }
}

@keyframes rotateType4 {
  from {
    transform: rotate(0deg) translateY(-35px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateY(-35px) rotate(-360deg);
  }
}

.doc-jdt {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  top: -64px;
  background: bottom/contain no-repeat url('@/docs_jdt/assets/images/bottom-bg.png'),
    linear-gradient(221deg, #f2fffc 10%, #ffffff 100%);
  &-content {
    min-width: 1200px;
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    font-family: PingFangSC;
  }
}
.content-main {
  width: 1200px;
  display: flex;
  margin: 160px auto 100px;
  z-index: 4;
}

.content-ball {
  position: relative;
  .ball-main {
    position: absolute;
    z-index: 1;
    width: 390px;
    height: 390px;
    left: 100px;
    top: -100px;
    background-image: url('//storage.jd.com/ued-library/nutui-jdt-ball.png');
    animation: rotateMain 30s linear 0s infinite forwards;
  }
}

.content-left {
  position: relative;
  .content-title {
    font-size: 72px;
    font-weight: bold;
    animation: fadeIn 0.5s both;
    font-family: JDZhengHT;
  }

  .ball0 {
    width: 600px;
    height: 624px;
    left: -220px;
    top: -220px;
    z-index: -1;
    div {
      background-image: url('@/docs_jdt/assets/images/ball-group.png');
      animation: rotateType1 10s linear 0s infinite forwards;
    }
  }

  .content-subTitle {
    margin-top: 10px;
    font-size: 40px;
    font-weight: normal;
    color: rgba(0, 0, 0, 1);
    animation: fadeInBottom 0.52s both 0.12s;
  }

  .content-desc {
    display: flex;
    align-items: center;
    margin-top: 16px;
    animation: fadeInBottom 0.52s both 0.24s;
    i {
      display: inline-block;
      width: 22px;
      height: 28px;
      background: url('@/docs_jdt/assets/images/icon-gif.png');
      margin-right: 6px;
      margin-left: 3px;
      animation: fadeInZoom 0.44s both 0.87s;
    }
    span {
      line-height: 30px;
      font-size: 20px;
      color: rgba(0, 0, 0, 0.45);
    }
  }
  .content-button {
    position: relative;
    display: flex;
    margin-top: 70px;
    iframe {
      align-self: center;
      animation: fadeInBottom 0.52s both 1.3s;
    }
    .leftButton {
      display: flex;
      width: 120px;
      height: 40px;
      background: rgba(44, 104, 255, 1);
      border-radius: 2px;
      cursor: pointer;
      animation: fadeInBottom 0.52s both 0.8s;
      .leftButtonText {
        align-self: center;
        margin: auto;
        font-size: 16px;
        color: rgba(255, 255, 255, 1);
      }
    }
    .rightButton {
      display: flex;
      position: relative;
      margin-left: 12px;
      width: 120px;
      height: 40px;
      border: 1px solid rgba(44, 104, 255, 1);
      border-radius: 2px;
      cursor: pointer;
      animation: fadeInBottom 0.52s both 1.1s;
      .rightButtonText {
        align-self: center;
        font-size: 16px;
        margin: auto;
        color: rgba(44, 104, 255, 1);
      }
      &:hover {
        .qrcodepart {
          display: block;
        }
      }
    }
    .qrcodepart {
      display: none;
      position: absolute;
      right: -20px;
      top: 50px;
      padding: 4px;
      width: 166px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 4px 10px 10px rgba(0, 0, 0, 0.11);
      .qrcode-text {
        font-size: 14px;
        color: rgba(51, 51, 51, 1);
        text-align: center;
      }
      .qrcode {
        width: 160px;
        height: 160px;
        margin: 0 auto;

        &.qrcode-vue {
          background: url(https://img11.360buyimg.com/imagetools/jfs/t1/115715/25/28361/11512/628e1be0Ea995cff0/a8d3a6ccccb5bd56.png)
            no-repeat;
          background-size: cover;
        }
      }
    }
  }
}

.content-bottom {
  display: flex;
  flex: 1;
  width: 1200px;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  &-item {
    display: flex;
    width: 340px;
    height: 120px;
    z-index: 3;
    align-items: center;
    animation: fadeInBottom 0.56s both 1.56s;
    img {
      width: 120px;
      height: 120px;
    }
  }
  &-text {
    margin-left: 10px;
    h2 {
      font-size: 20px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.85);
    }
    p {
      font-size: 14px;
      margin-top: 14px;
      font-weight: normal;
      color: rgba(0, 0, 0, 0.45);
    }
  }
}

.doc-ball {
  position: absolute;
  z-index: 1;
  div {
    position: relative;
    width: 100%;
    height: 100%;
    background: center / contain no-repeat url('@/docs_jdt/assets/images/ball-right3.png');
  }
}

.ball1 {
  left: 42%;
  top: -170px;
  width: 400px;
  height: 400px;
  div {
    background-image: url('@/docs_jdt/assets/images/ball-right1.png');
    animation: rotateType2 30s linear 0s infinite forwards;
  }
}

.ball2 {
  left: 74%;
  top: 20px;
  width: 55px;
  height: 55px;
  div {
    background-image: url('@/docs_jdt/assets/images/ball-right2.png');
    animation: rotateType1 20s linear 0s infinite forwards;
  }
}

.ball3 {
  left: 70%;
  top: 125px;
  width: 150px;
  height: 150px;
  div {
    background-image: url('@/docs_jdt/assets/images/ball-right3.png');
    animation: rotateType3 30s linear 0s infinite forwards;
  }
}

.ball4 {
  left: 84%;
  top: 300px;
  width: 314px;
  height: 314px;
  div {
    background-image: url('@/docs_jdt/assets/images/ball-right4.png');
    animation: rotateType4 30s linear 0s infinite forwards;
  }
}

.ball5 {
  left: 78%;
  top: 500px;
  width: 55px;
  height: 55px;
  div {
    background-image: url('@/docs_jdt/assets/images/ball-right5.png');
    animation: rotateType3 30s linear 0s infinite forwards;
  }
}

.ball6 {
  left: 42%;
  top: 380px;
  width: 150px;
  height: 150px;
  div {
    background-image: url('@/docs_jdt/assets/images/ball-right6.png');
    animation: rotateType3 40s linear 0s infinite forwards;
  }
}

.ball7 {
  left: 70%;
  top: 350px;
  width: 50px;
  height: 50px;
  div {
    background-image: url('@/docs_jdt/assets/images/ball-right7.png');
    animation: rotateType1 20s linear 0s infinite forwards;
  }
}
</style>
