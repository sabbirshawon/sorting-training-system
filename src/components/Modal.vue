<!-- src/components/Modal.vue -->
 
<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full relative">
      <div class="p-6 border-b flex justify-between items-center">
        <slot name="header"></slot>

        <button @click="$emit('close')" class="text-gray-600 hover:text-gray-800 absolute top-2 right-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      
      <div class="p-6">
        <slot name="body"></slot>
      </div>
      
      <div class="p-6 bg-gray-50 flex justify-end space-x-2">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'BaseModal' 
  }
</script>