import { ref } from 'vue'
import { menu } from '@/assets/data.ts'

export const useViewStore = () => {
    const currentView = ref<string>(menu.home)

    const setView = (view: string) => {
        currentView.value = view
    }

    return {
        currentView,
        setView,
    }
}