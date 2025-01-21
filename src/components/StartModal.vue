<template>
  <base-modal @close="$emit('close')">
    <template #header>
      <h3 class="text-lg font-medium">How many people?</h3>
    </template>
    <template #body>

      <label class="block text-sm font-medium text-gray-600 mb-2" style="white-space: nowrap;">
        Enter a number of how many people you want to add to the list.
      </label>
      <input
        :value="numberOfPeople"
        @input="onInput"
        @focus="onFocus"
        type="number"
        min="20"
        max="100"
        class="w-full p-2 border rounded"
        placeholder="Enter a number between 20 and 100"
      />
      
      <!-- Error message -->
      <p v-if="touched && isInvalidNumber" class="text-sm text-red-600 mt-1">
        Please enter a number between 20 and 100.
      </p>
    </template>
    <template #footer>
      <button
        @click="$emit('close')"
        class="px-4 py-2 bg-gray-200 rounded-md mr-2"
      >
        Cancel
      </button>
      <button
        @click="$emit('start')"
        :disabled="isInvalidNumber || !isValid"
        class="px-4 py-2 bg-orange-500 text-white rounded-md disabled:opacity-50"
      >
        Start
      </button>
    </template>
  </base-modal>
</template>

<script>
  import BaseModal from './Modal.vue'

  export default {
    name: 'StartModal',
    components: {
      BaseModal
    },
    props: {
      numberOfPeople: Number,
      isValid: Boolean
    },
    data() {
      return {
        touched: false 
      };
    },
    computed: {
      isInvalidNumber() {
        return this.numberOfPeople < 20 || this.numberOfPeople > 100;
      }
    },
    methods: {

      onFocus() {
        this.touched = true;
      },

      onInput(event) {
        this.$emit('update:numberOfPeople', event.target.value);
      }
    },
    emits: ['close', 'start', 'update:numberOfPeople']
  }
</script>

<style scoped>
  input:focus {
    border-color: #AAAAAA;
    outline: none;
  }
</style>
