import { create } from 'zustand';
import type { AuthState, User, RegisterData } from '../types';
import { findUserByEmail, createUser } from '../services/api/authService';

const STORAGE_KEY = 'videobelajar_auth';

function loadFromStorage(): { user: User | null; token: string | null } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.user && parsed.token) {
        return { user: parsed.user, token: parsed.token };
      }
    }
  } catch {}
  return { user: null, token: null };
}

function saveToStorage(user: User, token: string) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, token }));
}

function clearStorage() {
  localStorage.removeItem(STORAGE_KEY);
}

function generateToken(): string {
  return 'tok_' + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
}

const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  login: async (email: string, password: string) => {
    set({ loading: true, error: null });
    try {
      const res = await findUserByEmail(email);
      const users = res.data;
      if (users.length === 0) {
        set({ loading: false, error: 'Email tidak ditemukan' });
        return;
      }
      const user = users[0];
      if (user.password !== password) {
        set({ loading: false, error: 'Kata sandi salah' });
        return;
      }
      const token = generateToken();
      saveToStorage(user, token);
      set({ user, isAuthenticated: true, loading: false, error: null });
    } catch (err) {
      set({ loading: false, error: 'Gagal terhubung ke server' });
    }
  },

  register: async (data: RegisterData) => {
    set({ loading: true, error: null });
    try {
      const check = await findUserByEmail(data.email);
      if (check.data.length > 0) {
        set({ loading: false, error: 'Email sudah terdaftar' });
        return;
      }
      await createUser(data);
      set({ loading: false, error: null });
    } catch (err) {
      set({ loading: false, error: 'Gagal mendaftarkan akun' });
    }
  },

  logout: () => {
    clearStorage();
    set({ user: null, isAuthenticated: false, error: null });
  },

  checkAuth: () => {
    const { user, token } = loadFromStorage();
    if (user && token) {
      set({ user, isAuthenticated: true });
    } else {
      set({ user: null, isAuthenticated: false });
    }
  },

  clearError: () => set({ error: null }),
}));

export default useAuthStore;
