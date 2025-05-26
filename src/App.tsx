import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Series } from './pages/Series';
import { Contact } from './pages/Contact';
import { Contract } from './pages/Contract';
import { Disclaimer } from './pages/Disclaimer';

// Define routes
export type Route = 'home' | 'series' | 'contact' | 'contract' | 'disclaimer';

function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');

  // Function to render the current page based on the route
  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <Home />;
      case 'series':
        return <Series />;
      case 'contact':
        return <Contact />;
      case 'contract':
        return <Contract />;
      case 'disclaimer':
        return <Disclaimer />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout currentRoute={currentRoute} onRouteChange={setCurrentRoute}>
      {renderPage()}
    </Layout>
  );
}

export default App;