<!-- NotFound.vue -->
<template>
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <router-link to="/" class="link">Go to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
  };
  </script>
  
  <style scoped>
  .link {
    color: #057857;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.4px;
  }
  /* Add your styling for the NotFound component here */
  </style>
  