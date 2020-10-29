<template>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="3000">
        <div class="carousel-inner" style="max-height:530px !important;">
            <div class="carousel-item active">
                <img class="d-block w-100" v-bind:src="slide1" alt="First slide">            
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" v-bind:src="slide2" alt="Second slide">            
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" v-bind:src="slide3" alt="Third slide">            
            </div>
        </div>
        <div class="main-text">
            <div class="col-md-12 text-center">
                <h3>
                    Book Shop</h3>
                <h5>
                    Usa la barra di ricerca per cercare un titolo.
                </h5>                        
            </div>            
        </div>
        <div class="autocomplete-michele">
            <div class="col-md-12">
                <autocomplete-michele/>    
            </div>
        </div>                  
    </div>
</template>
<script>

import AutocompleteMichele from './Autocomplete.vue';
export default {
    
    name: 'carousel',
    components: {
        AutocompleteMichele
    },
    data(){
        return {
            slide1 : require('../assets/slide1.jpg'),
            slide2 : require('../assets/slide2.jpg'),
            slide3 : require('../assets/slide3.jpg')
        }
    }    
}

</script>

<style>
   
    .carousel.slide{
        margin: 5%;
        margin-top: 10%;
    }
    
    .main-text {
        width: 100%;
        position: absolute;
        top: 100px;        
        padding-left: 25%;
        padding-right: 25%;
        color: #FFF;        
    }    

    .main-text > * {
        background-color: rgba(121, 109, 109, 0.5)
    }

    .autocomplete-michele {
        position: absolute;
        top: 300px;        
        margin-left: 10%;
        margin-right: 10%;      
        width: 80%;          
    }    
    
</style>