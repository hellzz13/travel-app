"use client";

import { useRouter } from "next/navigation";
import PrimaryButton from "../Button/PrimaryButton";
import Input from "../Inputs/InputBase";
import InputSelect from "../Inputs/InputSelect";

export default function SelectTravelBox() {
  const { push } = useRouter();

  return (
    <div className="rounded-xl border text-black p-6 shadow-md bg-white z-20 mx-5">
      <h3 className="font-medium text-base text-zinc-500 mb-4">
        Escolha seu destino!
      </h3>
      <div className="flex flex-col md:flex-row gap-3">
        <Input title="Origem" name="origin" placeholder="Origem" />
        <Input title="Destino" name="destiny" placeholder="Destíno" />
        <Input
          title="Data ida"
          name="dateOrigin"
          type="date"
          placeholder="Data ida"
        />
        <Input
          title="Data volta"
          name="dateDestiny"
          type="date"
          placeholder="Data volta"
        />

        <PrimaryButton title="Buscar" onClick={() => push("/checkout")} />
      </div>
      <div className="flex sm:items-center mt-4 items-start justify-center flex-col sm:flex-row gap-3">
        <p className="font-medium text-base text-zinc-500">Passageiros:</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <InputSelect title="Adultos" name="adult" placeholder="Adultos" />
          <InputSelect title="Crianças" name="kids" placeholder="Crianças" />
        </div>
      </div>
    </div>
  );
}
