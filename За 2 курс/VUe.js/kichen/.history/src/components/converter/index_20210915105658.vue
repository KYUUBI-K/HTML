<template>
    <div>
        <div>
            <span>{{bankTitle}}</span>
            <span>{{currencyTitle}}</span>
            <span>{{course}}</span>
        </div>
        <div>
            <label>
                Гривні
                <input type="number" v-model.number="grnAmount">
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        name:'converter',
        props: {
            bankTitle: {
                type: String,
                default: 'Unknown bank'
            },
            currencyTitle:{
                 type: String,
                default: 'Unknown currency'
            },
            course:{
                type: [Number,String]   ,
                default: 1,
                
            }
        },
        data() {
            return {
                grnAmount: null
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>