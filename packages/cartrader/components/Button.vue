<script setup>
const props = defineProps(['class']);
</script>
<template>
  <button
    :class="`bg-blue-400 w-fit rounded text-white py-1 px-4 ${props.class}`"
  >
    <slot />
  </button>
</template>
