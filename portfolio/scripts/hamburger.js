const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile_nav');

menu_btn.addEventListener('click', toggleSidebar)

export function toggleSidebar() {
	menu_btn.classList.toggle('is_active');
	mobile_menu.classList.toggle('is_active');
	if (menu_btn.classList.contains('is_active'))
		document.body.style.overflow = 'hidden';
	else document.body.style.overflow = '';
}
