import './App.scss';

import { FormEvent, useState } from 'react';

import { Navigator } from "./components/Navigator";
import { SideBar } from './components/SideBar';
import { ChartSection } from './components/ChartSection';

function App() {

  const [ticker, setTicker] = useState("");

  function submitTicker(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const tickerElement = e.currentTarget.children.namedItem("ticker") as HTMLInputElement;
    setTicker(tickerElement.value);
    tickerElement.value = "";
  }

  return <>
    <Navigator />
    <main>
      <SideBar submitTicker={submitTicker} />
      <ChartSection ticker={ticker} />
    </main>
  </>
}

export default App;
