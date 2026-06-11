export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.prajalkulkarni.com") {
      url.hostname = "prajalkulkarni.com";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
