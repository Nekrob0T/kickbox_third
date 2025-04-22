import { defineStore } from 'pinia';

export const useLayout = defineStore('layout', {
  state: () => {
    return { sidebar: false, popup: null };
  },
  actions: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
    setPopup(obj) {
      this.popup = obj;
    },
    closePopup() {
      this.popup = null;
    },
  },
});
