import { useEffect, useState } from "react";

export function useFetch(
    dependencies: any[],
    url: string | null | undefined,
    params: RequestInit = { method: 'GET', body: undefined },
    onSuccess?: (data: any) => void,
    onError?: (error: string) => void
) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if (!url || !url?.length) { return; }

        setLoading(true);
        setError(() => "");
        fetch(url, {
            method: params.method,
            body: params.body,
            headers: params.headers,
            cache: params.cache,
        })
            .then((data) => data.json())
            .then((data) => {
                setData(() => data);
                if (onSuccess) { onSuccess(data) }
            })
            .catch((error) => {
                setError(() => error.message);
                if (onError) { onError(error.message); }
            })
            .finally(() => setLoading(false));
    }, [...dependencies]);

    return {
        data,
        loading,
        error
    }
}
