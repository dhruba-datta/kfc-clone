<template>
  <footer class="bg-gray-50 text-gray-600 text-sm border-t border-gray-200">
    <div class="container mx-auto px-4 py-6">
      <div class="md:flex md:justify-between md:items-start text-center md:text-left">
        
        <!-- Company Info Links -->
        <div class="mb-6 md:mb-0">
          <h2 class="font-semibold text-gray-800 mb-2">Company information</h2>
          <div class="flex flex-wrap justify-center md:justify-start gap-4 text-gray-500">
            <a href="#" class="hover:text-red-600">User agreement</a>
            <a href="#" class="hover:text-red-600">Contacts</a>
            <a href="#" class="hover:text-red-600">Delivery</a>
            <a href="#" class="hover:text-red-600">FAQ</a>
            <a href="#" class="hover:text-red-600">Become a partner</a>
            <a href="#" class="hover:text-red-600">Become a courier</a>
            <a href="#" class="hover:text-red-600">Eats for Business</a>
            <a href="#" class="hover:text-red-600">Plastic recycling</a>
            <a href="#" class="hover:text-red-600">Order food in the KFC app</a>
            <a href="#" class="hover:text-red-600 flex items-center justify-center md:justify-start">
              <font-awesome-icon icon="fa-solid fa-envelope" class="mr-1" />
              Feedback
            </a>
          </div>
        </div>

        <!-- Author Info -->
        <div class="mt-6 md:mt-0 text-center md:text-right">
          <p class="mb-2 text-gray-500">&copy; 2025 KFC Manasa. All rights reserved.</p>
          <a
            href="https://dhruba-datta.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1.5 rounded-full transition"
          >
            Created by Dhruba Datta
            <font-awesome-icon icon="fa-brands fa-github" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
