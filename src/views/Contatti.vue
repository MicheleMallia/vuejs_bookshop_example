<template>
  <div class="contatti">
      <navbar/>
      <!--Section: Contact v.2-->
      <div class="container-fluid"> 
        <div class="row">
          <section class="col-mb-12 contatti_welcome" style="width: 100%;">
            <div class="jumbotron">
              <h2 class="text-center">
                Contatti
              </h2>
              <p class="text-center">
                This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
              </p> 

              <div class="row contatti_list">

                  <!--Grid column-->
                  <div class="col-md-9 mb-md-0 mb-5">
                      <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                          <!--Grid row-->
                          <div class="row">

                              <!--Grid column-->
                              <div class="col-md-6">
                                  <div class="md-form mb-0">
                                      <input type="text" id="name" name="name" class="form-control">
                                      <label for="name" class="">Your name</label>
                                  </div>
                              </div>
                              <!--Grid column-->

                              <!--Grid column-->
                              <div class="col-md-6">
                                  <div class="md-form mb-0">
                                      <input type="text" id="email" name="email" class="form-control">
                                      <label for="email" class="">Your email</label>
                                  </div>
                              </div>
                              <!--Grid column-->

                          </div>
                          <!--Grid row-->

                          <!--Grid row-->
                          <div class="row">
                              <div class="col-md-12">
                                  <div class="md-form mb-0">
                                      <input type="text" id="subject" name="subject" class="form-control">
                                      <label for="subject" class="">Subject</label>
                                  </div>
                              </div>
                          </div>
                          <!--Grid row-->

                          <!--Grid row-->
                          <div class="row">

                              <!--Grid column-->
                              <div class="col-md-12">

                                  <div class="md-form">
                                      <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                      <label for="message">Your message</label>
                                  </div>

                              </div>
                          </div>
                          <!--Grid row-->

                      </form>

                      <div class="text-center text-md-left">
                          <a class="btn btn-primary">Send</a>
                      </div>
                      <div class="status"></div>
                  </div>
                  <!--Grid column-->

                  <!--Grid column-->
                  <div class="col-md-3 text-center">
                      <ul class="list-unstyled mb-0">
                          <li><i class="fas fa-map-marker-alt fa-2x"></i>
                              <p>San Francisco, CA 94126, USA</p>
                          </li>

                          <li><i class="fas fa-phone mt-4 fa-2x"></i>
                              <p>+ 01 234 567 89</p>
                          </li>

                          <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                              <p>contact@mdbootstrap.com</p>
                          </li>
                      </ul>
                  </div>
                  <!--Grid column-->

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
export default {
  name: 'contatti',
  components: {
    Navbar    
  }
}
</script>

<style>
  .contatti_list{
    width: 70%;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .jumbotron{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 7%;
  }

  .contatti_welcome{
    margin-top: 5%;
    margin-bottom: 5%;
    padding-left: 10% !important;
    padding-right: 10% !important;
  }
</style>