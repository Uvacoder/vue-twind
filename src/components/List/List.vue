<script>
import { defineComponent, h } from 'vue'
import { __list } from './List.styles'

export default defineComponent({
	props: {
		direction: {
			type: String,
			default: 'row',
			validator(value) {
				return ~['column', 'row'].indexOf(value)
			},
		},
		size: {
			type: Number,
			default: 0.3333333333333333,
		},
	},
	render() {
		const slots = this.$slots.default()
		const list = []
		const row = this.direction === 'row'
		const size = this.size * 100

		slots.forEach((slot) => {
			if (slot.children) {
				return slot.children.forEach((child) => list.push(child))
			}

			return list.push(slot)
		})

		return h(
			'ul',
			{
				class: ['list', __list(row, size)],
			},
			list.map((element) =>
				h(
					'li',
					{
						class: 'list__item',
					},
					[element]
				)
			)
		)
	},
})
</script>
