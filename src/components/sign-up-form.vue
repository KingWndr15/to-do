<template>
    <form>
        <input type="text" placeholder="First & Last Name">
        <input type="text" placeholder="Email Address">
        <input type="text" placeholder="Create Password">
        <defaultButton class="button">Sign Up</defaultButton>
        <button class="google">
            <img src="../assets/google.svg" alt="">
            Sign up with Google
        </button>
        <p>Already have an account? 
            <router-link to="/sign-in"><span>Login here</span></router-link>
        </p>
    </form>
</template>

<script>
import  defaultButton  from "@/components/button-component.vue";

export default {
    name: 'signInForm',
    components: {
        defaultButton
    }
}
</script>

<style scoped>
form {
    display: flex;
    padding: 30px;
    flex-direction: column;
    align-items: stretch;
    gap: 23px;
    width: 500px;
}

form input[type=text] {
    /* layout */
    display: flex;
    padding: 15px 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;

    /* style */
    border: 1px solid #E4E4E7;
    border-radius: 3px;
    background: #FFF;

    /* font style */
    color: #52525B;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
}

.button {
    padding: 15px 16px;
    align-items: center;
    justify-content: center;
}

.google {

    /* layout */
    display: flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;

    /* style */
    border: none;
    background-color: #FFF;

    /* font style */
    color: #1E293B;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 28px; /* 175% */
    letter-spacing: -0.2px;
}

form p {
  color: #000;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.4px;
}

form p span {
  color: #057857;
  font-weight: 600;
}
</style>