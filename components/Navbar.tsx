import React from "react";
import { Navbar as Nav } from "@/components/ui/Navbar/Navbar";
import { Screen } from "@/typings";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { pageState } from "@/atoms/page";
import ScrollProgress from "@/components/ScrollProgress";
import { screens } from "@/utils/screens";
import { Button } from "@/components/ui/Button/Button";
import { GoThreeBars } from "react-icons/go";
import NavItem from "@/components/ui/Navbar/NavbarItem";
import useViewingScreen from "@/hooks/useViewingScreen";
import cn from "@/utils/cn";

function Navbar() {
  const page = useRecoilValue(pageState);
  const setPage = useSetRecoilState(pageState);

  const currentViewing = useViewingScreen();

  const handleNavigationDrawerToggle = () => {
    setPage((state) => ({
      ...state,
      navigationDrawer: !state.navigationDrawer,
    }));
  };

  if (page.navigationDrawer || page.scrollProgress >= 90) return null;

  return (
    <>
      <ScrollProgress progress={page.scrollProgress} zIndex={30} />
      <Nav
        className={cn(
          "flex items-center justify-between md:justify-center bg-background/90 supports-[backdrop-filter]:bg-background/90"
        )}
      >
        {page.scrollProgress > 10 && (
          <>
            <div className="absolute inset-0 z-[-2] bg-gradient-to-b from-stone-900/70 via-stone-800/30 to-transparent" />
            <div className="absolute inset-0 pointer-events-none z-[-1]">
              <div className="w-full h-full backdrop-blur-[100px] mask-gradient-blur" />
            </div>
          </>
        )}
        <Button
          className="ml-3 cursor-pointer md:hidden"
          onClick={handleNavigationDrawerToggle}
          iconRight={GoThreeBars}
          variant={"transparent"}
        />
        <div className="flex-row items-center justify-center hidden w-full space-x-10 text-lg xl:space-x-20 md:flex md:w-auto">
          {screens.map((screen: Screen) => (
            <NavItem
              active={screen === currentViewing}
              key={screen.name}
              href={`#${screen.name.toLowerCase()}`}
              iconLeft={screen.Icon}
            >
              {screen.name}
            </NavItem>
          ))}
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
