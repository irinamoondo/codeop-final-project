<template>
  <div class="flex flex-col items-center justify-center py-6 gap gap-3">
    
    <div class="flex items-center gap gap-3 py-6">
      <img src ="/shield.svg" alt="" id="logo"/>
      <h1 class="uppercase text-7xl font-extrabold">Brewdog</h1>
    </div>

    <div v-if="loading">
      <img src="https://thumbs.gfycat.com/ShrillInfamousDodobird-size_restricted.gif"/>
    </div>

    <div v-if="error">
      <p class="text-red-500">{{error}}</p>
    </div>

    <div v-if="gotData" class="grid grid-cols-5 gap gap-6 justify-center px-14">
      <div v-for="item in beersList" :key="item.id" class="flex flex-col items-center justify-between gap gap-3 bg-neutral-100 px-3 py-5 rounded-xl">
        <h3 class="text-center text-md font-bold">{{item.name}}</h3>
        <img :src=item.image_url alt={{item.name}}/>
        <p class="text-center text-xs">{{item.tagline}}</p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      loading: false,
      beersList: null,
      error: "",
      gotData: false,
    }
  },
  methods: {
    async getBeersList(){
      try {
        this.loading = true
        const responseList = await fetch('https://api.punkapi.com/v2/beers');
        
        const beersListAPI = await responseList.json();
        
        this.beersList = beersListAPI;
      }
      catch(error){
        this.error = error;
        console.log(error);
      }
      finally{
        this.loading = false;
        this.gotData = true;
      }
    }
  },
  mounted() {
    this.getBeersList()
  }
}

</script>


<style>
</style>