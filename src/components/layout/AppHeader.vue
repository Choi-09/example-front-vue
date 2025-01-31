<template>
  <header class="app-header">
    <div class="logo">
      <router-link to="/"> </router-link>
    </div>

    <nav class="nav-menu">
      <router-link
        v-for="menu in menus"
        :key="menu.path"
        :to="menu.path"
        class="nav-link"
        active-class="active"
      >
        {{ menu.name }}
      </router-link>
    </nav>

    <div class="user-menu" v-if="userStore.isLoggedIn">
      <span class="user-name">{{ userStore.userName }}</span>
      <button @click="handleLogout" class="logout-btn">로그아웃</button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const menus = [
  { name: '홈', path: '/' },
  { name: '소개', path: '/about' },
  { name: '서비스', path: '/services' },
  { name: '문의', path: '/contact' }
]

const handleLogout = () => {
  userStore.logout()
  router.push('/login')
}
</script>

<style scoped lang="scss">
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .logo {
    img {
      height: 40px;
    }
  }

  .nav-menu {
    display: flex;
    gap: 2rem;

    .nav-link {
      text-decoration: none;
      color: #666;
      font-weight: 500;
      padding: 0.5rem;
      transition: color 0.3s;

      &:hover {
        color: $primary-color;
      }

      &.active {
        color: $primary-color;
        border-bottom: 2px solid $primary-color;
      }
    }
  }

  .user-menu {
    display: flex;
    align-items: center;
    gap: 1rem;

    .user-name {
      font-weight: 500;
    }

    .logout-btn {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      background-color: $primary-color;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: color.scale($primary-color, $lightness: -10%);
      }
    }
  }
}
</style>
