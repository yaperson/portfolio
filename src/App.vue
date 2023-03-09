<script>
import navbar from './components/navbar.vue';
import videoplayer from './components/videoplayer.vue';

export default {
  components: {
    navbar: navbar,
    videoplayer: videoplayer
  }
}
</script>

<template>
  <header>
    <navbar></navbar>
  </header>

  <main>
    <div class="view">
      <router-view  />
    </div>
    <div class="video-container">
      <videoplayer />
    </div>
  </main>
</template>

<style>
header {
  display: flex;
  flex-direction: column;
  min-height: 20vh;
}
.view {
  z-index: 100;
}
</style>
