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
            <label >
                {{currencyTitle}}
                <input type="number" :value="currencyAmount" disabled="!isTwoWayConverter" >
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Converter',
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
                
            },
            isTwoWayConverter:{
                type:Boolean,
                default:false
            }
        },
        data() {
            return {
                grnAmount: null
            }
        },
        computed: {
            currencyAmount() {
                return this.grnAmount/this.course 
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>