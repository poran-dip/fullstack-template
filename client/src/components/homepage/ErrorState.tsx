import type { ErrorStateProps } from "../../lib/types";

const ErrorState = ({ error }: ErrorStateProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md text-center">
        <h2 className="text-red-800 dark:text-red-200 font-semibold mb-2">Connection Error</h2>
        <p className="text-red-600 dark:text-red-300">{error}</p>
      </div>
    </div>
  );
};

export default ErrorState;
