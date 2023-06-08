<template>
  <div class="home">
    <section style="margin-top: 4rem; background-color: black;">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 text-white text-center py-7">
            <h2 class="display-4 text-uppercase mb-4">Próximamente</h2>
            <p class="mb-0">Marvel's</p>
            <h2 class="display-1 fw-bold mb-3">Spider-Man 2</h2>
            <p><a class="btn btn-outline-light" href="https://youtu.be/XPEU53aLc6c" target="_blank">Ver Gameplay</a></p>
          </div>
          <div class="col-lg-6" style="background: right bottom no-repeat; background-size: contain; margin-top: 4rem;">
            <img src="/assets/media/banner/spiderman-2.jpg" style="height: 410px;" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="pt-6 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto text-center mb-5">
            <h2 class="text-uppercase">Nuevos Juegos</h2>
            <p class="lead text-muted">Juegos nuevos en nuestra tienda, no necesariamente nuevos juegos.</p>
          </div>
        </div>
        <div class="row" v-if="load_nuevos_productos">
          <div class="col-12 text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
        <div class="row" v-if="!load_nuevos_productos">
          <!-- product-->
          <div class="col-lg-3 col-md-4 col-6" v-for="item in nuevos_productos">
            <div class="product">
              <div class="product-image">
                <div class="ribbon ribbon-danger" v-if="item.descuento">Oferta</div>
                <img class="img-fluid" :src="$url + '/obtener_portada_producto/' + item.portada" alt="product" />
                <div class="product-hover-overlay"><a class="product-hover-overlay-link" href="detail.html"></a>
                </div>
              </div>
              <div class="py-2">
                <p class="text-muted text-sm mb-1">{{ item.categoria }}</p>
                <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="detail.html">{{ item.titulo }}</a></h3>
                <span class="text-muted">{{ convertCurrency(item.precio) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Agregar sección -->
    <!-- <section style="background-color: #5a008a !important;">
      <div class="container">
        <div class="row">
          <div class="col-lg-6" style="background: right bottom no-repeat; background-size: contain; margin-top: 4rem;">
            <img src="/assets/media/banner/spiderman-2.jpg" style="height: 410px;" alt="">
          </div>
          <div class="col-lg-6 text-white text-center py-7">
            <h2 class="display-4 text-uppercase mb-4">Texto</h2>
            <p class="mb-0">Texto</p>
            <h2 class="display-1 fw-bold mb-3">Texto</h2>
            <p><a class="btn btn-outline-light" href="#" target="_blank">Botón Opcional</a></p>
          </div>
        </div>
      </div>
    </section> -->
    <section class="pt-6 pb-5 bg-danger">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto text-center mb-5">
            <h2 class="text-uppercase" style="color: white;">Ofertas</h2>
            <p class="lead" style="color: white;">Aprovecha los juegos en descuento que tenemos para ti.</p>
          </div>
        </div>
        <div class="row" v-if="load_productos_descuento">
          <div class="col-12 text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
        <div class="row" v-if="!load_productos_descuento">
          <!-- product-->
          <div class="col-lg-3 col-md-4 col-6" v-for="item in productos_descuento">
            <div class="product">
              <div class="product-image">
                <div class="ribbon ribbon-danger" v-if="item.descuento">Oferta</div>
                <img class="img-fluid" :src="$url + '/obtener_portada_producto/' + item.portada" alt="product" />
                <div class="product-hover-overlay"><a class="product-hover-overlay-link" href="detail.html"></a>
                </div>
              </div>
              <div class="py-2">
                <p class="text-sm mb-1" style="color: white; !important">{{ item.categoria }}</p>
                <h3 class="h6 text-uppercase mb-1"><a style="color: white; !important" href="detail.html">{{ item.titulo }}</a></h3>
                <span style="color: white; !important">{{ convertCurrency(item.precio) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-6 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto text-center mb-5">
            <h2 class="text-uppercase">Plataformas</h2>
            <p class="lead text-muted">Vendemos juegos de estas plataformas/consolas</p>
          </div>
          <div class="owl-carousel owl-theme brands-slider owl-loaded owl-drag">
            <div class="owl-stage-outer">
              <div class="owl-stage"
                style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 1594px;">
                <div class="owl-item active" style="width: 139.333px; margin-right: 20px; margin-left: 100px;">
                  <div class="item d-flex align-items-center justify-content-center" style="height: 97.2625px;">
                    <div class="w-6rem"><img class="img-fluid" src="/assets/consolas/X_Box_One_logo.svg" alt="Brand 1">
                    </div>
                  </div>
                </div>
                <div class="owl-item active" style="width: 139.333px; margin-right: 20px;">
                  <div class="item d-flex align-items-center justify-content-center" style="height: 97.2625px;">
                    <div class="w-6rem"><img class="img-fluid" src="/assets/consolas/Xbox_Series_X_S_black.svg"
                        alt="Brand 2">
                    </div>
                  </div>
                </div>
                <div class="owl-item active" style="width: 139.333px; margin-right: 20px;">
                  <div class="item d-flex align-items-center justify-content-center" style="height: 97.2625px;">
                    <div class="w-6rem"><img class="img-fluid" src="/assets/consolas/PlayStation_4_-_Logo.svg"
                        alt="Brand 3">
                    </div>
                  </div>
                </div>
                <div class="owl-item active" style="width: 139.333px; margin-right: 20px;">
                  <div class="item d-flex align-items-center justify-content-center" style="height: 97.2625px;">
                    <div class="w-6rem"><img class="img-fluid"
                        src="/assets/consolas/PlayStation_5_logo_and_wordmark.svg" alt="Brand 4">
                    </div>
                  </div>
                </div>
                <div class="owl-item active" style="width: 139.333px; margin-right: 20px;">
                  <div class="item d-flex align-items-center justify-content-center" style="height: 97.2625px;">
                    <div class="w-6rem"><img class="img-fluid" src="/assets/consolas/Nintendo_Switch_Logo.svg"
                        alt="Brand 5">
                    </div>
                  </div>
                </div>
                <div class="owl-item active" style="width: 139.333px; margin-right: 20px;">
                  <div class="item d-flex align-items-center justify-content-center" style="height: 97.2625px;">
                    <div class="w-6rem"><img class="img-fluid" src="/assets/consolas/Steam_2016_logo_black.svg"
                        alt="Brand 6">
                    </div>
                  </div>
                </div>
                <div class="owl-item active" style="width: 139.333px; margin-right: 20px;">
                  <div class="item d-flex align-items-center justify-content-center" style="height: 97.2625px;">
                    <div class="w-6rem"><img class="img-fluid" src="/assets/consolas/Epic_Games_logo.svg" alt="Brand 1">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="owl-thumbs"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.product-image {
  display: block;
  overflow: hidden;
  height: 320px;
}

.img-fluid {
  height: auto !important;
  display: block !important;
}
</style>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios';
import currency_formatter from 'currency-formatter';
import { init_carousel } from '../../public/assets/js/theme.d7b4a888';

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      nuevos_productos: [],
      load_nuevos_productos: true,
      productos_descuento: [],
      load_productos_descuento: true
    }
  },
  methods: {
    init_nuevos_productos() {
      this.load_nuevos_productos = true;
      axios.get(this.$url + '/obtener_nuevos_productos', {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((result) => {
        this.nuevos_productos = result.data;
        this.load_nuevos_productos = false;
        console.log(this.nuevos_productos);
      });
    },
    convertCurrency(number) {
      return currency_formatter.format(number, { code: 'USD' });
    },
    init_productos_descuento() {
      this.load_productos_descuento = true;
      axios.get(this.$url + '/obtener_productos_descuento', {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((result) => {
        this.productos_descuento = result.data;
        this.load_productos_descuento = false;
        console.log(this.productos_descuento);
      });
    }
  },
  beforeMount() {
    this.init_nuevos_productos();
    this.init_productos_descuento();
  }
}
</script>
