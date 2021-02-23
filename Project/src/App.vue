<template>
    <div id="app">
      <div id="nav">
            <router-link id="home" to="/">  home  </router-link>
            <router-link id="wet" to="/wet-party"> wet party </router-link>
            <router-link id="dry" to="/dry-party"> dry party  </router-link>
            <router-link id="about" to="/about"> about </router-link>           
        </div>
        <router-view />
    </div>        
</template>

<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Homemade+Apple');
@import url('https://fonts.googleapis.com/css2?family=Oswald');
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');

*{
  background-color: #EFFFFF;
  font-family: 'Homemade Apple';
}
#nav a {
  font-family: 'Homemade Apple';
  font-size: 30px;
  color: #FFCCCC;
  text-shadow: 2px 1px 1px #898FFF;
  margin: 0 30px;
  text-decoration: none;
}
 
#home:hover {
  margin-left: 30.33px;
}
#wet:hover {
    margin-left: 30.33px;
}
#dry:hover {
  margin-left: 30.33px;
}
#about:hover {
  margin-left: 30.33px;  
}

</style>
