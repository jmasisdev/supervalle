<?php

// Icon size
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.ct-header-cart i',
	'variableName' => 'iconSize',
	'value' => blocksy_akg('cartIconSize', $atts, [
		'mobile' => 15,
		'tablet' => 15,
		'desktop' => 15,
	])
]);


// Icon color
blocksy_output_colors([
	'value' => blocksy_akg('cartHeaderIconColor', $atts),
	'default' => [
		'default' => [ 'color' => 'var(--color)' ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'variables' => [
		'default' => [
			'selector' => '.ct-header-cart > a',
			'variable' => 'linkInitialColor'
		],

		'hover' => [
			'selector' => '.ct-header-cart > a',
			'variable' => 'linkHoverColor'
		],
	],
	'responsive' => true
]);


// Badge color
blocksy_output_colors([
	'value' => blocksy_akg('cartBadgeColor', $atts),
	'default' => [
		'background' => [ 'color' => 'var(--paletteColor1)' ],
		'text' => [ 'color' => '#ffffff' ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'variables' => [
		'background' => [
			'selector' => '.ct-header-cart',
			'variable' => 'cartBadgeBackground'
		],

		'text' => [
			'selector' => '.ct-header-cart',
			'variable' => 'cartBadgeText'
		],
	],
	'responsive' => true
]);


// transparent state
if (isset($has_transparent_header) && $has_transparent_header) {
	blocksy_output_colors([
		'value' => blocksy_akg('transparentCartHeaderIconColor', $atts),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,

		'variables' => [
			'default' => [
				'selector' => '[data-transparent-row="yes"] .ct-header-cart > a',
				'variable' => 'linkInitialColor'
			],

			'hover' => [
				'selector' => '[data-transparent-row="yes"] .ct-header-cart > a',
				'variable' => 'linkHoverColor'
			],
		],
		'responsive' => true
	]);


	// Badge color
	blocksy_output_colors([
		'value' => blocksy_akg('transparentCartBadgeColor', $atts),
		'default' => [
			'background' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'text' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,

		'variables' => [
			'background' => [
				'selector' => '[data-transparent-row="yes"] .ct-header-cart',
				'variable' => 'cartBadgeBackground'
			],

			'text' => [
				'selector' => '[data-transparent-row="yes"] .ct-header-cart',
				'variable' => 'cartBadgeText'
			],
		],
		'responsive' => true
	]);
}


// sticky state
if (isset($has_sticky_header) && $has_sticky_header) {
	blocksy_output_colors([
		'value' => blocksy_akg('stickyCartHeaderIconColor', $atts),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,

		'variables' => [
			'default' => [
				'selector' => '[data-sticky*="yes"] .ct-header-cart > a',
				'variable' => 'linkInitialColor'
			],

			'hover' => [
				'selector' => '[data-sticky*="yes"] .ct-header-cart > a',
				'variable' => 'linkHoverColor'
			],
		],
		'responsive' => true
	]);


	// Badge color
	blocksy_output_colors([
		'value' => blocksy_akg('stickyCartBadgeColor', $atts),
		'default' => [
			'background' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'text' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,

		'variables' => [
			'background' => [
				'selector' => '[data-sticky*="yes"] .ct-header-cart',
				'variable' => 'cartBadgeBackground'
			],

			'text' => [
				'selector' => '[data-sticky*="yes"] .ct-header-cart',
				'variable' => 'cartBadgeText'
			],
		],
		'responsive' => true
	]);
}


// Dropdown top offset
$cartDropdownTopOffset = blocksy_akg( 'cartDropdownTopOffset', $atts, 15 );
$css->put(
	'.ct-cart-content',
	'--dropdownTopOffset: ' . $cartDropdownTopOffset . 'px'
);


// Cart font color
blocksy_output_colors([
	'value' => blocksy_akg('cartFontColor', $atts),
	'default' => [
		'default' => [ 'color' => '#ffffff' ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'variables' => [
		'default' => [
			'selector' => '.ct-cart-content',
			'variable' => 'linkInitialColor'
		],

		'hover' => [
			'selector' => '.ct-cart-content',
			'variable' => 'linkHoverColor'
		],
	],
]);

// Cart dropdown
blocksy_output_colors([
	'value' => blocksy_akg('cartDropDownBackground', $atts),
	'default' => ['default' => ['color' => '#29333C']],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.ct-cart-content',
			'variable' => 'backgroundColor'
		]
	],
]);


// Margin
blocksy_output_spacing([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.ct-header-cart',
	'important' => true,
	'value' => blocksy_default_akg(
		'headerCartMargin', $atts,
		blocksy_spacing_value([
			'linked' => true,
		])
	)
]);
