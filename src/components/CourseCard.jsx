import React from 'react';

const CourseCard = ({ image, title, desc, instructor, role, instImage, price, rating, reviews }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-800 leading-tight mb-2">{title}</h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4">{desc}</p>
        
        {/* Instructor */}
        <div className="flex items-center gap-3 mb-4">
          <img src={instImage} alt={instructor} className="w-10 h-10 rounded-lg object-cover" />
          <div>
            <p className="text-sm font-bold text-gray-800">{instructor}</p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        </div>

        {/* Rating & Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="flex items-center">
            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
               {/* Gunakan variabel rating di sini agar tidak error */}
              \<span className="text-sm font-medium text-gray-600 ml-1">{rating}</span>
            </div>
            <span className="text-xs text-gray-400">({reviews})</span>
          </div>
          <p className="text-[#3ECF4C] font-poppins font-semibold text-[24px] leading-[120%] tracking-[0%]">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;