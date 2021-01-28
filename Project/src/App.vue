<template>
    <div id="app">
        <div id="nav">
            <router-link id="home" to="/">  home  </router-link><br />
            <router-link id="wet" to="/wet-party"> wet party </router-link><br />
            <router-link id="dry" to="/dry-party"> dry party  </router-link><br />
            <router-link id="about" to="/about"> about </router-link><br />            
        </div>
        <router-view />
    </div>        
</template>

<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Homemade+Apple');
*{
  background-color: #EFFFFF;
}
#nav {
  font-family: 'Homemade Apple';
  font-size: 36px;
  color: #FFCCCC;
  text-shadow: 2px 1px 1px #898FFF;
  margin: auto 30px;
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
