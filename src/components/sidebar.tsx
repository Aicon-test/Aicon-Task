import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const Sidebar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const sideLink = [
    {
      to: '/',
      icon: <Icon icon="ic:round-dashboard" color="white" />,
      name: 'Dashboard',
    },
    {
        to: '/table',
        icon: <Icon icon="mdi:table" color="white" />,
        name: 'Table',
      },
      {
        to: '/',
        icon: <Icon icon="ph:folder" color="white" />,
        name: 'Folder',
      },
      {
        to: '/',
        icon: <Icon icon="clarity:list-line" color="white" />,
        name: 'List',
      },
      {
        to: '/',
        icon: <Icon icon="material-symbols:list-alt-add-sharp" color="white" />,
        name: 'Add List',
      },
      {
        to: '/',
        icon: <Icon icon="lucide:network" color="white" />,
        name: 'network',
      },
      {
        to: '/',
        icon: <Icon icon="lucide:users" color="white" />,
        name: 'Users',
      },
      {
        to: '/',
        icon: <Icon icon="mingcute:user-security-line" color="white" />,
        name: 'Security',
      },
      {
        to: '/',
        icon: <Icon icon="ri:question-line" color="white" />,
        name: 'Help',
      },
      {
        to: '/',
        icon: <Icon icon="ant-design:star-twotone" color="white" />,
        name: 'Favorite',
      },
  ];

  return (
    <div className={` h-full ${open ? 'w-40' : 'w-20'} bg-sky-700 p-5 pt-8 relative duration-300`}>
      <img
        src="https://w7.pngwing.com/pngs/654/136/png-transparent-arrow-computer-icons-encapsulated-postscript-left-arrow-angle-rectangle-black.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 rounded-full ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)}
        alt="Toggle Sidebar"
      />
      {sideLink.map((element, index) => {
        return (
          <div key={index}>
            <div className="space-y-2 font-{24px} font-montserrat">
              <Link href={element.to}>
                <div
                  className={`flex mt-4 rounded-md p-2 cursor-pointer hover:bg-bgBtn active:bg-bgBtn text-bgTwo items-center font-{24px} font-montserrat gap-x-4 ${router.pathname === element.to ? 'bg-bgBtn' : ''}`}
                >
                  <span>{element.icon}</span>
                  <h1 className={`${!open && 'hidden'} origin-left duration-200`}>{element.name}</h1>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
      
      
    </div>
  );
};

export default Sidebar;