<script setup>
const route = useRoute();
const router = useRouter();
const { makes } = useCars();

const modal = ref({
  make: false,
  location: false,
  price: false,
});

const city = ref();

const priceRange = ref({
  min: route.query.minPrice || '',
  max: route.query.maxPrice || '',
});

const priceRangeText = computed(() => {
  const minPrice = route.query.minPrice;
  const maxPrice = route.query.maxPrice;
  if (!minPrice && !maxPrice) {
    return 'Any';
  } else if (!minPrice && maxPrice) {
    return `$${maxPrice} and below`;
  } else if (minPrice && !maxPrice) {
    return `$${minPrice} and above`;
  } else {
    return `$${minPrice} - $${maxPrice}`;
  }
});

const updateModal = (key) => {
  modal.value[key] = !modal.value[key];
};

const onChangeLocation = () => {
  if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      message: `City name must be a string`,
    });
  }
  updateModal(`location`);
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
};

const onChangeMake = (make) => {
  updateModal(`make`);
  navigateTo(`/city/${route.params.city}/car/${make}`);
};
const onChangePrice = () => {
  if (priceRange.value.min && priceRange.value.max) {
    if (priceRange.value.min > priceRange.value.max) {
      throw createError({
        statusCode: 400,
        message: `Min price must be less than max price`,
      });
    }
  }
  updateModal(`price`);
  router.push({
    query: {
      ...route.query,
      minPrice: priceRange.value.min,
      maxPrice: priceRange.value.max,
    },
  });
};
</script>
<template>
  <div class="shadow border w-64 mr-10 z-30 h-[190px]">
    <!-- LOCATION START -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Location</h3>
      <h3 @click="updateModal(`location`)" class="text-blue-400 capitalize">
        {{ route.params.city }}
      </h3>
      <div
        class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white flex flex-col gap-4"
        v-if="modal.location"
      >
        <input type="text" class="border p-1 rounded" v-model="city" />
        <Button @click="onChangeLocation" label="Apply" />
      </div>
    </div>
    <!-- LOCATION END -->

    <!-- MAKE START -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Make</h3>
      <h3 @click="updateModal(`make`)" class="text-blue-400 capitalize">
        {{ route.params.make || `Any` }}
      </h3>
      <div
        class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white w-[600px] flex justify-between flex-wrap"
        v-if="modal.make"
      >
        <h4
          @click="onChangeMake(make)"
          v-for="make in makes"
          :key="make"
          class="w-1/3"
        >
          {{ make }}
        </h4>
      </div>
    </div>
    <!-- MAKE END -->

    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Price</h3>
      <h3
        @click="updateModal(`price`)"
        class="text-blue-400 capitalize whitespace-nowrap"
      >
        {{ priceRangeText }}
      </h3>
      <div
        class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white gap-4 flex justify-between flex-wrap"
        v-if="modal.price"
      >
        <input
          type="number"
          placeholder="Min"
          v-model="priceRange.min"
          class="border p-1 rounded"
        />
        <input
          type="number"
          placeholder="Max"
          v-model="priceRange.max"
          class="border p-1 rounded"
        />
        <Button @click="onChangePrice" label="Apply" />
      </div>
    </div>
  </div>
</template>
