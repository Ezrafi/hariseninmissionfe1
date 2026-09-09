import axios from 'axios';
import type { User, RegisterData } from '../../types';

const AUTH_BASE_URL = 'https://6a115ed23e35d0f37ee332ad.mockapi.io';

const authApi = axios.create({
  baseURL: AUTH_BASE_URL,
  timeout: 10000,
});

export const findUserByEmail = async (email: string): Promise<{ data: User[] }> => {
  try {
    const res = await authApi.get<User[]>('/users', { params: { email } });
    return res;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response?.status === 404) {
      return { data: [] };
    }
    throw err;
  }
};

export const createUser = (data: RegisterData) => {
  const params = new URLSearchParams();
  params.append('name', data.name);
  params.append('email', data.email);
  params.append('password', data.password);
  if (data.phone) params.append('phone', data.phone);
  params.append('createdAt', new Date().toISOString());
  return authApi.post<User>('/users', params);
};

export const getUserById = (id: string) =>
  authApi.get<User>(`/users/${id}`);
