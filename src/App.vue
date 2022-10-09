<template>
  <div id="app">
    <router-view></router-view>
    <keep-alive>
    <router-link
        tag="div"
        to="/"
      ></router-link>
    </keep-alive>
    
  </div>
</template>
<script>
export default {
  data: () => ({
    
  }),

};
</script>