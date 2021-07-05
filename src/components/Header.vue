<template>
    <header>
        <h1>{{ title }}</h1>
        <Button
            @toggleAddTask="toggleAddTask"
            text="Add Task"
            color="green"
        />
    </header>
</template>

<script>
import Button from "./Button.vue";

export default {
    name: "Header",
    props: {
        title: {
            type: String,
            default: "Hello World!"
        }
    },
    methods: {
        toggleAddTask() {
            this.$emit('toggleAddTask')
            console.log("Taken 'toggleAddTask' from button component.");
            console.log("Emitted 'toggleAddTask' to app component.");
        }
    },
    components: {
        Button
    }
};
</script>

<style style="scss">
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>
