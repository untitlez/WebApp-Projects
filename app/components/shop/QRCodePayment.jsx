export const QRCodePayment = ({ disabled }) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      {!disabled && (
        <>
          <img src="/QR.webp" alt="QR Code" className="w-1/2 shadow-xl" />
          <p>Please scan this QR code with your banking app.</p>
        </>
      )}
    </div>
  );
};
