/**
 * Display a number as notifications
 * @displayName Badge
 */

export default {
    name: 'IBadge',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * The color for the badge background
         */
        count:
        {
            type: Number,
            default: null,
            required: true,
        },
    },

    render(h, { data, props })
    {
        return h(
            'div',
            {
                staticClass: data.staticClass,

                class:
                    [
                        'i-badge',
                    ],
            },

            props.count
        );
    },
};
