from typing import List
from datetime import datetime
from dateutil.relativedelta import relativedelta

import FinanceDataReader as fdr

from model.candle import DayCandle


class StockService:
    def fetch_day_candle_one_year(self, code: str) -> List[DayCandle]:
        end_date = datetime.now()
        start_date = end_date - relativedelta(years=1)
        df = fdr.DataReader(code, self._parse_isoformat(start_date), self._parse_isoformat(end_date))
        return DayCandle.from_fdr_dataframe(code, df)

    def _parse_isoformat(self, target: datetime) -> str:
        return target.isoformat().split("T")[0]

service = StockService()
