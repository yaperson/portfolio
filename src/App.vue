<script>
import navbar from './components/navbar.vue';

export default {
  components: {
    navbar: navbar
  }
}
</script>

<template>
  <header>
    <navbar></navbar>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style>
header {
  display: flex;
  flex-direction: column;
  min-height: 20vh;
}

</style>
