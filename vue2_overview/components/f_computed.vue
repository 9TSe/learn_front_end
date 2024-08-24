<template>
    <h1>计算属性</h1>
    <p>{{ man.love.length > 0 ? "have" : "no" }}</p>
    <p>{{ haveLove() }}</p>
    <p>{{ havelove }}</p>

</template>

<script>
export default {
    data() {
        return {
            man: {
                name: "ntse",
                love:["women", "hh"]
            }        
        }
    },
    methods: {
        haveLove() {
            return this.man.love.length > 0 ? "have" : "no";
        }
    },
    computed: {
        havelove() {
            return this.man.love.length > 0 ? "have" : "no";
        }
    }
}
</script>