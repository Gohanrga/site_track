<template>
  <div class="container mx-auto p-4">
    <div class="bg-secondary flex flex-row overflow-hidden">
      <div class="flex items-center ml-4">
        <button
          class="w-10 h-10 bg-tertiary rounded-full p-2 text-blue_green font-bold hover:bg-zinc hover:bg-opacity-30 text-center"
          @click="goBack"
        >
          &lt;
        </button>
      </div>
      <DetailContact
        :image="getImage"
        :title="getTitle"
        :address="getAddress"
        :contact="getContact"
      />
    </div>
    <div class="bg-white shadow-md rounded-lg p-6">
      <h1 class="text-tertiary text-2xl font-bold mb-4">Client Details</h1>
      <div class="space-y-4">
        <DetailItem
          logo="person"
          :description="getName"
          :subDescription="getJob"
        />
        <DetailItem logo="phone" :description="getPhone" />
        <DetailItem logo="localitation" :description="getAddressContact" />
        <DetailItem logo="email" :description="getEmail" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import DetailItem from "../components/DetailItem.vue";
import DetailContact from "../components/DetailContact.vue";
import useSiteStore from "../stores/siteStore";

const siteStore = useSiteStore();
const route = useRoute();
const router = useRouter();

// Computed properties
const site = computed(() => {
  const id = route.params.id;
  return siteStore.getSite(id);
});

const getTitle = computed(() => site.value.title);
const getImage = computed(() => site.value.client.logo);
const getAddress = computed(() => {
  const { street, city, state, country } = site.value.address;
  return `${street}, ${city}, ${state} - ${country}`;
});
const getName = computed(() => {
  const { firstName, lastName } = site.value.contacts.main;
  return `${lastName} ${firstName}`;
});
const getJob = computed(() => site.value.contacts.main.jobTitle);
const getPhone = computed(() => site.value.contacts.main.phoneNumber);
const getEmail = computed(() => site.value.contacts.main.email);
const getAddressContact = computed(() => {
  const { street, city, state, country } = site.value.contacts.main.address;
  return `${street}, ${city}, ${state} - ${country}`;
});
const getContact = computed(() => {
  const { lastName, firstName } = site.value.contacts.main;
  return `${lastName} ${firstName}`;
});

//methods
const goBack = () => {
  router.go(-1);
};
</script>
