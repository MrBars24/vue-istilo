import { joinClass } from '@/utils/class';

/**
 * Add a horizontal line or block element with title as divider of content
 * sections
 * @displayName Divider
 */
export default {
    name: 'IDivider',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * Display a block with idle background and title
         */
        title:
        {
            type: String,
            default: null,
        },

        /**
         * Make the style dashed
         */
        dashed:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Make the style dotted
         */
        dotted:
        {
            type: Boolean,
            default: false,
        },
    },

    render(h, { data, props })
    {
        return props.title
            ? h(
                'div',

                {
                    class:
                        [
                            'i-divider',
                        ],

                    staticClass: data.staticClass,
                },

                props.title
            )
            : h(
                'hr',

                {
                    class: joinClass(
                        'i-hr',
                        props.dashed
                            ? 'i-hr-dashed'
                            : props.dotted
                                ? 'i-hr-dotted'
                                : ''
                    ),

                    staticClass: data.staticClass,
                }
            );
    },
};
