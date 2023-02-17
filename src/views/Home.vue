<template>
    <router-link to="/About">About</router-link>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
    data() {
        return {
            title: "title"
        }
    },
}
</script>

<style>
    body {
        height: 110vh;
    }
</style>