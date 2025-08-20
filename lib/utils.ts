import { useEffect, useState } from 'react';

// Function to format currency
export const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`; // Format to two decimal places
};

// Custom hook for fetching data
export const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network response was not ok');
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error }; // Return data, loading state, and error
};

// Function to generate a unique ID
export const generateId = (): string => {
    return 'id-' + Math.random().toString(36).substr(2, 16); // Generate a random ID
};

// Function to debounce input
export const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
        if (timeoutId) clearTimeout(timeoutId); // Clear previous timeout
        timeoutId = setTimeout(() => {
            func(...args); // Call the function after delay
        }, delay);
    };
};

export default { formatCurrency, useFetch, generateId, debounce }; // Default export of utility functions