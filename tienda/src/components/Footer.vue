<template>
    <footer class="main-footer">
        <!-- Services block-->
        <div class="text-dark-700 py-6">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 service-column">
                        <!-- <svg class="svg-icon service-icon">
                            <use xlink:href="#delivery-time-1"> </use>
                        </svg> -->
                        <img class="svg-icon service-icon" src="/assets/media/camion.gif" alt="">
                        <div class="service-text">
                            <h6 class="text-uppercase text-center">Envíos gratis</h6>
                            <p class="text-muted fw-light text-sm mb-0">Envíos gratis a partir de $600</p>
                        </div>
                    </div>
                    <div class="col-lg-4 service-column">
                        <img class="svg-icon service-icon" src="/assets/media/dolar.gif" alt="">
                        <div class="service-text">
                            <h6 class="text-uppercase">Garantía de devolución</h6>
                            <p class="text-muted fw-light text-sm mb-0 text-center">Garntía de 15 días</p>
                        </div>
                    </div>
                    <div class="col-lg-4 service-column">
                        <img class="svg-icon service-icon" src="/assets/media/apoyo-tecnico.gif" alt="">
                        <div class="service-text">
                            <h6 class="text-uppercase">Soporte técnico</h6>
                            <p class="text-muted fw-light text-sm mb-0 text-center">game_box@support.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Main block - menus, subscribe form-->
        <div class="py-6 text-muted" style="background-color: #5a008a !important;">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <div class="fw-bold text-uppercase text-lg text-white mb-3">
                            <img src="/assets/media/logo.svg" height="30" alt="">
                        </div>
                        <p class="text-white">Tus juegos favoritos, en un solo lugar.</p>
                        <ul class="list-inline">
                            <li class="list-inline-item"><a class="text-muted text-primary-hover" href="#"
                                    target="_blank" title="twitter"><img src="/assets/media/twitter.png" alt=""></a>
                            </li>
                            <li class="list-inline-item"><a class="text-muted text-primary-hover" href="#"
                                    target="_blank" title="facebook"><img src="/assets/media/facebook.png" alt=""></a>
                            </li>
                            <li class="list-inline-item"><a class="text-muted text-primary-hover" href="#"
                                    target="_blank" title="instagram"><img src="/assets/media/instagram.png" alt=""></a>
                            </li>
                            <li class="list-inline-item"><a class="text-muted text-primary-hover" href="#"
                                    target="_blank" title="pinterest"><img src="/assets/media/pinterest.png" alt=""></a>
                            </li>
                            <li class="list-inline-item"><a class="text-muted text-primary-hover" href="#"
                                    target="_blank" title="vimeo"><img src="/assets/media/vimeo.png" alt=""></a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-5 mb-lg-0">
                        <h6 class="text-uppercase text-white mb-3">Categorías</h6>
                        <ul class="list-unstyled">
                            <li> <a class="text-white" href="#">Acción</a></li>
                            <li> <a class="text-white" href="#">Aventura</a></li>
                            <li> <a class="text-white" href="#">Deportes</a></li>
                            <li> <a class="text-white" href="#">Disparos</a></li>
                            <li> <a class="text-white" href="#">Estrategia</a></li>
                            <li> <a class="text-white" href="#">Musical</a></li>
                            <li> <a class="text-white" href="#">Peleas</a></li>
                            <li> <a class="text-white" href="#">Terror</a></li>
                            <li> <a class="text-white" href="#">Vehículos</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-5 mb-lg-0">
                        <h6 class="text-uppercase text-white mb-3">Soporte</h6>
                        <ul class="list-unstyled">
                            <li> <a class="text-white" href="#">Login</a></li>
                            <li> <a class="text-white" href="#">Registro</a></li>
                            <li> <a class="text-white" href="#">Sobre Nosotros</a></li>
                            <li> <a class="text-white" href="#">Nuestros Productos</a></li>
                            <li> <a class="text-white" href="#">Preguntas Frecuentes</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4">
                        <h6 class="text-uppercase text-white mb-3">Boletín Informativo</h6>
                        <p class="mb-3 text-white">Suscríbete al boletín para ser el primero en saber las novedades que
                            tenemos.</p>
                        <form action="#" id="newsletter-form">
                            <div class="input-group mb-3">
                                <input class="form-control bg-transparent border-secondary border-end-0" type="email"
                                    placeholder="nombre@extension.com" aria-label="Your Email Address"
                                    style="border-color: white !important; color: white !important;">
                                <div class="input-group-append">
                                    <button class="btn border-start-0" type="submit"
                                        style="border-color: white !important;"><img src="/assets/media/enviar.png"
                                            alt=""></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Copyright section of the footer-->
        <div class="py-4 fw-light" style="background-color: black !important; color: white !important;">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 text-center text-md-start">
                        <p class="mb-md-0">&copy; {{ year }} Game Box. Todos los derechos reservados.</p>
                    </div>
                    <div class="col-md-6">
                        <ul class="list-inline mb-0 mt-2 mt-md-0 text-center text-md-end">
                            <li class="list-inline-item"><img class="w-2rem"
                                    src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/visa.svg" alt="..."></li>
                            <li class="list-inline-item"><img class="w-2rem"
                                    src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/mastercard.svg" alt="...">
                            </li>
                            <li class="list-inline-item"><img class="w-2rem"
                                    src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/paypal.svg" alt="..."></li>
                            <li class="list-inline-item"><img class="w-2rem"
                                    src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/western-union.svg"
                                    alt="..."></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>
