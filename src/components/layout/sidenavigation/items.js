import Link from 'next/link';
import { useRouter } from 'next/router';

import { adminData, userData } from './data';
import { useToggle } from '../provider/context';

const style = {
  title: `mx-4 text-md`,
  active: `bg-primary-500 rounded-full text-white`,
  link: `flex items-center justify-start my-1 p-3 w-full hover:text-primary-500 z-20`,
  close: `lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all`,
};

export default function SidenavItems({ isAdmin }) {
  const { asPath } = useRouter();
  const { open } = useToggle();
  const data = isAdmin ? adminData : userData;
  return (
    <ul className='relative z-40 md:pl-3 bg-primary-100'>
      <li>
        {data.map((item) => (
          <Link href={item.link} key={item.title}>
            <a className={style.link}>
              <div
                className={`p-2 ${item.link === asPath ? style.active : ''}`}
              >
                <span>{item.icon}</span>
              </div>
              <span className={`${style.title} ${open ? '' : style.close}`}>
                {item.title}
              </span>
            </a>
          </Link>
        ))}
      </li>
    </ul>
  );
}
