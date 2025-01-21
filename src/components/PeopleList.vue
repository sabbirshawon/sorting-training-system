<!-- src/components/PeopleList.vue -->
<template>
  <div class="bg-white rounded-lg shadow-sm">
    <div class="p-4 border-b text-right">
      <span class="font-bold text-gray-600">{{ people.length }} people in the list</span>
    </div>

    <div class="overflow-x-auto">
      <div class="min-w-[800px]">
        <div class="divide-y">
          <div class="grid grid-cols-[48px_1fr_1fr_1fr_1fr_1fr] px-4 py-3 bg-white text-sm text-gray-600 sticky top-0">
            <div></div>
            <div>Email</div>
            <div>Potatoes</div>
            <div>Tags</div>
            <div>Full name</div>
            <div>Location</div>
          </div>

          <draggable
            :model-value="people"
            @update:model-value="$emit('update:people', $event)"
            item-key="id"
            :disabled="!isGameActive"
            class="divide-y"
            @end="$emit('order-checked')"
          >
            <template #item="{ element }">
              <div
                class="grid grid-cols-[48px_1fr_1fr_1fr_1fr_1fr] px-4 py-3 bg-white hover:bg-gray-50 cursor-move items-center"
              >
                <div class="flex items-center">
                  <input 
                    type="checkbox" 
                    class="w-4 h-4 rounded border border-gray-300 focus:ring-[#FF8D00] checkbox-orange"
                  />
                </div>
                <div class="text-gray-600 truncate pr-4">{{ element.email }}</div>
                <div class="truncate pr-4">{{ element.potatoes }}</div>
                <div class="truncate pr-4">
                  <span class="px-2 py-1 bg-gray-100 rounded-full text-sm">
                    {{ element.tags.join(", ") }}
                  </span>
                </div>
                <div class="truncate pr-4">{{ element.fullName }}</div>
                <div class="truncate">{{ element.location }}</div>
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    name: 'PeopleList',
    components: {
      draggable
    },
    props: {
      people: {
        type: Array,
        required: true
      },
      isGameActive: Boolean
    },
    emits: ['update:people', 'order-checked']
  }
</script>

<style>
  .checkbox-orange {
    accent-color: #FF8D00;
  }

  .checkbox-orange {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    border: 1px solid #d1d5db; 
    background-position: center;
    background-repeat: no-repeat;
    print-color-adjust: exact;
  }

  .checkbox-orange:checked {
    background-color: #FF8D00;
    border-color: #FF8D00;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  }

  .checkbox-orange:focus {
    --tw-ring-color: #FF8D00;
    --tw-ring-opacity: 0.2;
  }

  .checkbox-orange:hover {
    cursor: pointer;
  }
</style>