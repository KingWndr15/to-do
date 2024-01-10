<template>
  <div class="home">
    <div class="logo"></div>
    <h1>Todo</h1>
    <router-link to="/sign-up">
      <defaultButton class="button">Sign Up</defaultButton>
    </router-link>
      <p>Already have an account? 
        <router-link to="/sign-in"><span>Login here</span></router-link>
      </p>
  </div>
</template>

<script>
import  defaultButton  from "@/components/button-component.vue";

export default {
  name: 'HomeView',
  components: {
    defaultButton
  }
}
</script>

<style scoped>
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 10px;
}

.home h1 {
  color: #000;
  font-size: 64px;
  font-weight: 600;
  line-height: 80px; /* 125% */
  letter-spacing: -0.4px;
}

.home .logo {
  width: 50px;
  height: 50px;
  background: url('../assets/logo_black.svg');
  background-position: center;
  background-size: cover;
}

.home .logo::after {
  content: '';
  width: 100%;
  height: 100%;
  display: block;
}

.home .button {
  margin-top: 15px;
}

.home p {
  color: #000;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.4px;
}

.home p span {
  color: #057857;
  font-weight: 600;
}
</style>