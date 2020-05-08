<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route: {
      handler: (to, from) => {
        document.title = 'CurrentTrack - ' + to.meta.title || 'CurrentTrack'
      },
      immediate: true
    }
  }
}
</script>
