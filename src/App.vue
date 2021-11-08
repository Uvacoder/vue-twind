<template>
  <div class="container py-10 mx-auto">
    <h2 class="px-6">Cards</h2>

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

    <div class="px-6 mt-10">
      <h2>Buttons</h2>

      <List
        :size="{
          sm: 1 / 1,
          md: 1 / 2,
          lg: 1 / 3,
          xl: 1 / 3,
        }"
      >
        <Button>Text</Button>
      </List>
    </div>
  </div>
</template>

<script setup>
import List from '~/components/List/List.vue'
import Card from '~/components/Card/Card.vue'
import Button from '~/components/Button/Button.vue'
import { cards } from './App.data'
</script>
