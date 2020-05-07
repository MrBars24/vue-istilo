### Usage
The Card component consiste of the card itself, the card body and an optional card title. Typically
cards are arranged in grid columns from the Grid component.

&nbsp;
&nbsp;
&nbsp;

```vue
<template>
    <div class="i-width-2-5">
        <i-card>
            <i-card-body>
                <h3 class="i-card-title">Default</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua</p>
            </i-card-body>
        </i-card>
    </div>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Style modifiers
Istilo includes a number of modifiers can be used to add specific style to cards.
```vue
<template>
    <section class="i-grid">
        <div class="i-width-1-3">
            <i-card>
                <i-card-body>
                    <h3 class="i-card-title">Default</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua</p>
                </i-card-body>
            </i-card>
        </div>

        <div class="i-width-1-3">
            <i-card
                :color="'primary'">
                <i-card-body>
                    <h3 class="i-card-title">Primary</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua</p>
                </i-card-body>
            </i-card>
        </div>

        <div class="i-width-1-3">
            <i-card
                :color="'secondary'">
                <i-card-body>
                    <h3 class="i-card-title">Secondary</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua</p>
                </i-card-body>
            </i-card>
        </div>
    </section>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Size modifiers
You can apply different size modifiers to cards that will decrease or increase their padding.
```vue
<template>
    <section class="i-grid">
        <div class="i-width-1-2">
            <i-card
                :size="'small'">
                <i-card-body>
                    <h3 class="i-card-title">Small</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua</p>
                </i-card-body>
            </i-card>
        </div>

        <div class="i-width-1-2">
            <i-card
                :size="'large'">
                <i-card-body>
                    <h3 class="i-card-title">Lare</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua</p>
                </i-card-body>
            </i-card>
        </div>
    </section>
</template>
```


### Header & Footer
You can also divider a card into header and footer by using the ***i-card-header*** and ***i-card-footer*** component inside of ***i-card***
```vue
<template>
    <div class="i-width-1-3">
        <i-card>
            <i-card-header>
                <h3 class="i-card-title">Title</h3>
            </i-card-header>
            <i-card-body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </i-card-body>
            <i-card-footer>
                <a>Read more</a>
            </i-card-footer>
        </i-card>
    </div>
</template>
```
