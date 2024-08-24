<template>
    <h1>数组变化侦听</h1>
    <button @click="clickHandler">addData</button>
    <ul>
        <li v-for="(item, index) of names" :key="index">{{ item }}</li>
    </ul>

    
</template>

<script>
export default {
    data() {
        return {
            names: ['one', 'two', 'three'],
            
        }
    },
    methods: {
        clickHandler() {
            //ui update
            //this.names.push("four");

            //ui not update
            //this.names.concat("four");
            //console.log(this.names.concat("four"));

            //use way which is not update, but update
            this.names = this.names.concat("four");
      }  
    }
}
</script>