import type { WelcomeFooterProps } from "../../lib/types";

const WelcomeFooter = ({ timestamp }: WelcomeFooterProps) => {
  return (
    <div className="text-center mt-12">
      <p className="text-slate-500 dark:text-slate-500 text-sm">
        Last updated: {new Date(timestamp).toLocaleString()}
      </p>
    </div>
  );
};

export default WelcomeFooter;
