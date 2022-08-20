import { useEffect, useState } from "react";
import { ChartContainer } from "./chart/ChartContainer";

export interface DayCandle {
    code: string;
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}

export const ChartSection = ({ ticker }: { ticker: string }) => {
    const [candleData, setCandleData] = useState<DayCandle[]>([]);

    useEffect(() => {
        if (!ticker) return;
        fetch(`https://jihogrammer-playground.run.goorm.io/stock?code=${ticker}`)
            .then(response => response.json())
            .then(payload => setCandleData(payload))
    }, [ticker]);

    return <section>
        <h1>Chart Section</h1>
        <h3>{ticker}</h3>
        <ChartContainer candleData={candleData} />
    </section>;
}