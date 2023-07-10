<script setup>
const props = defineProps({
  title: String,
  name: String,
  placeHolder: String,
});
const state = ref('');
const emits = defineEmits(['changeInput']);
const onChange = () => {
  emits('changeInput', state.value, props.name);
};
</script>
<template>
  <div class="flex flex-col w-full mt-2">
    <label for="" class="text-cyan-500 mb-1 text-sm">{{ title }}</label>
    <textarea
      v-model="state"
      type="text"
      class="p-2 border rounded w-100"
      :placeholder="placeHolder"
      @input="onChange"
    ></textarea>
  </div>
</template>
