<template>
  <div class="prodotti">
      <navbar/>
      <!-- <div>User {{ $route.params.id }}</div> -->
      <div class="container-fluid" v-if="!$route.params.id">
        <div class="row">
          <div class="col-md-12 prodotti_welcome">
            <div class="jumbotron">
              <h2 class="text-center">
                Prodotti
              </h2>
              <p class="text-center">
                This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
              </p>              
            </div>
          </div>
        </div>        
        <div id="lista_prodotti" class="row">
          <div class="col-md-4 d-flex align-items-stretch" v-for="(value, index) in items" v-bind:key="index" style="padding-top:20px;">
            <div class="card scroll" style="width: 100%;">
              <router-link :to="'/prodotti/'+(index+1)"><img v-if="value.thumbnailUrl" :src="value.thumbnailUrl" class="card-img-top" alt=""></router-link>
              <router-link :to="'/prodotti/'+(index+1)"><img v-if="!value.thumbnailUrl" src="../assets/book_logo.png" class="card-img-top" alt=""></router-link>
              <div class="card-body">
                <h5 class="card-title">{{ value.title }}</h5>
                <p class="card-text" v-if="value.shortDescription">{{value.shortDescription}}</p>
                <p class="card-text" v-if="!value.shortDescription">Nessuna descrizione disponibile</p>
              </div>
              <div class="card-footer text-center">
                <router-link :to="'/prodotti/'+(index+1)"><a class="card-link float-left">Vedi dettagli di {{index+1}}</a></router-link> <!-- TODO: dettaglio pagina -->
                <form @submit.prevent="onPreferitiSubmitGeneral">                
                  <button type="submit" class="float-right" style="border:none; background: none;" :indice="index+1"><i class="far fa-heart" aria-hidden="true"></i></button>
                </form>
              </div>                     
            </div>
          </div>
        </div>
        <transition name="fade">
          <div class="loading" v-show="loading">
            <span class="fa fa-spinner fa-spin"></span> Loading
          </div>
        </transition>
      </div>
      <div class="container-fluid" v-if="$route.params.id">        
        <div class="row">
          <div class="col-md-12 dettaglio_prodotto">
            <div class="jumbotron">
              <h2 class="text-center">
                {{libri[$route.params.id-1].title}}
              </h2>
              <p class="text-center">
                This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
              </p>              
            </div>
            <div class="row">
              <div class="col-md-6 d-flex flex-row-reverse">
                <img class="img_product" v-if="libri[$route.params.id-1].thumbnailUrl" alt="Bootstrap Image Preview" :src="libri[$route.params.id-1].thumbnailUrl" />
                <img class="img_product" v-if="!libri[$route.params.id-1].thumbnailUrl" alt="Bootstrap Image Preview" src="../assets/book_logo.png" />
              </div>
              <div class="col-md-6">
                <ul v-for="(value, name) in libri[$route.params.id-1]" v-bind:key="value">
                  <li class="list-item" v-if="name != 'thumbnailUrl' && name !='publishedDate'  && name !='shortDescription' && name !='authors' && name !='categories'">
                    <span class="capitalize">{{name}}</span>: {{value}}
                  </li>
                  <li class="list-item" v-if="name == 'publishedDate'">
                    <span class="capitalize">{{name}}</span>: {{value["$date"]}}
                  </li> 
                  <li class="list-item" v-if="name == 'authors'">
                    <span class="capitalize">{{name}}</span>:
                    <span v-for="authors in value" v-bind:key="authors">
                      <span>{{authors}},&nbsp;&nbsp;</span>
                    </span>                     
                  </li> 
                  <li class="list-item" v-if="name == 'categories'">
                    <span class="capitalize">{{name}}</span>:
                    <span v-for="cat in value" v-bind:key="cat">
                      <span>{{cat}},</span> 
                    </span>                     
                  </li>     
                </ul>
                <button type="button" class="btn btn-primary back"><a class="btn btn-primary-active" @click="$router.go(-1)">Back</a></button>                
                <form @submit.prevent="onPreferitiSubmitDetail">                
                  <button type="submit" class="btn btn-danger back" :indice="$route.params.id-1">Aggiungi ai preferiti</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import * as dati from "../data/booksData.json";
import Navbar from "../components/Navbar.vue";
import { mapActions } from "vuex";

export default {
  name: 'prodotti',
  components: {
    Navbar    
  },
  data(){
    return {
      libri: dati["default"],
      loading: true,
      nextItem: 0,
      items: [],
      id : '',
      titolo : '',
      autore : ''
    }
  },
  mounted () {
    // Detect when scrolled to bottom.    
    var debounce;
    var that = this;
      window.addEventListener('scroll', e => {        
      if(debounce) clearTimeout(debounce);
      debounce = setTimeout(function(){
        debounce = null;
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {                      
          console.log(e); 
          that.loading = true;         
          that.loadMore();          
        }
      }, 500, false);
      
    }, false);
    
   
    // Initially load some items.
    this.loadMore();
  },
  methods: {
    loadMore () {      
      /** This is only for this demo, you could 
        * replace the following with code to hit 
        * an endpoint to pull in more data. **/ 
      console.log(this.$route.path === '/prodotti')    

      if(this.$route.path === '/prodotti'){
        setTimeout(e => {
          for (var i = 0; i < 6; i++) {
            if(this.nextItem == this.libri.length){
              return;
            }else{
              this.items.push(this.libri[this.nextItem]);
              this.nextItem++
            }          
          }
          this.loading = false;
          console.log(e);
          //console.log(this.nextItem);
        }, 300);
      }      
      /**************************************/ 
    },
    ...mapActions(["addPreferiti"]),
    onPreferitiSubmitGeneral(index) {   
      var id_libro = index.submitter.attributes[1].nodeValue;        
      this.addPreferiti({
        id: parseInt(id_libro),
        titolo: this.libri[id_libro-1].title,
        autore: JSON.stringify(this.libri[id_libro-1].authors)
      })
    },
    onPreferitiSubmitDetail(index) {   
      var id_libro = index.submitter.attributes[1].nodeValue;        
      this.addPreferiti({
        id: parseInt(id_libro),
        titolo: this.libri[id_libro].title,
        autore: JSON.stringify(this.libri[id_libro].authors)
      })
    }
  }
}
</script>

<style>
  

  .prodotti_welcome{
    margin-top: 5%;
    margin-bottom: 5%;
    padding-left: 10% !important;
    padding-right: 10% !important;
  }

  .dettaglio_prodotto{
    margin-top: 5%;
    margin-bottom: 5%;
    padding-left: 15% !important;
    padding-right: 15% !important;
  }

  .loading{
    margin: auto;
    width: 7%;
    text-align: center;
    position: absolute;
    color: #fff;
    z-index: 9;
    background: #5c4084;
    padding: 8px 18px;
    border-radius: 5px;
    left: calc(50% - 45px);
  }

  #lista_prodotti {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

  .card-img-top{
    min-height: 280px !important;
    max-height: 280px !important;
  }

  .img_product{
    width: 100%;
    max-height: 50%;
  }

  .capitalize{ 
    display: inline-block;
    text-transform: capitalize; 
  }

  .btn{
    
    width: 100%;
    color: white !important;
  }

  .back {
    margin-top: 10%;
  }
</style>