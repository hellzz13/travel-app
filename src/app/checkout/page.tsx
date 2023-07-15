"use client";
import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import ItemDetailCheckout from "@/components/ItemDetailCheckout";

import { useRouter } from "next/navigation";
import { BiSolidChevronLeft } from "react-icons/bi";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { maskCreditCardNumber, maskCreditCardValidity } from "@/utils/masks";
import ConfirmModal from "@/components/ConfirmModal";
import InfoContext from "@/context/InfoContext";
import { FaSpinner } from "react-icons/fa";

const Checkout = () => {
  const { back, push } = useRouter();
  const { dataCheckout } = useContext(InfoContext);

  const [confirm, setIsConfirm] = useState(false);

  const imgBg = "/tom-barrett-M0AWNxnLaMw-unsplash.jpg";

  const CheckoutSchema = z.object({
    name: z.string().nonempty("Nome é obrigatório"),
    email: z.string().nonempty("E-mail é obrigatório"),
    cardNumber: z.string().min(19, { message: "Informe o número do cartão" }),
    validity: z.string().min(5, { message: "Informe a validade" }),
    cvv: z
      .string()
      .min(3, { message: "Informe o cvv" })
      .transform((value) => Number(value)),

    cardName: z.string().nonempty("Nome do titular é obrigatório"),
  });

  type CheckoutFormData = z.infer<typeof CheckoutSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(CheckoutSchema),
  });

  const handleCheckout = useCallback(async (data: CheckoutFormData) => {
    await console.log(data);
    await setIsConfirm(true);
  }, []);

  function handleCreditCardNumberChange(event: ChangeEvent<HTMLInputElement>) {
    setValue("cardNumber", maskCreditCardNumber(event.target.value), {
      shouldDirty: true,
    });
  }

  function handleCreditCardValidityChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    setValue("validity", maskCreditCardValidity(event.target.value), {
      shouldDirty: true,
    });
  }

  useEffect(() => {
    if (!dataCheckout) {
      push("/");
    }
  }, [dataCheckout, push]);

  return (
    <div className="relative mx-auto w-full bg-white">
      <div className="grid min-h-screen grid-cols-10">
        {dataCheckout ? (
          <>
            <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
              <div className="mx-auto w-full max-w-lg">
                <button
                  className="h-8 flex items-center justify-between cursor-pointer mb-12 hover:text-gray-700 text-cyan-500 rounded-lg transition-all duration-200 ease-in-out"
                  onClick={back}
                >
                  <BiSolidChevronLeft className="h-6 w-6 cursor-pointer" />
                  <p className="font-medium text-base mr-2">Voltar</p>
                </button>

                <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                  Checkout
                  <span className="mt-2 block h-1 w-10 bg-cyan-500 sm:w-20"></span>
                </h1>
                <form
                  id="checkoutForm"
                  className="mt-10 flex flex-col space-y-4"
                  onSubmit={handleSubmit(handleCheckout)}
                >
                  <div className="grid grid-cols-12 gap-3">
                    <h2 className="text-base font-medium text-gray-700 sm:text-lg col-span-full">
                      Dados do passageiro principal
                    </h2>
                    <div className="col-span-full md:col-span-6">
                      <label className="sr-only">Nome</label>
                      <div className="relative rounded-md shadow-sm">
                        <input
                          {...register("name")}
                          type="text"
                          name="name"
                          placeholder="Nome do passageiro principal"
                          className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>

                      {errors.name && (
                        <span className="text-red-500 text-sm">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className="col-span-full md:col-span-6">
                      <label className="sr-only">E-mail</label>
                      <div className="relative rounded-md shadow-sm">
                        <input
                          {...register("email")}
                          type="email"
                          name="email"
                          placeholder="E-mail do passageiro principal"
                          className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      {errors.email && (
                        <span className="text-red-500 text-sm">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className=" border-b border-gray-900/10 pb-6" />
                  <h3 className="text-base font-medium text-gray-700 sm:text-lg">
                    Dados de pagamento
                  </h3>

                  <div>
                    <div>
                      <label className="sr-only">Numero do cartão</label>
                      <input
                        {...register("cardNumber")}
                        name="cardNumber"
                        placeholder="Número do cartão"
                        type="text"
                        className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleCreditCardNumberChange}
                        maxLength={19}
                      />
                    </div>

                    {errors.cardNumber && (
                      <span className="text-red-500 text-sm">
                        {errors.cardNumber.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500">
                      Validade
                    </p>
                    <div className="mr-6 flex flex-wrap gap-3">
                      <div className="my-1 w-32">
                        <div>
                          <label className="sr-only">Validade</label>
                          <input
                            {...register("validity")}
                            name="validity"
                            placeholder="mm/aa"
                            type="text"
                            className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            maxLength={5}
                            onChange={handleCreditCardValidityChange}
                          />
                        </div>

                        {errors.validity && (
                          <span className="text-red-500 text-sm">
                            {errors.validity.message}
                          </span>
                        )}
                      </div>

                      <div className="w-28 my-1">
                        <div>
                          <label className="sr-only">CVV</label>
                          <input
                            {...register("cvv")}
                            name="cvv"
                            placeholder="CVV"
                            type="text"
                            className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            maxLength={3}
                          />
                        </div>
                        {errors.cvv && (
                          <span className="text-red-500 text-sm">
                            {errors.cvv.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="sr-only">Nome do titular do cartão</label>
                    <input
                      {...register("cardName")}
                      title="Nome do titular do cartão"
                      name="cardName"
                      placeholder="Nome do titular do cartão"
                      type="text"
                      className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.cardName && (
                      <span className="text-red-500 text-sm">
                        {errors.cardName.message}
                      </span>
                    )}
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
          </>
        ) : (
          <div className="w-full h-full col-span-full text-center flex items-center">
            <div className="w-full text-cyan-500">
              <FaSpinner className="animate-spin mx-auto mb-2" size={30} />
              carregando...
            </div>
          </div>
        )}
      </div>

      <ConfirmModal
        type="success"
        isOpen={confirm}
        description="Sua reserva para viagem foi confirmada."
        setIsOpen={setIsConfirm}
        title="Reserva Confirmada com sucesso!"
      />
    </div>
  );
};

export default Checkout;
