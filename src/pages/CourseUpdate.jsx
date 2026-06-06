import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCourseById, updateCourse } from '../services/api/courseService';

const CourseUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    instructor: '',
    price: '',
    rating: '',
    reviews: '',
    desc: '',
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  // ✅ Sekarang selalu fetch dari MockAPI pakai id
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const res = await getCourseById(id);
        setForm(res.data);
      } catch (err) {
        console.error('Gagal memuat kursus:', err.message);
        setError('Gagal memuat data kursus.');
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setSaving(true);
      await updateCourse(id, form);
      navigate(-1);
    } catch (err) {
      console.error('Gagal menyimpan perubahan:', err.message);
      setError('Gagal menyimpan perubahan.');
    } finally {
      setSaving(false);
    }
  };

  // State loading
  if (loading) return (
    <div className="max-w-[600px] mx-auto px-4 py-[64px] text-center">
      <p className="text-gray-500 font-dmsans">Memuat data kursus...</p>
    </div>
  );

  // State error
  if (error) return (
    <div className="max-w-[600px] mx-auto px-4 py-[64px] text-center">
      <p className="text-red-500 font-dmsans">{error}</p>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 text-sm text-gray-500 underline font-dmsans"
      >
        Kembali
      </button>
    </div>
  );

  return (
    <div className="max-w-[600px] mx-auto px-4 py-[64px]">
      <h1 className="text-[28px] font-bold font-poppins mb-2">Edit Kursus</h1>
      <p className="text-gray-500 font-dmsans mb-8">
        ID Kursus: <span className="font-mono text-sm">{id}</span>
      </p>

      <div className="flex flex-col gap-4">
        {[
          { label: 'Judul Kursus', name: 'title' },
          { label: 'Instruktur', name: 'instructor' },
          { label: 'Harga', name: 'price' },
          { label: 'Rating', name: 'rating' },
          { label: 'Jumlah Review', name: 'reviews' },
        ].map(({ label, name }) => (
          <div key={name}>
            <label htmlFor={name} className="block text-sm font-bold text-gray-700 font-dmsans mb-1">
              {label}
            </label>
            <input
              id={name}
              type="text"
              name={name}
              value={form[name] || ''}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-[10px] px-4 py-2 font-dmsans text-sm outline-none focus:border-[#3ECF4C] transition-colors"
            />
          </div>
        ))}

        <div>
          <label htmlFor="desc" className="block text-sm font-bold text-gray-700 font-dmsans mb-1">
            Deskripsi
          </label>
          <textarea
            id="desc"
            name="desc"
            value={form.desc || ''}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-200 rounded-[10px] px-4 py-2 font-dmsans text-sm outline-none focus:border-[#3ECF4C] transition-colors resize-none"
          />
        </div>

        <div className="flex gap-3 mt-4">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-[10px] font-bold font-dmsans hover:bg-gray-50 transition-colors"
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            disabled={saving}
            className="flex-1 bg-[#3ECF4C] hover:bg-green-600 disabled:opacity-50 text-white py-2 rounded-[10px] font-bold font-dmsans transition-colors"
          >
            {saving ? 'Menyimpan...' : 'Simpan Perubahan'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseUpdate;