import { joinClass } from '@/utils/class';

/**
 * Container with gutter and other differnt style
 * @displayName Card
 */
export default {
    name: 'ICard',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * Add a background color
         *
         * @values default, primary, secondary
         */
        color:
        {
            type: String,
            default: 'default',
        },

        /**
         * Adding box-shadow when mouse over on the card
         */
        hover:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Change the card size by adjusting the gutters
         *
         * @values small, large
         */
        size:
        {
            type: Boolean,
            default: false,
        },
    },

    render(h, { children, data, props })
    {
        return h(
            'div',

            {
                class: joinClass(
                    'i-card',
                    props.color && `i-card-${props.color}`,
                    props.hover && 'i-card-hover',
                    props.size && `i-card-${props.size}`
                ),

                staticClass: data.staticClass,
            },

            children
        );
    },
};
