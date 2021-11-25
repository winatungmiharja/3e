import { AiOutlineDatabase } from 'react-icons/ai';
import { FiHome } from 'react-icons/fi';
import { GrScorecard } from 'react-icons/gr';
import { RiLogoutCircleLine } from 'react-icons/ri';
export const adminData = [
  {
    title: 'Home',
    icon: <FiHome size={25} />,
    link: '/admin/home',
  },
  {
    title: 'Rekap Nilai TEFL',
    icon: <GrScorecard size={25} />,
    link: '/admin/tefl',
  },
  {
    title: 'Rekap Data User',
    icon: <AiOutlineDatabase size={25} />,
    link: '/admin/data',
  },
  {
    title: 'Logout',
    icon: <RiLogoutCircleLine size={25} />,
    link: '/logout',
  },
];

export const userData = [
  {
    title: 'Home',
    icon: <FiHome size={25} />,
    link: '/user/home',
  },
  {
    title: 'Pengisian Tefl',
    icon: <GrScorecard size={25} />,
    link: '/user/tefl',
  },
  {
    title: 'Logout',
    icon: <RiLogoutCircleLine size={25} />,
    link: '/logout',
  },
];
