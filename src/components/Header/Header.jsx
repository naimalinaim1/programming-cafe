import React from "react";

const Header = () => {
  return (
    <header className="w-[96%] max-w-[1440px] mx-auto">
      <div className="navbar p-0 bg-base-100 border-b-2 border-base-400 py-4">
        <div className="flex-1">
          <a href="/" className="text-xl font-bold hover:text-[#6047EC]">
            Programming Cafe
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://s3-alpha-sig.figma.com/img/c7d5/7ddb/0cce11f75d37450988cb174c61b28518?Expires=1681084800&Signature=STLBBR2rfAkyEuozNig7mcyxPTe8DM7ajRICBFrL6AZjooJb8PcTr8PopepN2spMfUY~oUumuyTKqVa6URRSDgkTUcCWJLsrQo8gcrdwSQ9E9d0LIoXj84eZgkLlqqw9K0vrSVJbaSTVoq4kuhQyoH1X03gAebleYgNnolcB1bCF0Q-voYa7tENduPL1BCrTuro775hZJcJLZXJgD2VwsIeP2j8uFrp4aAD9qEP4jZiWi4b6Smg6prapwxY~q5vkFA6efD~HUhZedmxz8jHvhes2abgXgm1ErCbJ5neVVLZt9ooPR~sq3mH~eb1idyEBcEvqx9ayw3Jl8dr2iyoKaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="user image"
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
