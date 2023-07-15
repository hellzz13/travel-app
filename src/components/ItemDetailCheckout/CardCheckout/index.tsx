import InfoContext from "@/context/InfoContext";
import { useContext } from "react";
import { IoIosAirplane } from "react-icons/io";

export default function CardCheckout() {
  const { dataCheckout } = useContext(InfoContext);
  return (
    <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
      <div className="flex justify-between items-center w-full">
        <p className="text-sm font-semibold text-gray-900">
          Origem: {dataCheckout?.origin}
        </p>

        <IoIosAirplane className="h-6 w-6 text-cyan-400" />
        <p className="mx-0 mt-1 mb-0 text-sm font-medium text-gray-400">
          Destino: {dataCheckout?.destiny}
        </p>
      </div>
    </li>
  );
}
