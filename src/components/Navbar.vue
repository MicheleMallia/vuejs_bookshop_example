<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <a href="#" class="navbar-brand">
            <router-link to="/"><img src="../assets/book_logo.png" height="28" alt="CoolBrand"></router-link>
        </a>
        <p class="title">{{title}}</p>    
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">          
            <div class="navbar-nav ml-auto">                
                <router-link to="/"><a href="#" class="nav-item nav-link active">Home</a></router-link>
                <router-link to="/prodotti"><a href="#" class="nav-item nav-link">Prodotti</a></router-link>
                <router-link to="/contatti"><a href="#" class="nav-item nav-link">Contatti</a></router-link>
                <router-link to="/wishlist"><a href="#" class="nav-item nav-link"><i class="fas fa-heart"></i></a></router-link>
            </div>
        </div>
    </nav>
</template>
<script>
    
    export default {
        name: 'navbar',
        components: {
            
        },
        data(){
            return {
                title: 'book shop'
            }
        }
    };
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap');

    .title{
        font-family: 'Syne Mono', monospace;
        font-size: 28px;
        margin-bottom: 0;
    }

</style>