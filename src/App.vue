 <!-- src/App.vue -->

<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-6xl mx-auto">
      <sorting-header
        :is-game-active="isGameActive"
        :elapsed-time="elapsedTime"
        @start-game="showStartModal = true"
      />
      
      <people-list
        v-model:people="people"
        :is-game-active="isGameActive"
        @order-checked="checkOrder"
      />

      <start-modal
        v-if="showStartModal"
        v-model:number-of-people="numberOfPeople"
        :is-valid="isValidPeopleCount"
        @close="showStartModal = false"
        @start="startGame"
      />

      <success-modal
        v-if="showSuccessModal"
        :final-time="finalTime"
        @close="showSuccessModal = false"
        @reset="resetGame"
      />
    </div>
  </div>
</template>

<script>
  import { ref, computed, onUnmounted } from 'vue'
  import SortingHeader from './components/SortingHeader.vue'
  import PeopleList from './components/PeopleList.vue'
  import StartModal from './components/StartModal.vue'
  import SuccessModal from './components/SuccessModal.vue'
  import { generatePeople } from './utils/peopleGenerator'

  export default {
    name: 'App',
    components: {
      SortingHeader,
      PeopleList,
      StartModal,
      SuccessModal
    },
    setup() {
      const people = ref([])
      const showStartModal = ref(false)
      const showSuccessModal = ref(false)
      const numberOfPeople = ref(20)
      const isGameActive = ref(false)
      const startTime = ref(null)
      const elapsedTime = ref(0)
      const finalTime = ref(0)
      const timer = ref(null)

      const isValidPeopleCount = computed(() => {
        return numberOfPeople.value >= 20 && numberOfPeople.value <= 100
      })

      const startGame = () => {
        if (!isValidPeopleCount.value) return
        
        people.value = generatePeople(numberOfPeople.value)
        showStartModal.value = false
        isGameActive.value = true
        elapsedTime.value = 0
        finalTime.value = 0
        startTime.value = Date.now()
        
        if (timer.value) clearInterval(timer.value)
        
        timer.value = setInterval(() => {
          if (isGameActive.value) {
            elapsedTime.value = Date.now() - startTime.value
          }
        }, 100)
      }

      const checkOrder = () => {
        const isSorted = people.value.every((person, index) => {
          if (index === people.value.length - 1) return true
          return parseInt(person.potatoes) >= parseInt(people.value[index + 1].potatoes)
        })

        if (isSorted) {
          isGameActive.value = false
          finalTime.value = Date.now() - startTime.value
          if (timer.value) clearInterval(timer.value)
          showSuccessModal.value = true
        }
      }

      const resetGame = () => {
        showSuccessModal.value = false
        showStartModal.value = true
        people.value = []
        elapsedTime.value = 0
        finalTime.value = 0
        if (timer.value) clearInterval(timer.value)
      }

      onUnmounted(() => {
        if (timer.value) clearInterval(timer.value)
      })

      return {
        people,
        showStartModal,
        showSuccessModal,
        numberOfPeople,
        isGameActive,
        elapsedTime,
        finalTime,
        isValidPeopleCount,
        startGame,
        checkOrder,
        resetGame
      }
    }
  }
</script>