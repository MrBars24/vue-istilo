/**
 * Display the array of content
 * @displayName Lightbox Item
 */
export default {
    name: 'ILightboxItem',

    functional: false,

    inheritAttrs: true,

    props:
    {
        items:
        {
            type: Array,
        },

        activeItem:
        {
            type: Number,
        },
    },

    render(h)
    {
        return h(
            'ul',

            {
                class: 'i-lightbox-items',
            },

            this.items.map((item, index) => h(
                'li',

                {
                    class:
                        [
                            this.activeItem === index && 'i-active',
                        ],
                },

                [
                    h(
                        'img',

                        {
                            domProps:
                            {
                                src: item.src,
                                alt: item.caption,
                            },
                        }
                    ),
                ]
            ))
        );
    },
};
