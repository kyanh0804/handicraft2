window.addEventListener("load", (event) => {
    const listTarget = document.querySelectorAll('header ul li a');
    const currentPath = window.location.pathname;
    listTarget.forEach((o)=>{
        const dataToCheckActive = o.getAttribute('data-active');
        if (currentPath.includes(dataToCheckActive)) {
            o.classList.add('active-link')
        }
    })
  });