import { ref } from 'vue'
import { menu } from '@/assets/data.ts'

export const useViewStore = () => {
    const currentView = ref<string>(menu[0] || 'Home')

    const setView = (view: string) => {
        if (menu.includes(view)) {
            currentView.value = view
        }
    }

    return {
        currentView,
        setView,
    }
}