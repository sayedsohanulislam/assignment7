import { Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2D4A3E] text-white py-12 mt-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-2 text-3xl font-bold">KeenKeeper</h2>
        <p className="mb-6 text-sm text-gray-300">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>
        <div className="mb-8 flex justify-center gap-4">
          <div className="cursor-pointer rounded-full bg-white p-2 text-[#2D4A3E] transition hover:bg-gray-200">
            <Twitter size={20} />
          </div>
          <div className="cursor-pointer rounded-full bg-white p-2 text-[#2D4A3E] transition hover:bg-gray-200">
            <Facebook size={20} />
          </div>
          <div className="cursor-pointer rounded-full bg-white p-2 text-[#2D4A3E] transition hover:bg-gray-200">
            <Instagram size={20} />
          </div>
        </div>
        <div className="mb-6">
          <a href="https://github.com/sayedsohanulislam/assignment7" target="_blank" rel="noreferrer" className="text-sm text-gray-300 underline">View project on GitHub</a>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-600 pt-6 text-xs text-gray-400 md:flex-row">
          <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
          <div className="mt-4 flex gap-4 md:mt-0">
            <span className="cursor-pointer transition hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer transition hover:text-white">Terms of Service</span>
            <span className="cursor-pointer transition hover:text-white">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
