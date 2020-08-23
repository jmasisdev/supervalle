<?php

// Font color
blocksy_output_colors([
	'value' => blocksy_akg('headerButtonFontColor', $atts),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],

		'default_2' => [ 'color' => 'var(--buttonInitialColor)' ],
		'hover_2' => [ 'color' => '#ffffff' ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'variables' => [
		'default' => [
			'selector' => $root_selector . ' .ct-button',
			'variable' => 'buttonTextInitialColor'
		],

		'hover' => [
			'selector' => $root_selector . ' .ct-button',
			'variable' => 'buttonTextHoverColor'
		],


		'default_2' => [
			'selector' => $root_selector . ' .ct-button-ghost',
			'variable' => 'buttonTextInitialColor'
		],

		'hover_2' => [
			'selector' => $root_selector . ' .ct-button-ghost',
			'variable' => 'buttonTextHoverColor'
		],
	],
	'responsive' => true
]);

// Background color
blocksy_output_colors([
	'value' => blocksy_akg('headerButtonForeground', $atts),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'variables' => [
		'default' => [
			'selector' => $root_selector,
			'variable' => 'buttonInitialColor'
		],

		'hover' => [
			'selector' => $root_selector,
			'variable' => 'buttonHoverColor'
		],
	],
	'responsive' => true
]);

if (isset($has_transparent_header) && $has_transparent_header) {
	blocksy_output_colors([
		'value' => blocksy_akg('transparentHeaderButtonFontColor', $atts),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],

			'default_2' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover_2' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,

		'variables' => [
			'default' => [
				'selector' => '[data-transparent-row="yes"] ' . $root_selector . ' .ct-button',
				'variable' => 'buttonTextInitialColor'
			],

			'hover' => [
				'selector' => '[data-transparent-row="yes"] ' . $root_selector . ' .ct-button',
				'variable' => 'buttonTextHoverColor'
			],

			'default_2' => [
				'selector' => '[data-transparent-row="yes"] ' . $root_selector . ' .ct-button-ghost',
				'variable' => 'buttonTextInitialColor'
			],

			'hover_2' => [
				'selector' => '[data-transparent-row="yes"] ' . $root_selector . ' .ct-button-ghost',
				'variable' => 'buttonTextHoverColor'
			],
		],
		'responsive' => true
	]);

	// Background color
	blocksy_output_colors([
		'value' => blocksy_akg('transparentHeaderButtonForeground', $atts),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,

		'variables' => [
			'default' => [
				'selector' => '[data-transparent-row="yes"] ' . $root_selector,
				'variable' => 'buttonInitialColor'
			],

			'hover' => [
				'selector' => '[data-transparent-row="yes"] ' . $root_selector,
				'variable' => 'buttonHoverColor'
			],
		],
		'responsive' => true
	]);
}


// sticky state
if (isset($has_sticky_header) && $has_sticky_header) {

	blocksy_output_colors([
		'value' => blocksy_akg('stickyHeaderButtonFontColor', $atts),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],

			'default_2' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover_2' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,

		'variables' => [
			'default' => [
				'selector' => '[data-sticky*="yes"] ' . $root_selector . ' .ct-button',
				'variable' => 'buttonTextInitialColor'
			],

			'hover' => [
				'selector' => '[data-sticky*="yes"] ' . $root_selector . ' .ct-button',
				'variable' => 'buttonTextHoverColor'
			],


			'default_2' => [
				'selector' => '[data-sticky*="yes"] ' . $root_selector . ' .ct-button-ghost',
				'variable' => 'buttonTextInitialColor'
			],

			'hover_2' => [
				'selector' => '[data-sticky*="yes"] ' . $root_selector . ' .ct-button-ghost',
				'variable' => 'buttonTextHoverColor'
			],
		],
		'responsive' => true
	]);

	blocksy_output_colors([
		'value' => blocksy_akg('stickyHeaderButtonForeground', $atts),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,

		'variables' => [
			'default' => [
				'selector' => '[data-sticky*="yes"] ' . $root_selector,
				'variable' => 'buttonInitialColor'
			],

			'hover' => [
				'selector' => '[data-sticky*="yes"] ' . $root_selector,
				'variable' => 'buttonHoverColor'
			],
		],
		'responsive' => true
	]);

}


// Margin
blocksy_output_spacing([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => $root_selector,
    'important' => true,
	'value' => blocksy_default_akg( 'headerCtaMargin', $atts,
		blocksy_spacing_value([
			'linked' => true,
		])
	)
]);

// Border radius
blocksy_output_spacing([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => $root_selector,
	'property' => 'buttonBorderRadius',
	'value' => blocksy_default_akg( 'headerCtaRadius', $atts,
		blocksy_spacing_value([
			'linked' => true,
		])
	)
]);
