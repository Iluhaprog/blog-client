require('dotenv').config();
const {
  sitemapBuilder,
  paramsApplier,
} = require('react-router-sitemap');
const axios = require('axios').default;
const routes = require('./pages/public/sitemap-routes');
const path = require('path');
const fs = require('fs');

axios.get(process.env.SITEMAP_POSTS_LINK)
  .then((response) => {
    const {data} = response;

    const config = {
      '/post/:id': [
        {
          id: Array.from(
            {length: data.total},
            (_, k) => data.data[k].id,
          ),
        },
      ],
      '/posts/:page': [
        {
          page: Array.from(
            {length: Math.ceil(data.total / 10)},
            (_, k) => k + 1,
          ),
        }
      ],
    }

    const paths = paramsApplier(routes, config);

    const hostname = process.env.SITEMAP_HOST;
    const dest = path.resolve('./public', 'sitemap.xml');

    const sitemap = sitemapBuilder(hostname, paths);

    fs.writeFileSync(dest, sitemap.toString());
  });
