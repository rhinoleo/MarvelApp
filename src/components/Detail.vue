<template>
    <div id="detail">
        <v-card>
            <h2>{{ character.name }}</h2>
            <p v-if="character.comics.available">appears in {{ character.comics.available }} comics, such as:</p>
            <p v-else>oopss... we lost sight of this character :(</p>
            <h3 v-for="item of comics.slice(0, 3)">{{item.name}}</h3>
            <h4 v-if="character.description">{{ character.description }}</h4>
            <h4 v-else>(no description)</h4>
            <img :src="character.thumbnail.path + '.' + character.thumbnail.extension">
        </v-card>
        <router-link :to="{name:'List'}">
            <i class="material-icons">arrow_back</i>
        </router-link>
    </div>
</template>

<script>
import {Store} from '@/Store.js'
export default {
    name: 'detail',
    data () {
        return {
			character: {},
            comics: []
        }
    },
    created(){
        Store.oneCharacter(this.$route.params.id).then((res) => {
			this.character = res;
            this.comics = this.character.comics.items;
		})
    }
}
    
</script>

<style scoped>
    #detail {
        background: rgb(240,240,240); /* Old browsers */
        background: -moz-linear-gradient(top, rgba(240,240,240,1) 0%, rgba(240,240,240,1) 34%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgba(240,240,240,1) 0%,rgba(240,240,240,1) 34%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgba(240,240,240,1) 0%,rgba(240,240,240,1) 34%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f0f0f0', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
    }
    h2 {
        color: #fff;
        background-color: red;
        text-transform: uppercase;
        margin-bottom: 10px;
    }
    h4 {
        margin: 10px;
    }
    .card {
        margin: 10%;
        background-color: #fff;
    }
    img {
        width: 100%;
    }
    .material-icons {
        margin-bottom:10px;
    }
    
</style>