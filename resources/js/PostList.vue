<template>
    <div>
        <h1>PostList</h1>
        <hr>
        <div v-if="$apollo.loading">
            <h3>Loading data...</h3>
        </div>
        <div v-else>
            <div v-for="post in posts" :key="post.id">
                {{ post.title }}
            </div>
        </div>

    </div>
</template>

<script>
import gql from 'graphql-tag';
export default {
    apollo: {
        posts: gql`
        query {
            posts {
                id
                title
            }
        }`
    }
}
</script>
