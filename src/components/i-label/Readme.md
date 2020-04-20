### Usage
To create a label, just use the ***i-label*** component, the default HTML
tag is span, you can modify by using ***:is*** default component of vue.

&nbsp;
&nbsp;
&nbsp;

```vue
<template>
    <i-label>Default Label</i-label>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Color modifiers
To modify the background color use ***:color*** prop and pass a color name.

```vue
<template>
    <div>
        <i-label
            :color="'primary'">
            Primary
        </i-label>

        <i-label
            :color="'secondary'">
            Secondary
        </i-label>

        <i-label
            :color="'success'">
            Success
        </i-label>

        <i-label
            :color="'warning'">
            Warning
        </i-label>

        <i-label
            :color="'danger'">
            Danger
        </i-label>
    </div>
</template>
```