<template>
  <div class="app-wrapper">
    <div id="app">
      <router-link :to="{name: 'home'}">Home</router-link>
      <router-link :to="{name: 'about'}">About</router-link>
      <router-link to="something">404</router-link>

      <main role="main" class="container">
        <router-view />
      </main>
      
    </div>

  </div>
</template>

<script>
// console.log(__filename);
export default {
  components: {
  },
}
</script>
