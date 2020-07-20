import { useState, useEffect } from "react";
import useSWR from "swr";

export function useRequest<T = any>(url: string) {
  const [status, setStatus] = useState<"fetching" | "success" | "error">(
    "fetching",
  );
  const { data, error } = useSWR<T>(url, fetcher);

  useEffect(() => {
    if (data) setStatus("success");
    if (error) setStatus("error");
    if (!error && !data) setStatus("fetching");
  }, [status, data, error]);

  return {
    status,
    error,
    data,
  };
}

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then(res => res.json());
