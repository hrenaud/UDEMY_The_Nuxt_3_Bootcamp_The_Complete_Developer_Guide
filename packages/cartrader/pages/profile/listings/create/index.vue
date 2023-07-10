<script setup>
definePageMeta({
  layout: 'custom',
});
const { makes } = useCars();

const info = useState(`adInfo`, () => {
  return {
    make: '',
    model: '',
    year: '',
    price: '',
    miles: '',
    city: '',
    seats: '',
    features: '',
    description: '',
    images: null,
  };
});
const onChangeInput = (data, name) => {
  info.value[name] = data;
};
const inputs = [
  {
    id: 1,
    title: 'Model *',
    name: 'model',
    placeHolder: 'Civic',
  },
  {
    id: 2,
    title: 'Year *',
    name: 'year',
    placeHolder: '2019',
  },
  {
    id: 3,
    title: 'Miles *',
    name: 'miles',
    placeHolder: '10000',
  },
  {
    id: 4,
    title: 'City *',
    name: 'city',
    placeHolder: 'Austin',
  },
  {
    id: 5,
    title: 'Number of seats *',
    name: 'seats',
    placeHolder: '5',
  },
  {
    id: 6,
    title: 'Features *',
    name: 'features',
    placeHolder: 'Leather Interior, No Accidents',
  },
];
</script>
<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Create a New Listing</h1>
    </div>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <CarAdSelect
        title="Make *"
        :options="makes"
        name="make"
        @change-input="onChangeInput"
      />
      <CarAdInput
        v-for="input in inputs"
        :key="input.id"
        :title="input.title"
        :name="input.name"
        :placeHolder="input.placeHolder"
        @change-input="onChangeInput"
      />
      <CarAdTextArea
        title="Description *"
        name="description"
        placeHolder="This car is in great condition..."
        @change-input="onChangeInput"
      />
      <CarAdImage @change-input="onChangeInput" />
    </div>
  </div>
</template>
