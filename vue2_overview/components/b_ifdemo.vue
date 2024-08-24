<template>
    <h1>条件渲染</h1>
    <div v-if="flag === 'A'">A</div>
    <div v-else-if="flag === 'B'">B</div>
    <div v-else>C</div>

    <div v-show="bool">true</div> <!--Semantically equivalent to v-if, but with a higher rendering overhead-->
    <!--If there are few conditional handovers, the lazy v-if is selected, which has higher handoff overhead-->
</template>

<script>
export default {
    data() {
        return {
            flag: "B",
                bool: true
            }
        }
    }
</script>