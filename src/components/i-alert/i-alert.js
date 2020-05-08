/**
 * A message that calls attention and alert users
 * @displayName Alert
 */
export default {
    name: 'IAlert',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * Enable and display the close button
         */
        close:
        {
            type: Boolean,
            default: true,
        },

        /**
         * Set background color
         * @values primary, success, warning, danger
         */
        color:
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
                class:
                    [
                        'i-alert',
                        props.color && `i-alert-${props.color}`,
                    ],

                staticClass: data.staticClass,
            },

            [
                props.close && h(
                    'i-button',

                    {
                        props:
                        {
                            text: true,
                        },

                        staticClass: 'i-alert-close',
                    },

                    'x'
                ),

                children,
            ]
        );
    },
};
