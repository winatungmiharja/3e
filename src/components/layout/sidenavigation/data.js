import { FiFeather, FiHome, FiPenTool } from 'react-icons/fi';

export const adminData = [
  {
    title: 'Home',
    icon: <FiHome size={25} />,
    link: '/admin/home',
  },
  {
    title: 'Rekap Nilai TEFL',
    icon: <FiPenTool size={25} className='-rotate-90' />,
    link: '/craft',
  },
  {
    title: 'Rekap Data User',
    icon: <FiFeather size={25} />,
    link: '/forest',
  },
];

export const userData = [
  {
    title: 'Home',
    icon: <FiHome size={25} />,
    link: '/admin/home',
  },
  {
    title: 'Pengisian Tefl',
    icon: <FiPenTool size={25} className='-rotate-90' />,
    link: '/admin/tefl',
  },
  {
    title: 'Belajar',
    icon: <FiFeather size={25} />,
    link: '/admin/data',
  },
];
