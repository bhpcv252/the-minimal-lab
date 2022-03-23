<template>
  <div class="home">
    <Html lang="en-US">
    <Head>
      <Title>The Minimal Lab</Title>
      <Meta name="description" content="We Create Digital Experiences With Focus on Minimalism - The Minimal Lab" />
      <Meta name="keywords" content="Digital, Digital Experiences, Website, Design, Development, Studio, Minimal, Minimalist, Minimalism, Lab, Webgl, Animation, Business Website" />
    </Head>
    </Html>
    <Header />
    <div class="coming-soon">
      <div class="image-wrapper">
        <img src="~/assets/images/tape.png" class="tape" alt="tape">
      </div>
      <p class="para">
        We create digital
        experiences with
        focus on minimalism
      </p>
      <div class="contact">
        <div class="arrow-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="67" height="45.414" viewBox="0 0 67 45.414">
            <g data-name="Group 1814">
              <path data-name="Path 6202" d="M4996 944h66" transform="translate(-4996 -921.293)" style="fill:none;stroke:#292929;stroke-width:2px"/>
              <path data-name="Path 6203" d="m5012 928 22 22-22 22" transform="translate(-4968 -927.293)" style="stroke-linejoin:round;fill:none;stroke:#292929;stroke-width:2px"/>
            </g>
          </svg>
        </div>
        <div class="contact-email">
          <a href="mailto:hello@theminimallab.com">(HELLO@THEMINIMALLAB.COM)</a>
        </div>
      </div>
      <div class="big-text big-text-1">
        COMING SO
      </div>
      <div class="big-text big-text-2">
        ON
      </div>
      <div class="circle-wrapper">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@use './assets/styles/utils';
@use './assets/styles/variables';

.home {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 6.2037037% auto;
}

.coming-soon {
  width: 100%;
  height: 100%;
  position: relative;

  .image-wrapper {
    position: absolute;
    top: utils.pxToRem(208);
    left: utils.pxToRem(647);
    width: utils.pxToRem(511);
    height: utils.pxToRem(506);
    background-image: url("./assets/images/plants.png");
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: variables.$tabWidth + 'px') {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 35.4 * 1vh;
      height: 34.95 * 1vh;
    }

    @media (max-width: variables.$mobileWidth + 'px') {
      transform: translate(-50%, 0);
      top: 28.8009701%;
      width: utils.pxToRem(236, variables.$baseMobileFont);
      height: utils.pxToRem(233, variables.$baseMobileFont);
    }

    .tape {
      position: absolute;
      top: utils.pxToRem(-66.5);
      left: 50%;
      transform: translateX(-50%);
      width: utils.pxToRem(262);
      height: utils.pxToRem(119);

      @media (max-width: variables.$tabWidth + 'px') {
        top: -4.65 * 1vh;
        width: 18.15 * 1vh;
        height: 8.25 * 1vh;
      }

      @media (max-width: variables.$mobileWidth + 'px') {
        top: utils.pxToRem(-31, variables.$baseMobileFont);
        width: utils.pxToRem(121, variables.$baseMobileFont);
        height: utils.pxToRem(55, variables.$baseMobileFont);
      }
    }
  }

  .para {
    text-transform: uppercase;
    width: utils.pxToRem(510);
    position: absolute;
    bottom: utils.pxToRem(390);
    right: utils.pxToRem(133);
    line-height: normal;

    @media (max-width: variables.$mobileWidth + 'px') {
      width: utils.pxToRem(135, variables.$baseMobileFont);
      bottom: 21.6535294%;
      right: utils.pxToRem(42, variables.$baseMobileFont);
    }
  }

  .contact {
    text-transform: uppercase;
    width: utils.pxToRem(1438);
    position: absolute;
    bottom: utils.pxToRem(32);
    right: 0;
    display: grid;
    grid-template-columns: utils.pxToRem(66) auto;
    padding-bottom: utils.pxToRem(12.6);
    font-style: oblique;
    align-items: center;
    gap: utils.pxToRem(32);

    @media (max-width: variables.$mobileWidth + 'px') {
      width: utils.pxToRem(330, variables.$baseMobileFont);
      bottom: utils.pxToRem(14, variables.$baseMobileFont);
      grid-template-columns: utils.pxToRem(18, variables.$baseMobileFont) auto;
      padding-bottom: utils.pxToRem(4, variables.$baseMobileFont);
      gap: utils.pxToRem(12, variables.$baseMobileFont);
    }

    &::after {
      content: '';
      width: 100%;
      height: 1px;
      background-color: variables.$textColor;
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
    }

    .arrow-wrapper {

      svg {
        width: 100%;
        height: utils.pxToRem(44);

        @media (max-width: variables.$mobileWidth + 'px') {
          height: utils.pxToRem(12, variables.$baseMobileFont);
        }
      }
    }

    .contact-email {

      a {
        color: variables.$textColor;
        display: block;
      }
    }

  }

  .big-text {
    font-size: utils.pxToRem(344);
    position: absolute;
    letter-spacing: utils.pxToRem(-6.88);
    pointer-events: none;

    @media (max-width: variables.$mobileWidth + 'px') {
      font-size: utils.pxToRem(80, variables.$baseMobileFont);
      letter-spacing: utils.pxToRem(-1.6, variables.$baseMobileFont);
    }

    &-1 {
      top: utils.pxToRem(21);
      right: utils.pxToRem(533);
      width: utils.pxToRem(1380);
      line-height: utils.pxToRem(285);

      @media (max-width: variables.$mobileWidth + 'px') {
        width: utils.pxToRem(321, variables.$baseMobileFont);
        top: utils.pxToRem(16, variables.$baseMobileFont);
        right: utils.pxToRem(56, variables.$baseMobileFont);
        line-height: utils.pxToRem(70, variables.$baseMobileFont);
      }
    }

    &-2 {
      bottom: utils.pxToRem(65);
      left: utils.pxToRem(1411);
      width: utils.pxToRem(509);
      line-height: utils.pxToRem(249);

      @media (max-width: variables.$mobileWidth + 'px') {
        bottom: utils.pxToRem(26, variables.$baseMobileFont);
        left: utils.pxToRem(260, variables.$baseMobileFont);
        width: utils.pxToRem(119, variables.$baseMobileFont);
        line-height: utils.pxToRem(58, variables.$baseMobileFont);
      }
    }
  }

  .circle-wrapper {
    position: absolute;
    bottom: utils.pxToRem(32);
    left: utils.pxToRem(20);
    display: grid;
    grid-template-columns: 50% 50%;

    @media (max-width: variables.$mobileWidth + 'px') {
      bottom: utils.pxToRem(14, variables.$baseMobileFont);
      left: utils.pxToRem(16, variables.$baseMobileFont);
    }

    .circle {
      width: utils.pxToRem(64);
      height: utils.pxToRem(64);
      border-radius: 50%;
      background-color: variables.$textColor;

      @media (max-width: variables.$mobileWidth + 'px') {
        width: utils.pxToRem(16, variables.$baseMobileFont);
        height: utils.pxToRem(16, variables.$baseMobileFont);
      }
    }
  }
}

</style>
