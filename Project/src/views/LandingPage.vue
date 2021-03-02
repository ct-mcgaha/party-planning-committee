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
    <!--POPUPS -->
<div id="bothPopups" class="modal">
  <div id="popupYes" class="modal-content">
     <span class="close">&times;</span>
    <p>Welcome Back! <br/>You Know What To Do.</p>
  </div>
  <div id="popupNo" class="modal-content">
    <span class="close">&times;</span>
    <p>Not A Problem! <br/>Click Here To Get Started.</p> <!-- HERE will be a link to ?? -->
  </div>
  </div>
  <!--POPUPS END -->

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
  font-family: 'Josefin Slab', serif;
  height: 150px;
  width: 150px;
  font-size: 22px;
  border-width: thick;
}

.bothButtons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: 'Josefin Slab', serif;
}

.raise:hover,
.raise:focus {
  transform: translateY(-0.25em);
  color: #efffff;
  box-shadow: 4px 4px 4px #808cb2;
}

.animate__animated.animate__flipInX {
  --animate-duration: 1s;
}

.animate__animated.animate__slideInLeft {
   --animate-duration: 2s;
}

#yesButton {
  margin: 5px;
  border-radius: 40px;
}

#yesButton:hover {
  background-color:  #80b2a6;
}

#noButton {
  margin: 5px;
  border-radius: 40px;
}

#noButton:hover {
  background-color: #b2808c;
}



/* POPUPS */

#popupYes {
  border: solid thick #808cb2;
  text-align: center; 
  width: 160px;
  height: 160px;
  border-radius: 30%;
}

#popupNo {
  border: solid thick #808cb2;
  text-align: center; 
  width: 160px;
  height: 160px;
  border-radius: 30%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  font-family: 'Josefin Slab', serif;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  font-size: 26px;
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  font-family: 'Josefin Slab', serif;
}


</style>