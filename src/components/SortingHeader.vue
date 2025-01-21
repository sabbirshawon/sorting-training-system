<template>
  <div class="flex justify-between items-center mb-8 flex-wrap sm:flex-nowrap">
    <h1 class="text-2xl font-bold w-full sm:w-auto">Sorting Training System</h1>
    <div class="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
      <div
        v-if="isGameActive"
        class="text-lg font-mono text-orange-500 font-semibold"
      >
        {{ formatTime(elapsedTime) }}
      </div>
      <button
        @click="$emit('start-game')"
        class="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
      >
        Start sorting!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SortingHeader',
  props: {
    isGameActive: Boolean,
    elapsedTime: Number
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

<style scoped>
  @media (max-width: 640px) {
    .flex-wrap {
      flex-wrap: wrap;
    }
  }

  .text-orange-500 {
    color: #FF8D00;
  }

  .font-semibold {
    font-weight: 600;
  }
</style>
