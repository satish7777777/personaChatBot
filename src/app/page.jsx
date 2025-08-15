'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const bots = [
    {
      name: 'Hitesh Choudhary',
      image: 'https://avatars.githubusercontent.com/u/11613311?v=4',
      link: '/chat/hitesh',
      desc: 'Founder of Chai Aur Code',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      name: 'Piyush Garg',
      image: 'https://www.piyushgarg.dev/_next/image?url=%2Fimages%2Favatar.png&w=1080&q=75',
      link: '/chat/piyush',
      desc: 'Full Stack & MERN Developer',
      color: 'from-teal-500 to-emerald-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-2">GenAI Instructors</h1>
      <p className="text-gray-500 mb-10 text-center max-w-xl">
        Choose your instructor to start a conversation and learn interactively.
      </p>

      {/* Bot Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        {bots.map((bot) => (
          <div
            key={bot.name}
            onClick={() => router.push(bot.link)}
            className="group bg-white shadow-md rounded-xl p-6 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
          >
            <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${bot.color} p-[3px]`}>
              <img
                src={bot.image}
                alt={bot.name}
                className="w-full h-full rounded-full object-cover border-4 border-white"
              />
            </div>

            <h2 className="text-xl font-semibold text-center mt-5 group-hover:text-gray-900">
              {bot.name}
            </h2>
            <p className="text-sm text-gray-500 text-center mt-2">{bot.desc}</p>

            {/* Hover underline */}
            <div className="mt-4 text-center">
              <span className="inline-block text-sm font-bold text-gray-900 group-hover:underline">
                Chat Now →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
