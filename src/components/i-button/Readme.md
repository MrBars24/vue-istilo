### Usage
To create a button, use the ***uis-button*** component.

&nbsp;
&nbsp;
&nbsp;

```vue
<template>
    <i-button>Default</i-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Color modifiers
There are several style modifiers applied with the ***:color*** prop.
```vue
<template>
    <div>
        <i-button
            :color="'primary'">
            Primary
        </i-button>

        <i-button
            :color="'secondary'">
            Secondary
        </i-button>

        <i-button
            :color="'success'">
            Success
        </i-button>

        <i-button
            :color="'warning'">
            Warning
        </i-button>

        <i-button
            :color="'danger'">
            Danger
        </i-button>
    </div>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Full Width modifiers
Setting the ***:fillWidth*** prop as true it will apply a full width class.

```vue
<template>
    <i-button
        :fullWidth="true">
        Full Width
    </i-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Link modifiers
If you want anchor with a button style, create ***:href*** and pass a URL it will automatically convert anchor tag with a button style.

```vue
<template>
    <i-button
        :href="'https://www.google.com'">
        Link Button
    </i-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Loading modifiers
Make the ***:loading*** prop as true it will automatically disabled and change the label into loading icon.

```vue
<template>
    <i-button
        :loading="true">
        Loading Button
    </i-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Outline modifiers
If you want outline button style, just pass true boolean on ***:outline*** prop it will remove the background and change preserve the border. The color of border will be dependent on ***:color*** prop.

```vue
<template>
    <i-button
        :color="'primary'"
        :outline="true">
        Outline Primary
    </i-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Size modifiers
There are several size modifiers applied with the ***:size*** prop.

```vue
<template>
    <i-button
        :size="'large'">
        Large Size
    </i-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Text modifiers
These will remove the background and padding. The color will be dependent on ***:color*** prop.

```vue
<template>
    <i-button
        :color="'primary'"
        :text="true">
        Text Button
    </i-button>
</template>
```
