import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { pageState } from '@/atoms/page';
import { screens } from "@/utils/screens";
import { Drawer } from '@/components/ui/Drawer/Drawer';
import { Screen } from '@/typings';
import DrawerItem from '@/components/ui/Drawer/DrawerItem';
import useViewingScreen from '@/utils/useViewingScreen';

function Sidebar() {
    const page = useRecoilValue(pageState);
    const setPage = useSetRecoilState(pageState);

    const currentViewing = useViewingScreen();

    const handleClickOutside = () => {
        setPage(state => ({ ...state, sidebar: false }));
    }

    return (
        <Drawer className='flex flex-col justify-center gap-2' open={page.sidebar ? "open" : 'closed'} onClickOutside={handleClickOutside}>
            {
                screens.map((screen: Screen) => (
                    <DrawerItem onClick={handleClickOutside} active={screen === currentViewing} key={screen.name} href={`#${screen.name.toLowerCase()}`} iconLeft={screen.Icon}>
                        {screen.name}
                    </DrawerItem>
                ))
            }
        </Drawer>
    )
}

export default Sidebar