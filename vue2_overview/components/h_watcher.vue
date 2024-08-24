<template>
    <h1>侦听器</h1>
    <p>{{ message }}</p>
    <button @click="updateMsg">change data</button>

    <h1>表单输入绑定</h1>
    <form>
        <input type="text" v-model="message">
        <p>{{ message }}</p>
        <input type="checkbox" id="cb" v-model="checked">
        <label for="cb">{{ checked }}</label>
    </form>

    <h1>ref</h1>
    <div ref="divcontent" class="oneclass">{{ content }}</div>
    <input type="text" ref="username">
    <button @click="getElement">get data</button>

</template>

<script>
export default {
    data() {
        return {
            message: "world",
            checked: false,
            content: "hihi"
        }
    },
    methods: {
        updateMsg() {
            this.message = "hello";
        },

        getElement() {
            this.$refs.divcontent.innerHTML = "lueluelue";
            console.log(this.$refs.username.value);
        }
    },
    watch: {
        message(newvalue, oldvalue) {
            console.log(newvalue, oldvalue);
        }
    }

}
</script>