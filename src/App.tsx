import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Games from './pages/Games';
import Videos from './pages/Videos';
import Music from './pages/Music';
import Blog from './pages/Blog';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [pageTransition, setPageTransition] = useState(false);

  useEffect(() => {
    // Simulate initial load
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const handlePageChange = (page: string) => {
    setPageTransition(true);
    setTimeout(() => {
      setCurrentPage(page);
      setPageTransition(false);
    }, 300);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'games':
        return <Games />;
      case 'videos':
        return <Videos />;
      case 'music':
        return <Music />;
      case 'blog':
        return <Blog />;
      default:
        return <Home />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300 animate-pulse">Loading amazing content...</p>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
        <Header currentPage={currentPage} setCurrentPage={handlePageChange} />
        <main className={`flex-grow ${pageTransition ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          {renderPage()}
        </main>
        <Footer setCurrentPage={handlePageChange} />
      </div>
    </ThemeProvider>
  );
}

export default App;