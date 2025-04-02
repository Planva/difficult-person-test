import { create } from 'xmlbuilder2';
import { writeFileSync } from 'fs';

const baseUrl = 'https://www.difficult-person-test.com';

const routes = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    url: '/difficult-person-test-results',
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/difficult-person-test-questions',
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/difficult-person-test-research',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: '/personality-traits-explained',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: '/test-interpretation-guide',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: '/relationship-advice',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/scientific-methodology',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/personality-development',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/frequently-asked-questions',
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    url: '/personality-types',
    changefreq: 'monthly',
    priority: 0.7
  }
];

const sitemap = create({ version: '1.0', encoding: 'UTF-8' })
  .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

routes.forEach(route => {
  sitemap
    .ele('url')
      .ele('loc').txt(`${baseUrl}${route.url}`).up()
      .ele('changefreq').txt(route.changefreq).up()
      .ele('priority').txt(route.priority.toString()).up()
      .ele('lastmod').txt(new Date().toISOString().split('T')[0]);
});

const xml = sitemap.end({ prettyPrint: true });
writeFileSync('public/sitemap.xml', xml);

console.log('Sitemap generated successfully!');