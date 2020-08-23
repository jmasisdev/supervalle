import ctEvents from 'ct-events'
import { updateAndSaveEl } from '../../../../static/js/frontend/header/render-loop'

ctEvents.on(
	'ct:header:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['trigger'] = {
			triggerMargin: {
				selector: '.ct-header-trigger',
				type: 'spacing',
				variable: 'margin',
				responsive: true,
				important: true
			},

			// default state
			triggerIconColor: [
				{
					selector: '.ct-header-trigger',
					variable: 'color',
					type: 'color:default'
				},

				{
					selector: '.ct-header-trigger',
					variable: 'colorHover',
					type: 'color:hover'
				}
			],

			triggerSecondColor: [
				{
					selector: '.ct-header-trigger',
					variable: 'secondColor',
					type: 'color:default'
				},

				{
					selector: '.ct-header-trigger',
					variable: 'secondColorHover',
					type: 'color:hover'
				}
			],

			// transparent state
			transparentTriggerIconColor: [
				{
					selector: `[data-transparent-row="yes"] .ct-header-trigger`,

					variable: 'color',
					type: 'color:default'
				},

				{
					selector: `[data-transparent-row="yes"] .ct-header-trigger`,

					variable: 'colorHover',
					type: 'color:hover'
				}
			],

			transparentTriggerSecondColor: [
				{
					selector: `[data-transparent-row="yes"] .ct-header-trigger`,

					variable: 'secondColor',
					type: 'color:default'
				},

				{
					selector: `[data-transparent-row="yes"] .ct-header-trigger`,

					variable: 'secondColorHover',
					type: 'color:hover'
				}
			],

			// sticky state
			stickyTriggerIconColor: [
				{
					selector: '[data-sticky*="yes"] .ct-header-trigger',
					variable: 'color',
					type: 'color:default'
				},

				{
					selector: '[data-sticky*="yes"] .ct-header-trigger',
					variable: 'colorHover',
					type: 'color:hover'
				}
			],

			stickyTriggerSecondColor: [
				{
					selector: '[data-sticky*="yes"] .ct-header-trigger',
					variable: 'secondColor',
					type: 'color:default'
				},

				{
					selector: '[data-sticky*="yes"] .ct-header-trigger',
					variable: 'secondColorHover',
					type: 'color:hover'
				}
			]
		}
	}
)

ctEvents.on(
	'ct:header:sync:item:trigger',
	({ optionId, optionValue, values }) => {
		const selector = '[data-id="trigger"]'

		if (optionId === 'mobile_menu_trigger_type') {
			updateAndSaveEl(
				selector,
				el =>
					(el.querySelector('.ct-trigger').dataset.type = optionValue)
			)
		}

		updateAndSaveEl(selector, el => {
			let label = el.querySelector('.ct-label')

			label.innerHTML = values.trigger_label

			label.removeAttribute('hidden')

			if (values.has_trigger_label !== 'yes') {
				label.hidden = true
			}

			el.dataset.design = `${values.trigger_design || 'simple'}${
				values.has_trigger_label === 'yes'
					? `:${values.trigger_label_alignment || 'right'}`
					: ''
			}`
		})
	}
)
