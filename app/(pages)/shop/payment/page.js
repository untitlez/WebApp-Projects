"use client";

import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useAction, useShop } from "@/app/lib/store/shop";

import { FaRegCreditCard } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import { RiQrScan2Line } from "react-icons/ri";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BsFillBagXFill } from "react-icons/bs";

import { CreditCardPayment } from "@/app/components/shop/CreditCardPayment";
import { BankTransferPayment } from "@/app/components/shop/BankTransferPayment";
import { QRCodePayment } from "@/app/components/shop/QRCodePayment";
import { ModalPayment } from "@/app/components/shop/ModalPayment";

const paymentOption = [
  { name: "Credit Card", icon: <FaRegCreditCard size={36} /> },
  { name: "Bank Transfer", icon: <BsBank size={36} /> },
  { name: "QR Code", icon: <RiQrScan2Line size={36} /> },
];

const sizeImage = 200;

export default function PaymentPage() {
  const dialogRef = useRef();
  const { totalPrice } = useShop();
  const {
    loading,
    setLoading,
    disabled,
    setDisabled,
    payment,
    setPayment,
    bank,
    setBank,
  } = useAction();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setDisabled(totalPrice === 0);
  }, [totalPrice]);

  const onSubmit = (submit) => {
    dialogRef.current?.showModal();
    setLoading(true);
  };

  return (
    <section className="h-full w-full flex justify-center gap-24">
      <div className="space-y-8 w-full max-w-xl lg:basis-1/2">
        <p className="font-semibold text-primary text-lg sm:text-2xl">
          Payment
        </p>

        {/* Payment Option  */}
        <div className="flex justify-between gap-4 bg-base-200 rounded-xl shadow-md p-1 border border-base-content/75">
          {paymentOption.map((option, i) => (
            <label
              key={i}
              className="btn btn-lg flex grow text-primary hover:btn-outline tooltip"
              name={option.name}
              data-tip={option.name}
            >
              <input
                type="radio"
                className="hidden"
                name={option.name}
                onClick={() => setPayment(option.name)}
              />
              {option.icon}
            </label>
          ))}
        </div>

        <form
          id="payment-form"
          className="flex flex-col bg-base-100 rounded-xl border border-base-content/75 gap-2 p-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          {payment === "Credit Card" && (
            <CreditCardPayment register={register} errors={errors} />
          )}

          {payment === "Bank Transfer" && (
            <BankTransferPayment
              bank={bank}
              setBank={setBank}
              register={register}
              errors={errors}
            />
          )}

          {payment === "QR Code" && <QRCodePayment disabled={disabled} />}

          <button
            type="submit"
            className="btn btn-primary mt-12"
            disabled={disabled}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-evenly w-full gap-1">
                <div className="flex gap-2">
                  <p>Total :</p>
                  <p>$ {totalPrice}</p>
                </div>
                <p>Proceed to Payment</p>
              </div>
            )}
          </button>
        </form>
      </div>

      {/* Image  */}
      <div className="basis-1/3 hidden lg:flex flex-col justify-center items-center text-center gap-8 text-lg">
        {disabled ? (
          <>
            <BsFillBagXFill size={sizeImage} />
            <p>No products selected. Please choose products before payment.</p>
          </>
        ) : (
          <>
            <BsFillBagCheckFill size={sizeImage} />
            <p>
              Select a payment option to complete your order. We support secure
              card payments, QR code, and bank transfers.
            </p>
          </>
        )}
      </div>

      <ModalPayment ref={dialogRef} setLoading={setLoading} />
    </section>
  );
}
