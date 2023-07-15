import { useContext } from "react";
import CardCheckout from "./CardCheckout";
import { BsArrowRightShort } from "react-icons/bs";
import InfoContext from "@/context/InfoContext";
import moment from "moment";

export default function ItemDetailCheckout() {
  const { dataCheckout } = useContext(InfoContext);

  const tax = 100;
  const ticket = 1250;

  return (
    <div className="mt-8 max-w-md md:mt-12 z-10 w-full px-6">
      <div className="rounded-3xl bg-white shadow-lg">
        <div className="px-4 py-6 sm:py-10">
          <div className="flow-root">
            <ul className="-my-8">
              <CardCheckout />
            </ul>
          </div>

          <div className="mt-6 border-t border-b py-8 flex justify-between items-center">
            <p className="text-sm font-semibold text-gray-900">
              Data ida:
              <span className="text-gray-400 ml-2">
                {moment(dataCheckout?.dateOrigin).format("DD-MM-YYYY")}
              </span>
            </p>
            <p className="text-sm font-semibold text-gray-900">
              Data volta:
              <span className="text-gray-400 ml-2">
                {moment(dataCheckout?.dateDestiny).format("DD-MM-YYYY")}
              </span>
            </p>
          </div>

          <h3 className="font-bold text-gray-800 text-lg mt-6">Passageiros</h3>
          <div className="flex items-center justify-between">
            <p className="font-medium text-gray-400">Adultos:</p>
            <p className="text-2xl font-semibold text-gray-900">
              {dataCheckout?.adult || 0}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-medium text-gray-400">Crianças:</p>
            <p className="text-2xl font-semibold text-gray-900">
              {dataCheckout?.kids || 0}
            </p>
          </div>

          <div className="mt-6 space-y-3 border-t border-b py-8">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Viagem</p>
              <p className="text-lg font-semibold text-gray-900">
                {" "}
                {(
                  ticket *
                  (Number(dataCheckout?.adult) + Number(dataCheckout?.kids) / 2)
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Taxas</p>
              <p className="text-lg font-semibold text-gray-900">
                {tax.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Total</p>
            <p className="text-2xl font-semibold text-gray-900">
              {(
                ticket *
                  (Number(dataCheckout?.adult) +
                    Number(dataCheckout?.kids) / 2) +
                tax
              ).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              form="checkoutForm"
              className="group inline-flex w-full items-center justify-center rounded-md bg-cyan-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
            >
              Confirmar
              <BsArrowRightShort className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
