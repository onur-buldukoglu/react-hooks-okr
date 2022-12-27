import NavMenu from '../NavMenu';

function Layout({ children }) {
  return (
    <div className="w-full flex">
      <div className="w-1/5 sticky top-0 overflow-hidden border-r bg-neutral-100 text-neutral-800 border-neutral-200 h-screen">
        <NavMenu />
      </div>
      <div className="flex flex-1 p-4 m-8 border rounded bg-neutral-100 text-neutral-800 border-neutral-200 min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default Layout;
