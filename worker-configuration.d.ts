/// <reference types="@cloudflare/workers-types" />

/**
 * Cloudflare Workers Environment Type Definitions
 * Declares the bindings available in the worker environment
 */

interface Env {
  DB: D1Database;
  R2_BUCKET: R2Bucket;
}
