/**
 * Create a dynamic avatar that render a string or image for users
 * @displayName Avatar
 */
export default {
    name: 'IAvatar',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * The color for the avatar background
         * @values primary, secondary
         */
        color:
        {
            type: String,
            default: null,
        },

        /**
         * Text for the avatar, atleast 1 or 2 characters mostly used
         * for user Initials
         */
        label:
        {
            type: String,
            required: true,
        },

        /**
         * Specific size or dimension
         * @values xsmall, small, medium, large, xlarge
         */
        size:
        {
            type: String,
            default: null,
        },

        /**
         * Image source of path
         */
        src:
        {
            type: String,
            default: null,
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
                        'i-avatar',
                        !props.src && !props.color
                            ? ''
                            : `i-avatar-${props.color}`,
                        props.size && `i-avatar-${props.size}`,
                        props.src && 'i-avatar-image',
                    ],
            },

            [
                props.src
                    ? h(
                        'img',

                        {
                            attrs:
                            {
                                src: props.src,
                                alt: `${props.label} image`,
                            },
                        }
                    )

                    : props.label,
            ]
        );
    },
};
