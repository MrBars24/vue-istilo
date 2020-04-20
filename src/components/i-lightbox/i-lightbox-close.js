/**
 * Enable and display the close button of the modal
 * @displayName Lightbox Close
 */
export default {
    name: 'ILightboxClose',

    functional: false,

    inheritAttrs: true,

    render(h)
    {
        return h(
            'div',

            {
                class:
                    [
                        'i-lightbox-toolbar',
                        'i-position-top',
                        'i-text-right',
                    ],
            },

            [
                h(
                    'i-button',

                    {
                        props:
                        {
                            color: null,
                            text: true,
                        },

                        class: 'i-lightbox-toolbar-icon',

                        on:
                        {
                            click: (e) =>
                            {
                                this.$emit('click', e);
                            },
                        },
                    },

                    [
                        h(
                            'span',

                            'x'
                        ),
                    ]
                ),
            ]
        );
    },
};
