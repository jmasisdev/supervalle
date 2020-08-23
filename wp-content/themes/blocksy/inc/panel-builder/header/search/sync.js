import { handleBackgroundOptionFor } from '../../../../static/js/customizer/sync/variables/background'
import ctEvents from 'ct-events'
import { updateAndSaveEl } from '../../../../static/js/frontend/header/render-loop'
import { responsiveClassesFor } from '../../../../static/js/customizer/sync/helpers'

ctEvents.on(
	'ct:header:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['search'] = {
			searchHeaderIconSize: {
				selector: '.ct-header-search',
				variable: 'iconSize',
				responsive: true,
				unit: 'px'
			},

			searchHeaderLinkColor: [
				{
					selector: '#search-modal',
					variable: 'linkInitialColor',
					type: 'color:default',
					responsive: true
				},

				{
					selector: '#search-modal',
					variable: 'linkHoverColor',
					type: 'color:hover',
					responsive: true
				}
			],

			...handleBackgroundOptionFor({
				id: 'searchHeaderBackground',
				selector: '#search-modal'
			}),

			headerSearchMargin: {
				selector: '.ct-header-search',
				type: 'spacing',
				variable: 'margin',
				responsive: true,
				important: true
			},

			// default state
			searchHeaderIconColor: [
				{
					selector: '.ct-header-search',
					variable: 'linkInitialColor',
					type: 'color:default',
					responsive: true
				},

				{
					selector: '.ct-header-search',
					variable: 'linkHoverColor',
					type: 'color:hover',
					responsive: true
				}
			],

			// transparent state
			transparentSearchHeaderIconColor: [
				{
					selector: `[data-transparent-row="yes"] .ct-header-search`,

					variable: 'linkInitialColor',
					type: 'color:default',
					responsive: true
				},

				{
					selector: `[data-transparent-row="yes"] .ct-header-search`,

					variable: 'linkHoverColor',
					type: 'color:hover',
					responsive: true
				}
			],

			// sticky state
			stickySearchHeaderIconColor: [
				{
					selector: '[data-sticky*="yes"] .ct-header-search',
					variable: 'linkInitialColor',
					type: 'color:default',
					responsive: true
				},

				{
					selector: '[data-sticky*="yes"] .ct-header-search',
					variable: 'linkHoverColor',
					type: 'color:hover',
					responsive: true
				}
			],
		}
	}
)

ctEvents.on('ct:header:sync:item:search', ({ optionId, optionValue }) => {
	const selector = '[data-id="search"]'

	if (optionId === 'header_search_visibility') {
		updateAndSaveEl(selector, el =>
			responsiveClassesFor({ ...optionValue, desktop: true }, el)
		)
	}
})
