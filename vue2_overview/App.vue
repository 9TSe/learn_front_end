<template>
  <a_attribute_bind />
  <b_ifdemo />
  <c_listdemo />
  <d_event_demo />
  <e_arraylist />
  <f_computed />
  <g_class />
  <h_watcher />

  <!-- <h1>template syntax</h1>
  <p>{{ msg }}</p>
  <p>{{ number+1 }}</p>
  <p>{{ bool ? "true" : "false" }}</p>
  <p>{{ msg.split("").reverse().join("") }}</p>
  <p v-html="raw_html"></p> -->
</template>

<script setup>
// import a_attribute_bind from './components/a_attribute_bind.vue'; 已全局注册
import b_ifdemo from './components/b_ifdemo.vue';
import c_listdemo from './components/c_listdemo.vue'
import d_event_demo from './components/d_event_demo.vue';
import e_arraylist from './components/e_arraylist.vue';
import f_computed from './components/f_computed.vue';
import g_class from './components/g_class.vue';
import h_watcher from './components/h_watcher.vue';

// export default { //注入组件
//   components: {
//     a_attribute_bind,
//     b_ifdemo,
//     c_listdemo,
//     d_event_demo,
//     e_arraylist,
//     f_computed,
//     g_class,
//     h_watcher,
//     i_component
//   }
// }

// export default {
//   data() {
//     return {
//       msg: "hello, world"
//       , number: 1918
//       , bool: true
//       , raw_html : "<a href='#'>linklink</a>"
//     }
//   }
// }

</script>