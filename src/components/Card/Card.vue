<template>
  <div class="card group" :class="$tw(__card)">
    <div :class="$tw(__front(children))">
      <div class="card__info">
        <h3 class="text-subtitle">{{ title }}</h3>
        <p class="text-base" v-if="subtitle">{{ subtitle }}</p>
      </div>

      <i v-if="icon" class="card__icon">
        <Icon :icon="icon" />
      </i>
    </div>

    <div v-if="children" :class="$tw(__back(children))">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useSlots } from 'vue'
import Icon from '~/components/Icon/Icon.vue'

import { __card, __front, __back } from './Card.styles'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
})
const slots = useSlots()
const children = slots.default
  ? slots.default().find((child) => typeof child.key === 'number')
  : null
</script>
