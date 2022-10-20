<template>
  <div class="flex flex-col items-center py-5 gap gap-3">
    <img src ="/shield.svg" alt="" class="text-2xl"/>
    <h1 class="uppercase text-5xl">Brewdog</h1>
    <button class="border border-2 border-blue-300 bg-blue-100 rounded-full py-2 px-4" @click="getBeersList">Check the Menu</button>

    <div v-if="loading">
      <p>It's loading...</p>
    </div>

      <div v-if="error">
        <p class="text-red-500">{{error}}</p>
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
    }
  },
  methods: {
    // getBeersList() {
    //   this.loading = true;
    //   fetch('https://api.punkapi.com/v2/beers')
    //   .then(response => {
    //     if(!response.ok){
    //       throw new Error ("Response was not found")
    //     }
    //     return response.json()
    //   })
    //   .then(data => this.beersList = data)
    //   .catch(error => {
    //     return this.error = error
    //   })
    //   .finally(()=> {
    //     return this.loading = false
    //   })
    // }

    async getBeersList(){
      try {
        const responseList = await fetch('https://api.punkapi.com/v2/beers');
        
        const beersListAPI = await responseList.json();
        
        this.beersList = beersListAPI;
        console.log(beersListAPI)
      }
      catch(error){
        this.error = error
        console.log(error)
      }
      finally{
        this.loading = false
      }
    }
  }
}

</script>


<style>
</style>