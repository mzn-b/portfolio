export const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={`w-24 h-24 border-t-2 border-b-2 border-emerald-500 rounded-full animate-spin`}
      />
    </div>
  );
};
