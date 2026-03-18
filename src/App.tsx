import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Gallery from './components/Gallery';
import About from './components/About';
import { artworks } from './data/artworks';

function App() {
  const [activeSection, setActiveSection] = useState('artworks');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'artworks':
        return <Gallery artworks={artworks} title="Artworks" sidebarOpen={sidebarOpen} />;
      case 'about':
        return <About sidebarOpen={sidebarOpen} />;
      default:
        return <Gallery artworks={artworks} title="Artworks" sidebarOpen={sidebarOpen} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      {renderContent()}
    </div>
  );
}

export default App;