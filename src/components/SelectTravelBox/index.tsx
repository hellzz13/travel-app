"use client";

import { useRouter } from "next/navigation";
import PrimaryButton from "../Button/PrimaryButton";
import Input from "../Inputs/InputBase";
import InputSelect from "../Inputs/InputSelect";

export default function SelectTravelBox() {
  const { push } = useRouter();

  return (
    <div className="rounded-xl border text-black p-6 shadow-md relative bg-white">
      <h3 className="font-medium text-base text-zinc-500 mb-4">Buscar</h3>
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
      <div className="flex items-center gap-3 mt-4 justify-center">
        <p className="font-medium text-base text-zinc-500">Passageiros:</p>
        <div className="flex gap-3">
          <InputSelect title="Adultos" name="adult" placeholder="Adultos" />
          <InputSelect title="Crianças" name="kids" placeholder="Crianças" />
        </div>
      </div>
    </div>
  );
}
