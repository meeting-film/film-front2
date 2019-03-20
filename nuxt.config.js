module.exports = {
    // plugins: ['~plugins/vue-awesome-swiper'],
    /*
     ** Headers of the page
     */
    head: {
        title: 'meeting_film_front',
        meta: [{
            charset: 'utf-8'
        },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Meeting_film前端应用程序'
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },
    css: [
        '@/assets/css/global.css'
    ],
    modules: [
        'nuxt-sass-resources-loader',
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ],
    sassResources: ['@/assets/css/variable.scss'],
    /*
     ** Customize the progress bar color
     */
    loading: {
        color: '#3B8070'
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, {
            isDev,
            isClient
        }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    plugins: [
        '~plugins/config',
        '~plugins/axios',
        '~plugins/validate'
    ],
    env: {
        // BASE_URL: 'https://www.easy-mock.com/mock/5b52fdd00a35bc5c5ece0613/film' || 'http://localhost:3000',
        HOST: 'www.meetingshop.cn',
        PORT: '80',
        BASE_URL: 'http://www.meetingshop.cn'
        // BASE_URL: 'http://116.196.88.248'
        // BASE_URL: 'http://120.27.10.5:80'
    },
    axios: {
        proxy: true
    },
    proxy: {
        '/api': 'http://www.meetingshop.cn:80'
    }
};

