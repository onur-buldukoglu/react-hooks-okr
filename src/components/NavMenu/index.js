import { Link, NavLink } from 'react-router-dom';

import toCapitalize from '../../libs/helpers/toCapitalize';
import { routes } from '../../libs/router';

function NavMenu() {
  function generateNavMenuLinks(routeList) {
    return routeList
      .filter((route) => route.path.includes('use'))
      .reduce((acc, curr) => {
        const navMenuLinkObject = {
          path: `/${curr.path}`,
          label: curr.path
            .split('-')
            .map((word) => (word === 'use' ? word : toCapitalize(word)))
            .join(''),
        };

        acc.push(navMenuLinkObject);

        return acc;
      }, []);
  }

  const NavMenuRoutes = generateNavMenuLinks(routes);

  return (
    <div className="flex flex-col px-4 py-12">
      <Link to={'/'} className="text-3xl border-b border-neutral-400 mb-4">
        React Hooks
      </Link>
      {NavMenuRoutes.map((route) => (
        <NavLink
          key={route.path}
          to={route.path}
          className={({ isActive }) =>
            isActive
              ? 'font-bold underline text-lg p-2'
              : 'hover:bg-neutral-800 hover:text-neutral-200 hover:border-neutral-200 p-2 rounded'
          }
        >
          {route.label}
        </NavLink>
      ))}
    </div>
  );
}

export default NavMenu;
