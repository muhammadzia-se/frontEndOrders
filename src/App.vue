<template>
  <div class="container">
    <Header 
      title="Orders View" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }

}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
  body {
    font-family: 'Poppins', sans-serif;
  }
</style>
