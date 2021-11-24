import create from 'zustand';

import { RegisterAdminType, SessionAdminType } from '@/lib/type';

export interface AdminType {
  id: string;
  nip: string;
  nama: string;
}

const makeRegister = (data: RegisterAdminType, userId: string): AdminType => {
  return {
    id: userId,
    nip: data.nip,
    nama: data.nama,
  };
};

const makeSession = (data: SessionAdminType): AdminType => {
  return {
    id: data.id_admin,
    nip: data.nip_admin,
    nama: data.name_admin,
  };
};

type AdminStore = {
  admin: AdminType;
  setRegisterAdmin(data: RegisterAdminType, userId: string): void;
  setSessionAdmin(data: SessionAdminType): void;
};

const useAdminAuth = create<AdminStore>((set) => ({
  admin: {
    id: '',
    nip: '',
    nama: '',
  },
  setRegisterAdmin(data: RegisterAdminType, adminId: string) {
    set((state) => ({ ...state, admin: makeRegister(data, adminId) }));
  },
  setSessionAdmin(data: SessionAdminType) {
    set((state) => ({ ...state, admin: makeSession(data) }));
  },
}));

export default useAdminAuth;
