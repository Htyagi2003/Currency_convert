import { useEffect, useState } from "react";

interface CurrencyData {
    [key: string]: number; // Adjust based on the API's structure
}

function useCurrencyInfo(currency: string): CurrencyData | null {
    const [data, setData] = useState<CurrencyData | null>(null);

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                setData(result[currency]);
            } catch (error) {
                console.error("Error fetching currency data:", error);
                setData(null);
            }
        };

        fetchCurrencyData();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
