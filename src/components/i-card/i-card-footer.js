import { joinClass } from '@/utils/class';

/**
 * A section of card for action buttons
 * @displayName Card Footer
 */
export default {
    name: 'ICardFooter',

    functional: true,

    inheritAttrs: false,

    render(h, { children, data })
    {
        return h(
            'div',

            {
                class: joinClass(
                    'i-card-footer'
                ),

                staticClass: data.staticClass,
            },

            children
        );
    },
};
