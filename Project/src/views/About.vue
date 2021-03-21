<template>
  <div id="main-about"> 
      <h1 class="header">We Are The Only Party Planning Committee You Need</h1>
     <div class="about">  <p>The party planning committee is a web app 
          written by <a href="https://github.com/ct-mcgaha" target="_blank">C.T. McGaha</a> and <a href="https://github.com/deencmrn" target="_blank"> Deen Cameron</a>  in the early Spring
          of 2021. Our goal is to help you have the greatest party you
          possibly can, and - most importantly - do it without the stress!</p>
     </div>
     <h3>How To Plan The Perfect Party</h3>
     <div class="how">
     <ol>
       <li>Create a guest list, you'll need to know how many will attend</li>
       <li>Select the cuisine to be served</li>
       <li>Select the drinks to be served (alcholic & non-alcoholic)</li>
       <li>Your guests will recieve an email to this site to choose their food and drinks</li>
       <li>We'll take care of the rest!</li>
     </ol>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

p {
  font-family: 'Josefin Slab', serif;
  font-size: 30px;
  /*text-align: center;
  width: 480px;*/
  margin-left: auto;
  margin-right: auto;
  width: 18em
}

.about {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

a:link {
  color: #808cb2; 
  background-color: transparent;
  text-decoration: none;
  font-family: 'Josefin Slab', serif;
}

a:hover {
  text-shadow: 2px 1px 1px #b2a680;
  background-color: transparent;
  
}

#main-about {
  display: flex;
  flex-direction: column;
  
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 50px;
}

.how li{
  font-family: 'Josefin Slab', serif;
}
</style>