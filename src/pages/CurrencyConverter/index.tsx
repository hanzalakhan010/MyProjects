import { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [rates, setRates] = useState<{ [key: string]: number }>({});
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PKR");
  const [amount, setAmount] = useState<number>(1);
  const [converted, setConverted] = useState<number>(0);

  // Fetch exchange rates
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        const data = await res.json();
        setRates(data.rates);
      } catch (err) {
        console.error("Failed to fetch rates", err);
      }
    };
    fetchRates();
  }, []);

  const convert = () => {
    if (rates[from] && rates[to]) {
      const result = (amount / rates[from]) * rates[to];
      setConverted(result);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow rounded">
      <h1 className="text-xl font-bold mb-4">Currency Converter</h1>

      <div className="space-y-4">
        {/* From */}
        <div className="flex gap-2">
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="border p-2 rounded w-1/2"
          >
            {Object.keys(rates).map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="border p-2 rounded w-1/2"
          />
        </div>

        {/* To */}
        <div className="flex gap-2">
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="border p-2 rounded w-1/2"
          >
            {Object.keys(rates).map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={converted}
            disabled
            className="border p-2 rounded w-1/2 bg-gray-100"
          />
        </div>

        <button
          onClick={convert}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Convert
        </button>
      </div>
    </div>
  );
};

export default CurrencyConverter;
