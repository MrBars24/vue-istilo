/**
 * Center your content horizontally
 * @displayName Container
 */
export default {
    name: 'IContainer',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * The color for the badge background
         * @values xsmall, small, expand, large
         */
        size:
        {
            type: String,
            default: null,
        },
    },

    render(h, { data, props, children })
    {
        return h(
            'div',
            {
                attrs: data.attrs,

                staticClass: data.staticClass,

                class:
                    [
                        'i-container',
                        props.size && `i-container-${props.size}`,
                    ],
            },

            children
        );
    },
};
