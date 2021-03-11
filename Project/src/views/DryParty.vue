<template>
  <div>
      <h1 class="animate__animated animate__slideInRight">keep it dry... not boring!</h1>
      <dry-party-form />
  </div>
</template>

<script>
import DryPartyForm from '../components/DryPartyForm.vue'
export default {
    components: { DryPartyForm }
}
</script>

<style>
.animate__animated.animate__slideInRight {
   --animate-duration: 2s;
}

</style>