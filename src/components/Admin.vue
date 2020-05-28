<template>
    <div>
        <!-- CONTENIDO PARA LA VISTA DE PORTADA -->
        <header class="masthead" style="background-image: url('assets/img/home-bg.jpg');">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto">
                        <div class="site-heading">
                            <h1 v-text="welcome"><strong></strong></h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    props: ['admin'],
    computed: {
        welcome() {
            if (this.admin == 'simple')
                return 'Bienvenido a la Página de Administración Simple'
            else if (this.admin == 'advance')
                return 'Biemvenido. Esta Página está en construcción... Intenta como Administrador Simple'
            else 
                return 'Esta página no existe... Ingresa como Administrador Simple'    
        }
    }
}
</script>