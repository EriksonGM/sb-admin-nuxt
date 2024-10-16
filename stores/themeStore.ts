export const useThemeStore = defineStore('themeStore', ()=>{
    const isDark = ref(false)
    const toggleDark = () => {
        isDark.value = !isDark.value

        //document.body.classList.add('dark')

        document.documentElement.setAttribute('data-bs-theme', isDark.value ? 'dark' : 'light')

    };

    const isSidebarActive = ref(false)

    const toggleSidebar = () => {
        isSidebarActive.value = !isSidebarActive.value;
        document.body.classList.toggle('sb-sidenav-toggled');
    }
    const closeSidebar = () => isSidebarActive.value = false
    const openSidebar = () => isSidebarActive.value = true

    return{
        isDark,
        isSidebarActive,
        toggleDark,
        toggleSidebar,
        closeSidebar,
        openSidebar
    }
})