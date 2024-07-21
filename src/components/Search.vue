<template>
  <div
    v-if="Object.keys(searchType).length"
    class="flex w-[400px] md:w-[600px] mb-1"
  >
    <Chip :text="searchType.label" :close="clearSearchType" />
  </div>
  <div class="flex justify-center mb-4">
    <div class="relative w-full">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search by..."
        class="border border-zinc rounded-lg p-2 w-[400px] md:w-[600px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        :class="{ 'bg-zinc bg-opacity-15': !Object.keys(searchType).length }"
        :disabled="!Object.keys(searchType).length"
      />
      <button
        @click="toggleDropdown"
        class="absolute right-0 top-0 h-full px-4 bg-tertiary rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        :class="{ 'opacity-30': Object.keys(searchType).length }"
        :disabled="Object.keys(searchType).length"
      >
        <img src="@/assets/down.svg" class="w-6 h-6" />
      </button>
      <div
        v-if="isDropdownOpen"
        class="absolute right-0 mt-1 w-48 bg-white border border-gray-300 rounded-lg shadow-md z-10"
      >
        <ul>
          <li
            v-for="option in searchOptions"
            :key="option.value"
            @click="selectSearchType(option)"
            class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            {{ option.label }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";
import SearchOptions from "../interfaces/SearchOptions";
import Chip from "./Chip.vue";
import debounceFunction from "../utils/debounceFunction";

const props = defineProps({
  fetchSites: {
    type: Function,
    required: true,
  },
});

//data
const isDropdownOpen: booelan = ref(false);
const searchType: SearchOptions = ref({});
const searchQuery = ref("");
const searchOptions: Array<SearchOptions> = [
  { label: "Title", value: "title" },
  { label: "street", value: "address.street" },
  { label: "Contact First Name", value: "contacts.main.firstName" },
  { label: "Contact Last Name", value: "contacts.main.lastName" },
];

//method
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectSearchType = (option: SearchOptions) => {
  searchType.value = option;
  isDropdownOpen.value = false;
};

const clearSearchType = () => {
  searchType.value = {};
  searchQuery.value = "";
};

//Debounce implementation
const performSearch = async (key: string, query: string) => {
  await props.fetchSites(key, query);
};

const debouncedSearch = debounceFunction(performSearch, 1000);

watchEffect(() => {
  debouncedSearch(searchType.value.value, searchQuery.value);
});
</script>
