<template>
  <nav class="navbar">
    <router-link class="nav-link" to="/">Home page</router-link>
    <router-link class="nav-link" to="/About">About</router-link>
    <a href="https://github.com" class="nav-link">aa<img src="" alt="" /></a>
  </nav>
</template>

<script>

</script>

<style>
.navbar {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  height: 58px;
  width: 100%;
  z-index: 100;
  background-color: white;
  box-shadow: 0px 0px 12px 0px rgba(133, 133, 133, 0.397);
  transition: 0.2s;
}

.nav-link {
  text-decoration: none;
  float: left;
  color: var(--text-color);
  text-align: center;
  padding: 14px 16px;
  font-size: 17px;
}

.navbar-glass {
  width: 600px;
  border-radius: 15px;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.445);
  backdrop-filter: blur(30px);
  transition: 0.2s;
  color: white;
}
</style>