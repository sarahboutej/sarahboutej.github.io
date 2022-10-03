
// Toggle the .bg-white class when the user scroll 100px 

window.onscroll = () => {scrollNavBar()};

scrollNavBar = ()  => {

  const navBar = document.getElementById('navbar');
  if ( document.documentElement.scrollTop > 100) {
    navBar.classList.add('bg-white', 'shadow-md');
  } else {
    navBar.classList.remove('bg-white', 'shadow-md');
  }

}

