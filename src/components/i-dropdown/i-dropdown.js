/**
 * An Interactive toggleable dropdown menu
 * @displayName Dropdown
 */
export default {
    name: 'IDropdown',

    functional: false,

    inheritAttrs: true,

    data()
    {
        return {
            breakpointSmall: 960,
            slideUp: false,
            slideUpClass: '',
        };
    },

    props:
    {
        /**
         * Toggles the dropdown menu
         */
        isOpen:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Specify which side the dropdown menu will show
         * @values left, right
         */
        position:
        {
            type: String,
            default: null,
        },
    },

    created()
    {
        window.addEventListener('click', this.close);
    },

    beforeDestroy()
    {
        window.removeEventListener('click', this.close);
    },

    mounted()
    {
        this.$nextTick(() =>
        {
            window.addEventListener('resize', () =>
            {
                if (this.getWindowWidth() < this.breakpointSmall)
                {
                    this.slideUp = true;
                }
                else
                {
                    this.slideUp = false;
                }
            });
        });

        this.checkViewport();
    },

    watch:
    {
        isOpen()
        {
            if (this.isOpen && this.slideUp)
            {
                const body = document.body;

                body.classList.add('i-dropdown-open');

                setTimeout(() =>
                {
                    body.classList.add('i-open');
                    this.slideUpClass = 'i-slideup';
                }, 300);
            }
            else
            {
                const body = document.body;

                body.classList.remove('i-open');
                this.slideUpClass = '';

                setTimeout(() =>
                {
                    body.classList.remove('i-dropdown-open');
                }, 300);
            }
        },
    },

    methods:
    {
        close(e)
        {
            if (!this.$el.contains(e.target))
            {
                /**
                 * This will modify the prop value when click outside to close the dropdown
                 */
                this.$emit('update:isOpen', false);
            }
        },

        getWindowWidth()
        {
            return document.documentElement.clientWidth;
        },

        checkViewport()
        {
            if (this.getWindowWidth() < this.breakpointSmall)
            {
                this.slideUp = true;
            }
            else
            {
                this.slideUp = false;
            }
        },
    },

    render(h)
    {
        return h(
            'div',

            {
                class: 'i-inline',
            },

            [
                /**
                 * @slot This is for the button that will trigger to open the dropdown
                 */
                this.$slots.default,

                h(
                    'div',
                    {
                        staticClass: this.$data.staticClass,

                        class:
                            [
                                'i-dropdown',
                                this.position && `i-dropdown-${this.position}`,
                                this.isOpen && 'i-open',
                                this.slideUp && this.slideUpClass,
                            ],
                    },

                    /**
                     * @slot This are the place for the list of the menu
                     */
                    this.$slots.menu
                ),
            ]
        );
    },
};
