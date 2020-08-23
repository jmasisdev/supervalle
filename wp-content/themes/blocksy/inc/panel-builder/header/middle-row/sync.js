import { handleBackgroundOptionFor } from '../../../../static/js/customizer/sync/variables/background'
import ctEvents from 'ct-events'
import { updateAndSaveEl } from '../../../../static/js/frontend/header/render-loop'
import { withKeys } from '../../../../static/js/customizer/sync/helpers'
import { maybePromoteScalarValueIntoResponsive } from 'customizer-sync-helpers/dist/promote-into-responsive'

export const handleRowVariables = ({ selector }) => ({
	headerRowHeight: {
		selector: `header ${selector}`,
		variable: 'height',
		responsive: true,
		unit: 'px'
	},

	headerRowShadow: {
		selector,
		type: 'box-shadow',
		variable: 'boxShadow',
		forceOutput: true,
		responsive: true
	},

	...handleBackgroundOptionFor({
		id: 'headerRowBackground',
		selector,
		responsive: true
	}),

	...withKeys(
		[
			'headerRowTopBorder',
			'transparentHeaderRowTopBorder',
			'stickyHeaderRowTopBorder',
			'headerRowTopBorderFullWidth'
		],
		[
			{
				selector,
				variable: 'borderTop',
				type: 'border',
				responsive: true,

				fullValue: true,

				extractValue: ({
					headerRowTopBorder,
					headerRowTopBorderFullWidth
				}) =>
					headerRowTopBorderFullWidth === 'yes'
						? headerRowTopBorder
						: {
								desktop: { style: 'none' },
								tablet: { style: 'none' },
								mobile: { style: 'none' }
						  }
			},

			{
				selector: `${selector} > div`,
				variable: 'borderTop',
				type: 'border',
				responsive: true,
				fullValue: true,

				extractValue: ({
					headerRowTopBorder,
					headerRowTopBorderFullWidth
				}) =>
					headerRowTopBorderFullWidth !== 'yes'
						? headerRowTopBorder
						: {
								desktop: { style: 'none' },
								tablet: { style: 'none' },
								mobile: { style: 'none' }
						  }
			},

			{
				selector: `[data-transparent-row="yes"]${selector}`,

				variable: 'borderTop',
				type: 'border',
				responsive: true,

				fullValue: true,

				extractValue: ({
					transparentHeaderRowTopBorder,
					headerRowTopBorderFullWidth
				}) =>
					headerRowTopBorderFullWidth === 'yes'
						? transparentHeaderRowTopBorder
						: {
								desktop: { style: 'none' },
								tablet: { style: 'none' },
								mobile: { style: 'none' }
						  }
			},

			{
				selector: `[data-transparent-row="yes"]${selector} > div`,

				variable: 'borderTop',
				type: 'border',
				responsive: true,
				fullValue: true,

				extractValue: ({
					transparentHeaderRowTopBorder,
					headerRowTopBorderFullWidth
				}) =>
					headerRowTopBorderFullWidth !== 'yes'
						? transparentHeaderRowTopBorder
						: {
								desktop: { style: 'none' },
								tablet: { style: 'none' },
								mobile: { style: 'none' }
						  }
			},

			{
				selector: `[data-sticky*="yes"] ${selector}`,

				variable: 'borderTop',
				type: 'border',
				responsive: true,

				fullValue: true,

				extractValue: ({
					stickyHeaderRowTopBorder,
					headerRowTopBorderFullWidth
				}) =>
					headerRowTopBorderFullWidth === 'yes'
						? stickyHeaderRowTopBorder
						: {
								desktop: { style: 'none' },
								tablet: { style: 'none' },
								mobile: { style: 'none' }
						  }
			},

			{
				selector: `[data-sticky*="yes"] ${selector} > div`,

				variable: 'borderTop',
				type: 'border',
				responsive: true,
				fullValue: true,

				extractValue: ({
					stickyHeaderRowTopBorder,
					headerRowTopBorderFullWidth
				}) =>
					headerRowTopBorderFullWidth !== 'yes'
						? stickyHeaderRowTopBorder
						: {
								desktop: { style: 'none' },
								tablet: { style: 'none' },
								mobile: { style: 'none' }
						  }
			}
		]
	),

	...withKeys(
		[
			'headerRowBottomBorder',
			'transparentHeaderRowBottomBorder',
			'stickyHeaderRowBottomBorder',

			'headerRowBottomBorderFullWidth'
		],
		[
			{
				selector,
				variable: 'borderBottom',
				type: 'border',
				responsive: true,

				fullValue: true,

				extractValue: ({
					headerRowBottomBorder,
					headerRowBottomBorderFullWidth
				}) =>
					headerRowBottomBorderFullWidth === 'yes'
						? headerRowBottomBorder
						: {
								desktop: { style: 'none' },
								tablet: { style: 'none' },
								mobile: { style: 'none' }
						  }
			},

			{
				selector: `${selector} > div`,
				variable: 'borderBottom',
				type: 'border',
				responsive: true,
				fullValue: true,

				extractValue: ({
					headerRowBottomBorder,
					headerRowBottomBorderFullWidth
				}) =>
					headerRowBottomBorderFullWidth !== 'yes'
						? headerRowBottomBorder
						: {
								desktop: { style: 'none' },
								tablet: { style: 'none' },
								mobile: { style: 'none' }
						  }
			},

			{
				selector: `[data-transparent-row="yes"]${selector}`,

				variable: 'borderBottom',
				type: 'border',
				responsive: true,

				fullValue: true,

				extractValue: ({
					transparentHeaderRowBottomBorder,
					headerRowBottomBorderFullWidth
				}) =>
					headerRowBottomBorderFullWidth === 'yes'
						? transparentHeaderRowBottomBorder
						: {
								desktop: { style: 'none' },
								tablet: { style: 'none' },
								mobile: { style: 'none' }
						  }
			},

			{
				selector: `[data-transparent-row="yes"]${selector} > div`,

				variable: 'borderBottom',
				type: 'border',
				responsive: true,
				fullValue: true,

				extractValue: ({
					transparentHeaderRowBottomBorder,
					headerRowBottomBorderFullWidth
				}) =>
					headerRowBottomBorderFullWidth !== 'yes'
						? transparentHeaderRowBottomBorder
						: {
								desktop: { style: 'none' },
								tablet: { style: 'none' },
								mobile: { style: 'none' }
						  }
			},

			{
				selector: `[data-sticky*="yes"] ${selector}`,

				variable: 'borderBottom',
				type: 'border',
				responsive: true,

				fullValue: true,

				extractValue: ({
					stickyHeaderRowBottomBorder,
					headerRowBottomBorderFullWidth
				}) =>
					headerRowBottomBorderFullWidth === 'yes'
						? stickyHeaderRowBottomBorder
						: {
								desktop: { style: 'none' },
								tablet: { style: 'none' },
								mobile: { style: 'none' }
						  }
			},

			{
				selector: `[data-sticky*="yes"] ${selector} > div`,

				variable: 'borderBottom',
				type: 'border',
				responsive: true,
				fullValue: true,

				extractValue: ({
					stickyHeaderRowBottomBorder,
					headerRowBottomBorderFullWidth
				}) =>
					headerRowBottomBorderFullWidth !== 'yes'
						? stickyHeaderRowBottomBorder
						: {
								desktop: { style: 'none' },
								tablet: { style: 'none' },
								mobile: { style: 'none' }
						  }
			}
		]
	),

	// Transparent
	...handleBackgroundOptionFor({
		id: 'transparentHeaderRowBackground',

		selector: `[data-transparent-row="yes"]${selector}`,

		responsive: true
	}),

	transparentHeaderRowShadow: {
		selector: `[data-transparent-row="yes"]${selector}`,

		type: 'box-shadow',
		variable: 'boxShadow',
		forceOutput: true,
		responsive: true
	},

	// Sticky
	...handleBackgroundOptionFor({
		id: 'stickyHeaderRowBackground',
		selector: `[data-sticky*="yes"] ${selector}`,
		responsive: true
	}),

	stickyHeaderRowShadow: {
		selector: `[data-sticky*="yes"] ${selector}`,

		type: 'box-shadow',
		variable: 'boxShadow',
		forceOutput: true,
		responsive: true
	}
})

export const handleRowOptions = ({
	selector,
	changeDescriptor: { optionId, optionValue, values }
}) => {
	if (optionId === 'headerRowWidth') {
		updateAndSaveEl(selector, el => {
			el.firstElementChild.classList.remove(
				'ct-container',
				'ct-container-fluid'
			)

			el.firstElementChild.classList.add(
				optionValue !== 'fixed' ? 'ct-container-fluid' : 'ct-container'
			)
		})
	}
}

ctEvents.on(
	'ct:header:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['middle-row'] = handleRowVariables({
			selector: '[data-row="middle"]'
		})
	}
)

ctEvents.on('ct:header:sync:item:middle-row', changeDescriptor =>
	handleRowOptions({
		selector: '[data-row="middle"]',
		changeDescriptor
	})
)
