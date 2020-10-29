<template>
    <autocomplete
    :source="fonte"
    results-property="title"
    results-display="title"
    @selected="input">
    </autocomplete>
</template>

<script>
import Autocomplete from 'vuejs-auto-complete'
import * as dati from '../data/booksData.json'

export default {
    name: 'autocomplete-michele',
    components: {
        Autocomplete
    },
    data(){
        return {
            fonte : dati["default"]
        }
    },
    methods: {
        input: function(event){                        
            var productId; 
            for(var key in dati["default"]){                
                if(dati["default"][key] == event["selectedObject"]){
                    console.log(dati["default"][key]);
                    console.log(event["selectedObject"]);
                    productId = key;
                    productId++;
                }
            }
            console.log(productId);
            this.$router.push({ path: `prodotti/${productId}`})            
        }
    }
}
</script>