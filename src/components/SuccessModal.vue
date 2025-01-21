<!-- src/components/SuccessModal.vue -->
 
<template>
  <base-modal @close="$emit('close')">
    <template #header>
      <h3 class="text-lg font-medium text-green-600">Congratulations!</h3>
    </template>
    <template #body>
      <div class="text-center">
        <p class="text-xl mb-2">You've successfully sorted the list!</p>
        <p class="text-2xl font-bold text-orange-500">
          Time: {{ formatTime(finalTime) }}
        </p>
      </div>
    </template>
    <template #footer>
      <button
        @click="$emit('reset')"
        class="px-4 py-2 bg-orange-500 text-white rounded-md"
      >
        Play Again
      </button>
    </template>
  </base-modal>
</template>

<script>
  import BaseModal from './Modal.vue'

  export default {
    name: 'SuccessModal',
    components: {
      BaseModal
    },
    props: {
      finalTime: Number
    },
    methods: {
      formatTime(ms) {
        const totalSeconds = Math.floor(ms / 1000)
        const minutes = Math.floor(totalSeconds / 60)
        const seconds = totalSeconds % 60
        const milliseconds = Math.floor((ms % 1000) / 10)
        return `${minutes}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`
      }
    }
  }
</script>