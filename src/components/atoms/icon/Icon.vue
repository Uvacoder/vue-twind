<template>
  <Icon />
</template>

<script setup>
import { computed } from 'vue'
import * as icons from '@heroicons/vue/outline'

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
})

const Icon = computed(() => icons[props.icon])
</script>
