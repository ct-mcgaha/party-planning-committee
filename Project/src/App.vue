<template>
    <div id="app">
      <div class="border">
      <div id="nav">
            <router-link id="home" to="/">  home  </router-link>
            <router-link id="wet" to="/wet-party"> wet party </router-link>
            <router-link id="dry" to="/dry-party"> dry party  </router-link>
            <router-link id="about" to="/about"> about </router-link>           
        </div>
        </div>
        <router-view />
    </div>    
</template>

<script>

</script>

<style>
/*
@import url('https://fonts.googleapis.com/css2?family=Homemade+Apple');
@import url('https://fonts.googleapis.com/css2?family=Oswald');
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
*/
@import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600&family=Josefin+Slab:wght@400;600&display=swap');

*{
  background-color: #fefefe;
  font-family: 'Dancing Script', cursive;
}
#nav a {
  font-family: 'Dancing Script', cursive;
  font-size: 50px;
  color: #b2808c;
  text-shadow: 2px 1px 1px #808cb2; 
  margin: 0 30px; 
  text-decoration: none;
}
 
.border {
  border-style: solid;
  border-color: #b2a680;
  border-left: #b2a680;
  border-right: #b2a680;
  border-width: thick;
}

.raise:hover,
.raise:focus {
  color: #efffff;
  box-shadow: 2px #808cb2;
}

#home:hover {
font-size: 3em;
text-decoration: underline;
}

#wet:hover {
font-size: 3em;
text-decoration: underline;
}

#dry:hover {
font-size: 3em;
text-decoration: underline;
}
#about:hover {
font-size: 3em;
text-decoration: underline;
}

</style>
