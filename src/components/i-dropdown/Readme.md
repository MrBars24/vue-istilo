### Usage
Any content, like a button, can be toggle a dropdown. Wrap the content of ***i-dropdown***
component. We use ***.sync*** to allow us modify the prop value when the user clicks outside
the dropdown will fire an event to close the dropdown. ***slot="menu:*** is the place for
the content which will appear when the dropdown is open.


&nbsp;
&nbsp;
&nbsp;

```vue
<template>
    <i-dropdown
        :isOpen.sync="dropdownToggle">
        <i-button
            @click="dropdownToggle = true">
            Dropdown
        </i-button>

        <ul class="i-nav
                i-nav-default"
            slot="menu">
            <li>
                <a href="https://github.com/JaoAustero/vue-istilo">
                    Item Button 1
                </a>
            </li>
            <li>
                <a href="https://github.com/JaoAustero/vue-istilo">
                    Item Button 2
                </a>
            </li>
        </ul>
    </i-dropdown>
</template>

<script>
    export default {
        data()
        {
            return {
                dropdownToggle: false,
            };
        },
    };
</script>
```

&nbsp;
&nbsp;
&nbsp;

### Position modifiers
Add ***:position*** prop and define the direction where the dropdown should
appear.

```vue
<template>
    <div>
        <i-dropdown
            :position="'left'"
            :isOpen.sync="dropdownLeftToggle">
            <i-button
                @click="dropdownLeftToggle = true">
                Left Position
            </i-button>

            <ul class="i-nav
                    i-nav-default"
                slot="menu">
                <li>
                    <a href="https://github.com/JaoAustero/vue-istilo">
                        Item Button 1
                    </a>
                </li>
                <li>
                    <a href="https://github.com/JaoAustero/vue-istilo">
                        Item Button 2
                    </a>
                </li>
            </ul>
        </i-dropdown>

        <i-dropdown
            :position="'right'"
            :isOpen.sync="dropdownRightToggle">
            <i-button
                @click="dropdownRightToggle = true">
                Right Position
            </i-button>

            <ul class="i-nav
                    i-nav-default"
                slot="menu">
                <li>
                    <a href="https://github.com/JaoAustero/vue-istilo">
                        Item Button 1
                    </a>
                </li>
                <li>
                    <a href="https://github.com/JaoAustero/vue-istilo">
                        Item Button 2
                    </a>
                </li>
            </ul>
        </i-dropdown>
    </div>
</template>

<script>
    export default {
        data()
        {
            return {
                dropdownLeftToggle: false,
                dropdownRightToggle: false,
            };
        },
    };
</script>
```
