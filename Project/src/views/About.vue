<template>
  <div id="main-about"> 
      <p class="header">we are the only party planning committee you need</p>
      <p class="paragraph">the party planning committee is a web app 
          written by <a href="https://github.com/ct-mcgaha" target="_blank">C.T. McGaha</a> and <a href="https://github.com/deencmrn" target="_blank"> Deen Cameron</a>  in the early Spring
          of 2021. Our goal is to help you have the greatest party you
          possibly can, and - most importantly - do it without the stress!</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

p {
  font-family: 'Amatic SC', cursive;
}


a:link {
  color: #808cb2; 
  background-color: transparent;
  text-decoration: none;
  font-family: 'Amatic SC', cursive;
  

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

.paragraph {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 30px;
  text-align: center;
}

</style>