export default function Loading() {
  return (
    <div data-theme="luxury" className="h-screen flex flex-col justify-center items-center gap-4">
      <span className="loading loading-spinner text-primary loading-sm lg:loading-lg"></span>
      <p className="text-base lg:text-lg">Loading ...</p>
    </div>
  );
}
