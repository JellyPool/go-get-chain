<script lang="ts" setup>
import CopyIntro from '@/components/CopyIntro.vue'
import ChainsList from '@/components/ChainsList.vue'
</script>

<template>
  <div class="flex flex-col md:flex-row w-full h-full">
    <div class="w-full md:w-1/4 min-h-screen border border-2">
      <CopyIntro />
    </div>

    <div class="w-full md:w-3/4 border border-2">
      <ChainsList />
    </div>
  </div>
</template>