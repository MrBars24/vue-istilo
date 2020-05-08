### Usage
The Accordion component consists of a parent with the ***i-accordion*** component, and a 
title content part for each accordion item.

```vue
<template>
    <i-list
        :divider="'true'">
        <li>
            <i-accordion>
                <h3>Item 1</h3>

                <div slot="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </i-accordion>
        </li>
        <li>
            <i-accordion>
                <h3>Item 2</h3>

                <div slot="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </i-accordion>
        </li>
        <li>
            <i-accordion>
                <h3>Item 3</h3>

                <div slot="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </i-accordion>
        </li>
    </i-list>
</template>
```