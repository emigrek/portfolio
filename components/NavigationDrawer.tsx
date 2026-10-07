import React from 'react'
import { screens } from "@/utils/screens";
import { Drawer } from '@/components/ui/Drawer/Drawer';
import { Screen } from '@/typings';
import DrawerItem from '@/components/ui/Drawer/DrawerItem';

interface NavigationDrawerProps {
    open: boolean;
    onClose: () => void;
    currentViewing: Screen;
}

function NavigationDrawer({ open, onClose, currentViewing }: NavigationDrawerProps) {
    return (
        <Drawer className='flex flex-col justify-center gap-2' open={open ? "open" : 'closed'} onClickOutside={onClose}>
            {
                screens.map((screen: Screen) => (
                    <DrawerItem onClick={onClose} active={screen === currentViewing} key={screen.name} href={`#${screen.name.toLowerCase()}`} iconLeft={screen.Icon}>
                        {screen.name}
                    </DrawerItem>
                ))
            }
        </Drawer>
    )
}

export default NavigationDrawer
