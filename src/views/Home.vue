<template>
  <div class="home">
    <navbar/>
    <carousel/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Carousel from "../components/Carousel.vue";
export default {
  name: 'home',
  components: {
    Navbar,
    Carousel
  }
}
</script>
