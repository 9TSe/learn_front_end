<template>
    <h1>属性绑定</h1>
    <div :title="dynamic_msg" v-bind:class="dynamic_class" v-bind:id="dynamic_id">just test once</div>
    <button :disabled="isDisable">button</button>
    <div v-bind="objectOfAttribute">twice test</div>
</template>

<script>

export default {
    data() {
        return {
            dynamic_class: "appclass",
            dynamic_id: "appid",
            dynamic_msg: null,
            isDisable: true,
            objectOfAttribute: {
                id: "appid",
                class:"appclass"
            }
        }
    }
}

</script>

<style>
.appclass {
    color: aqua;
    font-size: 30px;
}
</style>