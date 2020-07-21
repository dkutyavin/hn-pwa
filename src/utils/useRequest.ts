import { useState, useEffect } from "react";
import useSWR from "swr";

export function useRequest<T = any>(url: string) {
  const { data, error } = useSWR<T>(url, fetcher);
  const [status, setStatus] = useState<Status>(() =>
    computeStatus(data, error),
  );

  useEffect(() => {
    setStatus(computeStatus(data, error));
  }, [status, data, error]);

  return {
    status,
    error,
    data,
  };
}

function computeStatus(data: any, error: any): Status {
  if (data) return "success";
  if (error) return "error";
  if (!error && !data) return "fetching";
}

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then(res => res.json());

type Status = "fetching" | "success" | "error";
