<template>
  <div class="card" :class="__card(children)">
    <div class="card__front">
      <div class="card__info">
        <h3>{{ title }}</h3>
        <h5 v-if="subtitle">{{ subtitle }}</h5>
      </div>

      <i v-if="icon" class="card__icon">
        <Icon :icon="icon" />
      </i>
    </div>

    <div v-if="children" class="card__back">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useSlots } from "vue";
import Icon from "~/components/Icon/Icon.vue";
import { __card } from "./Card.styles";

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
});
const slots = useSlots();
const children = slots.default().find((child) => typeof child.key === "number");
</script>
