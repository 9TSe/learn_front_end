<template>
    <h1>列表渲染</h1>
    <div v-for="data of datas">
        {{ data }}
    </div>

    <p v-for="(data, index) in datas">{{ data }}-{{ index }}</p>

    <div v-for="item of ans" :key="ans.id"> <!--加入key放置DOM重复渲染-->
        <p>{{ item.id }}</p>
        <p>{{ item.title }}</p>
        <img :src="item.link" alt="">
    </div>

    <div v-for="(value, key, index) of result">{{ key }}-{{ value }} index::{{ index }}</div>

</template>

<script>
export default {
    data() {
        return {
            datas: ['ntse', '19', 'true'],
            ans: [
                {
                    "id": 1,
                    "title": "ntse",
                    "link":"https://ydlunacommon-cdn.nosdn.127.net/a4aa28be3e86f72076de2b2018c29b04.png",
                },
                {
                    "id": 2,
                    "title": "sewer",
                    "link":"https://ydlunacommon-cdn.nosdn.127.net/d4420720818e84a2cefb493dc0315992.png",
                }
            ],
            result: {
                id: 1,
                sex: "man",
                age:20
            }
        }
    }
}
</script>