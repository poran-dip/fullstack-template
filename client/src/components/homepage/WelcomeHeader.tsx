import type { WelcomeHeaderProps } from '../../lib/types';
import ThemeToggle from '../ThemeToggle';

const WelcomeHeader = ({ author, template }: WelcomeHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <img
        src="poran-dip.png"
        alt={author}
        className="w-24 h-24 mx-auto mb-6 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-lg"
      />
      <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
        {template}
      </h1>
      <p className="text-xl text-slate-600 dark:text-slate-400 mb-2">
        Created by <span className="font-semibold text-blue-600 dark:text-blue-400">{author}</span>
      </p>
      <div className="flex items-center justify-center w-48 mx-auto mb-4 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium">
        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
        Backend Connected
      </div>
      <a
        href="https://github.com/poran-dip/poran-stack"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-medium mb-6 group transition-colors duration-200"
      >
        View on GitHub
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300 ease-out"></span>
      </a>
      <p className="text-base text-slate-600 dark:text-slate-400 mb-2">
        Choose your vibe:
      </p>
      <ThemeToggle />
    </div>
  );
};

export default WelcomeHeader;
