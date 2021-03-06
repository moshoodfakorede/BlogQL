import Vue from 'vue';
import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';
import moment from 'moment';

import './bootstrap';
import Post from './pages/Post';
import PostList from './pages/PostList';
import AuthorPostList from './pages/AuthorPostList';
import TopicPostList from './pages/TopicPostList';
import NotFound from './pages/NotFound';

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(VueApollo);

Vue.filter("timeAgo", value => moment(value).fromNow());
Vue.filter("longDate", value => moment(value).format('MMMM Do YYYY'));

const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: 'http://127.0.0.1:8000/graphql'
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

const routes = [
    { path: '/', name: 'index', component: PostList},
    { path: '/post/:id', name: 'post', component: Post},
    { path: '/topics/:slug', name: 'topic', component: TopicPostList},
    { path: '/authors/:id', name: 'author', component: AuthorPostList},
    { path: '*', name: '404', component: NotFound},
]

const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    el: '#app',
    apolloProvider,
    router
});
