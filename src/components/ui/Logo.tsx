import { Ghost } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <Ghost className="h-8 w-8 text-purple-600 dark:text-purple-400" />
      <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400">
        Blobby
      </span>
    </div>
  );
}