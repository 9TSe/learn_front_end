<template>
    <h1>内联事件处理器</h1>
    <button @click="count++">ADD</button>
    <p>count == {{ count }}</p>

    <h1>方法事件处理器</h1>
    <button @dblclick="addCount">ADD2</button>
    <p>count == {{ count }}</p>

    <h1>传递参数</h1>
    <button @click="displayButtonCount">ADD3</button>
    <button @click="disPlayButtonCount('hello', $event)">ADD3</button>
    <p @click="disPlayButtonCount('hello', $event)">count == {{ count }}</p>
    <p>count == {{ count }}</p>

    <h1>时间修饰符</h1>
    <a @click.prevent="clickHandle" href="https://helloworld.net">helloworld</a>
    <div @click="clickHandle">
        <p @click.stop="clickSecondHandle">son</p>
    </div>

</template>

<script>
export default {
    data() {
        return {
            count:0
        }
    },
    methods: {
        addCount() {
            this.count += 2;
        },

        displayButtonCount(event) {
            event.target.innerHTML = "ADD3 " + this.count;
            this.count++;            
        },

        disPlayButtonCount(msg, e) {
            console.log(msg);
            console.log(e.target);
        },
        clickHandle(event) {
            // event.preventDefault();
            console.log("click me?");
        },
        clickSecondHandle(event) {
            //event.stopPropagation();
            console.log("son");
        }
    }
}
</script>