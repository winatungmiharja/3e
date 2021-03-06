import create from 'zustand';

import { RegisterUserType, SessionUserType, TeflType } from '@/lib/type';

export interface UserType {
  id: string;
  nrp: string;
  nama: string;
  departemen: string;
  hp: string;
  toefl?: UserTeflType;
}

export type UserTeflType = TeflType & { avg_tefl: string };

const makeRegister = (data: RegisterUserType, userId: string): UserType => {
  return {
    id: userId,
    nrp: data.nrp,
    nama: data.nama,
    departemen: data.departemen,
    hp: data.hp,
  };
};

const makeSession = (data: SessionUserType): UserType => {
  return {
    id: data.id_user,
    nrp: data.nrp_user,
    nama: data.name_user,
    departemen: data.department_user,
    hp: data.hp_user,
  };
};

type UserStore = {
  user: UserType;
  setRegisterUser(data: RegisterUserType, userId: string): void;
  setSessionUser(data: SessionUserType): void;
  setAverageToefl(data: UserTeflType): void;
};

const useUserAuth = create<UserStore>((set) => ({
  user: {
    id: '',
    nrp: '',
    nama: '',
    departemen: '',
    hp: '',
  },
  setRegisterUser(data: RegisterUserType, userId: string) {
    set((state) => ({ ...state, user: makeRegister(data, userId) }));
  },
  setSessionUser(data: SessionUserType) {
    set((state) => ({ ...state, user: makeSession(data) }));
  },
  setAverageToefl(data: UserTeflType) {
    set((state) => ({ ...state, user: { ...state.user, toefl: data } }));
  },
}));

export default useUserAuth;
