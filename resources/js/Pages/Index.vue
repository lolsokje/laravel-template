<template>
    <InertiaHead title="Home"/>

    <h2>Laravel v{{ laravel_version }} - PHP v{{ php_version }}</h2>
</template>

<script setup>
defineProps({
    laravel_version: String,
    php_version: String,
});
</script>
