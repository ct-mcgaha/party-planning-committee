<template>
  <div class="mainLanding">
    <h3 id="welcome" class="animate__animated animate__flipInX">welcome!</h3>
    <h2 id="partyTime" class="animate__animated animate__slideInLeft">is it party time?</h2>
    <div class="bothButtons">
        <button id="yesButton" class="raise" v-on:click="partyTime">Yes, I've used this site before</button>
        <!-- if they click yes, pop up stating to choose a wet or dry party? -->
        <!-- looking into making it rain confetti when yes button clicked -->
        <button id="noButton" class="raise" v-on:click="help">No, I need help getting started</button>
        <!-- if they click no, send them to the about page? or pop up?? -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    partyTime() {},
    help() {},
  },
};
</script>

<style>
h2 {
  font-size: 36px;
}

h3 {
  font-size: 36px;
}

.mainLanding {
  display: flex;
  flex-direction: column;
}

#welcome {
  display: flex;
  justify-content: center;
}

#partyTime {
  display: flex;
  justify-content: center;
}

.bothButtons button {
  font-family: 'Amatic SC', cursive;
  height: 100px;
  width: 150px;
  font-size: 22px;
}

.bothButtons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: 'Amatic SC', cursive;
}

.raise:hover,
.raise:focus {
  box-shadow: 0 0.5em 0.5em -0.4em #898FFF;
  transform: translateY(-0.25em);
  background-color: #ffcccc;
  color: #efffff;
}

.animate__animated.animate__flipInX {
  --animate-duration: 1s;
}

.animate__animated.animate__slideInLeft {
   --animate-duration: 2s;
}

#yesButton {
  margin: 5px;
  border-radius: 50px;
}

#noButton {
  margin: 5px;
  border-radius: 50px;
}
</style>