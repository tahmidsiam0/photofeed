"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }) {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="shadow-teal-700 shadow-md border border-teal-700 p-2 rounded-md dark:bg-black-700 dark:border-teal-500 dark:shadow-teal-500/50 bg-white my-25 mx-10"
    >
      <button className="absolute top-2 right-2" onClick={onHide}>
        <Image src="/xmark.svg" height={30} width={30} alt="X Mark" />
      </button>
      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
}
