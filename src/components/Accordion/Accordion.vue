<template>
  <div :class="$tw(__accordion(active))">
    <div class="accordion__header" @click="toggle">
      <h3 class="accordion__header__tittle text-highlight font-light">{{ title }}</h3>

      <Icon class="accordion__header__icon" icon="ChevronDownIcon" />
    </div>

    <div class="accordion__content">
      <div class="accordion__content__text font-light">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Icon from '~/components/Icon/Icon.vue'
import { __accordion } from './Accordion.styles'

const active = ref(false)
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})

const toggle = () => {
  active.value = !active.value
}
</script>
