<?php

// Icon size
$search_header_icon_size = blocksy_akg('searchHeaderIconSize', $atts, 15);

if ($search_header_icon_size !== 15) {
	blocksy_output_responsive([
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'selector' => '.ct-header-search',
		'variableName' => 'iconSize',
		'value' => $search_header_icon_size
	]);
}

// Icon color
blocksy_output_colors([
	'value' => blocksy_akg('searchHeaderIconColor', $atts),
	'default' => [
		'default' => [ 'color' => 'var(--color)' ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'variables' => [
		'default' => [
			'selector' => '.ct-header-search',
			'variable' => 'linkInitialColor'
		],

		'hover' => [
			'selector' => '.ct-header-search',
			'variable' => 'linkHoverColor'
		],
	],
	'responsive' => true
]);

// transparent state
if (isset($has_transparent_header) && $has_transparent_header) {
	blocksy_output_colors([
		'value' => blocksy_akg('transparentSearchHeaderIconColor', $atts),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,

		'variables' => [
			'default' => [
				'selector' => '[data-transparent-row="yes"] .ct-header-search',
				'variable' => 'linkInitialColor'
			],

			'hover' => [
				'selector' => '[data-transparent-row="yes"] .ct-header-search',
				'variable' => 'linkHoverColor'
			],
		],
		'responsive' => true
	]);
}


// sticky state
if (isset($has_sticky_header) && $has_sticky_header) {
	blocksy_output_colors([
		'value' => blocksy_akg('stickySearchHeaderIconColor', $atts),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,

		'variables' => [
			'default' => [
				'selector' => '[data-sticky*="yes"] .ct-header-search',
				'variable' => 'linkInitialColor'
			],

			'hover' => [
				'selector' => '[data-sticky*="yes"] .ct-header-search',
				'variable' => 'linkHoverColor'
			],
		],
		'responsive' => true
	]);
}


// Links color
blocksy_output_colors([
	'value' => blocksy_akg('searchHeaderLinkColor', $atts),
	'default' => [
		'default' => [ 'color' => '#ffffff' ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '#search-modal',
			'variable' => 'linkInitialColor'
		],

		'hover' => [
			'selector' => '#search-modal',
			'variable' => 'linkHoverColor'
		],
	],
]);


// Modal background
blocksy_output_background_css([
	'selector' => '#search-modal',
	'css' => $css,
	'value' => blocksy_akg('searchHeaderBackground', $atts,
		blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => 'rgba(18, 21, 25, 0.98)'
				],
			],
		])
	)
]);


// Icon margin
blocksy_output_spacing([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.ct-header-search',
	'important' => true,
	'value' => blocksy_default_akg(
		'headerSearchMargin', $atts,
		blocksy_spacing_value([
			'linked' => true,
		])
	)
]);
