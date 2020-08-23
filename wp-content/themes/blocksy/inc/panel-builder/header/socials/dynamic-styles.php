<?php

// Icon size
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => $root_selector,
	'variableName' => 'iconSize',
	'value' => blocksy_akg('socialsIconSize', $atts, [
		'mobile' => 15,
		'tablet' => 15,
		'desktop' => 15,
	])
]);


// Icon spacing
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => $root_selector,
	'variableName' => 'spacing',
	'value' => blocksy_akg('socialsIconSpacing', $atts, [
		'mobile' => 15,
		'tablet' => 15,
		'desktop' => 15,
	])
]);

// Icons custom color
blocksy_output_colors([
	'value' => blocksy_akg('headerSocialsIconColor', $atts),
	'default' => [
		'default' => [ 'color' => 'var(--color)' ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,

	'variables' => [
		'default' => [
			'selector' => $root_selector . ' [data-color="custom"]',
			'variable' => 'linkInitialColor'
		],

		'hover' => [
			'selector' => $root_selector . ' [data-color="custom"]',
			'variable' => 'linkHoverColor'
		]
	],

	'responsive' => true
]);

// Icons custom background
blocksy_output_colors([
	'value' => blocksy_akg('headerSocialsIconBackground', $atts),
	'default' => [
		'default' => [ 'color' => 'rgba(218, 222, 228, 0.3)' ],
		'hover' => [ 'color' => 'var(--paletteColor1)' ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,

	'variables' => [
		'default' => [
			'selector' => $root_selector . ' [data-color="custom"]',
			'variable' => 'backgroundColor'
		],

		'hover' => [
			'selector' => $root_selector . ' [data-color="custom"]',
			'variable' => 'backgroundColorHover'
		]
	],

	'responsive' => true
]);

// Margin
blocksy_output_spacing([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => $root_selector,
	'important' => true,
	'value' => blocksy_default_akg(
		'headerSocialsMargin', $atts,
		blocksy_spacing_value([
			'linked' => true,
		])
	)
]);

if (function_exists('blocksy_output_responsive_switch')) {
	blocksy_output_responsive_switch([
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'selector' => $root_selector . ' .ct-label',
		'value' => blocksy_default_akg(
			'socialsLabelVisibility',
			$atts,
			[
				'desktop' => false,
				'tablet' => false,
				'mobile' => false,
			]
		),
		'on' => 'block'
	]);
}


// transparent state
if (isset($has_transparent_header) && $has_transparent_header) {

	// Icons custom color
	blocksy_output_colors([
		'value' => blocksy_akg('transparentHeaderSocialsIconColor', $atts),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,

		'variables' => [
			'default' => [
				'selector' => '[data-transparent-row="yes"] ' . $root_selector . ' [data-color="custom"]',
				'variable' => 'linkInitialColor'
			],

			'hover' => [
				'selector' => '[data-transparent-row="yes"] ' . $root_selector . ' [data-color="custom"]',
				'variable' => 'linkHoverColor'
			]
		],

		'responsive' => true
	]);

	// Icons custom background
	blocksy_output_colors([
		'value' => blocksy_akg('transparentHeaderSocialsIconBackground', $atts),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,

		'variables' => [
			'default' => [
				'selector' => '[data-transparent-row="yes"] ' . $root_selector . ' [data-color="custom"]',
				'variable' => 'backgroundColor'
			],

			'hover' => [
				'selector' => '[data-transparent-row="yes"] ' . $root_selector . ' [data-color="custom"]',
				'variable' => 'backgroundColorHover'
			]
		],

		'responsive' => true
	]);
}


// sticky state
if (isset($has_sticky_header) && $has_sticky_header) {

	// Icons custom color
	blocksy_output_colors([
		'value' => blocksy_akg('stickyHeaderSocialsIconColor', $atts),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,

		'variables' => [
			'default' => [
				'selector' => '[data-sticky*="yes"] ' . $root_selector . ' [data-color="custom"]',
				'variable' => 'linkInitialColor'
			],

			'hover' => [
				'selector' => '[data-sticky*="yes"] ' . $root_selector . ' [data-color="custom"]',
				'variable' => 'linkHoverColor'
			]
		],

		'responsive' => true
	]);

	// Icons custom background
	blocksy_output_colors([
		'value' => blocksy_akg('stickyHeaderSocialsIconBackground', $atts),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,

		'variables' => [
			'default' => [
				'selector' => '[data-sticky*="yes"] ' . $root_selector . ' [data-color="custom"]',
				'variable' => 'backgroundColor'
			],

			'hover' => [
				'selector' => '[data-sticky*="yes"] ' . $root_selector . ' [data-color="custom"]',
				'variable' => 'backgroundColorHover'
			]
		],

		'responsive' => true
	]);
}
