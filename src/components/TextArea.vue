<template>
  <textarea :style="styles" :autofocus="inputType === SectionType.From" @input="handleInput" />
  {{ toTranslate }}
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { FromLanguage, SectionType } from '../types.d';

const props = defineProps({
  inputType: {
    type: String as () => SectionType,
    required: true
  },

  onChange: {
    type: Function,
    required: true
  },

  loading: {
    type: Boolean,
    required: false
  }
})

const toTranslate = ref<FromLanguage>()

const commonStyles = { border: 0, width: '100%', height: '200px' }

const styles = computed(() =>
  props.inputType === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f5f5f5' }
);

const handleInput = (event: Event) => {
  console.log((event.target as HTMLTextAreaElement).value);
};
</script>
