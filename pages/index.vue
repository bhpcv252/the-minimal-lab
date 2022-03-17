<template>
  <div class="coming-soon">
    <Header />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'ComingSoon',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>

.coming-soon {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

</style>
