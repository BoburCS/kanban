let checkbox = document.querySelector('.switcher input[type = "checkbox"]');
let body = document.body;
let logoSVG = document.querySelector(".logoSVG");

if (checkbox) 
{
	checkbox.addEventListener("change", function () 
    {
		if (this.checked) 
        {
			body.classList.add("dark-mode");
            logoSVG.src = "../../../assets/icons/icon-logo-kanban-dark.svg";
		} 
        else 
        {
			body.classList.remove("dark-mode");
            logoSVG.src = "../../../assets/icons/icon-logo-kanban.svg";
		}
	});
}
