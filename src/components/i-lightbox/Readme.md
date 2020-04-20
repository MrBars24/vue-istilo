### Usage
To create Lightbox, use the ***i-lightbox*** component and mount the data from
***:items*** prop their is specific structure object provided on the preview
code below.

&nbsp;
&nbsp;
&nbsp;

```vue
<template>
    <div>
        <i-button
            @click="lightboxOpen = true">
            Open Lightbox
        </i-button>

        <i-lightbox
            :items="images"
            :isOpen.sync="lightboxOpen"/>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                lightboxOpen: false,
                images:
                [
                    {
                        src: '/static/images/stock-photo-1.jpg',
                    },

                    {
                        src: '/static/images/stock-photo-2.jpg',
                    },
                ],
            };
        }
    }
</script>
```

&nbsp;
&nbsp;
&nbsp;

### Caption modifiers
To modify add caption on the photo and alt just add ***caption*** property
to the data object.

```vue
<template>
    <div>
        <i-button
            @click="lightboxOpen = true">
            Open Lightbox
        </i-button>

        <i-lightbox
            :items="images"
            :isOpen.sync="lightboxOpen"/>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                lightboxOpen: false,
                images:
                [
                    {
                        src: '/static/images/stock-photo-1.jpg',
                        caption: 'Brewed Coffee while coding'
                    },

                    {
                        src: '/static/images/stock-photo-2.jpg',
                        caption: 'Short vacation at Makati'
                    },
                ],
            };
        }
    }
</script>
```