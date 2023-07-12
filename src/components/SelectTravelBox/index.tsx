"use client";

import { useRouter } from "next/navigation";
import PrimaryButton from "../Button/PrimaryButton";
import InputText from "../Inputs/InputText";

export default function SelectTravelBox() {
  const { push } = useRouter();

  return (
    <div className="rounded-xl border text-black p-6 shadow-md relative bg-white">
      <h3 className="font-medium text-base text-zinc-500 mb-4">Buscar</h3>
      <div className="flex flex-col md:flex-row gap-3">
        <InputText name="origin" placeholder="Origem" />
        <InputText name="destiny" placeholder="Destíno" />
        <InputText name="dateOrigin" type="date" placeholder="Data origem" />
        <InputText name="dateOrigin" type="date" placeholder="Data origem" />

        <PrimaryButton title="Buscar" onClick={() => push("/checkout")} />
      </div>
    </div>
  );
}
