const assert = require("node:assert/strict");
const { test } = require("node:test");
const { requestHandler } = require("./server");

function makeResponse() {
  return {
    statusCode: undefined,
    headers: undefined,
    body: undefined,
    writeHead(statusCode, headers) {
      this.statusCode = statusCode;
      this.headers = headers;
    },
    end(body) {
      this.body = body;
    },
  };
}

test("GET / returns the deployment page", () => {
  const response = makeResponse();
  requestHandler({ url: "/" }, response);
  assert.equal(response.statusCode, 200);
  assert.match(response.body, /Deployment successful/);
});

test("GET /health returns an OK status", () => {
  const response = makeResponse();
  requestHandler({ url: "/health" }, response);
  assert.equal(response.statusCode, 200);
  assert.deepEqual(JSON.parse(response.body), { status: "ok" });
});

test("unknown routes return 404", () => {
  const response = makeResponse();
  requestHandler({ url: "/missing" }, response);
  assert.equal(response.statusCode, 404);
});
