<template>
  <div class="home">
    <Header />
    <div class="coming-soon">
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
      line-height: utils.pxToRem(213);
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
