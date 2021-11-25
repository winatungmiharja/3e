import {
  LoginAdminType,
  LoginUserType,
  RegisterAdminType,
  RegisterUserType,
  TeflType,
} from './type';

export const registerUser = async (data: RegisterUserType) => {
  const url =
    'https://cors-anywhere.herokuapp.com/https://toefl-3e.herokuapp.com/auth/users/register.php';
  const newData = {
    nrp_user: data.nrp,
    name_user: data.nama,
    department_user: data.departemen,
    hp_user: data.hp,
    password_user: data.password,
  };
  const res = await fetch(url, {
    body: JSON.stringify(newData),
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = await res.json();
  return resData;
};

export const registerAdmin = async (data: RegisterAdminType) => {
  const url =
    'https://cors-anywhere.herokuapp.com/https://toefl-3e.herokuapp.com/auth/admin/register.php';
  const newData = {
    nip_admin: data.nip,
    name_admin: data.nama,
    password_admin: data.password,
  };
  const res = await fetch(url, {
    body: JSON.stringify(newData),
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = await res.json();
  return resData;
};

export const sessionUser = async (data: string) => {
  const url =
    'https://cors-anywhere.herokuapp.com/https://toefl-3e.herokuapp.com/auth/users/getDataRegister.php';
  const newData = {
    id_session_user: data,
  };
  const res = await fetch(url, {
    body: JSON.stringify(newData),
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Origin: 'http://localhost:3000/',
    },
  });
  const resData = await res.json();
  return resData;
};

export const sessionAdmin = async (data: string) => {
  const url =
    'https://cors-anywhere.herokuapp.com/https://toefl-3e.herokuapp.com/auth/admin/getDataRegister.php';
  const newData = {
    id_session_admin: data,
  };
  const res = await fetch(url, {
    body: JSON.stringify(newData),
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Origin: 'http://localhost:3000/',
    },
  });
  const resData = await res.json();
  return resData;
};

export const loginUser = async (data: LoginUserType) => {
  const url =
    'https://cors-anywhere.herokuapp.com/https://toefl-3e.herokuapp.com/auth/users/login.php';
  const newData = {
    nrp_user: data.nrp,
    password_user: data.password,
  };
  const res = await fetch(url, {
    body: JSON.stringify(newData),
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = await res.json();
  return resData;
};

export const loginAdmin = async (data: LoginAdminType) => {
  const url =
    'https://cors-anywhere.herokuapp.com/https://toefl-3e.herokuapp.com/auth/admin/login.php';
  const newData = {
    nip_admin: data.nip,
    password_admin: data.password,
  };
  const res = await fetch(url, {
    body: JSON.stringify(newData),
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = await res.json();
  return resData;
};

export const postTeflData = async (data: TeflType, id: string) => {
  const url =
    'https://cors-anywhere.herokuapp.com/https://toefl-3e.herokuapp.com/tefl/inputTefl.php';
  const newData = {
    id_user: id,
    ...data,
  };
  const res = await fetch(url, {
    body: JSON.stringify(newData),
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = await res.json();
  return resData;
};

export const fetchAllTefl = async () => {
  const url = 'https://toefl-3e.herokuapp.com/tefl/getTefl.php';

  const res = await fetch(url, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = await res.json();
  return resData;
};

export const fetchAllUser = async () => {
  const url = 'https://toefl-3e.herokuapp.com/users/getDataUser.php';

  const res = await fetch(url, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = await res.json();
  return resData;
};

export const fetchUserHistory = async (id: string) => {
  const url =
    'https://cors-anywhere.herokuapp.com/https://toefl-3e.herokuapp.com/tefl/getTefl.php';
  const newData = {
    id_user: id,
  };
  const res = await fetch(url, {
    body: JSON.stringify(newData),
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = await res.json();
  return resData;
};
