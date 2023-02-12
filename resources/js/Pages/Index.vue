<template>
    <InertiaHead title="Home"/>

    <h2>Laravel v{{ laravel_version }} - PHP v{{ php_version }}</h2>
</template>

<script setup lang="ts">
interface Props {
    laravel_version: string,
    php_version: string,
}

defineProps<Props>();
</script>
