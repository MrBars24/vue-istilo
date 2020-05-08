/**
 * Expandable panels for long contents
 * @displayName Accordion
 */
export default {
    name: 'IAccordion',

    functional: false,

    inheritAttrs: true,

    data()
    {
        return {
            isActive: false,
        };
    },

    render(h)
    {
        return h(
            'div',

            {
                class:
                    [
                        'i-accordion',
                        'i-point',
                    ],

                staticClass: this.staticClass,
            },

            [
                h(
                    'div',

                    {
                        class:
                            [
                                'i-accordion-header',
                            ],

                        on:
                        {
                            click: () =>
                            {
                                if (this.isActive)
                                {
                                    this.isActive = false;
                                }
                                else
                                {
                                    this.isActive = true;
                                }
                            },
                        },
                    },

                    /**
                     * @slot Defines and styles the toggle for each accordion item.
                     */
                    this.$slots.default
                ),

                h(
                    'div',

                    {
                        class:
                            [
                                'i-accordion-content',
                                this.isActive
                                    ? 'i-open'
                                    : '',
                            ],
                    },

                    /**
                     * @slot Defines the content part for each accordion item.
                     */
                    this.$slots.content
                ),
            ]
        );
    },
};
