<template>
  <div class="header">
    <div class="container">
      <div class="left-col">
        The Minimal Lab
      </div>
      <div class="right-col">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g data-name="Group 1789">
            <path data-name="Path 6076" d="M7550-3513h24" transform="translate(-7550 3525)" style="fill:none;stroke:#292929"/>
            <path data-name="Path 6077" d="M7550-3513h24" transform="rotate(90 2024.5 -5525.5)" style="fill:none;stroke:#292929"/>
          </g>
        </svg>
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
    align-items: center;

    .left-col {
      font-size: utils.pxToRem(15);
      line-height: 1;
      padding: utils.pxToRem(26) 0 utils.pxToRem(26) 0;
      position: relative;

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
      padding: utils.pxToRem(21) 0 utils.pxToRem(22) 0;
      position: relative;

      &::after {
        content: '';
        height: 100%;
        width: 1px;
        background-color: variables.$textColor;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
      }

      svg {
        width: utils.pxToRem(24);
        height: utils.pxToRem(24);
        margin: 0 0 0 auto;
      }
    }
  }
}

</style>
