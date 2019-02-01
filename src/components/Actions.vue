<template>
  <div class="actions">
    
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'actions',
  computed: {
    ...mapState({
      profile: state => state.profile
    })
  }
}
</script>

<style lang="scss" scoped>
.actions {

}
</style>
