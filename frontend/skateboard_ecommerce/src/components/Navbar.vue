<template>
    <nav class="navbar navbar-expand-lg bg-transparent position-fixed w-100 pt-1">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#"><img src="../assets/images/Screenshot_2023-08-19_121219-removebg-preview.png" alt="" class="logo"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-lg-0 bg-white ">
              <li class="nav-item">
                <router-link to="/" class="text text-black">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="text text-black">About us</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/store" class="text text-black">Store</router-link>        
              </li>
              <li class="nav-item">
                <router-link to="/contact"  class="text text-black">Contact us</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .navbar-nav{
        gap: 4rem;
        font-size: 14px;
        text-decoration: none;
        border-bottom-right-radius: 999999px;
        border-bottom-left-radius: 999999px;
        border-top-right-radius: 999999px;
        border-top-left-radius: 999999px;
        padding-inline: 3rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        margin-bottom: rem;
        margin-left: 16rem;
    }

    .navbar-nav{
        margin-top: -3rem;
    }
    
    .navbar-nav{
        margin-top: -3rem;
    }

    .text{
        text-decoration: none;
    }

    .logo{
        width: 15rem;
    }

</style>