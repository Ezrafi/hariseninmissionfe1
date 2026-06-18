import React, { useState } from 'react';

const FIELDS = [
  { label: 'Judul Kursus', name: 'title' },
  { label: 'Instruktur', name: 'instructor' },
  { label: 'Harga', name: 'price' },
  { label: 'Rating', name: 'rating' },
  { label: 'Jumlah Review', name: 'reviews' },
];

const CourseForm = ({ initialData, onSubmit, onCancel, submitting }) => {
  //  Aman — hanya jalan sekali saat mount, karena `key` di parent
  // memaksa remount setiap initialData (course) berbeda
  const [form, setForm] = useState(initialData);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(form);
  };

  return (
    <div className="flex flex-col gap-4">
      {FIELDS.map(({ label, name }) => (
        <div key={name}>
          <label className="block text-sm font-bold text-gray-700 font-dmsans mb-1">
            {label}
          </label>
          <input
            type="text"
            name={name}
            value={form[name] || ''}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-[10px] px-4 py-2 font-dmsans text-sm outline-none focus:border-[#3ECF4C] transition-colors"
          />
        </div>
      ))}

      <div>
        <label className="block text-sm font-bold text-gray-700 font-dmsans mb-1">
          Deskripsi
        </label>
        <textarea
          name="desc"
          value={form.desc || ''}
          onChange={handleChange}
          rows={3}
          className="w-full border border-gray-200 rounded-[10px] px-4 py-2 font-dmsans text-sm outline-none focus:border-[#3ECF4C] transition-colors resize-none"
        />
      </div>

      <div className="flex gap-3 mt-4">
        <button
          onClick={onCancel}
          className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-[10px] font-bold font-dmsans hover:bg-gray-50 transition-colors"
        >
          Batal
        </button>
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="flex-1 bg-[#3ECF4C] hover:bg-green-600 disabled:opacity-50 text-white py-2 rounded-[10px] font-bold font-dmsans transition-colors"
        >
          {submitting ? 'Menyimpan...' : 'Simpan Perubahan'}
        </button>
      </div>
    </div>
  );
};

export default CourseForm;