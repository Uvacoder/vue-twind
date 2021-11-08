<template>
  <List
    :size="{
      sm: 1 / 1,
      md: 1 / 2,
      lg: 1 / 3,
      xl: 1 / 3,
    }"
  >
    <Card
      v-for="card in cards"
      :key="card.id"
      :title="card.title"
      :subtitle="card.subtitle"
      :icon="card.icon"
    >
      <p v-if="card.content" v-html="card.content" />
    </Card>
  </List>
</template>

<script setup>
import List from '~/components/List/List.vue'
import Card from '~/components/Card/Card.vue'
import { cards } from './App.data'
</script>
