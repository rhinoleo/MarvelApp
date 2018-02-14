<template>
    <v-card>
        <h3>
            <router-link :to="{name:'Detail' , params:{id:item.id}}">
                {{item.name}}
            </router-link>
        </h3>
        <img :src="item.thumbnail.path + '.' + item.thumbnail.extension">
    </v-card>
</template>

<script>
export default {
    name: 'Item',
    props: ['item']
}
    
</script>

<style scoped>
a {
    color: #fff;
    text-transform: uppercase;
    padding: 0 5px 5px 5px;
    text-decoration: none;
    margin-bottom: 5px;
}
img {
    width: 100%;
}
.card {
    margin: 10px;
    background-color: black;
}
.card:hover {
    background-color: red;
}
</style>