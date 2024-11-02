import { memo, useRef, useState } from "react";
import close from "../access/images/icon-close.svg";
import rules from "../access/images/image-rules-bonus.svg";
import { useHover } from "../hooks/useHover";

export const Rules = memo(() => {
  const [isShowModal, setIsShowModal] = useState(false);
  const ref = useRef(null);
  const isHover = useHover(ref);

  const handleCloseModal = () => {
    setIsShowModal(false);
  };
  const handleOpenModal = () => {
    setIsShowModal(true);
  };
  return (
    <>
      <div
        style={{ width: "calc(100% - 100px)" }}
        className="absolute bottom-[2%] flex justify-center sm:justify-end"
      >
        <button
          onClick={handleOpenModal}
          className={`border-2 rounded-md px-8 py-2 border-neutral-headerOutline text-white font-bold font-custom tracking-widest text-2xl
            ${isHover && "animate__animated animate__shakeX"}`}
          ref={ref}
        >
          RULES
        </button>
      </div>
      {isShowModal && (
        <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
          <div
            onClick={handleCloseModal}
            className="absolute inset-0 bg-black opacity-50 z-0"
          ></div>
          <div className="bg-white z-10 flex flex-col justify-start sm:justify-center relative p-10 rounded-xl h-full sm:h-fit w-full sm:w-fit">
            <div className="flex justify-between items-center h-16 mb-52 sm:mb-10">
              <span className="font-custom text-4xl font-bold tracking-wide text-neutral-darkText">
                RULES
              </span>
              <button
                className="h-1/2 transition-transform duration-200 hover:scale-125"
                onClick={handleCloseModal}
              >
                <img className="w-auto h-full" src={close} alt="close" />
              </button>
            </div>
            <img src={rules} alt="rules" />
          </div>
        </div>
      )}
    </>
  );
});
