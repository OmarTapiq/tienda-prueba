<template>
    <div style="background: #E2DFE4;">
        <section class="hero" style="margin-top: 4rem !important;">
            <div class="container">
                <!-- Hero Content-->
                <div class="hero-content pb-3 pt-4 text-center">
                    <h1 class="hero-heading">Tienda</h1>
                </div>
            </div>
        </section>
        <div class="container">
            <div class="row">
                <!-- Grid -->
                <div class="products-grid col-xl-9 col-lg-8 order-lg-2">
                    <header class="product-grid-header">
                        <div class="me-3 mb-3">
                            Mostrando <strong>{{ currentPage }} -
                                <span v-if="currentPage * perPage > productos.length">
                                    {{ productos.length }}
                                </span>
                                <span v-if="currentPage * perPage <= productos.length">
                                    {{ currentPage * perPage }}
                                </span>
                            </strong> de
                            <strong>{{ productos.length }}</strong> productos
                        </div>
                        <div class="me-3 mb-3"><span class="me-2">Por página</span>
                            <a class="product-grid-header-show" v-bind:class="{ 'active': perPage == 9 }"
                                style="cursor: pointer" v-on:click="setPerPage(9)">9 </a>
                            <a class="product-grid-header-show" v-bind:class="{ 'active': perPage == 15 }"
                                style="cursor: pointer" v-on:click="setPerPage(15)">15 </a>
                            <a class="product-grid-header-show " v-bind:class="{ 'active': perPage == 18 }"
                                style="cursor: pointer" v-on:click="setPerPage(18)">18 </a>
                        </div>
                        <div class="mb-3 d-flex align-items-center"><span class="d-inline-block me-2">Ordenar</span>
                            <select class="form-select w-auto border-0" style="cursor: pointer;" v-model="sort_by"
                                v-on:change="setSortBy()">
                                <option value="Defecto" selected>Por Defecto</option>
                                <option value="Precio Mayor">Precio Mayor</option>
                                <option value="Precio Menor">Precio Menor</option>
                            </select>
                        </div>
                    </header>
                    <div class="row" id="my-table">
                        <!-- product-->
                        <div class="col-xl-4 col-6" v-for="item in itemsForList">
                            <div class="product">
                                <div class="product-image">
                                    <div class="ribbon ribbon-danger" v-if="item.descuento">Oferta</div>
                                    <img class="img-fluid" :src="$url + '/obtener_portada_producto/' + item.portada"
                                        alt="product" />
                                </div>
                                <div class="py-2">
                                    <p class="text-muted text-sm mb-1">{{ item.categoria }}</p>
                                    <h3 class="h6 text-uppercase mb-1"
                                        style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">
                                        <a class="text-dark" href="detail.html">{{ item.titulo }}</a>
                                    </h3>
                                    <span class="text-muted">{{ convertCurrency(item.precio) }}</span>
                                </div>
                            </div>
                        </div>
                        <!-- /product-->
                    </div>
                    <div class="card-footer">
                        <b-pagination v-model="currentPage" :total-rows="productos.length" :per-page="perPage"
                            aria-controls="my-table"></b-pagination>
                    </div>
                </div>
                <!-- / Grid End-->
                <!-- Sidebar-->
                <div class="sidebar col-xl-3 col-lg-4 order-lg-1">
                    <div class="sidebar-block px-3 px-lg-0 me-lg-4"><a class="d-lg-none block-toggler"
                            data-bs-toggle="collapse" href="#categoriesMenu" aria-expanded="false"
                            aria-controls="categoriesMenu">Categorias</a>
                        <div class="expand-lg collapse" id="categoriesMenu">
                            <div class="nav nav-pills flex-column mt-4 mt-lg-0" role="menu">
                                <div class="sidebar-menu-item mb-2 active" data-bs-toggle="collapse"
                                    data-bs-target="#subcategories_0" aria-expanded="true"
                                    aria-controls="subcategories_0" role="menuitem">
                                    <a class="nav-link active" href="#!">
                                        <div class="row">
                                            <div class="col"><span>Categorias</span></div>
                                        </div>
                                    </a>
                                </div>
                                <div class="collapse show" id="subcategories_0">
                                    <div class="nav nav-pills flex-column ms-3">
                                        <a style="cursor: pointer" v-for="item in categorias" class="nav-link mb-2"
                                            v-on:click="redirectCategoria(item.categoria.titulo)">
                                            {{ item.categoria.titulo }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-block px-3 px-lg-0 me-lg-4"><a class="d-lg-none block-toggler"
                            data-bs-toggle="collapse" href="#priceFilterMenu" aria-expanded="false"
                            aria-controls="priceFilterMenu">Filter by price</a>
                        <div class="expand-lg collapse" id="priceFilterMenu">
                            <h6 class="sidebar-heading d-none d-lg-block">Price </h6>
                            <div class="mt-4 mt-lg-0" id="slider-snap" ref="slider"> </div>
                            <div class="nouislider-values">
                                <div class="min">De <span id="slider-snap-value-lower">{{ convertCurrency(minRange)
                                }}</span></div>
                                <div class="max">A <span id="slider-snap-value-upper">{{ convertCurrency(maxRange)
                                }}</span></div>
                                <input class="slider-snap-input" type="hidden" name="pricefrom"
                                    id="slider-snap-input-lower" value="40">
                                <input class="slider-snap-input" type="hidden" name="priceto"
                                    id="slider-snap-input-upper" value="110">
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-block px-3 px-lg-0 me-lg-4"><a class="d-lg-none block-toggler"
                            data-bs-toggle="collapse" href="#brandFilterMenu" aria-expanded="true"
                            aria-controls="brandFilterMenu">Filter by brand</a>
                        <!-- Brand filter menu - this menu has .show class, so is expanded by default-->
                        <div class="expand-lg collapse show" id="brandFilterMenu">
                            <h6 class="sidebar-heading d-none d-lg-block">Brands </h6>
                            <form class="mt-4 mt-lg-0" action="#">
                                <div class="mb-1">
                                    <div class="form-check">
                                        <input class="form-check-input" id="brand0" type="checkbox" name="clothes-brand"
                                            checked>
                                        <label class="form-check-label" for="brand0">Calvin Klein
                                            <small>(18)</small></label>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-check">
                                        <input class="form-check-input" id="brand1" type="checkbox" name="clothes-brand"
                                            checked>
                                        <label class="form-check-label" for="brand1">Levi Strauss
                                            <small>(30)</small></label>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-check">
                                        <input class="form-check-input" id="brand2" type="checkbox"
                                            name="clothes-brand">
                                        <label class="form-check-label" for="brand2">Hugo Boss
                                            <small>(120)</small></label>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-check">
                                        <input class="form-check-input" id="brand3" type="checkbox"
                                            name="clothes-brand">
                                        <label class="form-check-label" for="brand3">Tomi Hilfiger
                                            <small>(70)</small></label>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-check">
                                        <input class="form-check-input" id="brand4" type="checkbox"
                                            name="clothes-brand">
                                        <label class="form-check-label" for="brand4">Tom Ford
                                            <small>(110)</small></label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="sidebar-block px-3 px-lg-0 me-lg-4"> <a class="d-lg-none block-toggler"
                            data-bs-toggle="collapse" href="#sizeFilterMenu" aria-expanded="false"
                            aria-controls="sizeFilterMenu">Filter by size</a>
                        <!-- Size filter menu-->
                        <div class="expand-lg collapse" id="sizeFilterMenu">
                            <h6 class="sidebar-heading d-none d-lg-block">Size </h6>
                            <form class="mt-4 mt-lg-0" action="#">
                                <div class="mb-1">
                                    <div class="form-check">
                                        <input class="form-check-input" id="size0" type="radio" name="size" checked>
                                        <label class="form-check-label" for="size0">Small</label>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-check">
                                        <input class="form-check-input" id="size1" type="radio" name="size">
                                        <label class="form-check-label" for="size1">Medium</label>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-check">
                                        <input class="form-check-input" id="size2" type="radio" name="size">
                                        <label class="form-check-label" for="size2">Large</label>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-check">
                                        <input class="form-check-input" id="size3" type="radio" name="size">
                                        <label class="form-check-label" for="size3">X-Large</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="sidebar-block px-3 px-lg-0 me-lg-4"><a class="d-lg-none block-toggler"
                            data-bs-toggle="collapse" href="#colourFilterMenu" aria-expanded="false"
                            aria-controls="colourFilterMenu">Filter by colour</a>
                        <!-- Size filter menu-->
                        <div class="expand-lg collapse" id="colourFilterMenu">
                            <h6 class="sidebar-heading d-none d-lg-block">Colour </h6>
                            <div class="mt-4 mt-lg-0">
                                <ul class="list-inline mb-0 colours-wrapper">
                                    <li class="list-inline-item">
                                        <label class="btn-colour" for="colour_sidebar_Blue"
                                            style="background-color: #668cb9" data-allow-multiple> </label>
                                        <input class="input-invisible" type="checkbox" name="colour"
                                            value="value_sidebar_Blue" id="colour_sidebar_Blue">
                                    </li>
                                    <li class="list-inline-item">
                                        <label class="btn-colour" for="colour_sidebar_White"
                                            style="background-color: #fff" data-allow-multiple> </label>
                                        <input class="input-invisible" type="checkbox" name="colour"
                                            value="value_sidebar_White" id="colour_sidebar_White">
                                    </li>
                                    <li class="list-inline-item">
                                        <label class="btn-colour" for="colour_sidebar_Violet"
                                            style="background-color: #8b6ea4" data-allow-multiple> </label>
                                        <input class="input-invisible" type="checkbox" name="colour"
                                            value="value_sidebar_Violet" id="colour_sidebar_Violet">
                                    </li>
                                    <li class="list-inline-item">
                                        <label class="btn-colour" for="colour_sidebar_Red"
                                            style="background-color: #dd6265" data-allow-multiple> </label>
                                        <input class="input-invisible" type="checkbox" name="colour"
                                            value="value_sidebar_Red" id="colour_sidebar_Red">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Sidebar end-->
            </div>
        </div>
    </div>
</template>

<script>
import noUiSlider from '../../../public/assets/js/nouislider.min.js';
import currency_formatter from 'currency-formatter';
import axios from 'axios';

export default {
    data() {
        return {
            slider: {
                starMin: 0,
                starMax: 2000,
                min: 0,
                max: 2000,
                start: 100,
                step: 100
            },
            minRange: null,
            maxRange: null,
            productos: [],
            productos_const: [],
            categorias: [],
            currentPage: 1,
            perPage: 9,
            get itemsForList() {
                return this.productos.slice(
                    (this.currentPage - 1) * this.perPage, this.currentPage * this.perPage
                )
            },
            sort_by: 'Defecto',
        }
    },
    mounted() {
        noUiSlider.create(this.$refs.slider, {
            start: [this.slider.starMin, this.slider.starMax],
            step: this.slider.step,
            range: {
                'min': this.slider.min,
                'max': this.slider.max
            }
        });

        this.$refs.slider.noUiSlider.on('update', (values, handle) => {
            this[handle ? 'maxRange' : 'minRange'] = parseInt(values[handle]);
        });
    },
    beforeMount() {
        axios.get(this.$url + '/obtener_productos_shop', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((result) => {
            this.productos = result.data;
            this.productos_const = this.productos;

            if (this.$route.query.cat) {
                this.init_producto_categoria();
            }
            console.log(this.productos);
        });
        this.init_categorias();
    },
    methods: {
        convertCurrency(number) {
            return currency_formatter.format(number, { code: 'USD' });
        },
        setPerPage(item) {
            this.perPage = item;
        },
        setSortBy() {
            if (this.sort_by == 'Defecto') {
                this.productos.sort((a, b) => new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime() ? 1 : -1);
            }

            if (this.sort_by == 'Precio Mayor') {
                this.productos.sort((a, b) => a.precio < b.precio ? 1 : -1);
            }

            if (this.sort_by == 'Precio Menor') {
                this.productos.sort((a, b) => a.precio > b.precio ? 1 : -1);
            }

            console.log(this.sort_by);
        },
        init_categorias() {
            axios.get(this.$url + '/listar_categorias_shop', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((result) => {
                this.categorias = result.data;
                console.log(this.categorias);
            });
        },
        redirectCategoria(item) {
            this.$router.push({ name: 'shop', query: { cat: item } });
            this.init_producto_categoria();
        },
        init_producto_categoria() {
            this.productos = this.productos_const.filter(item => item.categoria == this.$route.query.cat);
        }
    }
}
</script>

<style>
.noUi-horizontal .noUi-handle {
    background: #5a008a !important;
    width: .2rem !important;
    height: 1rem !important;
    border-radius: 5px !important;
}

.noUi-horizontal {
    background: #5a008a !important;
    height: 3px !important;
    border: none !important;
}

.sidebar-menu-item[data-bs-toggle="collapse"]::before {
    display: none !important;
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: white !important;
    background-color: #bd99d0 !important;
}
</style>