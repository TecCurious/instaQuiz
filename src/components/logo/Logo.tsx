import Link from 'next/link';

export const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <Link href="/" className="flex items-center">
        <span className="text-yellow-500 text-2xl font-bold">InstaQuiz</span>
      </Link>
    </div>
  );
};