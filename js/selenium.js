Vue.component('main-nav-bar', {
  template: `<nav id="navMenuId" class="navbar is-dark" role="navigation" aria-label="main navigation">
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

        <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
                <router-link to="/" class="navbar-item">Home</router-link>
                <div class="navbar-item has-dropdown is-hoverable">
                    <router-link to="/forms" class="navbar-link">Forms</router-link>
                    <div class="navbar-dropdown is-boxed">
                        <router-link to="/forms" class="navbar-item">Submit Form</router-link>
                    </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                    <router-link to="/staticdetails" class="navbar-link">Details</router-link>
                    <div class="navbar-dropdown is-boxed">
                        <router-link to="/staticdetails" class="navbar-item">Static Details</router-link>
                    </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                    <router-link to="/divtags" class="navbar-link">Tags</router-link>
                    <div class="navbar-dropdown is-boxed">
                        <router-link to="/divtags" class="navbar-item">Div Tags</router-link>
                    </div>
                </div>
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
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Selenium Tutorials
                </h1>
                <h2 class="subtitle">
                    Selenium sample pages for testing functionalities.
                </h2>
            </div>
        </div>
    </section>
    `
}

const FormSubmitPage = {
    template: `
        <div>
            <div class="column is-one-third is-offset-one-third">
                <form action="/seleniumindex#/staticdetails">
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Username</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-success" type="text" placeholder="Text input" value="myusername">
                            <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                            <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                        </div>
                        <p class="help is-success">This username is available</p>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-danger" type="email" placeholder="Email input" value="hello@myhello.com">
                            <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                            <span class="icon is-small is-right">
                      <i class="fas fa-exclamation-triangle"></i>
                    </span>
                        </div>
                        <p class="help is-danger">This email is invalid</p>
                    </div>

                    <div class="field">
                        <label class="label">Status</label>
                        <div class="control">
                            <div class="select">
                                <select>
                                    <option>Select Status</option>
                                    <option>Single</option>
                                    <option>Married</option>
                                    <option>Divorced</option>
                                    <option>Widowed</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Gender</label>
                        <div class="control">
                            <label class="radio">
                                <input type="radio" name="question">
                                Male
                            </label>
                            <label class="radio">
                                <input type="radio" name="question">
                                Female
                            </label>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Comments</label>
                        <div class="control">
                            <textarea class="textarea" placeholder="Textarea">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna turpis, pulvinar sit amet auctor rhoncus, scelerisque nec magna. Sed nulla quam, molestie viverra luctus vel, dictum a est. Sed consectetur, lacus et viverra facilisis, magna mi accumsan leo, in laoreet augue arcu sit amet nulla. Sed viverra scelerisque lorem. Curabitur feugiat dui nec augue dignissim dignissim. Morbi condimentum, tellus auctor posuere aliquam, arcu mi vulputate dolor, id egestas erat enim vitae nunc. Proin auctor mi eget rutrum eleifend. Quisque a congue diam. Phasellus pulvinar efficitur aliquet. Sed sit amet nisi tortor. Sed fringilla dui mi, aliquet rutrum eros posuere in. Aenean vitae gravida sapien. Maecenas semper laoreet nisi et vulputate. Nam in lectus gravida, rhoncus felis nec, porttitor diam. Morbi at mauris at justo gravida faucibus. Phasellus viverra risus enim, non consectetur elit consequat sed.
                            </textarea>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                                <input type="checkbox"> Want to receive email?
                            </label>
                        </div>
                    </div>

                    <div class="field is-grouped">
                        <div class="control">
                            <input class="button" type="submit" value="Submit input">
                        </div>
                        <div class="control">
                            <button class="button is-link is-light">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    `
}

const StaticDetails = {
    template: `
        <div>
            <div>
                <div class="columns has-text-centered">
                    <div class="column is-size-1 is-one-third is-offset-one-third">Static Details Only</div>
                </div>
                <div class="columns">
                    <div class="column is-one-third is-offset-one-third">
                        <div class="columns">
                            <div class="column is-one-third">Name:</div>
                            <div class="column">Your Name</div>
                        </div>
                        <div class="columns">
                            <div class="column is-one-third">Username:</div>
                            <div class="column">yourUserName</div>
                        </div>
                        <div class="columns">
                            <div class="column is-one-third">Email:</div>
                            <div class="column">youremail@mailserver.com</div>
                        </div>
                        <div class="columns">
                            <div class="column is-one-third">Gender:</div>
                            <div class="column">Female</div>
                        </div>
                        <div class="columns">
                            <div class="column is-one-third">Status:</div>
                            <div class="column">Single</div>
                        </div>
                        <div class="columns">
                            <div class="column is-one-third">Comments:</div>
                            <div class="column">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna turpis, pulvinar sit amet auctor rhoncus, scelerisque nec magna. Sed nulla quam, molestie viverra luctus vel, dictum a est. Sed consectetur, lacus et viverra facilisis, magna mi accumsan leo, in laoreet augue arcu sit amet nulla. Sed viverra scelerisque lorem. Curabitur feugiat dui nec augue dignissim dignissim. Morbi condimentum, tellus auctor posuere aliquam, arcu mi vulputate dolor, id egestas erat enim vitae nunc. Proin auctor mi eget rutrum eleifend. Quisque a congue diam. Phasellus pulvinar efficitur aliquet. Sed sit amet nisi tortor. Sed fringilla dui mi, aliquet rutrum eros posuere in. Aenean vitae gravida sapien. Maecenas semper laoreet nisi et vulputate. Nam in lectus gravida, rhoncus felis nec, porttitor diam. Morbi at mauris at justo gravida faucibus. Phasellus viverra risus enim, non consectetur elit consequat sed. </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    `
}

const DivTags = {
    template: `
        <div id="hiddenElements">
            <div style="display: none;">This is a hidden element</div>
            <div style="width: 0px;height: 0px;"></div>
            <div>Visible div</div>
        </div>
        <div id="textExpectation">
            <div>Expected Text</div>
            <div><input type="text" value="This is an input"></div>
        </div>
    `
}

const About = {
    template: `
        <div>
            <div class="has-text-centered">
                <div class="columns">
                    <div class="column is-size-1 is-three-fifths is-offset-one-fifth">Details </div>
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
    { path: '/forms', component: FormSubmitPage },
    { path: '/staticdetails', component: StaticDetails },
    { path: '/divtags', component: DivTags },
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