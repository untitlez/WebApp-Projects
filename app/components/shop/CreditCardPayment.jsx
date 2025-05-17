import { creditCardFields } from "@/app/lib/constant/shop/payment";

export const CreditCardPayment = ({ register, errors }) => {
  return (
    <>
      {creditCardFields.map((field, i) => (
        <label key={i} className="form-control">
          <p>{field.label}</p>
          <input
            className="input input-bordered grow my-1"
            type={field.type}
            placeholder={field.placeholder}
            maxLength={field.maxLength}
            {...register(field.name, field.validate)}
          />
          {errors[field.name] && (
            <p className="text-red-500 text-sm text-end">
              {errors[field.name]?.message}
            </p>
          )}
        </label>
      ))}
    </>
  );
};
