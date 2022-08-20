import { useEffect, useRef } from 'react';
import { createChart, IChartApi } from 'lightweight-charts';

import { DayCandle } from '../ChartSection';

export const ChartContainer = ({ candleData }: { candleData: DayCandle[] }) => {
    const chartContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log({ chartContainer: chartContainer.current });
        let chart: IChartApi | null = null;
        if (chartContainer.current && candleData.length) {
            const width = chartContainer.current.scrollWidth;
            const height = width * 0.7;
            chart = createChart(chartContainer.current, { width, height });
            const series = chart.addCandlestickSeries();
            series.setData(candleData);
            chart.timeScale().fitContent();
        }

        return () => chart?.remove();
    }, [candleData]);

    return <>
        {
            candleData.length
                ? <div ref={chartContainer}></div>
                : <h5>종목 검색 ㄱㄱ</h5>
        }
    </>
}