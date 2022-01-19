<template>
    <div>
        <task-item v-for="task in getTaskList" :key="task.id"
            :task="task"
        />
    </div>
</template>

<script>
import TaskItem from "./TaskItem";

import { mapGetters } from "vuex";
    export default {
        name:'TasksList',
        components: {
            TaskItem,
        },

        computed: {
            ...mapGetters(['getTaskList'])
        },
    }
</script>

<style lang="scss" scoped>

</style>