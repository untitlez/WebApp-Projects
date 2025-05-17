import { bankFields, bankItems } from "@/app/lib/constant/shop/payment";

export const BankTransferPayment = ({ bank, setBank, register, errors }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2">
        {bankItems.map((field, i) => (
          <label
            key={i}
            className="btn tooltip checked:ring-4"
            data-tip={field.name}
            style={{ backgroundColor: field.color }}
            onClick={() => setBank(field.code)}
          >
            <input
              type="radio"
              className="hidden"
              value={field.code}
              {...register("bank")}
            />
            <img className="w-6 h-12" src={field.src} alt={field.name} />
            {errors[field.name] && (
              <p className="text-red-500 text-sm text-end">
                {errors[field.name]?.message}
              </p>
            )}
          </label>
        ))}
      </div>

      {bankFields.map((field, i) => (
        <label key={i} className="form-control grow">
          Bank Name : {bank}
          <input
            className="input input-bordered grow my-1"
            name={field.name}
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
    </div>
  );
};
