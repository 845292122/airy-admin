<script setup>
import { useAuthStore, useAppStore } from '@/store'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const appStore = useAppStore()
const router = useRouter()

function logout() {
  ElMessageBox.confirm('确认退出登录?', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      authStore.logout()
      router.push({ path: '/login', replace: true })
    })
    .catch(() => {})
}

function goProfile() {
  router.push({ path: '/profile' })
}
</script>

<template>
  <el-dropdown w-full trigger="click">
    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" v-if="appStore.menuCollapsed" />

    <div v-else flex cursor-pointer items-center w-full justify-between>
      <div flex items-center>
        <el-avatar shape="square" mr-5 />
        <span text-16 mt-5 color-black>super</span>
      </div>

      <div text-16 mt-8 ml-5>
        <i class="i-bi:chevron-expand" color-black />
      </div>
    </div>
    <template #dropdown>
      <el-dropdown-item @click="goProfile">
        <i class="i-fluent:inprivate-account-16-regular" text-16 />
        账户资料
      </el-dropdown-item>
      <el-dropdown-item @click="logout">
        <i class="i-fluent:sign-out-20-filled" text-16 />
        退出登录
      </el-dropdown-item>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
:deep(.el-tooltip__trigger:focus-visible) {
  outline: unset;
}
</style>
