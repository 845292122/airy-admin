<script setup>
const queryForm = ref({
  name: undefined,
  phone: undefined,
  status: undefined
})
</script>

<template>
  <el-form :inline="true" :model="queryForm" ref="queryFormRef">
    <el-form-item label="名称" prop="name">
      <el-input v-model="queryForm.name" placeholder="请输入用户名称" clearable style="width: 170px" />
    </el-form-item>
    <el-form-item label="用户状态" prop="status">
      <el-select v-model="queryForm.status" placeholder="用户状态" clearable style="width: 150px">
        <el-option label="启用" value="1" />
        <el-option label="禁用" value="0" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleQuery">
        <template #icon>
          <i-bi:search />
        </template>
        查询
      </el-button>
      <el-button @click="handleReset">
        <template #icon>
          <i-bi:arrow-repeat />
        </template>
        重置
      </el-button>
    </el-form-item>
  </el-form>
</template>
