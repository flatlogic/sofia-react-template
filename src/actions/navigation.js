export const OPEN_SIDEBAR = 'OPEN_SIDEBAR';
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';
export const CHANGE_ACTIVE_SIDEBAR_ITEM = 'CHANGE_ACTIVE_SIDEBAR_ITEM';

export function openSidebar() {
  return {
    type: OPEN_SIDEBAR,
  };
}

export function closeSidebar() {
  return {
    type: CLOSE_SIDEBAR,
  };
}

export function changeActiveSidebarItem(activeItem) {
  return {
    type: CHANGE_ACTIVE_SIDEBAR_ITEM,
    activeItem,
  };
}
