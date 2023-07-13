"use client";
import React, { useState } from "react";
import Image from "next/image";
import InputBase from "@/components/Inputs/InputBase";
import InputMask, { Props } from "react-input-mask";
import ItemDetailCheckout from "@/components/ItemDetailCheckout";

import { useRouter } from "next/navigation";
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
                    type="text"
                  />
                </div>
                <div className="col-span-full md:col-span-6">
                  <InputBase
                    title="E-mail"
                    name="email"
                    placeholder="E-mail do passageiro principal"
                    type="email"
                  />
                </div>
              </div>
              <div className=" border-b border-gray-900/10 pb-6" />
              <h3 className="text-base font-medium text-gray-700 sm:text-lg">
                Dados de pagamento
              </h3>

              <div>
                <InputBase
                  title="Número do cartão"
                  placeholder="Número do cartão"
                  name="cardNumber"
                  type="text"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500">Validade</p>
                <div className="mr-6 flex flex-wrap">
                  <div className="my-1 w-20">
                    <InputMask mask={"99"}>
                      <InputBase
                        title="Mês"
                        name="month"
                        placeholder="Mês"
                        type="text"
                      />
                    </InputMask>
                  </div>
                  <div className="my-1 ml-3 mr-3 w-20">
                    <InputMask mask={"9999"}>
                      <InputBase
                        title="Ano"
                        name="year"
                        placeholder="Ano"
                        type="text"
                      />
                    </InputMask>
                  </div>
                  <div className="w-20 my-1">
                    <InputMask mask={"999"}>
                      <InputBase
                        title="CVV"
                        name="cvv"
                        placeholder="CVV"
                        type="text"
                      />
                    </InputMask>
                  </div>
                </div>
              </div>
              <div>
                <InputMask mask="9999-9999-9999-9999" maskChar="*">
                  <InputBase
                    title="Nome do titular do cartão"
                    name="cardName"
                    placeholder="Nome do titular do cartão"
                    type="text"
                  />
                </InputMask>
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
