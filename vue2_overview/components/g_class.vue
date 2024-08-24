<template>
    <h1>绑定类</h1>
    <p :class="{'active' : isActive, 'danger' : isDanger}">classbind1</p>
    <p :class="classObject">classbind2</p>
    <p :class="[arrActive, arrDanger]">classbind3</p>
    <p :class="[isActive ? 'active danger' : '']">classbind4</p>
    <p :class="[isActive ? 'active' : '', {'danger' : isDanger}]">classbind5</p>

    <h1>绑定style</h1>
    <p :style="{color : activeColor, fontSize: activeSize + 'px'}">stylebind1</p>
    <p :style="styleObject">stylebind2</p>
    <p :style="[styleObject]">stylebind2</p>
    
</template>

<script>
export default {
    data() {
        return {
            isActive: true,
            isDanger: true,
            classObject: {
                'active': true,
                'danger':true
            },
            arrActive: 'active',
            arrDanger: 'danger',

            activeColor: "green",
            activeSize: 30,
            styleObject: {
                color: "green",
                fontSize:"30px"
            }
        }
    }
}
</script>

<style>
    .active {
        font-size: 25px;
    }

    .danger {
        color:red;
    }

</style>