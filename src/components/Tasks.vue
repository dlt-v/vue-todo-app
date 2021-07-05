<template>
    <div :key="task.id" v-for="task in tasks">
        <Task 
            @toggle-reminder="$emit('toggleReminder', task.id)" 
            @delete-task="$emit('deleteTask', task.id)" 
            :task="task" 
        />
    </div>
</template>

<script>
import Task from './Task.vue';

export default {
    name: 'Tasks',
    props: {
        tasks: Array
    },
    components: {
        Task
    },
    emits: ['toggleReminder', 'deleteTask']
}
</script>