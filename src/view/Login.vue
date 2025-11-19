<script setup>

</script>

<template>
  <el-card style="max-width: 480px" class="box-card">
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
  </el-card>
</template>

<style scoped>
.text{
    font-size: 14px;
}
.item{
    padding: 18px 0;
}
.box-card{
    width: 480px;
}
</style>