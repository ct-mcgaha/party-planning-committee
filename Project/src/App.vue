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
*{
  background-color: #EFFFFF;
  font-family: 'Homemade Apple';
}
#nav {
  font-family: 'Homemade Apple';
  font-size: 30px;
  color: #FFCCCC;
  text-shadow: 2px 1px 1px #898FFF;
  margin: 0 30px;
}

a {
  text-decoration: none;
  font-family: 'Homemade Apple';
  font-size: 30px;
  color: #FFCCCC;
  text-shadow: 2px 1px 1px #898FFF;
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
