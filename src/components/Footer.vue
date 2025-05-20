<template>
  <footer class="bg-gray-50 text-gray-600 border-t border-gray-200">
    <div class="container mx-auto px-6 py-14">
      <!-- Main Links Section -->
      <div class="mb-14">
        <h2 class="text-xl font-semibold text-gray-800 mb-8 flex items-center">
          <font-awesome-icon icon="fa-solid fa-building" class="mr-3 text-red-500 text-2xl" />
          <span class="text-2xl">Company Information</span>
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          <div class="space-y-4">
            <a href="#" class="flex items-center hover:text-red-600 transition-colors text-base">
              <font-awesome-icon icon="fa-solid fa-file-signature" class="mr-3 w-5" />
              User agreement
            </a>
            <a href="#" class="flex items-center hover:text-red-600 transition-colors text-base">
              <font-awesome-icon icon="fa-solid fa-address-book" class="mr-3 w-5" />
              Contacts
            </a>
          </div>
          
          <div class="space-y-4">
            <a href="#" class="flex items-center hover:text-red-600 transition-colors text-base">
              <font-awesome-icon icon="fa-solid fa-truck" class="mr-3 w-5" />
              Delivery
            </a>
            <a href="#" class="flex items-center hover:text-red-600 transition-colors text-base">
              <font-awesome-icon icon="fa-solid fa-question-circle" class="mr-3 w-5" />
              FAQ
            </a>
          </div>
          
          <div class="space-y-4">
            <a href="#" class="flex items-center hover:text-red-600 transition-colors text-base">
              <font-awesome-icon icon="fa-solid fa-handshake" class="mr-3 w-5" />
              Become a partner
            </a>
            <a href="#" class="flex items-center hover:text-red-600 transition-colors text-base">
              <font-awesome-icon icon="fa-solid fa-bicycle" class="mr-3 w-5" />
              Become a courier
            </a>
          </div>
          
          <div class="space-y-4">
            <a href="#" class="flex items-center hover:text-red-600 transition-colors text-base">
              <font-awesome-icon icon="fa-solid fa-briefcase" class="mr-3 w-5" />
              Eats for Business
            </a>
            <a href="#" class="flex items-center hover:text-red-600 transition-colors text-base">
              <font-awesome-icon icon="fa-solid fa-recycle" class="mr-3 w-5" />
              Plastic recycling
            </a>
          </div>
          
          <div class="space-y-4">
            <a href="#" class="flex items-center hover:text-red-600 transition-colors text-base">
              <font-awesome-icon icon="fa-solid fa-mobile-screen" class="mr-3 w-5" />
              KFC App
            </a>
            <a href="#" class="flex items-center hover:text-red-600 transition-colors text-base">
              <font-awesome-icon icon="fa-solid fa-comment-dots" class="mr-3 w-5" />
              Feedback
            </a>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="pt-8 border-t border-gray-200">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center mb-5 md:mb-0">
            <font-awesome-icon icon="fa-solid fa-copyright" class="text-gray-400 mr-3 text-lg" />
            <span class="text-gray-500 text-lg">2025 KFC LLC. All rights reserved.</span>
          </div>
          
          <div class="flex items-center space-x-6">
            <a href="https://dhruba-datta.netlify.app/" 
               target="_blank" 
               rel="noopener noreferrer"
               class="text-gray-500 hover:text-gray-700 transition-colors flex items-center text-lg">
              <font-awesome-icon icon="fa-solid fa-code" class="mr-2 text-xl" />
              <span class="hidden sm:inline">Created by <span class="font-bold text-red-500">Dhruba Datta</span></span>
              <span class="sm:hidden  text-red-600">Dhruba Datta</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ModernFooter',
}
</script>