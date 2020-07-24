if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"57859e011e2b8bf45e03e98f08b2616a","url":"404.html"},{"revision":"9dc3a288a29db5a5efe97edddd2503ad","url":"b739c6d302c230a146f7.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"57859e011e2b8bf45e03e98f08b2616a","url":"index.html"},{"revision":"c3451b7bd11009f7a8730cc1aae6ae40","url":"precache-manifest.c3451b7bd11009f7a8730cc1aae6ae40.js"},{"revision":"776314042e7d4d1a84310cef9369793c","url":"static/css/14.f4c836b0.chunk.css"},{"revision":"ea4df879eb870ee7510190ab45cd7b02","url":"static/js/0.48b63423.chunk.js"},{"revision":"151d6e2cbeafc9434a1da1a9e272e37b","url":"static/js/1.6dcac3b1.chunk.js"},{"revision":"a8bf7e42a7d848a5cc6606905a5ff2f9","url":"static/js/10.ea0bf2d3.chunk.js"},{"revision":"e35fbd98969385b2dee9601916472273","url":"static/js/11.1c1bf5c9.chunk.js"},{"revision":"e669760a3a0d2e004b47e2317025816f","url":"static/js/12.923a27cb.chunk.js"},{"revision":"44ea4e9dc370516c93cbf1963d0de7e4","url":"static/js/13.2288208a.chunk.js"},{"revision":"5cb1a76ba2fd04fb62a0415171fe5be7","url":"static/js/14.230db33e.chunk.js"},{"revision":"53109b42b3c42301d73ac187e1aa0873","url":"static/js/15.39d4d25c.chunk.js"},{"revision":"e211e04e2acbf6f696551df2ff0ae815","url":"static/js/16.fe951844.chunk.js"},{"revision":"0efe1158608dcc79629a50ecbe7f275a","url":"static/js/17.84e8cb84.chunk.js"},{"revision":"b3f837703f036072acc8e0bd95838470","url":"static/js/18.fefb0870.chunk.js"},{"revision":"4d11ba152472da6db7f4d17fff110332","url":"static/js/19.b2e55746.chunk.js"},{"revision":"447d0838c67e6d123e4ae132593db20c","url":"static/js/2.f2ec6b08.chunk.js"},{"revision":"b07cbbc33efec72dd1c8c58bf522777b","url":"static/js/20.91c8bf34.chunk.js"},{"revision":"49f3392403d1686ebdf389ce4158afa2","url":"static/js/21.2ee5f195.chunk.js"},{"revision":"13a64fbbcb0b14fa8575dc847127016d","url":"static/js/22.c655f49c.chunk.js"},{"revision":"0db4f4e7e9a6ba3a4c5e01d16f5c9f6d","url":"static/js/23.a9e5652c.chunk.js"},{"revision":"b0dd9ba0f93681dc115accf7e8c9e30c","url":"static/js/24.fe125663.chunk.js"},{"revision":"2bb4e447306fa9144a1a347a492b3b50","url":"static/js/25.0bf655e8.chunk.js"},{"revision":"01e3464355183436845fbdf9f8b2ffb8","url":"static/js/26.a71a2741.chunk.js"},{"revision":"e38407d1dc79d7cb88275dd93eb6b574","url":"static/js/27.445d989e.chunk.js"},{"revision":"16f0ba6158e902217918e574664260a0","url":"static/js/28.38364ccd.chunk.js"},{"revision":"9ea9ae78b15a74b6cef763ffbf7351ef","url":"static/js/29.39337658.chunk.js"},{"revision":"ac92cf7a3325e3c944e17218e363a34f","url":"static/js/3.746c98f4.chunk.js"},{"revision":"ed60b2265d3c7858ccc41e64b06428c8","url":"static/js/30.01b8f47d.chunk.js"},{"revision":"a4fdb0ba93cf894d42db64bdd0a15858","url":"static/js/31.bb7a3e89.chunk.js"},{"revision":"f304c7c8784124a80aaeef93cbc0a5b9","url":"static/js/32.9b815896.chunk.js"},{"revision":"a18329be84338c6761724c1dea8697d3","url":"static/js/33.15aa7a35.chunk.js"},{"revision":"f96e4a708b7cadf2618d16e590283953","url":"static/js/34.c868da68.chunk.js"},{"revision":"94dcc3681b9b6f0cdc726699e38a8ff8","url":"static/js/35.e267c4e4.chunk.js"},{"revision":"c24b48c01f1991360a25a7dd260d573a","url":"static/js/36.d3cfdfc4.chunk.js"},{"revision":"22a06850353c27f2b0fa8fc2c4f4e6bd","url":"static/js/37.0c469bf6.chunk.js"},{"revision":"b211c41a5d9701f129f9a56d910ab2e4","url":"static/js/38.39344b4d.chunk.js"},{"revision":"0970c109a00d45444a8d685a08a1e7a5","url":"static/js/4.6e923618.chunk.js"},{"revision":"b194d5237a3bcab0e5f254991b36c333","url":"static/js/7.d3fcfafb.chunk.js"},{"revision":"d45a39194211782c9db67f01838306d1","url":"static/js/8.74e42707.chunk.js"},{"revision":"a6f39db45752646f91fa3a9bb59b177a","url":"static/js/9.69791a9b.chunk.js"},{"revision":"a4331ea00c2e9d3416cff67a8815d6bb","url":"static/js/main.ead8e205.chunk.js"},{"revision":"dcb00900467c729c2a356510875c07f7","url":"static/js/runtime-main.65db9a88.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
