<template>
    <div>
        <div>
            <label>
                Title
                <input type="text" v-model="title">
            </label>
        </div>
        <div>
            <label>
                Price
                <input type="number" v-model="price">
            </label>
        </div>
        <div>
            <button @click="onAdd">Add</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:"AddTaskForm",
        data() {
            return {
                title:null,
                price:null
            }

        },
        methods: {
            name() {
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>