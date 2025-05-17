import PageTitle from '../components/ui/PageTitle';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

export default function Videos() {
  const featuredVideos = [
    {
      id: 'video1',
      title: 'Blob Simulator - NEW UPDATE!',
      description: 'Check out all the new features in the latest Blob Simulator update!',
      thumbnail: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      views: '245K',
      date: '2 weeks ago',
      duration: '15:42',
      embedId: 'dQw4w9WgXcQ', // Placeholder YouTube video ID
    },
    {
      id: 'video2',
      title: 'Making Music for Games - Tutorial',
      description: 'Learn how I create music for my Roblox games in this step-by-step tutorial.',
      thumbnail: 'https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      views: '128K',
      date: '1 month ago',
      duration: '22:15',
      embedId: 'dQw4w9WgXcQ', // Placeholder YouTube video ID
    },
    {
      id: 'video3',
      title: 'Game Development Vlog #12',
      description: 'Behind the scenes of creating my newest Roblox experience!',
      thumbnail: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      views: '87K',
      date: '3 weeks ago',
      duration: '18:30',
      embedId: 'dQw4w9WgXcQ', // Placeholder YouTube video ID
    },
  ];

  const videoCategories = [
    {
      id: 'gamedev',
      title: 'Game Development',
      videos: [
        {
          id: 'v1',
          title: 'Creating Custom UI in Roblox Studio',
          thumbnail: 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          views: '125K',
          date: '2 months ago',
          duration: '12:30',
        },
        {
          id: 'v2',
          title: 'Advanced Scripting Techniques',
          thumbnail: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          views: '98K',
          date: '3 months ago',
          duration: '19:45',
        },
        {
          id: 'v3',
          title: 'Optimizing Game Performance',
          thumbnail: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          views: '76K',
          date: '4 months ago',
          duration: '14:20',
        },
        {
          id: 'v4',
          title: 'Creating Game Monetization Systems',
          thumbnail: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          views: '112K',
          date: '1 month ago',
          duration: '22:15',
        },
      ],
    },
    {
      id: 'music',
      title: 'Music Production',
      videos: [
        {
          id: 'v5',
          title: 'Making Game Soundtracks',
          thumbnail: 'https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          views: '87K',
          date: '2 months ago',
          duration: '16:40',
        },
        {
          id: 'v6',
          title: 'Sound Design for Games',
          thumbnail: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          views: '65K',
          date: '3 months ago',
          duration: '18:55',
        },
        {
          id: 'v7',
          title: 'FL Studio Tutorial for Game Developers',
          thumbnail: 'https://images.pexels.com/photos/4722520/pexels-photo-4722520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          views: '53K',
          date: '5 months ago',
          duration: '25:10',
        },
        {
          id: 'v8',
          title: 'Creating Ambient Music for Games',
          thumbnail: 'https://images.pexels.com/photos/9553909/pexels-photo-9553909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          views: '48K',
          date: '6 months ago',
          duration: '20:30',
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-purple-600/30 dark:from-red-900/50 dark:to-purple-900/50"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-cover opacity-20 dark:opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <PageTitle 
            title="YouTube Videos" 
            subtitle="Watch my latest videos, tutorials, and behind-the-scenes content" 
          />
          <div className="flex justify-center">
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-4 rounded-lg flex gap-4 flex-wrap justify-center">
              {['All Videos', 'Game Dev', 'Tutorials', 'Music', 'Vlogs'].map((category) => (
                <Button 
                  key={category} 
                  variant={category === 'All Videos' ? 'primary' : 'ghost'}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <Section title="Featured Video" subtitle="Check out my latest content">
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg mb-8">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${featuredVideos[0].embedId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">{featuredVideos[0].title}</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6">{featuredVideos[0].description}</p>
          <div className="flex justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-4 h-4 mr-1"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              {featuredVideos[0].views} views
            </span>
            <span className="flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-4 h-4 mr-1"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {featuredVideos[0].date}
            </span>
            <span className="flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-4 h-4 mr-1"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {featuredVideos[0].duration}
            </span>
          </div>
        </div>
      </Section>

      {/* More Featured Videos */}
      <Section 
        title="More Featured Videos" 
        subtitle="Watch some of my most popular content"
        className="bg-slate-50 dark:bg-slate-900/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVideos.slice(1).map((video) => (
            <div key={video.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-slate-800 dark:text-white">
                  {video.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>
                <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="w-3 h-3 mr-1"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    {video.views} views
                  </span>
                  <span>
                    {video.date}
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => window.open(`https://youtube.com/watch?v=${video.embedId}`, '_blank')}
                >
                  Watch Video
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Video Categories */}
      {videoCategories.map((category) => (
        <Section key={category.id} title={category.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.videos.map((video) => (
              <div key={video.id} className="bg-white dark:bg-slate-800 rounded-lg shadow-sm overflow-hidden">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold mb-2 line-clamp-2 text-slate-800 dark:text-white">
                    {video.title}
                  </h3>
                  <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
                    <span>
                      {video.views} views
                    </span>
                    <span>
                      {video.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="ghost" size="sm">
              View All {category.title} Videos
            </Button>
          </div>
        </Section>
      ))}

      {/* Call to Action */}
      <Section className="bg-gradient-to-br from-red-600 to-purple-600 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe for More Content</h2>
          <p className="text-lg mb-8 text-white/80">
            Join my YouTube channel to stay updated with my latest videos, tutorials, game updates, and behind-the-scenes content.
          </p>
          <Button 
            className="bg-white text-red-600 hover:bg-slate-100"
            onClick={() => window.open('https://youtube.com/blobbyofficial', '_blank')}
          >
            Subscribe on YouTube
          </Button>
        </div>
      </Section>
    </div>
  );
}