import { FaTrophy, FaChartLine } from 'react-icons/fa';
import { ProgressStats } from '@/types/quize';
import { TbHistoryToggle } from "react-icons/tb";
import Link from 'next/link';
interface ProgressCardProps {
  stats: ProgressStats;
}

const ProgressCard = ({ stats }: ProgressCardProps) => {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Progress</h2>
        <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
          <div>
            <p className="text-gray-600">Quizzes Completed</p>
            <p className="text-2xl font-bold text-gray-800">{stats.quizzesCompleted}</p>
          </div>
          <FaTrophy className="text-yellow-500 text-3xl" />
        </div>
        <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
          <div>
            <p className="text-gray-600">Average Score</p>
            <p className="text-2xl font-bold text-gray-800">{stats.averageScore}%</p>
          </div>
          <FaChartLine className="text-yellow-500 text-3xl" />
        </div>
       <Link href={"/history"}> <button className='bg-yellow-500 text-white p-2 rounded-md font-semibold flex items-center hover:bg-yellow-600 gap-2 ml-14 mt-4 md:ml-0 '> <TbHistoryToggle/>History</button></Link>
      </div>
    </div>
  );
};

export default ProgressCard;