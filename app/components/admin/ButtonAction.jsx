import { useAction } from "@/app/lib/store/admin";

export const ButtonAction = ({
  type = "button",
  className,
  label,
  head,
  text,
  form,
  action,
}) => {
  const { loading } = useAction();
  const modalId = `modal-${label}`;
  return (
    <>
      <button
        type={type}
        className={className}
        onClick={() => document.getElementById(`${modalId}`).showModal()}
      >
        {label}
      </button>
      <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box border border-base-content/75">
          {loading ? (
            <div className="flex flex-col justify-center items-center gap-4 my-8">
              <span className="loading loading-spinner text-primary loading-sm lg:loading-lg"></span>
              <p className="text-base lg:text-lg">Loading ...</p>
            </div>
          ) : (
            <div>
              <h3 className="font-bold text-lg">{head}</h3>
              <p className="py-4">{text}</p>
              <div className="modal-action">
                <form method="dialog" className="flex gap-4">
                  <button className="btn">Close</button>
                  <button
                    className="btn btn-outline"
                    form={form}
                    onClick={action}
                  >
                    OK
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
};
