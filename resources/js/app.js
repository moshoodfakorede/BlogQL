import Vue from 'vue';
import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';

import './bootstrap';
import Post from './pages/Post';
import PostList from './pages/PostList';
import AuthorPostList from './pages/AuthorPostList';
import TopicPostList from './pages/TopicPostList';

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(VueApollo);

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
