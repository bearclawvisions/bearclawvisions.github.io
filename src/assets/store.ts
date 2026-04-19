import { ref } from 'vue';
import { menu } from '@/assets/data.ts';
import type {Menu} from "@/assets/types.ts";

let storeInstance: ReturnType<typeof createViewStore> | null = null;

const createViewStore = () => {
    const currentView = ref<keyof Menu>(menu.home as keyof Menu);
    const showLoading = ref(true);

    const setView = (view: keyof Menu) => {
        currentView.value = view;
    };
    
    const hideLoading = () => {
        showLoading.value = false;
    }

    return { 
        currentView,
        setView,
        showLoading,
        hideLoading
    };
};

export const useViewStore = () => {
    if (!storeInstance) {
        storeInstance = createViewStore();
    }
    return storeInstance;
};