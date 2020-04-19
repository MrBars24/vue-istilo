import ButtonMixins from '@/components/mixins/button';
import MouseMixins from '@/components/mixins/mouse';

/**
 * Classic button with different color, sizes and states
 * @displayName Button
 */
export default {
    name: 'IButton',

    functional: false,

    inheritAttrs: true,

    mixins: [ButtonMixins, MouseMixins],

    render(h)
    {
        return h(
            this.isAnchor ? 'a' : 'button',

            {
                class: this.classes,

                attrs:
                {
                    disabled: this.disabled || this.loading,
                    href: this.isAnchor ? this.href : false,
                },

                on:
                {
                    /**
                     * Emits when user clicks
                     */
                    click: this.onClick,
                },
            },
            [
                this.loading
                    ? h(
                        'span',

                        {
                            class: 'i-animate i-animate-infinite i-animate-rotate',
                        },

                        '⌛'
                    )
                    : this.$slots.default,
            ]
        );
    },
};
