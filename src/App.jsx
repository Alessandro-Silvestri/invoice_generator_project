import "./App.css";

function App() {
  return (
    <div className="container mx-auto p-5">
      <p className="text-3xl font-bold text-white mb-5">INVOICE MAKER</p>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <textarea
            className="block md:w-full w-80 p-4 text-base text-white bg-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 resize-y"
            rows="4"
            placeholder="Invoice sender"
          ></textarea>
        </div>
        <div className="flex-1 hidden md:block"></div>
        <div className="flex-1">
          <div className="flex flex-col">
            <div className="flex-1">
              <p className="text-3xl font-bold text-white md:mt-0 mt-5">INVOICE</p>
            </div>
            <div className="flex-1">
              <input
                id="invoiceNumber"
                type="number"
                name="invoiceNumber"
                className="block w-full rounded-sm grow border border-white bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-5">
        <div className="flex-1 text-white">
          <div className="flex flex-col">
            <div className="flex-1">Bill to:</div>
            <div className="flex-1">
              <textarea
                className="block md:w-full w-80 p-4 text-base text-white bg-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 resize-y"
                rows="4"
                placeholder="Invoice sender"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex-1 text-white"></div>
        <div className="flex-1 text-white">
          <div className="flex flex-col">
            <div className="md:mt-0 mt-5 flex-1">Date</div>
            <div className="flex-1 items-center">
              <input
                type="date"
                id="invoice-date"
                name="invoice-date"
                className="block w-full rounded-lg border border-gray-300 bg-gray-800 p-2.5 text-base text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 appearance-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden lg:flex flex-wrap gap-2 mt-7 bg-emerald-800 text-white rounded-sm"
      >
        <div className="w-full lg:w-[60%] flex-none flex items-center">
          <p className="ml-2">Item</p>
        </div>
        <div className="lg:w-[12%] sm:w-32 flex-1 flex items-center">
          <p>Quantity</p>
        </div>

        <div className="lg:w-[12%] sm:w-32 flex-1 flex items-center">
          <p className="ml-7">Rate</p>
        </div>
        <div className="lg:w-[12%] sm:w-32 flex-1 flex items-center p-1">
          <p>Amount</p>
        </div>
        <div
          className="lg:w-[4%] sm:w-32 flex-1 flex items-center text-white"
        ></div>
      </div>
      <div className="lg:mt-3 mt-10 flex flex-wrap gap-2">
        <div className="w-full lg:w-[60%] flex-none flex items-center">
          <input
            id="description"
            type="text"
            name="description"
            placeholder="Insert description"
            className="block w-full rounded-sm grow border border-white bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
          />
        </div>
        <div className="lg:w-[12%] sm:w-32 flex-1 flex items-center">
          <input
            id="quantity"
            type="number"
            name="quantity"
            className="block w-full rounded-sm grow border border-white bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white focus:outline-none sm:text-sm/6"
          />
        </div>

        <div className="lg:w-[12%] sm:w-32 flex-1 flex items-center">
          <p className="text-white mr-2 ml-3">£</p>
          <input
            id="rate"
            type="text"
            name="rate"
            placeholder="£"
            className="block w-full rounded-sm grow border border-white bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
          />
        </div>
        <div className="lg:w-[12%] sm:w-32 flex-1 flex items-center p-1">
          <p className="text-white">Amount</p>
        </div>
        <div className="lg:w-[4%] sm:w-32 flex-1 flex items-center text-white">
          X
        </div>
      </div>
      <div className="lg:mt-3 mt-10 flex flex-wrap gap-2">
        <div className="w-full lg:w-[60%] flex-none flex items-center">
          <input
            id="description"
            type="text"
            name="description"
            placeholder="Insert description"
            className="block w-full rounded-sm grow border border-white bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
          />
        </div>
        <div className="lg:w-[12%] sm:w-32 flex-1 flex items-center">
          <input
            id="quantity"
            type="number"
            name="quantity"
            className="block w-full rounded-sm grow border border-white bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white focus:outline-none sm:text-sm/6"
          />
        </div>

        <div className="lg:w-[12%] sm:w-32 flex-1 flex items-center">
          <p className="text-white mr-2 ml-3">£</p>
          <input
            id="rate"
            type="text"
            name="rate"
            placeholder="£"
            className="block w-full rounded-sm grow border border-white bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
          />
        </div>
        <div className="lg:w-[12%] sm:w-32 flex-1 flex items-center p-1">
          <p className="text-white">Amount</p>
        </div>
        <div className="lg:w-[4%] sm:w-32 flex-1 flex items-center text-white">
          X
        </div>
      </div>
      <div className="lg:mt-3 mt-10 flex flex-wrap gap-2">
        <div className="w-full lg:w-[60%] flex-none flex items-center">
          <input
            id="description"
            type="text"
            name="description"
            placeholder="Insert description"
            className="block w-full rounded-sm grow border border-white bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
          />
        </div>
        <div className="lg:w-[12%] sm:w-32 flex-1 flex items-center">
          <input
            id="quantity"
            type="number"
            name="quantity"
            className="block w-full rounded-sm grow border border-white bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white focus:outline-none sm:text-sm/6"
          />
        </div>

        <div className="lg:w-[12%] sm:w-32 flex-1 flex items-center">
          <p className="text-white mr-2 ml-3">£</p>
          <input
            id="rate"
            type="text"
            name="rate"
            placeholder="£"
            className="block w-full rounded-sm grow border border-white bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
          />
        </div>
        <div className="lg:w-[12%] sm:w-32 flex-1 flex items-center p-1">
          <p className="text-white">Amount</p>
        </div>
        <div className="lg:w-[4%] sm:w-32 flex-1 flex items-center text-white">
          X
        </div>
      </div>
      <div className="lg:mt-3 mt-10 flex flex-wrap gap-2">
        <div className="w-full lg:w-[60%] flex-none flex items-center">
          <input
            id="description"
            type="text"
            name="description"
            placeholder="Insert description"
            className="block w-full rounded-sm grow border border-white bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
          />
        </div>
        <div className="lg:w-[12%] sm:w-32 flex-1 flex items-center">
          <input
            id="quantity"
            type="number"
            name="quantity"
            className="block w-full rounded-sm grow border border-white bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white focus:outline-none sm:text-sm/6"
          />
        </div>

        <div className="lg:w-[12%] sm:w-32 flex-1 flex items-center">
          <p className="text-white mr-2 ml-3">£</p>
          <input
            id="rate"
            type="text"
            name="rate"
            placeholder="£"
            className="block w-full rounded-sm grow border border-white bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
          />
        </div>
        <div className="lg:w-[12%] sm:w-32 flex-1 flex items-center p-1">
          <p className="text-white">Amount</p>
        </div>
        <div className="lg:w-[4%] sm:w-32 flex-1 flex items-center text-white">
          X
        </div>
      </div>
      <button
        className="px-6 py-2 mt-5 bg-indigo-600 text-white font-semibold rounded-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-150 ease-in-out cursor-pointer"
      >
        + Line Item
      </button>

      <div className="flex flex-col lg:flex-row mt-20 mb-20 text-white">
        <div className="flex-1">
          <div className="flex-col">
            <div className="flex-1">Notes</div>
            <div className="flex-1">
              <textarea
                className="block md:w-full w-80 p-4 text-base text-white bg-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 resize-y"
                rows="4"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="hidden lg:block flex-1"></div>
        <div className="flex-1">
          <div className="flex-col">
            <div className="flex-1">
              <div className="flex justify-center items-center mt-5">
                <div className="flex-1">Tax:</div>
                <div className="flex-1">
                  <input
                    id="tax"
                    type="number"
                    name="tax"
                    className="block w-full rounded-sm grow border border-white bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                  />
                </div>
                <div className="flex-1"><span className="ml-3">%</span></div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex mt-5">
                <div className="flex-1">Balance Due:</div>
                <div className="flex-1">£ 00,00.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
