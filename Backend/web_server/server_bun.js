Bun.serve({
  fetch(request) {
    const url = new URL(request.url, `http://${request.headers.get("host")}`);
    if (url.pathname === "/") {
      return new Response("Hello coffee", { status: 200 });
    } else if (url.pathname === "/ice-tea") {
      return new Response("Ice tea is a good option", { status: 200 });
    } else {
      return new Response("404 not found", { status: 404 });
    }
  },
  port: 3000,
  hostname: "127.0.0.1",
});
