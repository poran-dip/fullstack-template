import { useState, useEffect } from 'react';
import type { WelcomeData } from '../lib/types';
import { api } from '../lib/api';
import Card from '../components/homepage/Card';
import WelcomeHeader from '../components/homepage/WelcomeHeader';
import WelcomeFooter from '../components/homepage/WelcomeFooter';
import LoadingState from '../components/homepage/LoadingState';
import ErrorState from '../components/homepage/ErrorState';
import ReactLogo from '../assets/react.png'
import NodeJsLogo from '../assets/nodejs.png'

const Homepage = () => {
  const [data, setData] = useState<WelcomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    api.welcome()
      .then(setData)
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!data) return <ErrorState error="No data received from backend" />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <WelcomeHeader author={data.author} template={data.template} />

        <div className="grid md:grid-cols-2 gap-8">
          <Card
            title="Frontend"
            icon={ReactLogo}
            technologies={data.stack.frontend.technologies}
            techColor="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50"
            setup={data.stack.frontend.setup}
            bulletColor="text-blue-500"
          />

          <Card
            title="Backend"
            icon={NodeJsLogo}
            technologies={data.stack.backend.technologies}
            techColor="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50"
            setup={data.stack.backend.setup}
            bulletColor="text-green-500"
          />
        </div>

        <WelcomeFooter timestamp={data.timestamp} />
      </div>
    </div>
  );
};

export default Homepage;
