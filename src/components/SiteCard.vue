<template>
  <div class="flex">
    <div
      class="w-[400px] md:w-[600px] max-w-4xl border border-tertiary border-opacity-20 rounded-lg flex flex-row overflow-hidden"
    >
      <DetailContact
        :image="getImage"
        :title="props.title"
        :address="getAddress"
        :contact="getContact"
      />
      <div class="flex items-center mr-4">
        <router-link
          class="w-10 h-10 bg-secondary rounded-full p-2 text-blue_green font-bold hover:bg-zinc hover:bg-opacity-30 text-center"
          :to="`/site/${props.id}`"
        >
          &gt;
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { Contact, Address, Client } from "../interfaces/Site";
import DetailContact from "./DetailContact.vue";
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  contact: {
    type: Object as () => Contact,
    required: true,
  },
  address: {
    type: Object as () => Address,
    required: true,
  },
  client: {
    type: Object as () => Client,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const getImage = computed(() => {
  return props.client?.logo || "";
});
const getAddress = computed(() => {
  const { street, city, state, country } = props.address;
  return `${street}, ${city}, ${state} - ${country}`;
});
const getContact = computed(() => {
  if (!props.contact) {
    return "";
  }
  const { lastName, firstName } = props.contact.main;
  return `${lastName} ${firstName}`;
});
</script>
