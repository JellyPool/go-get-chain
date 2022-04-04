<script lang="ts" setup>
import { Chain } from '@/types/Chain'
import BaseGridItem from '@/components/base/BaseGridItem.vue'
defineProps<{
  items?: Chain[];
}>()
</script>

<template>
  <section class="grid grid-cols-4 gap-4">
    <BaseGridItem></BaseGridItem>
  </section>
</template>
