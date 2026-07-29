import { useNavigate } from 'react-router-dom';
import type { CourseCardProps } from '../types';

const CourseCard = ({
  id, image, title, desc, instructor, role,
  instImage, price, rating, reviews, onDelete
}: CourseCardProps) => {
  const navigate = useNavigate();

  const handleEdit = () => {
  navigate(`/courses/edit/${id}`);
};

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow relative">

      <div className="absolute top-2 right-2 flex gap-1 z-10">
        <button
          onClick={handleEdit}
          className="bg-blue-500 hover:bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-colors"
          title="Edit Kursus"
        >
          ✏️
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-colors"
          title="Hapus Kursus"
        >
          🗑️
        </button>
      </div>

      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-800 leading-tight mb-2">{title}</h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4">{desc}</p>

        <div className="flex items-center gap-3 mb-4">
          <img src={instImage} alt={instructor} className="w-10 h-10 rounded-lg object-cover" />
          <div>
            <p className="text-sm font-bold text-gray-800">{instructor}</p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            <span className="text-sm font-medium text-gray-600 ml-1">{rating}</span>
            <span className="text-xs text-gray-400">({reviews})</span>
          </div>
          <p className="text-[#3ECF4C] font-poppins font-semibold text-[24px] leading-[120%]">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
