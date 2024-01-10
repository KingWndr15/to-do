<template>
  <div class="sign-up">
    <h1>Hello There 👋🏾</h1>
    <signUpForm />
  </div>
</template>

<script>
import signUpForm from "../components/sign-up-form.vue";

export default {
  name: 'HomeView',
  components: {
    signUpForm
  }
}
</script>

<style scoped>
.sign-up {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.sign-up h1 {
  color: var(--Base-02, #090914);
  text-align: center;
  font-size: 52px;
  font-weight: 600;
  line-height: 62px; /* 119.231% */
  letter-spacing: -2px;
}
</style>