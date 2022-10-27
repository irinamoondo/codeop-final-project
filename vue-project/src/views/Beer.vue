<template>
    <div class="flex flex-col items-center justify-center gap gap-3 p-8">

        <div v-if="loading">
            <img src="https://thumbs.gfycat.com/ShrillInfamousDodobird-size_restricted.gif" class="animate-spin"/>
        </div>

        <div v-if="error">
            <p class="text-red-500">{{error}}</p>
        </div>

        <main v-if="data" class="flex items-center justify-center gap gap-5">
            <img class="w-1/3" :src=data.image_url alt={{data.name}}/>
            <div class="flex flex-col items-center justify-center w-2/3">
                <h1>{{data.name}}</h1>
                <p>ABV: {{data.abv}}%</p>
                <p>IBU: {{data.ibu}}</p>
                <p>{{data.description}}</p>
                <p class="font-bold italic">Pair it with:</p>
                <ul v-for="(item, index) in data.food_pairing" :key="index"> 
                    <li>{{item}}</li>
                </ul>
            </div>
        </main>

        <router-link to="/">Go to Home</router-link>
        <router-view></router-view>
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