<template>
  <div>
    <h1 class="animate__animated animate__slideInRight">let's pop some bubbles & get some drinks flowing!</h1>
    <wet-party-form />
  </div>
</template>

<script>
import WetPartyForm from '../components/WetPartyForm.vue'
export default {
  components: { WetPartyForm },
}
</script>

<style>

.animate__animated.animate__slideInRight {
   --animate-duration: 2s;
}

</style>