<template>
    <button @click="onClick()" :style="{background: color}" class="btn">{{text}}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: {
            type: String,
            default: "Button Text"
        },
        color: {
            type: String,
            default: "black"
        }
    },
    methods: {
        onClick() {
            this.$emit('toggleAddTask')
            console.log("Emitting 'toggleAddTask to Header'");
        }
    }
}
</script>

<style scoped lang="scss">
</style>