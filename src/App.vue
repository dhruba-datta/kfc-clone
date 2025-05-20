<template>
  <div id="app">
    <Header @update-search="handleSearchUpdate" />
    
    <router-view :search-query="searchQuery" /> 

    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'; // Assuming you have a Footer component

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      searchQuery: '' // State to hold the search query
    };
  },
  methods: {
    // Method to update the searchQuery when Header emits the event
    handleSearchUpdate(query) {
      this.searchQuery = query;
    }
  }
};
</script>

<style>
/* Add any global styles here */
</style>