import { ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-teal-500/20 dark:from-purple-900/30 dark:to-teal-900/30"></div>
        
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-teal-300/10 dark:bg-teal-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-pink-300/10 dark:bg-pink-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400">
            Blobby Official
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 max-w-2xl mx-auto mb-8">
            Creator of games, music, and digital experiences. Join the adventure!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={() => window.scrollTo({ top: document.getElementById('featured')?.offsetTop, behavior: 'smooth' })}
            >
              Explore My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.open('https://discord.gg/blobby', '_blank')}
            >
              Join Discord
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <Section id="featured" title="Featured Content" subtitle="Check out my latest creations across different platforms">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Games Card */}
          <Card className="flex flex-col">
            <div className="p-6 flex-grow">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/40 rounded-lg flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="w-8 h-8 text-purple-600 dark:text-purple-400"
                >
                  <path d="M15 5v2"></path>
                  <path d="M15 11v2"></path>
                  <path d="M15 17v2"></path>
                  <path d="M7 6h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Roblox Games</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Explore my latest Roblox experiences and adventures. From simulators to role-playing games.
              </p>
            </div>
            <div className="p-6 pt-0 mt-auto">
              <Button variant="ghost" className="flex items-center" onClick={() => window.location.hash = 'games'}>
                View Games <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </Card>

          {/* YouTube Card */}
          <Card className="flex flex-col">
            <div className="p-6 flex-grow">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/40 rounded-lg flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="w-8 h-8 text-red-600 dark:text-red-400"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">YouTube Videos</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Watch my latest videos, tutorials, and behind-the-scenes content on game development and music.
              </p>
            </div>
            <div className="p-6 pt-0 mt-auto">
              <Button variant="ghost" className="flex items-center" onClick={() => window.location.hash = 'videos'}>
                Watch Videos <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </Card>

          {/* Music Card */}
          <Card className="flex flex-col">
            <div className="p-6 flex-grow">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/40 rounded-lg flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="w-8 h-8 text-teal-600 dark:text-teal-400"
                >
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Music</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Listen to my latest tracks, albums, and collaborations. From electronic to lo-fi beats.
              </p>
            </div>
            <div className="p-6 pt-0 mt-auto">
              <Button variant="ghost" className="flex items-center" onClick={() => window.location.hash = 'music'}>
                Listen Now <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* Latest Updates */}
      <Section 
        title="Latest Updates" 
        subtitle="Stay in the loop with my most recent projects and announcements"
        className="bg-slate-50 dark:bg-slate-900/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Latest Game Update */}
          <Card className="flex flex-col h-full">
            <img 
              src="https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Latest Game Update" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full">
                GAME UPDATE
              </span>
              <h3 className="text-xl font-bold mt-3 mb-2 text-slate-800 dark:text-white">
                New Features in Blob Simulator
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Check out the latest content update for Blob Simulator, including new areas, pets, and challenges!
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500 dark:text-slate-400">June 15, 2025</span>
                <Button variant="ghost" size="sm" className="flex items-center">
                  Read More <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Latest Music Release */}
          <Card className="flex flex-col h-full">
            <img 
              src="https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Latest Music Release" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-900/30 px-2 py-1 rounded-full">
                NEW MUSIC
              </span>
              <h3 className="text-xl font-bold mt-3 mb-2 text-slate-800 dark:text-white">
                "Digital Dreams" Album Release
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                My new album "Digital Dreams" is now available on all streaming platforms. Listen now!
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500 dark:text-slate-400">May 28, 2025</span>
                <Button variant="ghost" size="sm" className="flex items-center">
                  Listen Now <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" onClick={() => window.location.hash = 'blog'}>
            View All Updates
          </Button>
        </div>
      </Section>

      {/* Discord Community */}
      <Section title="Join the Community" subtitle="Connect with me and other fans on Discord">
        <div className="bg-[#5865F2]/10 dark:bg-[#5865F2]/20 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
                Blobby's Discord Server
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Join our community of gamers, music lovers, and creators. Get early access to new content, participate in events, and connect with like-minded people.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-slate-700 dark:text-slate-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="w-5 h-5 mr-2 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Early access to new game releases
                </li>
                <li className="flex items-center text-slate-700 dark:text-slate-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="w-5 h-5 mr-2 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Exclusive behind-the-scenes content
                </li>
                <li className="flex items-center text-slate-700 dark:text-slate-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="w-5 h-5 mr-2 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Community events and game nights
                </li>
              </ul>
              <Button 
                size="lg" 
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white"
                onClick={() => window.open('https://discord.gg/blobby', '_blank')}
              >
                Join Discord Server
              </Button>
            </div>
            <div className="md:w-1/2 w-full max-w-sm">
              {/* Discord Server Widget (iframe placeholder) */}
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 h-64 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                <p className="text-slate-500 dark:text-slate-400 text-center">
                  Discord widget will appear here.<br />
                  <span className="text-sm">10,000+ members online</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-gradient-to-br from-purple-600 to-pink-500 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Connect?</h2>
          <p className="text-lg mb-8 text-white/80">
            Follow me across platforms to stay up-to-date with my latest content, games, music, and announcements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-white text-purple-600 hover:bg-slate-100"
              onClick={() => window.location.hash = 'contact'}
            >
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.open('https://youtube.com/blobbyofficial', '_blank')}
            >
              Subscribe on YouTube
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}