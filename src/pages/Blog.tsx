import { useState } from 'react';
import PageTitle from '../components/ui/PageTitle';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Game Dev', 'Music', 'Updates', 'Tutorials'];
  
  const blogPosts = [
    {
      id: 'post1',
      title: 'Behind the Scenes: Creating Blob Simulator',
      excerpt: 'An in-depth look at the development process behind my most popular Roblox game, Blob Simulator.',
      date: 'June 15, 2025',
      category: 'Game Dev',
      author: 'Blobby',
      image: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: true,
    },
    {
      id: 'post2',
      title: 'New Album Release: Digital Dreams',
      excerpt: 'Announcing my latest album "Digital Dreams" and the inspiration behind each track.',
      date: 'May 28, 2025',
      category: 'Music',
      author: 'Blobby',
      image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: true,
    },
    {
      id: 'post3',
      title: 'How to Create Your First Roblox Game',
      excerpt: 'A beginner-friendly tutorial to help you start your journey as a Roblox game developer.',
      date: 'April 10, 2025',
      category: 'Tutorials',
      author: 'Blobby',
      image: 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: false,
    },
    {
      id: 'post4',
      title: 'Optimizing Performance in Large Roblox Games',
      excerpt: 'Advanced techniques for improving frame rates and reducing lag in complex Roblox experiences.',
      date: 'March 22, 2025',
      category: 'Game Dev',
      author: 'Blobby',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: false,
    },
    {
      id: 'post5',
      title: 'Creating Game Soundtracks: From Concept to Completion',
      excerpt: 'My process for composing music that enhances gameplay and creates memorable experiences.',
      date: 'March 5, 2025',
      category: 'Music',
      author: 'Blobby',
      image: 'https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: false,
    },
    {
      id: 'post6',
      title: 'Major Update Coming to Roleplay City',
      excerpt: 'A sneak peek at the new features, locations, and improvements coming to Roleplay City next month.',
      date: 'February 18, 2025',
      category: 'Updates',
      author: 'Blobby',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: false,
    },
    {
      id: 'post7',
      title: 'How to Make Lo-Fi Beats for Your Games',
      excerpt: 'A step-by-step guide to creating relaxing and atmospheric lo-fi music for games and videos.',
      date: 'January 30, 2025',
      category: 'Tutorials',
      author: 'Blobby',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: false,
    },
    {
      id: 'post8',
      title: 'Building an Active Discord Community',
      excerpt: 'Tips and strategies for growing and maintaining an engaged community around your content.',
      date: 'January 12, 2025',
      category: 'Updates',
      author: 'Blobby',
      image: 'https://images.pexels.com/photos/6469543/pexels-photo-6469543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: false,
    },
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts.filter(post => !post.featured) 
    : blogPosts.filter(post => post.category === activeCategory && !post.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 dark:from-blue-900/50 dark:to-purple-900/50"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-cover opacity-20 dark:opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <PageTitle 
            title="Blog & Updates" 
            subtitle="Devlogs, tutorials, and news about my games, music, and more" 
          />
          <div className="flex justify-center">
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-4 rounded-lg flex gap-3 flex-wrap justify-center">
              {categories.map((category) => (
                <Button 
                  key={category} 
                  variant={category === activeCategory ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {activeCategory === 'All' && (
        <Section title="Featured Posts" subtitle="Check out my most recent and popular content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="mb-2">
                      <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                      {post.excerpt}
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
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {post.date}
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
                          className="w-3 h-3 mr-1"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        By {post.author}
                      </span>
                    </div>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => window.location.hash = `post/${post.id}`}
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* All Blog Posts */}
      <Section 
        title={activeCategory === 'All' ? 'All Posts' : `${activeCategory} Posts`}
        className={activeCategory === 'All' ? 'bg-slate-50 dark:bg-slate-900/50' : ''}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-purple-600 dark:text-purple-400">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
                  <span>{post.date}</span>
                  <span>By {post.author}</span>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <Button 
                  variant="ghost"
                  onClick={() => window.location.hash = `post/${post.id}`}
                  className="w-full"
                >
                  Read Article
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-white dark:bg-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-600 rounded-l-md hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              Previous
            </button>
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-purple-600"
            >
              1
            </button>
            <button
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-white dark:bg-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              2
            </button>
            <button
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-white dark:bg-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-600 rounded-r-md hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              Next
            </button>
          </div>
        </div>
      </Section>

      {/* Newsletter */}
      <Section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to My Newsletter</h2>
          <p className="text-lg mb-8 text-white/80">
            Get notified about new blog posts, game updates, and music releases straight to your inbox!
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md text-slate-800 focus:outline-none"
            />
            <Button className="bg-white text-purple-600 hover:bg-slate-100">
              Subscribe
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}