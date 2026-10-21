// Run with: node --test utils/isEmbeddable.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { allowsFraming } from "./isEmbeddable.ts";

const headers = (init) => new Headers(init);

test("allowsFraming", () => {
  assert.equal(allowsFraming(headers({})), true);
  assert.equal(allowsFraming(headers({ "x-frame-options": "DENY" })), false);
  assert.equal(allowsFraming(headers({ "x-frame-options": "sameorigin" })), false);
  assert.equal(allowsFraming(headers({ "content-security-policy": "default-src 'self'; frame-ancestors 'none'" })), false);
  assert.equal(allowsFraming(headers({ "content-security-policy": "frame-ancestors 'self'" })), false);
  assert.equal(allowsFraming(headers({ "content-security-policy": "frame-ancestors 'self' https://me.dev" }), "me.dev"), true);
  assert.equal(allowsFraming(headers({ "content-security-policy": "frame-ancestors *", "x-frame-options": "DENY" })), true);
});
