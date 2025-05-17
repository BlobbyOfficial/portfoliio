import PageTitle from '../components/ui/PageTitle';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Games() {
  const games = [
    {
      id: 1,
      title: 'Blob Simulator',
      description: 'Hatch pets, collect coins, and explore different worlds in this exciting simulator game!',
      image: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      players: '5.2M+',
      likes: '95K',
      genre: 'Simulator',
      url: 'https://www.roblox.com/games/blobsimulator',
    },
    {
      id: 2,
      title: 'Tycoon Adventure',
      description: 'Build your own empire, collect resources, and compete with friends in this tycoon game.',
      image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      players: '3.8M+',
      likes: '76K',
      genre: 'Tycoon',
      url: 'https://www.roblox.com/games/tycoonadventure',
    },
    {
      id: 3,
      title: 'Mystery Mansion',
      description: 'Solve puzzles, find clues, and escape from the mysterious mansion before time runs out!',
      image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      players: '2.1M+',
      likes: '42K',
      genre: 'Escape Room',
      url: 'https://www.roblox.com/games/mysterymansion',
    },
    {
      id: 4,
      title: 'Battle Royale Island',
      description: 'Compete against other players, collect weapons, and be the last one standing!',
      image: 'https://images.pexels.com/photos/1178685/pexels-photo-1178685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      players: '4.5M+',
      likes: '88K',
      genre: 'Battle Royale',
      url: 'https://www.roblox.com/games/battleroyaleisland',
    },
    {
      id: 5,
      title: 'Roleplay City',
      description: 'Create your character, get a job, build a house, and live your virtual life in a bustling city.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      players: '6.7M+',
      likes: '110K',
      genre: 'Roleplay',
      url: 'https://www.roblox.com/games/roleplaycity',
    },
    {
      id: 6,
      title: 'Obstacle Course',
      description: 'Navigate through challenging obstacles, reach checkpoints, and compete for the fastest time!',
      image: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      players: '3.2M+',
      likes: '65K',
      genre: 'Obby',
      url: 'https://www.roblox.com/games/obstaclecourse',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 dark:from-purple-900/50 dark:to-blue-900/50"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-cover opacity-20 dark:opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <PageTitle 
            title="My Roblox Games" 
            subtitle="Explore my collection of popular Roblox experiences played by millions" 
          />
          <div className="flex justify-center">
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-4 rounded-lg flex gap-4 flex-wrap justify-center">
              {['All', 'Simulator', 'Tycoon', 'Adventure', 'Roleplay', 'Obby'].map((genre) => (
                <Button 
                  key={genre} 
                  variant={genre === 'All' ? 'primary' : 'ghost'}
                  size="sm"
                >
                  {genre}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <Card key={game.id} className="flex flex-col h-full overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-slate-800 px-2 py-1 rounded-md text-xs font-semibold">
                  {game.genre}
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{game.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{game.description}</p>
                <div className="flex space-x-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <div className="flex items-center">
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
                    {game.players} Players
                  </div>
                  <div className="flex items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="w-4 h-4 mr-1 text-red-500"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    {game.likes} Likes
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Button 
                  fullWidth 
                  onClick={() => window.open(game.url, '_blank')}
                >
                  Play Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Game Development */}
      <Section 
        title="Game Development" 
        subtitle="Learn about my process for creating engaging Roblox experiences"
        className="bg-slate-50 dark:bg-slate-900/50"
      >
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <img 
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Game Development" 
              className="rounded-xl shadow-md w-full object-cover max-h-[400px]"
            />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
              My Development Process
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center text-xl font-bold text-purple-600 dark:text-purple-400">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-slate-800 dark:text-white">Concept & Ideation</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Every game starts with a strong concept. I brainstorm ideas, research market trends, and identify opportunities to create unique experiences.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center text-xl font-bold text-purple-600 dark:text-purple-400">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-slate-800 dark:text-white">Prototyping</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    I create rapid prototypes to test gameplay mechanics and ensure the core experience is fun and engaging before fully investing in development.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center text-xl font-bold text-purple-600 dark:text-purple-400">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-slate-800 dark:text-white">Development</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Using Roblox Studio and Lua programming, I build the game's systems, mechanics, and features. This phase involves coding, level design, and asset creation.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center text-xl font-bold text-purple-600 dark:text-purple-400">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-slate-800 dark:text-white">Testing & Launch</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    I thoroughly test each game with a select group of players to identify bugs and gather feedback before launching to the public.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button 
                variant="outline" 
                onClick={() => window.location.hash = 'blog'}
              >
                Read Development Blog
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section>
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-8 text-white text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Want to See Behind the Scenes?</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Join my Discord community to get early access to new games, participate in beta testing, and see behind-the-scenes content!
          </p>
          <Button 
            className="bg-white text-purple-600 hover:bg-slate-100"
            onClick={() => window.open('https://discord.gg/blobby', '_blank')}
          >
            Join Discord Community
          </Button>
        </div>
      </Section>
    </div>
  );
}