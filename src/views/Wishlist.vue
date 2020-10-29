<template>
  <div class="wishlist">
      <navbar/>
      <div class="container-fluid"> 
        <div class="row">
          <section class="col-mb-12 contatti_welcome" style="width: 100%;">
            <div class="jumbotron">
              <h2 class="text-center">
                Wishlist
              </h2>
              <p class="text-center">
                This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
              </p> 
              <div class="row contatti_list">
                 <div>
                  <ul class="list-group mt-5">
                    <li class="list-group-item list-group-item-action" v-for="preferiti in wishList" :key="preferiti.id">
                      <div class="d-flex w-100 justify-content-between">
                        <h3>{{preferiti.id}}</h3>
                        <small class="text-danger delete" @click="deletePreferiti(preferiti.id);ciao()">&#10005;</small>
                      </div>
                      <p>{{preferiti.titolo}}</p>
                    </li>
                  </ul>
                </div>                

              </div>
            </div>
          </section>
      <!--Section: Contact v.2-->
        </div>
      </div>    
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: 'wishlist',
  components: {
    Navbar    
  },
  methods: {
      ...mapActions(["fetchPreferiti", "deletePreferiti"]),
      ciao(){
        this.$router.go();
      }
  },
  computed: mapGetters(["wishList"]),
  created() {
    this.fetchPreferiti()
  }
}
</script>

<style>
  .list{
    margin-top: 10%;
  }
</style>