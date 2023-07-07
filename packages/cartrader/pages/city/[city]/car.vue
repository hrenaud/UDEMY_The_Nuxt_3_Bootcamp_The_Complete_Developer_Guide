<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities();

useHead({
  // capitalize the first letter of the city name
  title: `${route.params.make || `Cars`} in ${toTitleCase(route.params.city)}`,
});

definePageMeta({
  layout: 'custom',
});
</script>
<template>
  <div>
    <div class="mt-32 flex">
      <NuxtErrorBoundary>
        <CarSideBar />
        <!-- Nested Components -->
        <NuxtPage />
        <template #error="{ error }">
          <div class="text-center mx-auto flex flex-col gap-4">
            <h1 class="text-3xl font-bold">Oops!</h1>
            <code>{{ error }}</code>
            <div>
              <button
                @click="error.value = null"
                class="bg-blue-400 text-white px-10 px-3 rounded"
              >
                Go Back
              </button>
            </div>
          </div>
        </template>
      </NuxtErrorBoundary>
    </div>
  </div>
</template>
