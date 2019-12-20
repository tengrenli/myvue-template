<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Loading :isToast="false" text="自定义loading"></Loading>
  </div>
</template>
<script>
// @comp is an alias to /src/components
import { Loading } from '@comp'
export default {
  name: 'about',
  components: {
    Loading
  }
}
</script>
