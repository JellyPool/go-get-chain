<script lang="ts" setup>
import chains from '@/constants/chains'
import BaseGrid from '@/components/base/BaseGrid.vue';
</script>

<template>
  <BaseGrid :items="chains" />
  <div>
    <pre class="max-w-full whitespace-pre-wrap">
      {{ chains }}
    </pre>
  </div>
</template>
