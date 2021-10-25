<template>
  <Icon />
</template>

<script setup>
import * as icons from "@heroicons/vue/outline";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});

const Icon = icons[props.icon];
</script>
