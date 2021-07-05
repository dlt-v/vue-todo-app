<template>
    <header>
        <h1>{{ title }}</h1>
        <Button
            v-show="homePage"
            @btnClick="toggleAddTask"
            :text="showAddTask ? 'Close' : 'Add Task'"
            :color="showAddTask ? 'red' : 'green'"
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
        },
        showAddTask: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggleAddTask() {
            this.$emit('toggleAddTask')
            // console.log("Taken 'toggleAddTask' from button component.");
            // console.log("Emitted 'toggleAddTask' to app component.");
        }
    },
    components: {
        Button
    },
    computed: {
        homePage() {
            if(this.$route.path === '/') {
                return true
            } else {
                return false
            }
        }
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
