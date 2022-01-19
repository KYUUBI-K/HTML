<template>
    <div>
        <div>
            <img src="Photo">
        </div>
        <div>
            <div>{{FullName}}</div>
            <div>{{WhichLab}}</div>
            <div>{{DateOfDelivery}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"StudetLabs",
        props: {
            Photo: {
                type: String,
                default: null,
            },
            FullName:{
                type:String,
                default:null
            },
            WhichLab:{
                type:Number,
                default:null
            },
            DateOfDelivery:{
                type:Number,
                default:null
            }

        },
    }
</script>

<style lang="scss" scoped>

</style>