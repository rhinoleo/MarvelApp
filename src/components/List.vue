<template>
  <v-container>
    <vue-circle v-if="active"
      :progress="100"
      :size="100"
      :reverse="false"
      line-cap="round"
      :fill="fill"
      empty-fill="rgba(0, 0, 0, .1)"
      :animation-start-value="0.0"
      :start-angle="0"
      insert-mode="append"
      :thickness="5"
      :show-percent="true"
      @vue-circle-progress="progress"
      @vue-circle-end="progress_end">
    </vue-circle>
    <v-layout row wrap>
      <v-flex xs12 sm4 v-for="item in datas.characters" :key="item.id">
        <item :key="item.id" :item="item"></item>
      </v-flex>
    </v-layout>
    
  </v-container>
</template>

<script>
import {Store} from '@/Store.js'
import Item from '@/components/Item'
import VueCircle from 'vue2-circle-progress'

export default {
  name: 'List',
  data () {
    return {
      datas: Store.datas,
      fill : { gradient: ["red", "white"] },
      active: true
    }
  },
  components: {item: Item, vueCircle: VueCircle},
  created(){
      Store.load()
  },
  methods:{
      progress(event,progress,stepValue){
        console.log(stepValue);
      },
      progress_end(event){
        console.log("Circle progress end");
        this.active = !this.active;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
