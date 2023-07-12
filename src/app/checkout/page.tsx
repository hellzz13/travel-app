"use client";
import InputBase from "@/components/Inputs/InputBase";
import ItemDetailCheckout from "@/components/ItemDetailCheckout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BiSolidChevronLeft } from "react-icons/bi";

const Checkout = () => {
  const { back } = useRouter();

  const imgBg = "/tom-barrett-M0AWNxnLaMw-unsplash.jpg";

  return (
    <div className="relative mx-auto w-full bg-white">
      <div className="grid min-h-screen grid-cols-10">
        <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
          <div className="mx-auto w-full max-w-lg">
            <button
              className="h-8 flex items-center justify-between cursor-pointer mb-12 hover:text-slate-600 hover:bg-gray-50 rounded-lg px-2"
              onClick={back}
            >
              <BiSolidChevronLeft className="h-6 w-6 cursor-pointer" />
              <p className="font-semibold text-base mr-2">Voltar</p>
            </button>

            <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
              Checkout
              <span className="mt-2 block h-1 w-10 bg-cyan-500 sm:w-20"></span>
            </h1>
            <form action="" className="mt-10 flex flex-col space-y-4">
              <div className="grid grid-cols-12 gap-3">
                <h2 className="text-base font-medium text-gray-700 sm:text-lg col-span-full">
                  Dados do passageiro principal
                </h2>
                <div className="col-span-full md:col-span-6">
                  <InputBase
                    title="Nome"
                    name="name"
                    placeholder="Nome do passageiro principal"
                  />
                </div>
                <div className="col-span-full md:col-span-6">
                  <InputBase
                    title="E-mail"
                    name="email"
                    placeholder="E-mail do passageiro principal"
                  />
                </div>
              </div>
              <div className=" border-b border-gray-900/10 pb-6" />
              <h3 className="text-base font-medium text-gray-700 sm:text-lg">
                Dados de pagamento
              </h3>
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-gray-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john.doe@mail.com"
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="card-number"
                  className="text-xs font-semibold text-gray-500"
                >
                  Card number
                </label>
                <input
                  type="text"
                  id="card-number"
                  name="card-number"
                  placeholder="1234-5678-XXXX-XXXX"
                  className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                />
                {/* imagem do cartão de crédito */}
                {/* <img
                  src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                  alt=""
                  className="absolute bottom-3 right-3 max-h-4"
                /> */}

                {/* imagem do cartão de crédito */}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500">
                  Expiration date
                </p>
                <div className="mr-6 flex flex-wrap">
                  <div className="my-1">
                    <label htmlFor="month" className="sr-only">
                      Select expiration month
                    </label>
                    <select
                      name="month"
                      id="month"
                      className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">Month</option>
                    </select>
                  </div>
                  <div className="my-1 ml-3 mr-6">
                    <label htmlFor="year" className="sr-only">
                      Select expiration year
                    </label>
                    <select
                      name="year"
                      id="year"
                      className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">Year</option>
                    </select>
                  </div>
                  <div className="relative my-1">
                    <label htmlFor="security-code" className="sr-only">
                      Security code
                    </label>
                    <input
                      type="text"
                      id="security-code"
                      name="security-code"
                      placeholder="Security code"
                      className="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="card-name" className="sr-only">
                  Card name
                </label>
                <input
                  type="text"
                  id="card-name"
                  name="card-name"
                  placeholder="Name on the card"
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </form>
            <p className="mt-10 text-center text-sm font-semibold text-gray-500">
              Ao fazer este pedido, você concorda com o{" "}
              <a
                href="#"
                className="whitespace-nowrap text-cyan-500 underline hover:text-teal-600"
              >
                Termos e condições
              </a>
            </p>
          </div>
        </div>
        <div className="relative col-span-full flex flex-col py-6 sm:py-12 lg:col-span-4 lg:py-24">
          <div className="flex justify-center">
            <ItemDetailCheckout />
          </div>
          <div>
            <Image
              src={imgBg}
              alt=""
              layout={"fill"}
              objectFit={"cover"}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t bg-gray-100 opacity-95"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
