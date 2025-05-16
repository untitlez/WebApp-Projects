import Link from "next/link";

export const ModalPayment = ({ ref, setLoading }) => {
  return (
    <>
      <dialog ref={ref} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box border border-base-content/75">
          <div>
            <h3 className="font-bold text-lg">Payment Confirmation</h3>
            <p className="py-4">Are you sure you want to proceed with the payment?</p>
            <div className="modal-action">
              <form method="dialog" className="flex gap-4">
                <button className="btn btn-outline" onClick={() => setLoading(false)}>
                  Cancel
                </button>
                <Link
                  href="/shop/success"
                  className="btn btn-primary"
                  onClick={() => setLoading(false)}
                >
                  Confirm 
                </Link>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
