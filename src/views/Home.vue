<template>
  <router-link to="/About">About</router-link>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  data() {
    return {
      title: "title",
    };
  },
};
</script>

<style>
#set-height {
  display: block;
}
#v0 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

h1 {
}
</style>