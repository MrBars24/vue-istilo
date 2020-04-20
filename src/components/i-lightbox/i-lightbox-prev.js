/**
 * Enable and display the previous button of the lightbox
 * @displayName Lightbox Prev
 */
export default {
    name: 'ILightboxPrev',

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
                        'i-position-center-left',
                        'i-lightbox-left',
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

                            '<'
                        ),
                    ]
                ),
            ]
        );
    },
};
