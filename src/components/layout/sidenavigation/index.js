import css from './style.module.css';

import SidenavHeader from './header';
import SidenavItems from './items';
import { useToggle } from '../provider/context';

const style = {
  mobilePosition: {
    left: 'left-0 ',
    right: 'right-0 lg:left-0',
  },
  close: `duration-500 ease-out hidden transition-all lg:w-24`,
  open: ` duration-300 ease-in transition-all w-8/12 z-40 sm:w-5/12 md:w-64`,
  default: `h-screen overflow-y-auto overflow-x-hidden text-white top-0  bg-primary-100    lg:block lg:z-40 pr-2`,
};

export default function SideNavigation({ mobilePosition, isAdmin, isUser }) {
  const { open, ref } = useToggle();
  return (
    <aside
      ref={ref}
      className={`${style.default} ${style.mobilePosition[mobilePosition]} 
        ${open ? style.open : style.close} ${css.scrollbar}`}
    >
      <div className='z-10 h-full pb-32 text-black border-r-2 border-dashed shadow-lg bg-primary-100 lg:pb-12 border-primary-500'>
        <SidenavHeader />
        <SidenavItems isAdmin={isAdmin} isUser={isUser} />
      </div>
      <div
        className={'absolute top-0 bottom-0 z-0 bg-primary-100 -right-10 '}
      ></div>
    </aside>
  );
}
