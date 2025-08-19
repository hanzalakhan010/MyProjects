// const CurrencyConverter = () => {
//     function convert() {
//         let rates = JSON.parse(localStorage.getItem('rates') || '')
//         let to = document.getElementById('to').value
//         let from = document.getElementById('from').value
//         let currency = document.getElementById('currency').value
//         let convereted_curr = ((rates['USD'] / rates[from]) * rates[to]) * currency
//         document.getElementById('currency_converted').value = convereted_curr.toFixed(3)
//     }
//     return (<>
//         <h1>Currency Converter</h1>
//         <div id='main'>
//             <div id='input_currency'>
//                 <select id='from'>
//                     <option>Select currency</option>
//                 </select>
//                 <input type="number" id='currency' />
//             </div>
//             <div id='ouput_currency'>
//                 <select id='to'>
//                     <option>Select currency</option>
//                 </select>
//                 <input type="number" id='currency_converted' disabled />
//             </div>
//             <div></div>
//             <button onClick={convert}>Convert</button>
//         </div>
//     </>)

// }


// export default CurrencyConverter;