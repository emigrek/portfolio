// Browsers give no signal when an iframe is refused, so read the site's own framing headers instead.
export function allowsFraming(headers: Headers, siteHost?: string) {
  const ancestors = headers
    .get("content-security-policy")
    ?.match(/frame-ancestors([^;,]*)/i)?.[1]
    .trim()
    .split(/\s+/);

  // frame-ancestors overrides X-Frame-Options when both are present.
  if (ancestors) {
    return ancestors.some(
      (source) => source === "*" || source === "https:" || (!!siteHost && source.includes(siteHost))
    );
  }

  return !/deny|sameorigin/i.test(headers.get("x-frame-options") ?? "");
}

export async function isEmbeddable(url: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const siteHost = baseUrl ? new URL(baseUrl).host : undefined;

  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
    await res.body?.cancel();
    // ponytail: unreachable or non-2xx (e.g. a bot challenge) says nothing about the real page, so keep the iframe
    return !res.ok || allowsFraming(res.headers, siteHost);
  } catch {
    return true;
  }
}
