/**
 * An image, video or iframe viewer
 * @displayName Lightbox
 */
export default {
    props:
    {
        // determines if the escape button on the keyboard
        // can close the offcanvas when pressed
        escapeClose:
        {
            type: Boolean,
            default: true,
        },

        // list of all images/video that will
        // show on the lightbox
        // It expects images[{src: '', caption: ''}]
        items:
        {
            type: Array,
            default: null,
            required: true,
        },

        // determines if the offcanvas
        // show or hide
        isOpen:
        {
            type: Boolean,
            default: false,
            required: true,
        },
    },

    data()
    {
        return {
            openClass: '',
            displayClass: '',
            activeItem: 0,
        };
    },

    created()
    {
        if (this.isOpen)
        {
            this.open();
        }
    },

    beforeDestroy()
    {
        this.close();
    },

    methods:
    {
        close()
        {
            // update the props `isOpen`
            this.$emit('update:isOpen', false);

            window.removeEventListener('keyup', this.keyUpEvents);

            this.toggleScrollbar(false);
            this.toggleLightbox(false);
        },

        decrementActiveItem()
        {
            // we need to subtract the length to match the index
            if (this.activeItem >= (this.items.length - 1))
            {
                this.activeItem -= 1;
            }
        },

        incrementActiveItem()
        {
            // we need to subtract the length to match the index
            if (this.activeItem < (this.items.length - 1))
            {
                this.activeItem += 1;
            }
        },

        keyUpEvents(event)
        {
            switch (event.keyCode)
            {
                // Escape key
                case 27:
                    this.close();
                    break;

                // left arrow key
                case 37:
                    this.decrementActiveItem();
                    break;

                // right arrow key
                case 39:
                    this.incrementActiveItem();
                    break;

                default:
                    break;
            }
        },

        open()
        {
            window.addEventListener('keyup', this.keyUpEvents);

            this.toggleScrollbar(true);
            this.toggleLightbox(true);
        },

        toggleScrollbar(bool)
        {
            const el = document.body;

            if (bool)
            {
                el.classList.add('i-lightbox-page');
            }

            else
            {
                el.classList.remove('i-lightbox-page');
            }
        },

        toggleLightbox(bool)
        {
            if (bool)
            {
                this.displayClass = 'i-display-block';

                setTimeout(() =>
                {
                    this.openClass = 'i-open';
                }, 100);
            }

            else
            {
                this.openClass = '';

                setTimeout(() =>
                {
                    this.displayClass = '';
                }, 300);
            }
        },
    },

    watch:
    {
        isOpen()
        {
            if (this.isOpen)
            {
                this.open();
            }

            else
            {
                this.close();
            }
        },
    },

    render(h)
    {
        return h(
            'div',

            {
                class:
                    [
                        'i-lightbox',
                        this.displayClass,
                        this.openClass,
                    ],

                refs: 'lightbox',
            },

            [
                h(
                    'i-lightbox-item',

                    {
                        props:
                        {
                            items: this.items,
                            activeItem: this.activeItem,
                        },
                    }
                ),

                h(
                    'i-lightbox-close',

                    {
                        on:
                        {
                            click: () =>
                            {
                                this.close();
                            },
                        },
                    }
                ),

                h(
                    'i-lightbox-prev',

                    {
                        on:
                        {
                            click: () =>
                            {
                                this.decrementActiveItem();
                            },
                        },
                    }
                ),

                h(
                    'i-lightbox-next',

                    {
                        on:
                        {
                            click: () =>
                            {
                                this.incrementActiveItem();
                            },
                        },
                    }
                ),

                this.items[this.activeItem].caption && h(
                    'i-lightbox-caption',
                    this.items[this.activeItem].caption
                ),
            ]
        );
    },
};
