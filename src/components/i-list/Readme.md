### Usage
Use the ***i-list*** to create a smart list with different modifiers

```vue
<template>
    <i-list>
        <li>
            Item 1
        </li>
        <li>
            Item 2
        </li>
        <li>
            Item 3
        </li>
    </i-list>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Bullet modifier
Set the ***:bullet*** to true, it will enable the bullet list style

```vue
<template>
    <i-list
        :bullet="true">
        <li>
            Item 1
        </li>
        <li>
            Item 2
        </li>
        <li>
            Item 3
        </li>
    </i-list>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Divider modifier
Set the ***:divider*** to true, This will add divider every after of itemse
except to the last item

```vue
<template>
    <i-list
        :divider="true">
        <li>
            Item 1
        </li>
        <li>
            Item 2
        </li>
        <li>
            Item 3
        </li>
    </i-list>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Size modifier
Use the ***:size*** prop, and set the value based on the values options on the
top, this can be mixed on other modifiers like divider.

```vue
<template>
    <i-list
        :size="'medium'"
        :divider="true">
        <li>
            Item 1
        </li>
        <li>
            Item 2
        </li>
        <li>
            Item 3
        </li>
    </i-list>
</template>
```

### Striped modifier
Set the ***:striped*** prop, it will add light gray background every Odd item

```vue
<template>
    <i-list
        :striped="true">
        <li>
            Item 1
        </li>
        <li>
            Item 2
        </li>
        <li>
            Item 3
        </li>
    </i-list>
</template>
```