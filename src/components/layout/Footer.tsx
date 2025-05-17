import { Twitter, Instagram, Youtube, Music, Github } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Games', id: 'games' },
    { name: 'Videos', id: 'videos' },
    { name: 'Music', id: 'music' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: <Twitter size={20} />, url: 'https://twitter.com/blobbyofficial' },
    { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://instagram.com/blobbyofficial' },
    { name: 'YouTube', icon: <Youtube size={20} />, url: 'https://youtube.com/blobbyofficial' },
    { name: 'SoundCloud', icon: <Music size={20} />, url: 'https://soundcloud.com/blobbyofficial' },
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/blobbyofficial' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Blobby Official</h3>
            <p className="text-slate-400 mb-4">
              Creator of games, music, and digital experiences. Join me on this creative journey!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-slate-400 mb-4">
              Subscribe to get updates on new projects, games, and music releases.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-md text-slate-800 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-md transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>© {currentYear} Blobby Official. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}