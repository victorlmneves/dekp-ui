<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
    defineProps<{
        componentName: string;
        text: string;
        ariaLabel?: string;
        type?: 'reset' | 'submit' | 'button' | undefined;
        priority?: 'primary' | 'secondary' | 'tertiary';
        isDisabled?: boolean;
    }>(),
    {
        componentName: 'DekpButton',
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

<template>
    <button
        :class="cssClass"
        :aria-label="ariaText"
        :disabled="isDisabled"
        :tabindex="tabIndex"
        :type="type"
    >
        {{ text }}
    </button>
</template>

<style src="/@/assets/scss/index.scss" lang="scss" />
<style src="@css-components/base-button/index.scss" lang="scss" />
