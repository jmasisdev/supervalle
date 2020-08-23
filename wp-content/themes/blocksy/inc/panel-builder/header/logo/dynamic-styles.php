<?php

// Logo size
$logo_max_height = blocksy_akg('logoMaxHeight', $atts, 50);

if ($logo_max_height !== 50) {
	blocksy_output_responsive([
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'selector' => '.site-logo-container',
		'variableName' => 'maxHeight',
		'value' => $logo_max_height,
	]);
}

// Site title font
blocksy_output_font_css([
	'font_value' => blocksy_akg('siteTitle', $atts,
		blocksy_typography_default_values([
			'size' => '25px',
			'variation' => 'n7',
			// 'line-height' => '1.5'
		])
	),
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.site-title'
]);


// Site title color
blocksy_output_colors([
	'value' => blocksy_akg('siteTitleColor', $atts),
	'default' => [
		'default' => [ 'color' => 'var(--paletteColor4)' ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'variables' => [
		'default' => [
			'selector' => '.site-title',
			'variable' => 'linkInitialColor'
		],

		'hover' => [
			'selector' => '.site-title',
			'variable' => 'linkHoverColor'
		],
	],
	'responsive' => true
]);

if (isset($has_transparent_header) && $has_transparent_header) {
	blocksy_output_colors([
		'value' => blocksy_akg('transparentSiteTitleColor', $atts),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,

		'variables' => [
			'default' => [
				'selector' => '[data-transparent-row="yes"] .site-title',
				'variable' => 'linkInitialColor'
			],

			'hover' => [
				'selector' => '[data-transparent-row="yes"] .site-title',
				'variable' => 'linkHoverColor'
			],
		],
		'responsive' => true
	]);

	// Site tagline color
	blocksy_output_colors([
		'value' => blocksy_akg('transparentSiteTaglineColor', $atts),
		'default' => [
			'default' => ['color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT')],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,

		'variables' => [
			'default' => [
				'selector' => '[data-transparent-row="yes"] .site-description',
				'variable' => 'color'
			],
		],
		'responsive' => true
	]);
}

// sticky state
if (isset($has_sticky_header) && $has_sticky_header) {
	blocksy_output_colors([
		'value' => blocksy_akg('stickySiteTitleColor', $atts),
		'default' => [
			'default' => ['color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT')],
			'hover' => ['color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT')],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,

		'variables' => [
			'default' => [
				'selector' => '[data-sticky*="yes"] .site-title',
				'variable' => 'linkInitialColor'
			],

			'hover' => [
				'selector' => '[data-sticky*="yes"] .site-title',
				'variable' => 'linkHoverColor'
			],
		],
		'responsive' => true
	]);

	// Site tagline color
	blocksy_output_colors([
		'value' => blocksy_akg('stickySiteTaglineColor', $atts),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,

		'variables' => [
			'default' => [
				'selector' => '[data-sticky*="yes"] .site-description',
				'variable' => 'color'
			],
		],
		'responsive' => true
	]);
}

// Site tagline font
$has_tagline = blocksy_akg('has_tagline', $atts, 'no');

if ($has_tagline === 'yes') {
	blocksy_output_font_css([
		'font_value' => blocksy_akg('siteTagline', $atts,
			blocksy_typography_default_values([
				'size' => '13px',
				'variation' => 'n5',
			])
		),
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'selector' => '.site-description'
	]);

	blocksy_output_colors([
		'value' => blocksy_akg('siteTaglineColor', $atts),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'variables' => [
			'default' => [
				'selector' => '.site-description',
				'variable' => 'color'
			],
		],
		'responsive' => true
	]);
}

blocksy_output_spacing([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.site-branding',
	'important' => true,
	'value' => blocksy_default_akg(
		'headerLogoMargin', $atts,
		blocksy_spacing_value([
			'linked' => true,
		])
	)
]);