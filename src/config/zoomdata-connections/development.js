export const server = {
    credentials: {
        access_token: ''
    },
    application: {
        secure: false,
        host: 'localhost',
        port: 8080,
        path: '/zoomdata'
    },
    oauthOptions: {
        client_id: "bmh0c2FfY2xpZW50MTQ1NzYzOTkxMjA0MDlmMDM1MDY1LTljMTYtNGIxZC1hNzQwLWJjNjQyZDJlOTNmYg==",
        redirect_uri: "http://localhost:3000/index.html",
        auth_uri: "http://localhost:8080/zoomdata/oauth/authorize",
        scope: ['read']
    }
};