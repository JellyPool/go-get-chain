<script lang="ts" setup>
import { computed } from 'vue'
import { Chain } from '@/types/Chain'
import BaseGridItem from '@/components/base/BaseGridItem.vue'

interface Props {
  items: Chain[];
  cols?: number;
  gap?: number;
}

const props = withDefaults(defineProps<Props>(), {
  cols: 4,
  gap: 4
})

const gridClasses = computed(() => `grid-cols-${props.cols} gap-${props.gap}`)
</script>

<template>
  <section class="grid" :class="gridClasses">
    <BaseGridItem v-for="(item, index) in items" :key="index">
      {{ item }}
    </BaseGridItem>
  </section>
</template>
