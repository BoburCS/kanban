document.addEventListener("DOMContentLoaded", function() 
{
    let checkbox = document.querySelector('.switcher input[type = "checkbox"]');
    let body = document.body;

    if (checkbox) {
        checkbox.addEventListener("change", function () 
        {
            if (this.checked) 
            {
                body.classList.add("dark-mode");
            } 
            else 
            {
                body.classList.remove("dark-mode");
            }
        });
    } 
});