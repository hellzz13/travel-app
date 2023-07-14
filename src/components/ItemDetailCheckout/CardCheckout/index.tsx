export default function CardCheckout() {
  return (
    <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
      <div className="shrink-0 relative">
        <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
          1
        </span>
        <img
          className="h-24 w-24 max-w-full rounded-lg object-cover"
          src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60"
          alt=""
        />
      </div>

      <div className="flex flex-1 justify-between">
        <div className="pr-8 sm:pr-5">
          <p className="text-base font-semibold text-gray-900">
            Origem: São Paulo
          </p>
          <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
            Destino: Nova York
          </p>
        </div>
      </div>
    </li>
  );
}
