import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/projects": {
    name: "projects",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex items-center border justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex items-center space-x-4">
            {" "}
            {/* Adjust space between image and text here */}
            <span className="text-xl hidden md:inline">
              <b>Maximilian Huber</b>
            </span>
          </div>
          <div className="flex flex-row space-x-6 items-center justify-center w-full md:w-auto">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="text-lg font-medium transition-all hover:text-neutral-800 dark:hover:text-neutral-400 flex align-middle relative py-1 px-3"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
