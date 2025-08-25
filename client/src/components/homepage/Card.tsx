import type { CardProps } from "../../lib/types";

const Card = ({ 
  title, 
  icon, 
  technologies, 
  techColor, 
  setup, 
  bulletColor 
}: CardProps) => {
  const renderWithCode = (str: string) => {
    return str.split(/(`[^`]+`)/g).map((part, i) => {
      const isCode = part.startsWith("`") && part.endsWith("`");
      return isCode ? (
        <code
          key={i}
          className="font-mono bg-slate-200 dark:bg-slate-700 rounded px-1"
        >
          {part.slice(1, -1)}
        </code>
      ) : (
        <span key={i}>{part}</span>
      );
    });
  };

  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mr-4">
            <img src={icon} alt={title} className="w-8 h-8 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{title}</h2>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className={`px-3 py-1 ${techColor} rounded-full text-sm font-medium transition-colors`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">Setup Instructions</h3>
          <div className="space-y-2">
            {Object.entries(setup).map(([key, value]) => (
              <div key={key} className="flex items-start">
                <span className={`${bulletColor} mr-2 relative mt-0.5 leading-none`}>•</span>
                <div className="text-slate-600 dark:text-slate-400 text-sm">{renderWithCode(value)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
