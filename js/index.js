Vue.component('main-nav-bar', {
  template: `<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://doitsimpler.blogspot.com/" target="blank">
                    &#127831;
                </a>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <router-link to="/" class="navbar-item">Home</router-link>
                    <router-link to="/products/all" class="navbar-item">Products</router-link>
                    <router-link to="/about" class="navbar-item">About</router-link>
                </div>

            </div>
        </div>
    </nav>
    `
});

Vue.component('main-footer', {
  template: `<footer class="footer divider-top  is-dark">
        <div class="container">
            <div class="content has-text-centered">
                <p>
                    <strong>Tutorials</strong> by <a href="https://doitsimpler.blogspot.com/"  target="blank"><b>slackingslacker</b></a>.
                    This page is <b>open source</b>.
                </p>
            </div>
        </div>
    </footer>
    `
});

Vue.component('main-app', {
  template: `<div>
        <section>
            &nbsp;
        </section>

        <main-nav-bar></main-nav-bar>

        <div class="container divider-top">
            <router-view></router-view>
        </div>

        <main-footer></main-footer>
    <div>`
});

const Main = {
    template: `<section class="hero">
        <div class="columns">
            <div class="column banner-hero-bg has-text-centered">
                <div class="divider-top">
                    <h1 class="title is-size-1 w-full font-900">Meat, Fruits and Vegetables</h1>
                </div>
                <div>
                    <h2 class="title is-size-3 w-full font-600">100% Freshness</h2>
                </div>

            </div>
        </div>
        <div class="columns divider-top">
            <div class="column has-text-centered"><h2 class="title is-size-3 w-full font-600 divider-top">Our Products</h2></div>
        </div>
        <div class="columns divider-top">
            <div class="column has-text-centered-mobile">
                 <div class="columns">
                    <div class="column">
                        <div class="card">
                          <div class="card-image">
                            <figure class="image is-4by3">
                              <img src="img/lemon.jpg">
                            </figure>
                          </div>
                          <div class="card-content">
                            <div class="content has-text-centered">
                              <strong><router-link to="/products/fruit">Fruits</router-link></strong>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                          <div class="card-image">
                            <figure class="image is-4by3">
                              <img src="img/lettuce.jpg"">
                            </figure>
                          </div>
                          <div class="card-content">
                            <div class="content has-text-centered">
                              <strong><router-link to="/products/vegetable">Vegetables</router-link></strong>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                          <div class="card-image">
                            <figure class="image is-4by3">
                              <img src="img/beef.jpg"">
                            </figure>
                          </div>
                          <div class="card-content">
                            <div class="content  has-text-centered">
                              <strong><router-link to="/products/meat">Meat</router-link></strong>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                          <div class="card-image">
                            <figure class="image is-4by3">
                              <img src="img/others.jpg"">
                            </figure>
                          </div>
                          <div class="card-content">
                            <div class="content  has-text-centered">
                              <strong><router-link to="/products/other">Others</router-link></strong>
                            </div>
                          </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </section>
    `
}

const Products = {
    template: `
        <div>
            <div class="columns ">
                <div class="column">
                    <div class="card">
                      <div class="card-content has-text-centered">
                        <div class="content">
                          <router-link to="/products/all">All Products</router-link>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                      <div class="card-content">
                        <div class="content has-text-centered">
                          <router-link to="/products/fruit">Fruits</router-link>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                      <div class="card-content">
                        <div class="content  has-text-centered">
                          <router-link to="/products/vegetable">Vegetables</router-link>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                      <div class="card-content">
                        <div class="content has-text-centered">
                          <router-link to="/products/meat">Meat</router-link>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                      <div class="card-content">
                        <div class="content has-text-centered">
                          <router-link to="/products/other">Others</router-link>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="columns is-multiline">
                <div class="column is-one-quarter" v-for="(product, index) in products">
                    <div class="card">
                      <div class="card-image">
                        <figure class="image is-4by3">
                          <img v-bind:src="'img/' + product.image" alt="Placeholder image">
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="content">
                          <a @click="showProduct(product)">{{ product.name }}</a><br>
                          Price : $ {{ product.price }}
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div v-if="this.product" :class="[this.product ? 'modal is-active' : 'modal']">
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head">
                  <p class="modal-card-title">{{ this.product.name }}</p>
                  <button class="delete" aria-label="close" @click="hideProduct()"></button>
                </header>
                <section class="modal-card-body">
                    <div class="has-text-centered">
                      <img v-bind:src="'img/' + this.product.image" alt="Placeholder image" style="max-height:300px;">
                    </div>
                    <div class="divider-top">
                        <div>
                            <strong>Price</strong> :  $ {{ this.product.price }}
                        </div>
                        <div>
                            <strong>Description</strong> :  {{ this.product.description }}
                        </div>
                        <div>
                            <strong>Item No</strong> :  #{{ this.product.itemNo }}
                        </div>
                    </div>
                </section>

                <footer class="modal-card-foot">
                  <button class="button" @click="hideProduct()">Close</button>
                </footer>
              </div>
            </div>
        </div>
    ` ,
    data(){
        return {
            baseProducts: [],
            products: [],
            product: null
        }
    },
    mounted(){
        axios.get("/products.json")
          .then((response) => {
            this.baseProducts = response.data.products;
            this.getProducts();
          });
    },
    watch: {
       '$route': {
         handler: 'getProducts',
         immediate: true
       }
    },

    methods: {
       getProducts() {
          const category = this.$route.params.category;
          this.products = this.baseProducts.filter(p => (p.type === category || category == "all"));
       },
       showProduct(product) {
          this.product = product;
       },
       hideProduct(product) {
          this.product = null;
       }
    }
}

const About = {
    template: `
        <div>
            <div class="has-text-centered">
                <div class="columns">
                    <div class="column is-size-1 is-three-fifths is-offset-one-fifth">About This Website</div>
                </div>
                <div class="columns">
                    <div class="column is-three-fifths is-offset-one-fifth">
                        <p class="has-text-justified">This website is for educational purpose only. The purpose of the
                        site is to try out different techniques used in scraping specially using selenium. You can visit my
                        <a href="https://doitsimpler.blogspot.com/" target="_blank">blog</a> for more information on how
                        to learn web scraping.
                    </div>
                </div>
            </div>
        </div>
    `
}

const routes = [
    { path: '/', component: Main },
    { path: '/products/:category', component: Products },
    { path: '/about', component: About }
]

const router = new VueRouter({
    routes // short for `routes: routes`
});



var app = new Vue({
    el: '#app',
    router: router,
    mounted() {
    }
});