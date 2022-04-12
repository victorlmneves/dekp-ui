# DekpButton

<script lang="ts">
  export default {
    name: 'DekpButton',
    inheritAttrs: false,
    customOptions: {}
  }
</script>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
    defineProps<{
        text: string;
        ariaLabel?: string;
        type?: 'reset' | 'submit' | 'button' | undefined;
        priority?: 'primary' | 'secondary' | 'tertiary';
        isDisabled?: boolean;
    }>(),
    {
        text: 'Default text',
        type: 'button',
        ariaLabel: undefined,
        priority: 'primary',
        isDisabled: false,
    }
);
const cssClass = computed(() => {
    let className: string;

    switch (props.priority) {
        case 'secondary':
            className = 'base-button base-button--secondary';
            break;
        case 'tertiary':
            className = 'base-button--tertiary';
            break;
        default:
            className = 'base-button base-button--primary';
            break;
    }

    return className;
});

const tabIndex = computed(() => {
    if (props.isDisabled) {
        return -1;
    }

    return undefined;
});

const ariaText = computed(() => {
    return props.ariaLabel ? props.ariaLabel : props.text;
});
</script>

<ClientOnly>
    <button
        :class="cssClass"
        :aria-label="ariaText"
        :disabled="isDisabled"
        :tabindex="tabIndex"
        :type="type"
    >
        {{ text }}
    </button>
</ClientOnly>

<link rel="stylesheet" type="text/css" href="/style.css">

<br/>
<br/>

`DekpButton` component. Here's how to use it...

```vue
<BaseButton
  class="base-button"
  text="Button text"
  priority="secondary"
  :disabled="false"
  aria-label="aria label Text"
  tabindex="1"
  type="button"
></BaseButton>
```

<br/>
<br/>

<!-- <vue-example text="test button" file="DekpButton" /> -->
