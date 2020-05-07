import { joinClass } from '@/utils/class';

/**
 * A section of card for main content
 * @displayName Card Body
 */
export default {
    name: 'ICardBody',

    functional: true,

    inheritAttrs: false,

    render(h, { children, data })
    {
        return h(
            'div',

            {
                class: joinClass(
                    'i-card-body'
                ),

                staticClass: data.staticClass,
            },

            children
        );
    },
};
