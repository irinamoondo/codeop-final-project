<template>
  <div class="flex flex-col items-center justify-center p-6 gap gap-3">

    <div v-if="loading">
      <img src="https://thumbs.gfycat.com/ShrillInfamousDodobird-size_restricted.gif" class="animate-spin"/>
    </div>

    <div v-if="error">
      <p class="text-red-500">{{error}}</p>
    </div>

    <div v-if="gotData" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap gap-9 justify-center px-14">
      <div v-for="item in beersList" :key="item.id" class="card flex flex-col items-center justify-around gap gap-3 bg-neutral-100 px-3 py-7 rounded-xl shadow-lg border-1 text-neutral-600 hover:bg-white hover:ring ring-pink-200 hover:text-purple-800">
          <h3 class="text-center text-md font-bold tracking-wider pt-3">{{item.name}}</h3>
          <router-link :to="`/beers/${item.id}`">
          <img class="h-max-40 w-max-40" :src=item.image_url alt={{item.name}}/>
          </router-link>
          <p class="text-center text-xs pb-3">{{item.tagline}}</p>
      </div>
    </div>

      <RouterView />
    </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      loading: null,
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