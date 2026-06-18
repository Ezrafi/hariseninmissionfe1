import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useCourseStore from '../store/courseStore';
import CourseForm from '../components/CourseForm';

const CourseUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { selectedCourse, loading, error, fetchCourseById, editCourse } = useCourseStore();

  useEffect(() => {
    fetchCourseById(id);
  }, [id, fetchCourseById]);

  const handleSubmit = async (formData) => {
    await editCourse(id, formData);
    navigate(-1);
  };

  if (loading) return (
    <div className="max-w-[600px] mx-auto px-4 py-[64px] text-center">
      <p className="text-gray-500 font-dmsans">Memuat data kursus...</p>
    </div>
  );

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

  //  Belum ada data sama sekali (misal masih fetching pertama kali)
  if (!selectedCourse) return null;

  return (
    <div className="max-w-[600px] mx-auto px-4 py-[64px]">
      <h1 className="text-[28px] font-bold font-poppins mb-2">Edit Kursus</h1>
      <p className="text-gray-500 font-dmsans mb-8">
        ID Kursus: <span className="font-mono text-sm">{id}</span>
      </p>

      {/*  key memaksa remount CourseForm setiap selectedCourse.id berubah,
          jadi useState di dalamnya aman di-initialize dari props sekali saja */}
      <CourseForm
        key={selectedCourse.id}
        initialData={selectedCourse}
        onSubmit={handleSubmit}
        onCancel={() => navigate(-1)}
        submitting={loading}
      />
    </div>
  );
};

export default CourseUpdate;