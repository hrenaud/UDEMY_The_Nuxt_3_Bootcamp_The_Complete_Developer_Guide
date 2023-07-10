<script setup>
const { cars } = useCars();

const favorite = useLocalStorage('favorite', {});

const handleFavorite = (id) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true,
    };
  }
};
</script>
<template>
  <div class="w-full">
    <!-- Use ClientOnly because rendering data from locaStorage -->
    <!-- Use ClientOnly or rename Cards.vue to Cards.client.vue -->
    <ClientOnly>
      <CarCard
        v-for="car in cars"
        :key="car.id"
        :car="car"
        :favored="car.id in favorite"
        @favor="handleFavorite"
      />
    </ClientOnly>
  </div>
</template>
