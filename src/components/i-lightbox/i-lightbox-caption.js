/**
 * Display a caption for image
 * @displayName Lightbox Caption
 */
export default {
    name: 'ILightboxCaption',

    functional: true,

    inheritAttrs: false,

    render(h, { slots })
    {
        return h(
            'div',

            {
                class:
                    [
                        'i-lightbox-caption',
                        'i-lightbox-toolbar',
                        'i-position-bottom',
                    ],
            },

            slots().default
        );
    },
};
