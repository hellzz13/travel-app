import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";

import { MdErrorOutline, MdOutlineCheckCircleOutline } from "react-icons/md";
import { FiXCircle } from "react-icons/fi";
import PrimaryButton from "../Button/PrimaryButton";
import { useRouter } from "next/navigation";

type CustomModalProps = {
  type: "success" | "alert" | "error" | "none";
  title: string;
  description: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function ConfirmModal({
  type,
  title,
  description,
  isOpen,
  setIsOpen,
}: CustomModalProps) {
  const completeButtonRef = useRef(null);

  const { push } = useRouter();

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        initialFocus={completeButtonRef}
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto"
        onClose={() => {}}
      >
        <div
          className="flex min-h-screen text-center md:block md:px-2 lg:px-4"
          style={{ fontSize: 0 }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          <span
            className="hidden md:inline-block md:align-middle md:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enterTo="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 md:scale-100"
            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-7 md:my-8 md:align-middle lg:max-w-2xl">
              <div className="w-full relative bg-white rounded-lg px-4 pt-14 pb-8 space-y-6 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                {/* content */}
                <div className=" w-full text-center text-secondary space-y-5">
                  <div className="flex justify-center text-primary">
                    {type === "success" ? (
                      <MdOutlineCheckCircleOutline
                        size={150}
                        className="text-green-500"
                      />
                    ) : type === "alert" ? (
                      <MdErrorOutline size={150} className="text-yellow-400" />
                    ) : type === "error" ? (
                      <FiXCircle size={150} className=" text-red-600" />
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="text-2xl">{title}</div>
                  <p>{description}</p>
                </div>

                <div className="sm:w-52 mx-auto w-full flex justify-center">
                  <PrimaryButton
                    title="Voltar a tela inicial"
                    onClick={() => {
                      push("/"), setIsOpen(false);
                    }}
                  />
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
