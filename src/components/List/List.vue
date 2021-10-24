<script>
import { defineComponent, h } from 'vue'
import { __list } from './styles'

export default defineComponent({
	props: {
		direction: {
			type: String,
			default: 'row',
			validator(value) {
				return ~['column', 'row'].indexOf(value)
			},
		},
	},
	render() {
		const slots = this.$slots.default()
		const list = []
		const row = this.direction === 'row'

		slots.forEach((slot) => {
			if (slot.children) {
				return slot.children.forEach((child) => list.push(child))
			}

			return list.push(slot)
		})

		return h(
			'ul',
			{
				class: __list(row),
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
