import { typographyOption } from '../../../../static/js/customizer/sync/variables/typography'
import { updateAndSaveEl } from '../../../../static/js/frontend/header/render-loop'
import ctEvents from 'ct-events'
import { responsiveClassesFor } from '../../../../static/js/customizer/sync/helpers'

ctEvents.on(
	'ct:header:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['logo'] = {
			logoMaxHeight: {
				selector: '.site-logo-container',
				variable: 'maxHeight',
				responsive: true,
				unit: 'px'
			},

			...typographyOption({
				id: 'siteTitle',
				selector: '.site-title'
			}),

			...typographyOption({
				id: 'siteTagline',
				selector: '.site-description'
			}),

			headerLogoMargin: {
				selector: '.site-branding',
				type: 'spacing',
				variable: 'margin',
				responsive: true,
				important: true
			},

			// default state
			siteTitleColor: [
				{
					selector: '.site-title',
					variable: 'linkInitialColor',
					type: 'color:default',
					responsive: true
				},

				{
					selector: '.site-title',
					variable: 'linkHoverColor',
					type: 'color:hover',
					responsive: true
				}
			],

			siteTaglineColor: {
				selector: '.site-description',
				variable: 'color',
				type: 'color:default',
				responsive: true
			},

			// transparent state
			transparentSiteTitleColor: [
				{
					selector: `[data-transparent-row="yes"] .site-title`,

					variable: 'linkInitialColor',
					type: 'color:default',
					responsive: true
				},

				{
					selector: `[data-transparent-row="yes"] .site-title`,

					variable: 'linkHoverColor',
					type: 'color:hover',
					responsive: true
				}
			],

			transparentSiteTaglineColor: {
				selector: `[data-transparent-row="yes"] .site-description`,

				variable: 'color',
				type: 'color:default',
				responsive: true
			},

			// sticky state
			stickySiteTitleColor: [
				{
					selector: '[data-sticky*="yes"] .site-title',
					variable: 'linkInitialColor',
					type: 'color:default',
					responsive: true
				},

				{
					selector: '[data-sticky*="yes"] .site-title',
					variable: 'linkHoverColor',
					type: 'color:hover',
					responsive: true
				}
			],

			stickySiteTaglineColor: {
				selector: '[data-sticky*="yes"] .site-description',
				variable: 'color',
				type: 'color:default',
				responsive: true
			}
		}
	}
)

ctEvents.on('ct:header:sync:item:logo', ({ optionId, optionValue }) => {
	const selector = '[data-id="logo"]'

	if (optionId === 'blogdescription') {
		updateAndSaveEl(selector, el => {
			el.querySelector('.site-description') &&
				(el.querySelector('.site-description').innerHTML = optionValue)
		})
	}

	if (optionId === 'blogname_visibility') {
		updateAndSaveEl(selector, el => {
			responsiveClassesFor(
				{ ...optionValue },
				el.querySelector('.site-title')
			)
		})
	}

	if (optionId === 'blogdescription_visibility') {
		updateAndSaveEl(selector, el => {
			responsiveClassesFor(
				{ ...optionValue },
				el.querySelector('.site-description')
			)
		})
	}

	if (optionId === 'logo_position') {
		updateAndSaveEl(selector, el => {
			el.dataset.logo = optionValue
		})
	}
})
