export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://rutaiglesiaschiloe.cl/sitemap.xml',
    };
}
