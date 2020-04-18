### Usage
To create a avatar, use the ***i-avatar*** component.

&nbsp;
&nbsp;
&nbsp;

```vue
<template>
    <i-avatar
        :label="'AB'"/>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Color Modifier
There are several style modifiers applied with the ***:color*** prop.
```vue
<template>
    <div>
        <i-avatar
            :label="'PR'"
            :color="'primary'"/>

        <i-avatar
            :label="'SE'"
            :color="'secondary'"/>
    </div>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Size Modifier
Use one of the following ***:size*** prop options for additional styles.

```vue
<template>
    <i-avatar
        :label="'LG'"
        :size="'large'"/>
</template>
```