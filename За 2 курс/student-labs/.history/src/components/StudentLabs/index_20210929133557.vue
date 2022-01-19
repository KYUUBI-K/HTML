<template>
    <div class="container">
        <div>
            <img :src="photo">
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
            photo: {
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

<style lang="css" scoped>
.container{
display: grid;
grid-template-columns:1fr 2fr ;
}
</style>