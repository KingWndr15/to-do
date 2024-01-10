<template>
    <div class="sign-in">
      <h1>Welcome back 👋🏾</h1>
      <signInForm />
    </div>
  </template>

<script>
import signInForm from "../components/sign-in-form.vue";

export default {
  name: 'HomeView',
  components: {
    signInForm
  }
}
</script>

<style scoped>
.sign-in {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.sign-in h1 {
  color: var(--Base-02, #090914);
  text-align: center;
  font-size: 52px;
  font-weight: 600;
  line-height: 62px; /* 119.231% */
  letter-spacing: -2px;
}
</style>
  