// utils/useDynamicCss.ts
import { useEffect } from 'react';

function useDynamicCss() {
    function setDynamicHeight(item1: HTMLElement | null, item2: HTMLElement | null) {
        if (item1 && item2) {
            item2.style.height = `calc(100vh - ${item1.offsetHeight}px)`;
        }
    }

    return setDynamicHeight;
}

export default useDynamicCss;
