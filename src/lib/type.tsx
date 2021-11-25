export type RegisterUserType = {
  nrp: string;
  nama: string;
  departemen: string;
  hp: string;
  password: string;
};

export type RegisterAdminType = {
  nip: string;
  nama: string;
  password: string;
};

export interface SessionUserType {
  nrp_user: string;
  name_user: string;
  id_user: string;
  department_user: string;
  hp_user: string;
}

export type SessionAdminType = {
  nip_admin: string;
  name_admin: string;
  id_admin: string;
};

export type LoginUserType = {
  nrp: string;
  password: string;
};

export type LoginAdminType = {
  nip: string;
  password: string;
};

export type TeflType = {
  listening_tefl: string;
  grammar_tefl: string;
  reading_tefl: string;
};
