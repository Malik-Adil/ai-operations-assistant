const defaultHeaders: HeadersInit = {
  "Content-Type": "application/json",
};

export async function apiPost<T = unknown>(
  url: string,
  data: Record<string, unknown>
): Promise<Response> {
  return fetch(url, {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(data),
  });
}

export async function apiGet(url: string): Promise<Response> {
  return fetch(url, {
    method: "GET",
    headers: defaultHeaders,
  });
}

export async function apiDelete(url: string): Promise<Response> {
  return fetch(url, {
    method: "DELETE",
    headers: defaultHeaders,
  });
}
