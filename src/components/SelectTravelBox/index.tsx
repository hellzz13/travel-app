"use client";

import { useRouter } from "next/navigation";
import PrimaryButton from "../Button/PrimaryButton";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";

export default function SelectTravelBox() {
  const { push } = useRouter();

  const StartTravelSchema = z.object({
    origin: z
      .string()
      .min(3, { message: "Minimo 3 caracteres" })
      .nonempty("Nome é obrigatório"),
    destiny: z
      .string()
      .min(3, { message: "Minimo 3 caracteres" })
      .nonempty("Destino é obrigatório"),
    dateOrigin: z.string().nonempty("Selecione um data"),
    dateDestiny: z.string().nonempty("Selecione uma data"),
    adult: z.string().min(2, { message: "selecione um valor" }).nonempty(),
    kids: z.string(),
  });

  type StartTravelFormData = z.infer<typeof StartTravelSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<StartTravelFormData>({
    resolver: zodResolver(StartTravelSchema),
  });

  const handleStartTravel = useCallback(
    async (data: StartTravelFormData) => {
      await console.log(data);

      push("/checkout");
    },
    [push]
  );

  console.log("errors", errors);

  return (
    <form
      className="rounded-xl border text-black p-6 shadow-md bg-white z-20 mx-5"
      onSubmit={handleSubmit(handleStartTravel)}
    >
      <h3 className="font-medium text-base text-zinc-500 mb-4">
        Escolha seu destino!
      </h3>
      <div className="flex flex-col md:flex-row gap-3">
        <label className="sr-only">Origem</label>
        <div className="relative">
          <input
            {...register("origin")}
            type="text"
            name="origin"
            placeholder="Origem"
            className="form-input block w-full shadow-sm rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {errors.origin && (
            <span className="text-red-500 text-sm">
              {errors.origin.message}
            </span>
          )}
        </div>

        <label className="sr-only">Origem</label>
        <div className="relative">
          <input
            {...register("destiny")}
            type="text"
            name="destiny"
            placeholder="Destino"
            className="form-input block w-full shadow-sm rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {errors.destiny && (
            <span className="text-red-500 text-sm">
              {errors.destiny.message}
            </span>
          )}
        </div>

        <label className="sr-only">Data ida</label>
        <div className="relative">
          <input
            {...register("dateOrigin")}
            type="date"
            name="dateOrigin"
            placeholder="Data de origem"
            className="form-input block w-full shadow-sm rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {errors.dateOrigin && (
            <span className="text-red-500 text-sm">
              {errors.dateOrigin.message}
            </span>
          )}
        </div>

        <label className="sr-only">Data volta</label>
        <div className="relative">
          <input
            {...register("dateDestiny")}
            type="date"
            name="dateDestiny"
            placeholder="Data de Destiny"
            className="form-input block w-full shadow-sm rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {errors.dateDestiny && (
            <span className="text-red-500 text-sm">
              {errors.dateDestiny.message}
            </span>
          )}
        </div>
        <div className="h-9">
          <PrimaryButton title="Reservar" />
        </div>
      </div>
      <div className="flex sm:items-center mt-4 items-start justify-center flex-col sm:flex-row gap-3">
        <p className="font-medium text-base text-zinc-500">Passageiros:</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="rounded-md">
            <div className="flex items-center gap-2">
              <label>Adultos</label>
              <select
                {...register("adult")}
                name="adult"
                className="block w-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option value={""} selected>
                  0
                </option>
                <option value={"01"}>01</option>
                <option value={"02"}>02</option>
                <option value={"03"}>03</option>
                <option value={"04"}>04</option>
              </select>
            </div>
            {errors.adult && (
              <span className="text-red-500 text-sm">
                {errors.adult.message}
              </span>
            )}
          </div>

          <div className="rounded-md">
            <div className="flex items-center gap-2">
              <label>Kids</label>
              <select
                {...register("kids")}
                name="kids"
                className="block w-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option value={""} selected>
                  0
                </option>
                <option value={"01"}>01</option>
                <option value={"02"}>02</option>
                <option value={"03"}>03</option>
                <option value={"04"}>04</option>
              </select>
            </div>
            {errors.kids && (
              <span className="text-red-500 text-sm">
                {errors.kids.message}
              </span>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
