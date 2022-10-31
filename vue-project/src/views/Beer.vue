<template>
    <div class="flex flex-col items-center justify-center gap gap-3 p-6 text-md">

        <div v-if="loading">
            <img src="https://thumbs.gfycat.com/ShrillInfamousDodobird-size_restricted.gif" class="animate-spin"/>
        </div>

        <div v-if="error">
            <p class="text-red-500">{{error}}</p>
        </div>

        <main v-if="data" class="flex flex-col items-center justify-center gap gap-3 bg-neutral-100 p-3 w-80 text-center text-xs">
          <h1 class="text-lg">{{data.name}}</h1>
          <p>ABV: {{data.abv}}%</p>
          <p>IBU: {{data.ibu}}</p>
          <p class="p-3">{{data.description}}</p>
          <p class="font-bold italic">Pair it with:</p>
          <ul v-for="(item, index) in data.food_pairing" :key="index"> 
            <li>{{item}}</li>
          </ul>
          <img :src=data.image_url alt={{data.name}}/>
        </main>
        
        <div class="p-8 text-xs text-purple-700 hover:text-purple-500">
          <router-link to="/">Home</router-link>
          <router-view></router-view>
        </div>
      </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Beer",
    props: ["id"],
    data() {
      return {
        data: null,
        loading: false,
        error: null,
      };
    },
    methods: {
      getBeer(){
        this.loading = true;  
        axios
          .get(`https://api.punkapi.com/v2/beers/${this.id}`)
          .then((response) => {
            this.data = response.data[0];
            this.loading = false;
          })
          .catch((error) => {
            console.log(error);
          })
          .then(() => {
            this.loading = false;
          });
      },
    },
    mounted() {
      this.getBeer();
    },
   
  };
</script>

<style scoped>

</style>