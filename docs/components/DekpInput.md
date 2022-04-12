# DekpInput

`InputText` is a cool component. Here's how to use it...

<script lang="ts">
  export default {
    name: 'DekpInput',
    inheritAttrs: false,
    customOptions: {}
  }
</script>

<script setup lang="ts">
import { ref } from 'vue';

const disabled = ref(false);
const inputValue = ref('');

const onInput = (e: Event) => {
  console.log('input', e);
}

const onFocus = (e: Event) => {
  console.log('focus', e);
}

const onBlur = (e: Event) => {
  console.log('blur', e);
}

const onKeyUp = (e: KeyboardEvent) => {
  console.log('keyup', e);
}
</script>

<ClientOnly>
  <input
    class="base-input"
    :class="{ 'base-input--disabled': disabled }"
    :disabled="disabled"
    v-model="inputValue"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
    @keyup="onKeyUp"
  />
</ClientOnly>

<style scoped>
.base-input {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  color: #000;
}

.base-input--disabled {
  background: #eee;
  color: #aaa;
}
</style>
