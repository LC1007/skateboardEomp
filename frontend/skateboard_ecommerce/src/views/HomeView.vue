<template>
  <div class="home bg-dark">
    <img src="../assets/images/christophe-meyer-ffvA4qpRjHY-unsplash.jpg" class="w-100 h-100" alt="">
    <div class="container mt-5">
      <h1 class="text-white text-center mb-5">Skateboards</h1>
      <div class="row">
        <div class="col" v-for="item in skateboards" :key="item.skateID">
          <div class="card" style="width: 18rem;">
              <img :src="item.skateIMG" class="card-top-img" alt="">
            <div class="card-body">
              <div class="card-title">{{ item.skateboard }}</div>
              <div class="card-text">{{ item.trucks }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1>test</h1>
  </div>
</template>

<script>
export default {
  computed:{
    skateboards(){
      return this.$store.state.skateboards
    }
  },
  mounted(){
    this.$store.dispatch('fetchBoards')
  }
}
</script>
