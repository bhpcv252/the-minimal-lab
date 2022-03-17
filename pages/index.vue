<template>
  <div class="home">
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
          (Contact Us)
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

    .tape {
      position: absolute;
      top: utils.pxToRem(-66.5);
      left: 50%;
      transform: translateX(-50%);
      width: utils.pxToRem(262);
      height: utils.pxToRem(119);
    }
  }

  .para {
    text-transform: uppercase;
    width: utils.pxToRem(510);
    position: absolute;
    bottom: utils.pxToRem(390);
    right: utils.pxToRem(133);
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
      }
    }
  }

  .big-text {
    font-size: utils.pxToRem(344);
    position: absolute;
    letter-spacing: utils.pxToRem(-6.88);

    &-1 {
      top: utils.pxToRem(21);
      left: utils.pxToRem(20);
      width: utils.pxToRem(1380);
      line-height: utils.pxToRem(285);
    }

    &-2 {
      bottom: utils.pxToRem(65);
      left: utils.pxToRem(1411);
      width: utils.pxToRem(509);
      line-height: utils.pxToRem(249);
    }
  }

  .circle-wrapper {
    position: absolute;
    bottom: utils.pxToRem(32);
    left: utils.pxToRem(20);
    display: grid;
    grid-template-columns: 50% 50%;

    .circle {
      width: utils.pxToRem(64);
      height: utils.pxToRem(64);
      border-radius: 50%;
      background-color: variables.$textColor;
    }
  }
}

</style>
