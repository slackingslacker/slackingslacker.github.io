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
                    <router-link to="/seleniumwait" class="navbar-link">Tags</router-link>
                    <div class="navbar-dropdown is-boxed">
                        <router-link to="/seleniumwait" class="navbar-item">Selenium Wait</router-link>
                        <router-link to="/seleniumlocator" class="navbar-item">Selenium Locators</router-link>
                        <router-link to="/seleniumlocators" class="navbar-item">Selenium Multiple Locators</router-link>
                        <router-link to="/seleniumselectors" class="navbar-item">Selenium Selectors</router-link>
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

const WaitSelenium = {
    template: `
        <div class="container">
    <div class="columns is-multiline">
        <div class="column is-one-quarter">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Wait For Visibility
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <div id="hiddenElements">
                            <div style="display: none;">This is a hidden element</div>
                            <div style="width: 0px;height: 0px;"></div>
                            <div>Visible div</div>
                        </div>
                    </div>
                </div>
                <footer class="card-footer">
                    &nbsp;
                </footer>
            </div>
        </div>
        <div class="column is-one-quarter">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Wait For Text Values
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <div id="textExpectation">
                            <div>Expected Text</div>
                            <div><input type="text" value="This is an input"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-one-quarter">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Wait For Alert
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <div id="alertExpectation">
                            <div>
                                <button onclick="alert('There is an alert')">Show Alert</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-one-quarter">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Wait For Selected/Selection
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <div id="elementSelection">
                            <div>
                                <input type="checkbox" name="forSelected" value="Selected" checked/> Selected Checkbox <br/>
                                <input type="checkbox" name="notSelected" value="Not Selected"/> Not Selected Checkbox <br/>
                                <select name="fruitSelection">
                                    <option value="orange">Orange</option>
                                    <option value="apple" selected>Apple</option>
                                    <option value="pomelo">Pomelo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-one-quarter">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Wait For Selected/Selection
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <div id="elementSelected">
                            <div>
                                <input type="radio" name="forSelectedRadio" value="Selected" checked/> Selected Radio <br/>
                                <input type="radio" name="notSelectedRadio" value="Not Selected"/> Not Selected Radio

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-one-quarter">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Wait For Clickable
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <div id="elementClickable">
                            <div>
                                <button id="clickableBtn">Clickable</button>
                                <button id="unclickableBtn" disabled="true">Disabled button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-one-quarter">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Wait For Frame
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <div id="elementFrame">
                           <iframe src="simple.html"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-one-quarter">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Wait For Window
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <div id="elementWindow">
                           <a href="simple.html" target="blank">Open Window</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-one-quarter">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Wait For Window
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <div id="elementStateless">
                           <a href="simple.html">Go to URL</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
}

const Locators = {
    template: `
        <div>
            <div class="has-text-centered">
                <div class="columns">
                    <div class="column is-size-3 is-three-fifths is-offset-one-fifth">Locators And Find By Single Element</div>
                </div>
                <div class="columns">
                    <div class="column is-three-fifths is-offset-one-fifth">
                        <div id="locatorId">This is for locator ID</div>
                        <div id="locatorCSSSelector">This is for locator CSS SELECTOR</div>
                        <div><b>This is for locator TAG</b></div>
                        <div class="is-medium"><b>This is for locator CLASS NAME</b></div>
                        <div><input name="locatorName" value="This is for locator NAME"></div>
                        <div><i>This is for locator XPATH</i></div>
                        <div><a href="#">This is for locator LINK TEXT</a></div>
                        <div><a href="#">This is for locator PARTIAL LINK TEXT</a></div>
                    </div>
                </div>
            </div>
        </div>
    `
}

const MultipleLocators = {
    template: `
        <div>
            <div class="has-text-centered">
                <div class="columns">
                    <div class="column is-size-3 is-three-fifths is-offset-one-fifth">Multiple Elements </div>
                </div>
                <div class="columns">
                    <div class="column is-one-third">
                        <div id="locatorId">This is for locator ID 1</div>
                        <div id="locatorCSSSelector">This is for locator CSS SELECTOR 1</div>
                        <div><strong>This is for locator TAG 1</strong></div>
                        <div class="is-medium"><b>This is for locator CLASS NAME 1</b></div>
                        <div><input name="locatorName" value="This is for locator NAME 1"></div>
                        <div><i>This is for locator XPATH 1</i></div>
                        <div><a href="#">This is for locator LINK TEXT</a></div>
                        <div><a href="#">This is for locator PARTIAL LINK TEXT 1</a></div>
                    </div>
                    <div class="column is-one-third">
                        <div id="locatorId">This is for locator ID 2</div>
                        <div id="locatorCSSSelector">This is for locator CSS SELECTOR 2</div>
                        <div><strong>This is for locator TAG 2</strong></div>
                        <div class="is-medium"><b>This is for locator CLASS NAME 2</b></div>
                        <div><input name="locatorName" value="This is for locator NAME 2"></div>
                        <div><i>This is for locator XPATH 2</i></div>
                        <div><a href="#">This is for locator LINK TEXT</a></div>
                        <div><a href="#">This is for locator PARTIAL LINK TEXT 2</a></div>
                    </div>
                    <div class="column is-one-third">
                        <div id="locatorId">This is for locator ID 3</div>
                        <div id="locatorCSSSelector">This is for locator CSS SELECTOR 3</div>
                        <div><strong>This is for locator TAG 3</strong></div>
                        <div class="is-medium"><b>This is for locator CLASS NAME 3</b></div>
                        <div><input name="locatorName" value="This is for locator NAME 3"></div>
                        <div><i>This is for locator XPATH 3</i></div>
                        <div><a href="#">This is for locator LINK TEXT</a></div>
                        <div><a href="#">This is for locator PARTIAL LINK TEXT 3</a></div>
                    </div>
                </div>
            </div>
        </div>
    `
}

const Selectors = {
    template: `
        <div>
            <div class="has-text-centered">
                <div class="columns">
                    <div class="column is-size-3 is-three-fifths is-offset-one-fifth">CSS Selectors</div>
                </div>
                <div class="columns is-multiline">
                    <div class="column is-one-third" id="firstDiv">
                        <div class="has-background-primary">Search by Single CSS Class</div>
                        <div class="has-background-info has-text-link">Search by Multiple CSS Classes</div>
                        <div class="has-background-light"><div class="has-text-dark">Search by Parent Child CSS Class Names</div></div>
                        <div id="elementId">Search by Element ID</div>
                    </div>
                    <div class="column is-one-third" id="secondDiv">
                        <div><i>Search </><i>All </i><i>i </i><i>tag</i></div>
                        <div><span class="has-text-link">Search element with class name</span></div>
                        <div id="strongId"><strong>Search Strong tag</strong><bold>and bold tag</bold></div>
                        <div><p>Search p inside a div tag</p></div>
                        <div><i>Search span after </i><span>i tag</span></div>
                        <div><span>Search span before </span><i>i tag</i></div>
                    </div>
                    <div class="column is-one-third" id="thirdDiv">
                        <div><a href="#" target="_self">Search by target attribute</a></div>
                        <div><input type="text" value="Search by Value Attribute"></div>
                        <div><input type="text" value="Search by Value Attribute Containing THIS word"></div>
                        <div><span data-info="starting">Starting Attribute </span><span data-info="started">Started Attribute</span></div>
                        <div><span class="has-background-secondary">Search by attribute class starts with</span></div>
                        <div><span class="has-text-link">Search by attribute ends with</span></div>
                        <div><span class="has-background-info has-text-link">Search by attribute contains word</span></div>
                    </div>
                </div>
            </div>
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
    { path: '/seleniumwait', component: WaitSelenium },
    { path: '/seleniumlocator', component: Locators },
    { path: '/seleniumlocators', component: MultipleLocators },
    { path: '/seleniumselectors', component: Selectors },
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