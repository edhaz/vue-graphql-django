import App from './App.vue'
import { createApolloProvider } from '@vue/apollo-option'
import router from '@/router'
import apolloClient from '@/apollo-client'
import { createApp } from 'vue'

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})

const app = createApp(App).use(router).use(apolloProvider)

app.mount('#app')