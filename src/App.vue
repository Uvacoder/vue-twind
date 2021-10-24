<script setup>
import List from './components/List/List.vue'
import Card from './components/Card/Card.vue'
import { cards } from './App.data'
</script>

<template>
	<List>
		<Card
			v-for="card in cards"
			:key="card.id"
			:title="card.title"
			:subtitle="card.subtitle"
			:type="card.type"
		>
			<p v-if="card.content" v-html="card.content" />
		</Card>
	</List>
</template>
