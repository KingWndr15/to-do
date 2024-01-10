<template>
    <button>
        <slot></slot>
    </button>    
</template>

<script>
    export default {
        name: 'button-component',
        props: ['content']
    }
</script>

<style scoped>
button {
    /* layout */
    display: flex;
    padding: 9.5px 122px;
    align-items: center;
    gap: 8px;

    /* style */
    cursor: pointer;
    border: none;
    border-radius: 3px;
    background: #057857;

    /* font style */
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 125% */
    letter-spacing: -0.4px;
}
</style>