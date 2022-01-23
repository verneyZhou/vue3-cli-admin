<template>
  <div class="home">
    home
    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>

    <p>svg-icon</p>
    <svg-icon icon-class="dashboard"></svg-icon>
    <svg-icon icon-class="example"></svg-icon>
    <svg-icon icon-class="eye-open"></svg-icon>

    <p>el-icon</p>
    <el-icon><edit /></el-icon>
    <el-icon><aim /></el-icon>
    <el-icon><add-location /></el-icon>
    <el-icon><apple /></el-icon>
  </div>
</template>

<script lang="ts">
</script>
<style lang="scss" scoped>
.home {
  color: red;
}
</style>
