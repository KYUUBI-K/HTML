<div>
    <div>
      Value{{ value }}
      <label>
        Name
        <input type="text" v-model="bankName" />
      </label>
    </div>
    <div>
      <label>
        Dolar rate
        <input type="text" v-model="dolarRate" />
      </label>
    </div>
  </div>
</template>

<script>
import { set } from 'vue/types/umd'
    export default {
        props: {
            value:{
                type:String,
                default:null,
            },
            rate:{
                type:String,
                default:null,
            }
        },
        computed: {
            bankName:{
                get:function(){
                    return this.value;
                }, 
                set:function(){
                    this.$emit("input",val);
                }
            },
            dolarRate:{
                get:function(){
                    return this.rate
                }
            },
        },
        
    }
</script>
<style lang="scss" scoped>

</style>