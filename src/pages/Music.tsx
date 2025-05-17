import PageTitle from '../components/ui/PageTitle';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Music() {
  const albums = [
    {
      id: 'album1',
      title: 'Digital Dreams',
      releaseDate: 'May 2025',
      coverImage: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A collection of electronic tracks inspired by gaming worlds and digital landscapes.',
      trackCount: 12,
      spotifyLink: 'https://open.spotify.com/album/example1',
      featured: true,
      tracks: [
        { title: 'Digital Awakening', duration: '3:42' },
        { title: 'Neon Pulse', duration: '4:15' },
        { title: 'Cybernetic', duration: '3:58' },
        { title: 'Virtual Reality', duration: '5:21' },
      ],
    },
    {
      id: 'album2',
      title: 'Game Worlds',
      releaseDate: 'November 2024',
      coverImage: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Soundtrack music from my popular Roblox games and experiences.',
      trackCount: 10,
      spotifyLink: 'https://open.spotify.com/album/example2',
      featured: true,
      tracks: [
        { title: 'Blob Simulator Theme', duration: '4:02' },
        { title: 'Mystery Mansion', duration: '3:45' },
        { title: 'Tycoon Adventure', duration: '2:58' },
        { title: 'Battle Royale', duration: '3:11' },
      ],
    },
    {
      id: 'album3',
      title: 'Lo-Fi Beats',
      releaseDate: 'August 2024',
      coverImage: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Chill beats to relax, study, and game to.',
      trackCount: 8,
      spotifyLink: 'https://open.spotify.com/album/example3',
      featured: false,
      tracks: [
        { title: 'Midnight Coding', duration: '3:22' },
        { title: 'Rainy Day Gaming', duration: '4:05' },
        { title: 'Pixel Memories', duration: '3:37' },
        { title: 'Study Session', duration: '2:58' },
      ],
    },
  ];

  const singles = [
    {
      id: 'single1',
      title: 'Pixel Paradise',
      releaseDate: 'June 2025',
      coverImage: 'https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '3:45',
      spotifyLink: 'https://open.spotify.com/track/example1',
    },
    {
      id: 'single2',
      title: 'Retro Wave',
      releaseDate: 'April 2025',
      coverImage: 'https://images.pexels.com/photos/1293976/pexels-photo-1293976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '4:12',
      spotifyLink: 'https://open.spotify.com/track/example2',
    },
    {
      id: 'single3',
      title: 'Future Beats',
      releaseDate: 'March 2025',
      coverImage: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '3:28',
      spotifyLink: 'https://open.spotify.com/track/example3',
    },
    {
      id: 'single4',
      title: 'Cyber Dreams',
      releaseDate: 'February 2025',
      coverImage: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '4:05',
      spotifyLink: 'https://open.spotify.com/track/example4',
    },
  ];

  const platforms = [
    { name: 'Spotify', url: 'https://open.spotify.com/artist/blobbyofficial' },
    { name: 'Apple Music', url: 'https://music.apple.com/artist/blobbyofficial' },
    { name: 'SoundCloud', url: 'https://soundcloud.com/blobbyofficial' },
    { name: 'BandLab', url: 'https://bandlab.com/blobbyofficial' },
    { name: 'YouTube Music', url: 'https://music.youtube.com/channel/blobbyofficial' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/30 to-purple-600/30 dark:from-teal-900/50 dark:to-purple-900/50"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-cover opacity-20 dark:opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <PageTitle 
            title="My Music" 
            subtitle="Explore my albums, singles, and soundtracks across various platforms" 
          />
          <div className="flex justify-center">
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-4 rounded-lg flex gap-4 flex-wrap justify-center">
              {platforms.map((platform) => (
                <Button 
                  key={platform.name} 
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(platform.url, '_blank')}
                >
                  {platform.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Album */}
      <Section title="Featured Album" subtitle="Check out my latest release">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img 
                src={albums[0].coverImage} 
                alt={albums[0].title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-slate-800 dark:text-white">{albums[0].title}</h3>
                  <p className="text-slate-500 dark:text-slate-400">Released: {albums[0].releaseDate}</p>
                </div>
                <span className="bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 text-xs px-2 py-1 rounded-full">
                  NEW RELEASE
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                {albums[0].description}
              </p>
              
              {/* Spotify Embed Placeholder */}
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/30 rounded-lg p-4 mb-6 h-20 flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 font-medium flex items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5 mr-2"
                  >
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.059 14.406c-.183.36-.629.34-.989.17-2.708-1.65-6.118-2.02-10.138-1.1-.398.09-.79-.12-.879-.52-.09-.398.118-.79.518-.879 4.388-1 8.158-.58 11.218 1.29.339.17.41.629.23.989zm1.089-2.416c-.23.431-.721.58-1.15.351-3.101-1.909-7.82-2.457-11.491-1.359-.5.129-1.021-.16-1.14-.64-.131-.5.16-1.021.66-1.14 4.19-1.279 9.4-.659 12.969 1.637.429.25.58.741.349 1.151zm.1-2.42c-3.65-2.17-9.679-2.37-13.169-1.31-.601.179-1.23-.16-1.41-.76-.18-.601.16-1.23.75-1.42 4.01-1.209 10.669-.979 14.9 1.519.56.331.741 1.041.41 1.601-.33.551-1.041.74-1.599.41z"/>
                  </svg>
                  Spotify Player (Click to Listen)
                </span>
              </div>
              
              {/* Track list */}
              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Track List:</h4>
                {albums[0].tracks.map((track, index) => (
                  <div 
                    key={index}
                    className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-700 last:border-0"
                  >
                    <div className="flex items-center">
                      <span className="w-6 text-center text-slate-400">{index + 1}</span>
                      <span className="ml-2 text-slate-700 dark:text-slate-300">{track.title}</span>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400">{track.duration}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => window.open(albums[0].spotifyLink, '_blank')}
                  className="bg-[#1DB954] hover:bg-[#1aa34a] text-white"
                >
                  Listen on Spotify
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://music.apple.com/artist/blobbyofficial', '_blank')}
                >
                  Apple Music
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Albums */}
      <Section 
        title="Albums & EPs" 
        subtitle="Browse my collection of albums and extended plays"
        className="bg-slate-50 dark:bg-slate-900/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.slice(1).map((album) => (
            <Card key={album.id} className="overflow-hidden">
              <img 
                src={album.coverImage} 
                alt={album.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">{album.title}</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{album.releaseDate}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  {album.description}
                </p>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-slate-500 dark:text-slate-400">{album.trackCount} tracks</span>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(album.spotifyLink, '_blank')}
                >
                  Listen Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Singles */}
      <Section title="Singles" subtitle="Check out my latest single releases">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {singles.map((single) => (
            <Card key={single.id} className="overflow-hidden">
              <img 
                src={single.coverImage} 
                alt={single.title} 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-base font-semibold mb-1 text-slate-800 dark:text-white">
                  {single.title}
                </h3>
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span>{single.releaseDate}</span>
                  <span>{single.duration}</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open(single.spotifyLink, '_blank')}
                >
                  Listen Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Music Production */}
      <Section 
        title="My Music Production" 
        subtitle="Learn about my approach to creating music"
        className="bg-slate-50 dark:bg-slate-900/50"
      >
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <img 
              src="https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Music Production" 
              className="rounded-xl shadow-md w-full object-cover max-h-[400px]"
            />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
              Creating Game Music
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              As both a game developer and musician, I create soundtracks that enhance the gaming experience. My music is designed to build immersion, establish mood, and create memorable moments in my games.
            </p>
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                <h4 className="font-semibold mb-2 text-slate-800 dark:text-white">Tools I Use:</h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                    FL Studio for composition and arrangement
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                    Serum and Massive for sound design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                    Kontakt libraries for realistic instruments
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                    Ableton Live for live performances
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                <h4 className="font-semibold mb-2 text-slate-800 dark:text-white">Music Styles:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 rounded-full text-xs">
                    Electronic
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-xs">
                    Lo-Fi
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                    Ambient
                  </span>
                  <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200 rounded-full text-xs">
                    Synthwave
                  </span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-xs">
                    Chiptune
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Button 
                variant="outline" 
                onClick={() => window.location.hash = 'videos'}
              >
                Watch Music Tutorials
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section>
        <div className="bg-gradient-to-br from-teal-600 to-purple-600 rounded-xl p-8 text-white text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Want Music for Your Project?</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            I'm available for music production work including game soundtracks, promotional videos, and more!
          </p>
          <Button 
            className="bg-white text-teal-600 hover:bg-slate-100"
            onClick={() => window.location.hash = 'contact'}
          >
            Contact for Collaboration
          </Button>
        </div>
      </Section>
    </div>
  );
}