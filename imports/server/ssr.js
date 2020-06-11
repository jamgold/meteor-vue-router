if (Object.keys(Package).indexOf('akryum:vue-ssr')>=0) {
  import createApp from '/imports/app';

  console.log('using SSR');
  import { VueSSR } from 'meteor/akryum:vue-ssr';

  VueSSR.outlet = 'app';

  VueSSR.createApp = function (context) {
    // context
    //  {
    //    url: Url {
    //      protocol: null,
    //      slashes: null,
    //      auth: null,
    //      host: null,
    //      port: null,
    //      hostname: null,
    //      hash: null,
    //      search: null,
    //      query: [Object: null prototype] {},
    //      pathname: '/notes-akryum',
    //      path: '/notes-akryum',
    //      href: '/notes-akryum'
    //    }
    //  }
    // console.log(context.query);

    const { app, router } = createApp({ssr:true});
    // set router's location
    router.push(context.url).catch(err => {});

    context.rendered = () => {
      // Inject some arbitrary JS
      context.js = `console.log("SSR")`;
    }

    return app
  }
}
