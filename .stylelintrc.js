/**
 * @file A configuration for `style lint` to enable the rules and formats
 * that needs to be follow. 
 * 
 * @author Jerald Austero <jerald.austero0229@gmail.com>
 * @copyright Jerald Austero 2020
 */

'use-strict'

module.exports = {
    root: true,

    rules:
    {
        /**
         * Type: Array | String
         * 
         * Specify a blacklist of disallowed at-rules.
         * 
         * Reference: https://stylelint.io/user-guide/rules/at-rule-blacklist
         */
        'at-rule-blacklist': null,

        /**
         * Type: String
         * Options: 'always' | 'never'
         * Secondary Options: except: [], ignore: [], ignoreAtRules: []
         * 
         * Require or disallow an empty line before at-rules.
         * 
         * Reference: https://stylelint.io/user-guide/rules/at-rule-empty-line-before
         */
        'at-rule-empty-line-before': [
            'always',
            {
                'ignore': [
                    'after-comment',
                    'first-nested',
                    'inside-block',
                    'blockless-after-same-name-blockless',
                    'blockless-after-blockless',
                ],
            }
        ],

        /**
         * Type: String
         * Options: 'lower' | 'upper'
         * 
         * Specify lowercase or uppercase for at-rules names.
         * 
         * Reference: https://stylelint.io/user-guide/rules/at-rule-name-case
         */
        'at-rule-name-case': 'lower',

        /**
         * Type: String
         * Options: 'always' | 'always-multi-line'
         * 
         * Require a newline after at-rule names.
         * 
         * Reference: https://stylelint.io/user-guide/rules/at-rule-name-newline-after
         */
        'at-rule-name-newline-after': 'always-multi-line',

        /**
         * Type: String
         * Options: 'always' | 'always-multi-line'
         * 
         * Require a single space after at-rule names.
         * 
         * Reference: https://stylelint.io/user-guide/rules/at-rule-name-space-after
         */
        'at-rule-name-space-after': 'always',

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow vendor prefixes for at-rules.
         * 
         * Reference: https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix
         */
        'at-rule-no-vendor-prefix': true,

        /**
         * Type: Object
         * Options: {'at-rule-name': ['array', 'of', 'properties']}
         * 
         * Specify a requirelist of properties for an at-rule.
         * 
         * Reference: https://stylelint.io/user-guide/rules/at-rule-property-requirelist
         */
        'at-rule-property-requirelist': {
            'font-face': [
                'font-display',
                'font-family',
                'src'
            ]
        },

        /**
         * Type: String
         * Options: 'always'
         * 
         * Require a newline after the semicolon of at-rules.
         * 
         * Reference: https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after
         */
        'at-rule-semicolon-newline-after': 'always',

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require a single space or disallow whitespace before the semicolons
         * of at-rules.
         * 
         * Reference: https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before
         */
        'at-rule-semicolon-space-before': 'never',

        /**
         * Type: Array | String
         * Options: [] | 'at-rule' 
         * 
         * Specify a whitelist of allowed at-rules.
         * 
         * Reference: https://stylelint.io/user-guide/rules/at-rule-whitelist
         */
        'at-rule-whitelist': [
            'keyframes',
            'media',
            'include',
            'import',
            'each',
            'if',
            'else if',
            'else',
            'mixin',
            'function',
            'return',
            'warn',
            'error',
            'font-face',
            'supports',
            'page'
        ],

        /**
         * Type: String
         * Options: 'always-multi-line' | 'never'
         * 
         * Require or disallow an empty line before the closing brace of blocks.
         * 
         * Reference: https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before
         */
        'block-closing-brace-empty-line-before': 'never',

        /**
         * Type: String
         * Options: 'always' | 'always-single-line' | 'always-multi-line'
         *          'never-multi-line'
         * 
         * Require a newline or disallow whitespace after the closing brace of
         * blocks.
         * 
         * Reference: https://stylelint.io/user-guide/rules/block-closing-brace-newline-after
         */
        'block-closing-brace-newline-after': 'always',

        /**
         * Type: String
         * Options: 'always' | 'always-multi-line' | 'never-multi-line'
         * 
         * Require a newline or disallow whitespace before the closing brace of
         * blocks.
         * 
         * Reference: https://stylelint.io/user-guide/rules/block-closing-brace-newline-before
         */
        'block-closing-brace-newline-before': 'always-multi-line',

        /**
         * Type: String
         * Options: 'always' | 'never' | 'always-single-line' |
         *          'never-single-line' | 'always-multi-line' |
         *          'never-multi-line'
         * 
         * Require a single space or disallow whitespace after the closing
         * brace of blocks.
         * 
         * Reference: https://stylelint.io/user-guide/rules/block-closing-brace-space-after
         */
        'block-closing-brace-space-after': 'always-single-line',

        /**
         * Type: String
         * Options: 'always' | 'never' | 'always-single-line' |
         *          'never-single-line' | 'always-multi-line' |
         *          'never-multi-line'
         * 
         * Require a single space or disallow whitespace before the closing
         * brace of blocks.
         * 
         * Reference: https://stylelint.io/user-guide/rules/block-closing-brace-space-before
         */
        'block-closing-brace-space-before': 'always-single-line',

        /**
         * Type: Boolean
         * Options: true
         * Secondary Options: ignore: ['comments']
         * 
         * Disallow empty blocks.
         * 
         * Reference: https://stylelint.io/user-guide/rules/block-no-empty
         */
        'block-no-empty': true,

        /**
         * Type: String
         * Options: 'always' | 'always-multi-line' | 'never-multi-line'
         * 
         * Require a newline after the opening brace of blocks. This rule
         * allows an end-of-line comment followed by a newline
         * 
         * Reference: https://stylelint.io/user-guide/rules/block-opening-brace-newline-after
         */
        'block-opening-brace-newline-after': 'always',

        /**
         * Type: String
         * Options: 'always' | 'always-singe-line' | 'never-signle-line' |
         *          'always-multi-line' | 'never-multi-line'
         * 
         * Require a newline or disallow whitespace before the opening brace
         * of blocks.
         * 
         * Reference: https://stylelint.io/user-guide/rules/block-opening-brace-newline-before
         */
        'block-opening-brace-newline-before': 'never-single-line',

        /**
         * Type: String
         * Options: 'always' | 'never' | 'always-single-line' |
         *          'never-single-line' | 'always-multi-line' |
         *          'never-multi-line' 
         * 
         * Require a single space or disallow whitespace after the opening
         * brace of blocks.
         * 
         * Reference: https://stylelint.io/user-guide/rules/block-opening-brace-space-after
         */
        'block-opening-brace-space-after': 'always-single-line',

        /**
         * Type: String
         * Options: 'always' | 'never' | 'always-single-line' |
         *          'never-single-line' | 'always-multi-line' | 
         *          'never-multi-line'
         * 
         * Require a single space or disallow whitespace before the opening
         * brace of blocks.
         * 
         * Reference: https://stylelint.io/user-guide/rules/block-opening-brace-space-before
         */
        'block-opening-brace-space-before': 'always',

        /**
         * Type: String
         * Options: 'lower' | 'upper'
         * 
         * Specify lowercase or uppercase for hex colors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/color-hex-case
         */
        'color-hex-case': 'upper',

        /**
         * Type: String
         * Options: 'short' | 'long'
         * 
         * Specify short or long notation for hex colors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/color-hex-length
         */
        'color-hex-length': 'long',

        /**
         * Type: String
         * Options: 'always-where-possible' | 'never'
         * 
         * Require (where possible) or disallow named colors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/color-named
         */
        'color-named': 'never',

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow hex colors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/color-no-hex
         */
        'color-no-hex': null,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow invalid hex colors.Longhand hex colors can be either 6 or
         * 8 (with alpha channel) hexadecimal characters. And their shorthand
         * variants are 3 and 4 characters respectively.
         * 
         * Reference: https://stylelint.io/user-guide/rules/color-no-invalid-hex
         */
        'color-no-invalid-hex': true,

        /**
         * Type: String
         * Options: 'always' | 'never'
         * Secondary Options: 'except': [] | 'ignore': []
         * 
         * We require empty line after comment to make it as divider or 
         * that comment is for the new line, But allows comment after brace
         * 
         * Reference: https://stylelint.io/user-guide/rules/comment-empty-line-before
         */
        'comment-empty-line-before': [
            'always',
            {
                'except': ['first-nested']
            }
        ],

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow empty comments.
         * 
         * Reference: https://stylelint.io/user-guide/rules/comment-no-empty
         */
        'comment-no-empty': true,

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require or disallow whitespace on the inside of comment markers.
         * Any number of asterisks are allowed at the beginning or end of
         * the comment.
         * 
         * Reference: https://stylelint.io/user-guide/rules/comment-whitespace-inside
         */
        'comment-whitespace-inside': 'always',

        /**
         * Type: Array | String | regex
         * Options: [] | 'word' | '/regex/'
         * 
         * Specify a blacklist of disallowed words within comments.
         * 
         * Reference: https://stylelint.io/user-guide/rules/comment-word-blacklist
         */
        'comment-word-blacklist': null,

        /**
         * Type: regex | String
         * Options: 'foo-.+' | 'foo'
         * 
         * Specify a pattern for custom media query names.
         * 
         * Reference: https://stylelint.io/user-guide/rules/custom-media-pattern
         */
        'custom-media-pattern': null,

        /**
         * Type: String
         * Options: 'always' | 'never'
         * Secondary Options: 'except': [] | 'ignore': []
         * 
         * Require or disallow an empty line before custom properties.
         * 
         * Reference: https://stylelint.io/user-guide/rules/custom-property-empty-line-before
         */
        'custom-property-empty-line-before': [
            'always',
            {
                'except': [
                    'after-comment',
                    'after-custom-property',
                ]
            }
        ],

        /**
         * Type: regex | string
         * Options: 'foo-.+*'
         * 
         * Specify a pattern for custom properties.
         * 
         * Reference: https://stylelint.io/user-guide/rules/custom-property-pattern
         */
        'custom-property-pattern': 'uis-.+',

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require a single space or disallow whitespace after the bang of
         * declarations.
         * 
         * Reference: https://stylelint.io/user-guide/rules/declaration-bang-space-after
         */
        'declaration-bang-space-after': 'never',

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require a single space or disallow whitespace before the bang of
         * declarations.
         * 
         * Reference: https://stylelint.io/user-guide/rules/declaration-bang-space-before
         */
        'declaration-bang-space-before': 'always',

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow duplicate properties within declaration blocks.
         * 
         * Reference: https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties
         */
        'declaration-block-no-duplicate-properties': true,

        /**
         * Type: Boolean
         * Options: true
         * Secondary Options: ignoreShortHands: []
         * 
         * Disallow longhand properties that can be combined into one
         * shorthand property.
         * 
         * Reference: https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties
         */
        'declaration-block-no-redundant-longhand-properties': [
            true,
            {
                'ignoreShorthands': [
                    'margin',
                    'padding',
                    'transition'
                ]
            }
        ],

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow shorthand properties that override related longhand
         * properties.
         * 
         * Reference: https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides
         */
        'declaration-block-no-shorthand-property-overrides': true,

        /**
         * Type: String
         * Options: 'always' | 'always-multi-line' | 'never-multi-line'
         * 
         * Require a newline or disallow whitespace after the semicolons of
         * declaration blocks.
         * 
         * Reference: https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after
         */
        'declaration-block-semicolon-newline-after': null,

        /**
         * Type: String
         * Options: 'always' | 'always-multi-line' | 'never-multi-line'
         * 
         * Require a newline or disallow whitespace before the semicolons
         * of declaration blocks.
         * 
         * Reference: https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before
         */
        'declaration-block-semicolon-newline-before': null,

        /**
         * Type: String
         * Options: 'always' | 'never' | 'always-single-line' |
         *          'never-single-line'
         * 
         * Require a single space or disallow whitespace after the semicolons
         * of declaration blocks.
         * 
         * Reference: https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after
         */
        'declaration-block-semicolon-space-after': 'always-single-line',

        /**
         * Type: String
         * Default: 'always' | 'never' | 'always-single-line' |
         *          'never-single-line'
         * 
         * Require a single space or disallow whitespace before the semicolons 
         * of declaration blocks.
         * 
         * Reference:https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before
         */
        'declaration-block-semicolon-space-before': 'never',

        /**
         * Type: Integer
         * 
         * Limit the number of declarations within a single-line declaration
         * block.
         * 
         * Reference: https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations
         */
        'declaration-block-single-line-max-declarations': 1,

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require or disallow a trailing semicolon within declaration blocks.
         * 
         * Reference: https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon
         */
        'declaration-block-trailing-semicolon': 'always',

        /**
         * Type: String
         * Options: 'always' | 'always-multi-line'
         * 
         * Require a newline or disallow whitespace after the colon of
         * declarations.
         * 
         * Reference: https://stylelint.io/user-guide/rules/declaration-colon-newline-after
         */
        'declaration-colon-newline-after': null,

        /**
         * Type: String
         * Options: 'always' | 'never' | 'always-multi-line'
         * 
         * Require a single space or disallow whitespace after the colon of
         * declarations.
         * 
         * Reference: https://stylelint.io/user-guide/rules/declaration-colon-space-after
         */
        'declaration-colon-space-after': 'always',

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require a single space or disallow whitespace before the colon of
         * declarations.
         * 
         * Reference: https://stylelint.io/user-guide/rules/declaration-colon-space-before
         */
        'declaration-colon-space-before': 'never',

        /**
         * Type: String
         * Options: 'always' | 'never'
         * Secondary Options: 'except': [] | 'ignore': []
         * 
         * Require or disallow an empty line before declarations.
         * 
         * Reference: https://stylelint.io/user-guide/rules/declaration-empty-line-before
         */
        'declaration-empty-line-before': null,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow !important within declarations. If you always want
         * !important in your declarations, e.g. if you're writing user styles,
         * you can safely add them using postcss-safe-important.
         * 
         * Reference: https://stylelint.io/user-guide/rules/declaration-no-important
         */
        'declaration-no-important': null,

        /**
         * Type: Object
         * Option: 'object': {'property': []}
         * 
         * Specify a blacklist of disallowed property and unit pairs within
         * declarations.
         * 
         * Reference: https://stylelint.io/user-guide/rules/declaration-property-unit-blacklist
         */
        'declaration-property-unit-blacklist': null,

        /**
         * Type: Object
         * Option: 'object': {'property': []}
         * 
         * Specify a whitelist of allowed property and unit pairs within
         * declarations.
         * 
         * Reference: https://stylelint.io/user-guide/rules/declaration-property-unit-whitelist
         */
        'declaration-property-unit-whitelist': null,

        /**
         * Type: Object
         * Option: 'object': {'property': []}
         * 
         * Specify a blacklist of disallowed property and value pairs within declarations.
         * 
         * Reference: https://stylelint.io/user-guide/rules/declaration-property-value-blacklist
         */
        'declaration-property-value-blacklist': null,

        /**
         * Type: Object
         * Option: 'object': {'property': []}
         * 
         * Specify a whitelist of allowed property and value pairs within
         * declarations.
         * 
         * Reference: https://stylelint.io/user-guide/rules/declaration-property-value-whitelist
         */
        'declaration-property-value-whitelist': null,

        /**
         * Type: String
         * Options: 'always-where-required' | 'always-where-recommended' |
         *          'always-unless-keywrod'
         * 
         * Specify whether or not quotation marks should be used around font
         * family names. This rule checks the font and font-family properties.
         * 
         * Reference: https://stylelint.io/user-guide/rules/font-family-name-quotes
         */
        'font-family-name-quotes': 'always-unless-keyword',

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow duplicate font family names.
         * 
         * Reference: https://stylelint.io/user-guide/rules/font-family-no-duplicate-names
         */
        'font-family-no-duplicate-names': true,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow missing generic families in lists of font family names.
         * 
         * Reference: https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword
         */
        'font-family-no-missing-generic-family-keyword': true,

        /**
         * Type: String
         * Options: 'numeric' | 'name-where-possible'
         * Secondary Options: ignore: []
         * 
         * Require numeric or named (where possible) font-weight values. Also,
         * when named values are expected, require only valid names. Valid
         * font-weight names are normal, bold, bolder, and lighter.
         * 
         * Reference: https://stylelint.io/user-guide/rules/font-weight-notation
         */
        'font-weight-notation': 'numeric',

        /**
         * Type: Array | String
         * Options: ['array', 'of', 'unprefixed'] | 'unprefixed'
         * 
         * Specify a blacklist of disallowed functions.
         * 
         * Reference: https://stylelint.io/user-guide/rules/function-blacklist
         */
        'function-blacklist': null,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow an invalid expression within calc functions.
         * 
         * Reference: https://stylelint.io/user-guide/rules/function-calc-no-invalid
         */
        'function-calc-no-invalid': true,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow an unspaced operator within calc functions.
         * 
         * Reference: https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator
         */
        'function-calc-no-unspaced-operator': true,

        /**
         * Type: String
         * Options: 'always' | 'always-multi-line' | 'never-multi-line'
         * 
         * Requires newline or disallow whitespace after commas when not multiline
         * 
         * Reference: https://stylelint.io/user-guide/rules/function-comma-newline-after
         */
        'function-comma-newline-after': null,

        /**
         * Tyoe: String
         * Options: 'always' | 'always-multi-line' | 'never-multi-line'
         * 
         * Require a newline or disallow whitespace before the commas of
         * functions.
         * 
         * Reference: https://stylelint.io/user-guide/rules/function-comma-newline-before
         */
        'function-comma-newline-before': null,

        /**
         * Type: String
         * Options: 'always' | 'never' | 'always-single-line' |
         *          'never-single-line'
         * 
         * Require a single space or disallow whitespace after the commas of
         * functions.
         * 
         * Reference: https://stylelint.io/user-guide/rules/function-comma-space-after
         */
        'function-comma-space-after': 'always-single-line',

        /**
         * Type: String
         * Options: 'always' | 'never' | 'always-single-line' | 
         *          'never-single-line'
         * 
         * Require a single space or disallow whitespace before the commas of
         * functions.
         * 
         * Reference: https://stylelint.io/user-guide/rules/function-comma-space-before
         */
        'function-comma-space-before': null,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow direction values in linear-gradient() calls that are not
         * valid according to the standard syntax.
         * 
         * Reference: https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction
         */
        'function-linear-gradient-no-nonstandard-direction': true,

        /**
         * Type: Integer
         * 
         * Limit the number of adjacent empty lines within functions.
         * 
         * Reference: https://stylelint.io/user-guide/rules/function-max-empty-lines
         */
        'function-max-empty-lines': 0,

        /**
         * Type: String
         * Options: 'lower' | 'upper'
         * 
         * Specify lowercase or uppercase for function names.
         * 
         * Reference: https://stylelint.io/user-guide/rules/function-name-case
         */
        'function-name-case': 'lower',

        /**
         * Type: String
         * Options: 'always' | 'always-multi-line' | 'never-multi-line'
         * 
         * Require a newline or disallow whitespace on the inside of the
         * parentheses of functions.
         * 
         * Reference: https://stylelint.io/user-guide/rules/function-parentheses-newline-inside
         */
        'function-parentheses-newline-inside': 'always-multi-line',

        /**
         * Type: Boolean
         * Options: true
         * 
         * Require a single space or disallow whitespace on the inside of the
         * parentheses of functions.
         * 
         * Reference: https://stylelint.io/user-guide/rules/function-parentheses-space-inside
         */
        'function-parentheses-space-inside': null,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow scheme-relative urls.
         * 
         * Reference: https://stylelint.io/user-guide/rules/function-url-no-scheme-relative
         */
        'function-url-no-scheme-relative': true,

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require or disallow quotes for urls.
         * 
         * Reference: https://stylelint.io/user-guide/rules/function-url-quotes
         */
        'function-url-quotes': 'always',

        /**
         * Type: Array | String | regex
         * Options: ['array', 'of', 'properties'] | 'scheme' | '/regex/'
         * 
         * Specify a blacklist of disallowed URL schemes.
         * 
         * Reference: https://stylelint.io/user-guide/rules/function-url-scheme-blacklist
         */
        'function-url-scheme-blacklist': null,

        /**
         * Type: Array | String | regex
         * Options: ['array', 'of', 'properties'] | 'scheme' | '/regex/'
         * 
         * Specify a whitelist of allowed URL schemes.
         * 
         * Reference: https://stylelint.io/user-guide/rules/function-url-scheme-whitelist
         */
        'function-url-scheme-whitelist': null,

        /**
         * Type: Array | String
         * Options: ['array', 'of', 'properties'] | 'function'
         * 
         * Specify a whitelist of allowed functions.
         * 
         * Reference: https://stylelint.io/user-guide/rules/function-whitelist
         */
        'function-whitelist': null,

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require or disallow whitespace after functions.
         * 
         * Reference: https://stylelint.io/user-guide/rules/function-whitespace-after
         */
        'function-whitespace-after': 'always',

        /**
         * Type: Integer | 'tab/space'
         * Options: 4 | 'space'
         * Secondary Options: baseIndentLevel: int |
         *                  indentInsideParens: 'twice' |
         *                  indentClosingBrace: boolean |
         *                  except: [] | ignore: []
         * 
         * Specify indention
         * 
         * Reference: https://stylelint.io/user-guide/rules/indentation
         */
        'indentation': [
            4 | 'space',
            {
                'baseIndentLevel': 1,
            },
            {
                'indentInsideParens': 'twice',
            },
            {
                'indentClosingBrace': false,
            },
        ],

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow !important within keyframe declarations.
         * 
         * Reference: https://stylelint.io/user-guide/rules/keyframe-declaration-no-important
         */
        'keyframe-declaration-no-important': true,

        /**
         * Type: regex | String
         * Options: 'foo-.+' | 'foo'
         * 
         * Specify a pattern for keyframe names.
         * 
         * Reference: https://stylelint.io/user-guide/rules/keyframes-name-pattern
         */
        'keyframes-name-pattern': null,

        /**
         * Type: Boolean
         * Options: true
         * Secondary Options: ignore: []
         * 
         * Disallow units for zero lengths.
         * 
         * Reference: https://stylelint.io/user-guide/rules/length-zero-no-unit
         */
        'length-zero-no-unit': null,

        /**
         * Type: String
         * Options: 'unix' | 'windows'
         * 
         * Specify unix or windows linebreaks
         * 
         * Reference: https://stylelint.io/user-guide/rules/linebreaks
         */
        'linebreaks': null,

        /**
         * Type: Integer
         * 
         * Limit the number of adjacent empty lines.
         * 
         * Reference: https://stylelint.io/user-guide/rules/max-empty-lines
         */
        'max-empty-lines': 5,

        /**
         * Type: Integer
         * Secondary Options: ignore: []
         * 
         * Limit the length of the line
         * 
         * Reference: https://stylelint.io/user-guide/rules/max-line-length
         */
        'max-line-length': [
            80,
            {
                'ignore': [
                    'non-comments',
                ]
            }
        ],

        /**
         * Type: Integer
         * 
         * Limit the depth of nesting
         * 
         * Reference: https://stylelint.io/user-guide/rules/max-nesting-depth
         */
        'max-nesting-depth': 4,

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require a single space or disallow whitespace after the colon in
         * media features.
         * 
         * Reference: https://stylelint.io/user-guide/rules/media-feature-colon-space-after
         */
        'media-feature-colon-space-after': 'always',

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require a single space or disallow whitespace before the colon in
         * media features.
         * 
         * Reference: https://stylelint.io/user-guide/rules/media-feature-colon-space-before
         */
        'media-feature-colon-space-before': 'never',

        /**
         * Type: Array | String | regex
         * Options: ['array', 'of', 'unprefixed'] | 'unprefixed' |
         *          '/unprefixed/'
         * 
         * Specify a blacklist of disallowed media feature names.
         * 
         * Reference: https://stylelint.io/user-guide/rules/media-feature-name-blacklist
         */
        'media-feature-name-blacklist': null,

        /**
         * Type: String
         * Options: 'lower' | 'upper'
         * 
         * Specify lowercase or uppercase for media feature names.
         * 
         * Reference: https://stylelint.io/user-guide/rules/media-feature-name-case
         */
        'media-feature-name-case': 'lower',

        /**
         * Type: Boolean
         * Options: true
         * Secondary Options: ignore: []
         * 
         * Disallow unknown media feature names.
         * 
         * Reference: https://stylelint.io/user-guide/rules/media-feature-name-no-unknown
         */
        'media-feature-name-no-unknown': true,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow vendor prefixes for media feature names.
         * 
         * Reference: https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix
         */
        'media-feature-name-no-vendor-prefix': true,

        /**
         * Type: Object
         * Options: object: []
         * 
         * Specify arguments value that allowed
         * 
         * Reference: https://stylelint.io/user-guide/rules/media-feature-name-value-whitelist
         */
        'media-feature-name-value-whitelist': null,

        /**
         * Type: Array | String | regex
         * Options: ['array', 'of', 'unprefixed'] | 'media-features' |
         *          '/media-features/'
         * 
         * Specify a whitelist of allowed media feature names.
         * 
         * Reference: https://stylelint.io/user-guide/rules/media-feature-name-whitelist
         */
        'media-feature-name-whitelist': null,

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require a single space or disallow whitespace on the inside of the
         * parentheses within media features.
         * 
         * Reference: https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside
         */
        'media-feature-parentheses-space-inside': 'never',

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require a single space or disallow whitespace after the range
         * operator in media features.
         * 
         * Reference: https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after
         */
        'media-feature-range-operator-space-after': 'always',

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require whitespace before media operator
         * 
         * Reference: https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before
         */
        'media-feature-range-operator-space-before': 'always',

        /**
         * Type: String
         * Options: 'always' |  'always-multi-line' | 'never-multi-line'
         * 
         * Require a newline or disallow whitespace after the commas of media query lists.
         * 
         * Reference: https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after
         */
        'media-query-list-comma-newline-after': 'always-multi-line',

        /**
         * Type: String
         * Options: 'always' | 'always-multi-line' | 'never-multi-line'
         * 
         * Require a newline or disallow whitespace before the commas of media
         * query lists.
         * 
         * Reference: https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before
         */
        'media-query-list-comma-newline-before': null,

        /**
         * Type: String
         * Options: 'always' | 'never' | 'always-single-line' | 
         *          'never-single-line'
         * 
         * Require a single space or disallow whitespace after the commas of
         * media query lists.
         * 
         * Reference: https://stylelint.io/user-guide/rules/media-query-list-comma-space-after
         */
        'media-query-list-comma-space-after': 'always-single-line',

        /**
         * Type: String
         * Options: 'always' | 'never' | 'always-single-line' | 
         *          'never-single-line'
         * 
         * Require a single space or disallow whitespace before the commas of
         * media query lists.
         * 
         * Reference: https://stylelint.io/user-guide/rules/media-query-list-comma-space-before
         */
        'media-query-list-comma-space-before': null,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow selectors of lower specificity from coming after
         * overriding selectors of higher specificity
         * 
         * Reference: https://stylelint.io/user-guide/rules/no-descending-specificity
         */
        'no-descending-specificity': null,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow duplicate @import rules within a stylesheet.
         * 
         * Reference: https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules
         */
        'no-duplicate-at-import-rules': true,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow duplicate selectors within a stylesheet.
         * 
         * Reference: https://stylelint.io/user-guide/rules/no-duplicate-selectors
         */
        'no-duplicate-selectors': null,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow empty first lines.
         * 
         * Reference: https://stylelint.io/user-guide/rules/no-empty-first-line
         */
        'no-empty-first-line': true,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow empty sources.
         * 
         * Reference: https://stylelint.io/user-guide/rules/no-empty-source
         */
        'no-empty-source': true,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow trailing whitespace
         * 
         * Reference: https://stylelint.io/user-guide/rules/no-eol-whitespace
         */
        'no-eol-whitespace': true,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow extra semicolns
         * 
         * Reference: https://stylelint.io/user-guide/rules/no-extra-semicolons
         */
        'no-extra-semicolons': true,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow double-slash comments (//...) which are not supported by
         * CSS and could lead to unexpected results.
         * 
         * Reference: https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments
         */
        'no-invalid-double-slash-comments': true,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow missing end-of-source newlines.
         * 
         * Reference: https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline
         */
        'no-missing-end-of-source-newline': true,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow unkown animation
         * 
         * Reference: https://stylelint.io/user-guide/rules/no-unknown-animations
         */
        'no-unknown-animations': true,

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Requires number zero on leading
         * 
         * Reference: https://stylelint.io/user-guide/rules/number-leading-zero
         */
        'number-leading-zero': 'always',

        /**
         * Type: Integer
         * Secondary Options: ignoreUnits: []
         * 
         * Limit the number of decimal places allowed in numbers.
         * 
         * Reference: https://stylelint.io/user-guide/rules/number-max-precision
         */
        'number-max-precision': 3,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow trailing zeros in numbers.
         * 
         * Reference: https://stylelint.io/user-guide/rules/number-no-trailing-zeros
         */
        'number-no-trailing-zeros': true,

        /**
         * Type: Array | String
         * Options: ['array', 'of', 'unprefixed'] | 'properties'
         * 
         * Specify a blacklist of disallowed properties.
         * 
         * Reference: https://stylelint.io/user-guide/rules/property-blacklist
         */
        'property-blacklist': null,

        /**
         * Type: String
         * Options: 'lower' | 'upper'
         * 
         * Specify lowercase or uppercase for properties.
         * 
         * Reference: https://stylelint.io/user-guide/rules/property-case
         */
        'property-case': 'lower',

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow unknown properties
         * 
         * Reference: https://stylelint.io/user-guide/rules/property-no-unknown
         */
        'property-no-unknown': true,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow vendor prefixes for properties.
         * 
         * Reference: https://stylelint.io/user-guide/rules/property-no-vendor-prefix
         */
        'property-no-vendor-prefix': true,

        /**
         * Type: Array | String
         * Options: ['array', 'of', 'unprefixed'] | 'properties'
         * 
         * Specify a whitelist of allowed properties.
         * 
         * Reference: https://stylelint.io/user-guide/rules/property-whitelist
         */
        'property-whitelist': null,

        /**
         * Type: String
         * Options: 'always' | 'never' | 'always-multi-line' |
         *          'never-multi-line'
         * 
         * Require or disallow an empty line before rules.
         * 
         * Reference: https://stylelint.io/user-guide/rules/rule-empty-line-before
         */
        'rule-empty-line-before': [
            'always',
            {
                'ignore': [
                    'after-comment',
                    'first-nested',
                    'inside-block',
                ]
            }
        ],

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require a single space or disallow whitespace on the inside of
         * the brackets within attribute selectors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside
         */
        'selector-attribute-brackets-space-inside': 'never',

        /**
         * Type: Array | String
         * Options: ['array', 'of', 'properties'] | 'operator'
         * 
         * Specify a blacklist of disallowed attribute operators.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-attribute-operator-blacklist
         */
        'selector-attribute-operator-blacklist': null,

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require a single space or disallow whitespace after operators within
         * attribute selectors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after
         */
        'selector-attribute-operator-space-after': 'never',

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require a single space or disallow whitespace before operators
         * within attribute selectors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before
         */
        'selector-attribute-operator-space-before': 'never',

        /**
         * Type: Array | String
         * Options: ['array', 'of', 'properties'] | 'operator'
         * 
         * Specify a whitelist of allowed attribute operators.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-attribute-operator-whitelist
         */
        'selector-attribute-operator-whitelist': null,

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require or disallow quotes for attribute values.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-attribute-quotes
         */
        'selector-attribute-quotes': 'always',

        /**
         * Type: regex | String
         * Options: 'foo-[a-z]', 'foo-'
         * 
         * Specify a pattern for class selectors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-class-pattern
         */
        'selector-class-pattern': 'uis-[a-z]+.',

        /**
         * Type: Array | String
         * Options: ['array', 'of', 'unprefixed'] , 'combinator'
         * 
         * Specify a blacklist of disallowed combinators.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-combinator-blacklist
         */
        'selector-combinator-blacklist': null,

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require a single space or disallow whitespace after the combinators
         * of selectors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-combinator-space-after
         */
        'selector-combinator-space-after': 'always',

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require a single space or disallow whitespace before the
         * combinators of selectors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-combinator-space-before
         */
        'selector-combinator-space-before': 'always',

        /**
         * Type: Array | String
         * Options: ['array', 'of', 'unprefixed'] | 'combinator'
         * 
         * Specify a whitelist of allowed combinators.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-combinator-whitelist
         */
        'selector-combinator-whitelist': null,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow non-space characters for descendant combinators of
         * selectors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space
         */
        'selector-descendant-combinator-no-non-space': true,

        /**
         * Type: regex | String
         * Options: 'foo-[a-z]' | 'foo'
         * 
         * Specify patter of ID value
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-id-pattern
         */
        'selector-id-pattern': null,

        /**
         * Type: String
         * Options: 'always' | 'always-multi-line' | 'never-multi-line'
         * 
         * Require a newline or disallow whitespace after the commas of
         * selector lists.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-list-comma-newline-after
         */
        'selector-list-comma-newline-after': 'always-multi-line',

        /**
         * Type: String
         * Options: 'always' | 'always-multi-line' | 'never-multi-line'
         * 
         * Require a newline or disallow whitespace before the commas of
         * selector lists.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-list-comma-newline-before
         */
        'selector-list-comma-newline-before': null,

        /**
         * Type: String
         * Options: 'always' | 'never' | 'always-single-line' |
         *          'never-single-line'
         * 
         * Require a single space or disallow whitespace after the commas of
         * selector lists.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-list-comma-space-after
         */
        'selector-list-comma-space-after': 'always-single-line',

        /**
         * Type: String
         * Options: 'always' | 'never' | 'always-single-line' |
         *          'never-single-line'
         * 
         * Require a single space or disallow whitespace before the commas 
         * f selector lists.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-list-comma-space-before
         */
        'selector-list-comma-space-before': 'never',

        /**
         * Type: Integer
         * 
         * Limit the number of attribute selectors in a selector.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-max-attribute
         */
        'selector-max-attribute': 2,

        /**
         * Type: Integer
         * 
         * Limit the number of classes in a selector.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-max-class
         */
        'selector-max-class': 4,

        /**
         * Type: Integer
         * 
         * Limit the number of combinators in a selector.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-max-combinators
         */
        'selector-max-combinators': 4,

        /**
         * Type: Integere
         * 
         * Limit the number of compound selectors in a selector.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-max-compound-selectors
         */
        'selector-max-compound-selectors': 4,

        /**
         * Type: Integer
         * 
         * Limit the number of adjacent empty lines within selectors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-max-empty-lines
         */
        'selector-max-empty-lines': 0,

        /**
         * Type: Integer
         * 
         * Limit the number of ID selectors in a selector.
         *
         * Reference: https://stylelint.io/user-guide/rules/selector-max-id
         */
        'selector-max-id': 2,

        /**
         * Type: Integer
         * 
         * Limit the number for pseudo-classes in a selector
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-max-pseudo-class
         */
        'selector-max-pseudo-class': 4,

        /**
         * Type: String
         * Secondary Options: ignoreSelectors: []
         * 
         * Limit the specify to selectors
         *
         * Reference: https://stylelint.io/user-guide/rules/selector-max-specificity
         */
        'selector-max-specificity': null,

        /**
         * Type: Integer
         * 
         * Limit the number of type selectors in a selector.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-max-type
         */
        'selector-max-type': 4,

        /**
         * Type: Integer
         * 
         * Limit the number of universal selectors in a selector.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-max-universal
         */
        'selector-max-universal': 2,

        /**
         * Type: regex | String
         * Options: 'foo-[a-z]' | 'foo'
         * Specify a pattern for the selectors of rules nested within rules.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-nested-pattern
         */
        'selector-nested-pattern': null,

        /**
         * Type: Boolean
         * Options: true
         * Secondary Options: ignore: []
         * 
         * Disallow qualifying a selector by type.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-no-qualifying-type
         */
        'selector-no-qualifying-type': null,

        /**
         * Type: Boolean
         * Options: true
         * Secondary Options: ignoreSelectors: []
         * 
         * Disallow vendor prefixes for selectors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-no-vendor-prefix
         */
        'selector-no-vendor-prefix': null,

        /**
         * Type: Array | String | regex
         * Options: ['array', 'of', ' unprefixed'] | 'pseudo' | '/psuudo/'
         * 
         * Specify a blacklist of disallowed pseudo-class selectors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-pseudo-class-blacklist
         */
        'selector-pseudo-class-blacklist': null,

        /**
         * Typer: String
         * Options: 'lower' | 'upper'
         * 
         * Specify lowercase or uppercase for pseudo-class selectors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-pseudo-class-case
         */
        'selector-pseudo-class-case': 'lower',

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow unknown pseudo-class selectors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown
         */
        'selector-pseudo-class-no-unknown': true,

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require a single space or disallow whitespace on the inside of the
         * parentheses within pseudo-class selectors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside
         */
        'selector-pseudo-class-parentheses-space-inside': 'never',

        /**
         * Type: Array | String | regex
         * Options: ['array', 'of', 'unprefixed'] | 'pseudo' | '/psuudo/'
         * 
         * Specify a whitelist of allowed pseudo-class selectors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-pseudo-class-whitelist
         */
        'selector-pseudo-class-whitelist': null,

        /**
         * Type: Array | String | regex
         * Options: ['array', 'of', 'unprefixed']
         * 
         * Specify a blacklist of disallowed pseudo-element selectors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-pseudo-element-blacklist
         */
        'selector-pseudo-element-blacklist': null,

        /**
         * Type: String
         * Options: 'lower' | 'upper'
         * 
         * Specify lowercase or uppercase for pseudo-element selectors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-pseudo-element-case
         */
        'selector-pseudo-element-case': 'lower',

        /**
         * Type: String
         * Options: 'single' | 'double'
         * 
         * Specify single or double colon notation for applicable
         * pseudo-elements.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation
         */
        'selector-pseudo-element-colon-notation': 'single',

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow unknown pseudo-element selectors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown
         */
        'selector-pseudo-element-no-unknown': true,

        /**
         * Type: Array | String | regex
         * Options: ['array', 'of', 'unprefixed'] | 'pseudo' | '/pseudo/'
         * 
         * Specify a whitelist of allowed pseudo-element selectors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-pseudo-element-whitelist
         */
        'selector-pseudo-element-whitelist': null,

        /**
         * Type: String
         * Options: 'lower' | 'upper'
         * 
         * Specify lowercase or uppercase for type selectors.
         * 
         * Reference: https://stylelint.io/user-guide/rules/selector-type-case
         */
        'selector-type-case': 'lower',

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow unknown type selectors.
         *
         * Reference: https://stylelint.io/user-guide/rules/selector-type-no-unknown
         */
        'selector-type-no-unknown': true,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow redundant values in shorthand properties.
         * 
         * Reference: https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values
         */
        'shorthand-property-no-redundant-values': true,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow (unescaped) newlines in strings.
         * 
         * Reference: https://stylelint.io/user-guide/rules/string-no-newline
         */
        'string-no-newline': true,

        /**
         * Type: String
         * Options: 'single' | 'double'
         * 
         * Specify single or double quotes around strings.
         * 
         * Reference: https://stylelint.io/user-guide/rules/string-quotes
         */
        'string-quotes': 'single',

        /**
         * Type: Integer
         * 
         * Specify the minimum number of milliseconds for time values.
         * 
         * Referene: https://stylelint.io/user-guide/rules/time-min-milliseconds
         */
        'time-min-milliseconds': 150,

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require or disallow the Unicode Byte Order Mark.
         * 
         * Reference: https://stylelint.io/user-guide/rules/unicode-bom
         */
        'unicode-bom': null,

        /**
         * Type: Array | String
         * Options: ['array', 'of', 'units'] | 'units'
         * 
         * Specify a blacklist of disallowed units.
         * 
         * Reference: https://stylelint.io/user-guide/rules/unit-blacklist
         */
        'unit-blacklist': null,

        /**
         * Type: String
         * Options: 'lower' | 'upper'
         * 
         * Specify lowercase or uppercase for units.
         * 
         * Reference: https://stylelint.io/user-guide/rules/unit-case
         */
        'unit-case': 'lower',

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow unknown unit case
         * 
         * Reference: https://stylelint.io/user-guide/rules/unit-no-unknown
         */
        'unit-no-unknown': true,

        /**
         * Type: Array | String
         * Options: ['array', 'of', 'units'] | 'unit'
         * 
         * Specify a whitelist of allowed units.
         * 
         * Reference: https://stylelint.io/user-guide/rules/unit-whitelist
         */
        'unit-whitelist': null,

        /**
         * Type: String
         * Options: 'lower' | 'upper'
         * 
         * Specify lowercase or uppercase for keywords values.
         *
         * Reference: https://stylelint.io/user-guide/rules/value-keyword-case
         */
        'value-keyword-case': null,

        /**
         * Type: String
         * Options: 'always' | 'always-multi-line' | 'never-multi-line'
         * 
         * Require a newline or disallow whitespace after the commas of
         * value lists.
         * 
         * Reference: https://stylelint.io/user-guide/rules/value-list-comma-newline-after
         */
        'value-list-comma-newline-after': null,

        /**
         * Type: String
         * Options: 'always' | 'always-multi-line' | 'never-multi-line'
         * 
         * Require a newline or disallow whitespace before the commas of
         * value lists.
         * 
         * Reference: https://stylelint.io/user-guide/rules/value-list-comma-newline-before
         */
        'value-list-comma-newline-before': null,

        /**
         * Type: String
         * Options: 'always' | 'never' | 'always-single-line' | 
         *          'never-single-line'
         * 
         * Require a single space or disallow whitespace after the commas of value lists.
         * 
         * Reference: https://stylelint.io/user-guide/rules/value-list-comma-space-after
         */
        'value-list-comma-space-after': 'always-single-line',

        /**
         * Type: String
         * Options: 'always', 'never', 'always-single-line' |
         *          'never-single-line'
         * 
         * Require a single space or disallow whitespace before the commas of
         * value lists.
         * 
         * Reference: https://stylelint.io/user-guide/rules/value-list-comma-space-before
         */
        'value-list-comma-space-before': null,

        /**
         * Type: Integer
         * 
         * Limit the number of adjacent empty lines within value lists.
         * 
         * Reference: https://stylelint.io/user-guide/rules/value-list-max-empty-lines
         */
        'value-list-max-empty-lines': null,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow vendor prefixes for values.
         * 
         * Reference: https://stylelint.io/user-guide/rules/value-no-vendor-prefix
         */
        'value-no-vendor-prefix': true,
    }
}
