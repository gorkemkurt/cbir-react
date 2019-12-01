import proxy from 'http-proxy-middleware';

export default function (app) {
    app.use(proxy('/image_search', { target: 'http://localhost:8000/' }));
}