### Usage
The Breadcrum component consists of links, which are aligned side by side and separated by
a divider. Use the ***i-breadcrumb*** component to define the component, Pass an array to
***:items*** prop it will create sub-components or children of anchors, Follow the example
below, The array of object with specific property should be follow the format.

```vue
<template>
    <i-breadcrumb
        :items="items"/>
</template>

<script>
    export default {
        data()
        {
            return {
                items:
                [
                    {
                        label: 'Item 1',
                        href: '/item4',
                    },

                    {
                        label: 'Item 2',
                        href: '/item4',
                    },

                    {
                        label: 'Item 3',
                        href: '/item4',
                    },

                    {
                        label: 'Item 4',
                        href: '/item4',
                    },
                ]
            };
        }
    };
</script>
```