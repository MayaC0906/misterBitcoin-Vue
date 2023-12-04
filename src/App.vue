<script >
import AppHeader from "../src/cmps/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
};
</script>

<template>
<section class="main-app">
  <app-header />
  <RouterView />
</section>
</template>

<style lang='scss'>
.main-app {
  display: flex;
  flex-direction: column;
  width: 100vw;
}
</style>
