import { useState, useEffect } from 'react';
import { average } from 'color.js';
import chroma from 'chroma-js';

function useImageAverageColor(url: string) {
    const [color, setColor] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        average(url, { format: 'hex' }).then(color => {
            let brighter = chroma(color as string).brighten(0.2).hex();
            setColor(brighter as string);
            setLoading(false);
        }).catch(err => {
            setError(err);
            setLoading(false);
        });
    }, [url, error]);

    return [color, loading, error];
}

export default useImageAverageColor;