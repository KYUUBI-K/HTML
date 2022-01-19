<template>
    <div class="task">
        <div>{{task.title}}</div>
        <div>{{task.price}}</div>
    </div>
</template>

<script>
    export default {
        name:'TaskItem',
        props: {
            task: {
                type: Object,
                default: ()=>({})
            },
        },
    }
</script>

<style lang="css" scoped>
.task{
    width: 200px;
    border: 2px solid red;
    border-radius: 8px;
    margin: 10px;
    }
</style>