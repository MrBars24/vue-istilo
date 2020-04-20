import { joinClass } from '@/utils/class';

/**
 * Display a collection of items into list style
 * @displayName List
 */
export default {
    name: 'IList',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * Add a bullet or middle dot before of the list
         */
        bullet:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Add divider of each list
         */
        divider:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Specify specific spacing of each element
         * @values medium, large, xlarge
         */
        size:
        {
            type: String,
            default: null,
        },

        /**
         * Add a light gray background every Odd of items
         */
        striped:
        {
            type: Boolean,
            default: false,
        },
    },

    render(h, { data, props, children })
    {
        return h(
            'ul',

            {
                class: joinClass(
                    'i-list',
                    props.bullet && 'i-list-bullet',
                    props.divider && 'i-list-divider',
                    props.size && `i-list-${props.size}`,
                    props.striped && 'i-list-striped'
                ),

                staticClass: data.staticClass,
            },

            children
        );
    },
};
