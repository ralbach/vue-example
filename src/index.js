import Vue from 'vue';
import App from './app/App';

import todo from './app/todo'

new Vue({
    el: '#app',
    render: h => h(App),
    components: {
        'todo': todo, 
    }
});

Vue.component(todo)