const Main = {
    template: '<div>Main Info</div>'
}
const Simple = { 
    template: `
        <div id="d">
            Outside P
            <p id="p">This is a simple paragraph</p>
        </div>
    ` 
}
const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/', component: Main },
    { path: '/simple', component: Simple },
    { path: '/bar', component: Bar }
]

const router = new VueRouter({
    routes // short for `routes: routes`
});

var app = new Vue({
    el: '#app',
    router: router,
    mounted() {
        var burger = document.querySelector(".burger");
        var menu = document.querySelector("#" + burger.dataset.target);
        burger.addEventListener("click", function() {
          burger.classList.toggle("is-active");
          menu.classList.toggle("is-active");
        });
      }
});