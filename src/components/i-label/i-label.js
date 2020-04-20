/**
 * Indicate important notes and highlight a word
 * @displayName Label
 */
export default {
    name: 'ILabel',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * Define the background color of the label
         *
         * @values default, primary, secondary, success, warning, danger
         */
        color:
        {
            type: String,
            default: 'default',
        },
    },

    render(h, { data, props, children })
    {
        return h(
            'span',

            {
                staticClass: data.staticClass,

                class:
                    [
                        'i-label',
                        props.color && `i-label-${props.color}`,
                    ],
            },

            children
        );
    },
};
