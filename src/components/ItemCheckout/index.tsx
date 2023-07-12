import CardCheckout from "./CardCheckout";

export default function ItemCheckout() {
  return (
    <div className="mt-8 max-w-md md:mt-12 z-10 w-full px-6">
      <div className="rounded-3xl bg-white shadow-lg">
        <div className="px-4 py-6 sm:py-10">
          <div className="flow-root">
            <ul className="-my-8">
              <CardCheckout />
            </ul>
          </div>

          {/* <hr className="mx-0 mt-6 mb-0 h-0 border-r-0 border-b-0 border-l-0 border-t border-solid border-gray-300" /> */}

          <div className="mt-6 space-y-3 border-t border-b py-8">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Total</p>
              <p className="text-lg font-semibold text-gray-900">$2399.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Taxas</p>
              <p className="text-lg font-semibold text-gray-900">$8.00</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Total</p>
            <p className="text-2xl font-semibold text-gray-900">
              <span className="text-xs font-normal text-gray-400">USD</span>{" "}
              2499.00
            </p>
          </div>

          <div className="mt-6 text-center">
            <button
              type="button"
              className="group inline-flex w-full items-center justify-center rounded-md bg-cyan-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
            >
              Confirmar pagamento
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}