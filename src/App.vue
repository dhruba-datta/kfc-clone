<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <Header />
    <!-- Offset the fixed header height (80px or h-20) -->
    <main class="flex-1 pt-20">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
