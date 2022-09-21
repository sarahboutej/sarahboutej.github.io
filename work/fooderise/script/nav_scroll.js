
// Toggle the .bg-white class when the user scroll 100px 

window.onscroll = () => {scrollNavBar()};

scrollNavBar = ()  => {

  const navBar = document.getElementById('navbar');
  const shopBadge = document.getElementById('shopping-badge');
  const shopBadgeMobile = document.getElementById('shopping-badge-mobile');
  const bookingBtn = document.getElementById('booking-btn');
  const logoLetter = document.getElementById('logo-letter');
  if ( document.documentElement.scrollTop > 100) {
    navBar.classList.add('bg-white', 'shadow-md');
    shopBadge.classList.add('bg-primary');
    shopBadgeMobile.classList.add('bg-primary');
    bookingBtn.classList.add('bg-primary', 'text-white');
    logoLetter.classList.add('text-primary');
  } else {
    navBar.classList.remove('bg-white', 'shadow-md');
    shopBadge.classList.remove('bg-primary');
    shopBadgeMobile.classList.remove('bg-primary');
    bookingBtn.classList.remove('bg-primary', 'text-white');
    logoLetter.classList.remove('text-primary');
  }

}
