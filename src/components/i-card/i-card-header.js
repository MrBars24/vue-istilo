import { joinClass } from '@/utils/class';

/**
 * A section of card for title
 * @displayName Card Header
 */
export default {
    name: 'ICardHeader',

    functional: true,

    inheritAttrs: false,

    render(h, { children, data })
    {
        return h(
            'div',

            {
                class: joinClass(
                    'i-card-header'
                ),

                staticClass: data.staticClass,
            },

            children
        );
    },
};
