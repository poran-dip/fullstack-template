const LoadingState = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="animate-pulse text-xl text-slate-600 dark:text-slate-400">
        Connecting to backend...
      </div>
    </div>
  );
};

export default LoadingState;
