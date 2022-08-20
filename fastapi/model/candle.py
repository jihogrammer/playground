from typing import TYPE_CHECKING, List
from dataclasses import dataclass
from datetime import datetime


if TYPE_CHECKING:
    from pandas import DataFrame


@dataclass
class DayCandle:
    code: str
    time: str
    open: float
    high: float
    low: float
    close: float
    volume: float

    @staticmethod
    def from_fdr_dataframe(code: str, df: 'DataFrame') -> List['Candle']:
        return [DayCandle(
            code=code,
            time=time.to_pydatetime().date().isoformat(),
            open=int(values[0]),
            high=int(values[1]),
            low=int(values[2]),
            close=int(values[3]),
            volume=int(values[4])
        ) for time, values in zip(df.index, df.values)]
