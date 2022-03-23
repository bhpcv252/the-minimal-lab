<template>
  <div class="header">
    <div class="container">
      <div class="left-col">
        The Minimal Lab
      </div>
      <div class="right-col">
        <div class="plus-wrapper">
          <div class="line line-v"></div>
          <div class="line line-h"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Header = {
  name: 'Header'
}

export default Header
</script>

<style lang="scss" scoped>
@use './assets/styles/utils';
@use './assets/styles/variables';

.header {
  position: relative;

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

  .container {
    display: grid;
    grid-template-columns: utils.pxToRem(319) utils.pxToRem(118);
    justify-content: space-between;
    height: 100%;

    @media (max-width: variables.$tabWidth + 'px') {
      grid-template-columns: utils.pxToRem(429) utils.pxToRem(218);
    }

    @media (max-width: variables.$mobileWidth + 'px') {
      grid-template-columns: utils.pxToRem(292, variables.$baseMobileFont) auto;
      justify-content: unset;
      align-items: unset;
    }

    .left-col {
      font-size: utils.pxToRem(15);
      line-height: 1;
      position: relative;
      text-transform: uppercase;
      height: 100%;
      display: grid;
      align-items: center;

      @media (max-width: variables.$tabWidth + 'px') {
        font-size: utils.pxToRem(34);
      }

      @media (max-width: variables.$mobileWidth + 'px') {
        font-size: utils.pxToRem(15, variables.$baseMobileFont);
      }

      &::after {
        content: '';
        height: 100%;
        width: 1px;
        background-color: variables.$textColor;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
      }
    }

    .right-col {
      position: relative;
      height: 100%;
      display: grid;
      align-items: center;

      &::after {
        content: '';
        height: 100%;
        width: 1px;
        background-color: variables.$textColor;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;

        @media (max-width: variables.$mobileWidth + 'px') {
          content: unset;
        }
      }

      .plus-wrapper {
        position: relative;
        width: utils.pxToRem(24);
        height: utils.pxToRem(24);
        margin: 0 0 0 auto;

        @media (max-width: variables.$tabWidth + 'px') {
          width: utils.pxToRem(54);
          height: utils.pxToRem(54);
        }

        @media (max-width: variables.$mobileWidth + 'px') {
          width: utils.pxToRem(20, variables.$baseMobileFont);
          height: utils.pxToRem(20, variables.$baseMobileFont);
        }

        .line {
          background-color: variables.$textColor;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          &-v {
            height: 100%;
            width: 1px;
          }

          &-h {
            width: 100%;
            height: 1px;
          }
        }
      }
    }
  }
}

</style>
