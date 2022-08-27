//document.getElementById("about").addEventListener("click", about);
//document.addEventListener('contextmenu', event => event.preventDefault());

function zero_link() {
    document.getElementById("div_introduction").style.display = "block";

    document.getElementById("div_about").style.display = "none";
    document.getElementById("div_status").style.display = "none";
    document.getElementById("div_skills").style.display = "none";
    document.getElementById("div_projects").style.display = "none";
    document.getElementById("div_creations").style.display = "none";
    document.getElementById("div_reviews").style.display = "none";

    document.getElementById("title").textContent = document.getElementById("introduction").textContent;

    document.getElementById("div_portrait").style.display = "block";

}

function first_link() {
    document.getElementById("div_introduction").style.display = "none";

    document.getElementById("div_about").style.display = "block";
    document.getElementById("div_status").style.display = "none";
    document.getElementById("div_skills").style.display = "none";
    document.getElementById("div_projects").style.display = "none";
    document.getElementById("div_creations").style.display = "none";
    document.getElementById("div_reviews").style.display = "none";

    document.getElementById("title").textContent = document.getElementById("about").textContent;

    document.getElementById("div_portrait").style.display = "block";
}

function second_link() {
    document.getElementById("div_introduction").style.display = "none";

    document.getElementById("div_about").style.display = "none";
    document.getElementById("div_status").style.display = "none";
    document.getElementById("div_status").style.display = "block";
    document.getElementById("div_skills").style.display = "none";
    document.getElementById("div_projects").style.display = "none";
    document.getElementById("div_creations").style.display = "none";
    document.getElementById("div_reviews").style.display = "none";

    document.getElementById("title").textContent = document.getElementById("status").textContent;

    document.getElementById("div_portrait").style.display = "none";
}

function third_link() {
    document.getElementById("div_introduction").style.display = "none";

    document.getElementById("div_about").style.display = "none";
    document.getElementById("div_status").style.display = "none";
    document.getElementById("div_skills").style.display = "block";
    document.getElementById("div_projects").style.display = "none";
    document.getElementById("div_creations").style.display = "none";
    document.getElementById("div_reviews").style.display = "none";

    document.getElementById("title").textContent = document.getElementById("skills").textContent;

    document.getElementById("div_portrait").style.display = "none";
}

function forth_link() {
    document.getElementById("div_introduction").style.display = "none";

    document.getElementById("div_about").style.display = "none";
    document.getElementById("div_status").style.display = "none";
    document.getElementById("div_skills").style.display = "none";
    document.getElementById("div_projects").style.display = "block";
    document.getElementById("div_creations").style.display = "none";
    document.getElementById("div_reviews").style.display = "none";

    document.getElementById("title").textContent = document.getElementById("projects").textContent;

    document.getElementById("div_portrait").style.display = "none";
}

function fifth_link() {
    document.getElementById("div_introduction").style.display = "none";

    document.getElementById("div_about").style.display = "none";
    document.getElementById("div_status").style.display = "none";
    document.getElementById("div_skills").style.display = "none";
    document.getElementById("div_projects").style.display = "none";
    document.getElementById("div_creations").style.display = "block";
    document.getElementById("div_reviews").style.display = "none";

    document.getElementById("title").textContent = document.getElementById("creations").textContent;

    document.getElementById("div_portrait").style.display = "none";
}

function sixth_link() {
    document.getElementById("div_introduction").style.display = "none";

    document.getElementById("div_about").style.display = "none";
    document.getElementById("div_status").style.display = "none";
    document.getElementById("div_skills").style.display = "none";
    document.getElementById("div_projects").style.display = "none";
    document.getElementById("div_creations").style.display = "none";
    document.getElementById("div_reviews").style.display = "block";

    document.getElementById("title").textContent = document.getElementById("reviews").textContent;

    document.getElementById("div_portrait").style.display = "none";
}

document.addEventListener("mousemove", parallax);
	function parallax(event) {
		this.querySelectorAll(".div").forEach((shift) => {
		const position = shift.getAttribute("value");
		const x = (window.innerWidth - event.pageX * position) / 90;
		const y = (window.innerHeight - event.pageY * position) / 90;

		shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
		});
	}


/*
function zero_link() {
    if(active_page != 0){
        document.getElementById("div_introduction").style.animation = "fadeIn 2s steps(40, end)";
    }

    if(active_page == 1)
    {
        document.getElementById("div_about").style.animation = "fadeOut 2s steps(40, end)";
    }else if(active_page == 2)
    {
        document.getElementById("div_skills").style.animation = "fadeOut 2s steps(40, end)";
    }
    else if(active_page == 3)
    {
        document.getElementById("div_projects").style.animation = "fadeOut 2s steps(40, end)";
    }
    else if(active_page == 4)
    {
        document.getElementById("div_creations").style.animation = "fadeOut 2s steps(40, end)";
    }
    else if(active_page == 5)
    {
        document.getElementById("div_reviews").style.animation = "fadeOut 2s steps(40, end)";
    }
    active_page = 0;

}

function first_link() {
    if(active_page != 1){
        document.getElementById("div_about").style.animation = "fadeIn 2s steps(40, end)";
    }

    if(active_page == 0)
    {
        document.getElementById("div_introduction").style.animation = "fadeOut 2s steps(40, end)";
    }

    if(active_page == 2)
    {
        document.getElementById("div_skills").style.animation = "fadeOut 2s steps(40, end)";
    }
    
    if(active_page == 3)
    {
        document.getElementById("div_projects").style.animation = "fadeOut 2s steps(40, end)";
    }
    
    if(active_page == 4)
    {
        document.getElementById("div_creations").style.animation = "fadeOut 2s steps(40, end)";
    }
    
    if(active_page == 5)
    {
        document.getElementById("div_reviews").style.animation = "fadeOut 2s steps(40, end)";
    }
    active_page = 1;

}

function second_link() {
    if(active_page != 2){
        document.getElementById("div_skills").style.animation = "fadeIn 2s steps(40, end)";
    }

    if(active_page == 0)
    {
        document.getElementById("div_introduction").style.animation = "fadeOut 2s steps(40, end)";
    }
    
    if(active_page == 1)
    {
        document.getElementById("div_about").style.animation = "fadeOut 2s steps(40, end)";
    }
    
    if(active_page == 3)
    {
        document.getElementById("div_projects").style.animation = "fadeOut 2s steps(40, end)";
    }
    
    if(active_page == 4)
    {
        document.getElementById("div_creations").style.animation = "fadeOut 2s steps(40, end)";
    }
    
    if(active_page == 5)
    {
        document.getElementById("div_reviews").style.animation = "fadeOut 2s steps(40, end)";
    }
    active_page = 2;

}

function third_link() {
    if(active_page != 3){
        document.getElementById("div_projects").style.animation = "fadeIn 2s steps(40, end)";
    }

    if(active_page == 0)
    {
        document.getElementById("div_introduction").style.animation = "fadeOut 2s steps(40, end)";
    }

    if(active_page == 1)
    {
        document.getElementById("div_about").style.animation = "fadeOut 2s steps(40, end)";
    }
    
    if(active_page == 2)
    {
        document.getElementById("div_skills").style.animation = "fadeOut 2s steps(40, end)";
    }
    
    if(active_page == 4)
    {
        document.getElementById("div_creations").style.animation = "fadeOut 2s steps(40, end)";
    }
    
    if(active_page == 5)
    {
        document.getElementById("div_reviews").style.animation = "fadeOut 2s steps(40, end)";
    }
    active_page = 3;

}

function forth_link() {
    if(active_page != 4){
        document.getElementById("div_creations").style.animation = "fadeIn 2s steps(40, end)";
    }

    if(active_page == 0)
    {
        document.getElementById("div_introduction").style.animation = "fadeOut 2s steps(40, end)";
    }

    if(active_page == 1)
    {
        document.getElementById("div_about").style.animation = "fadeOut 2s steps(40, end)";
    }
    
    if(active_page == 2)
    {
        document.getElementById("div_skills").style.animation = "fadeOut 2s steps(40, end)";
    }
    
    if(active_page == 3)
    {
        document.getElementById("div_projectss").style.animation = "fadeOut 2s steps(40, end)";
    }
    
    if(active_page == 5)
    {
        document.getElementById("div_reviews").style.animation = "fadeOut 2s steps(40, end)";
    }
    active_page = 4;

}

function fifth_link() {
    if(active_page != 5){
        document.getElementById("div_reviews").style.animation = "fadeIn 2s steps(40, end)";
    }

    if(active_page == 0)
    {
        document.getElementById("div_introduction").style.animation = "fadeOut 2s steps(40, end)";
    }
    
    if(active_page == 1)
    {
        document.getElementById("div_about").style.animation = "fadeOut 2s steps(40, end)";
    }
    
    if(active_page == 2)
    {
        document.getElementById("div_skills").style.animation = "fadeOut 2s steps(40, end)";
    }
    
    if(active_page == 3)
    {
        document.getElementById("div_projectss").style.animation = "fadeOut 2s steps(40, end)";
    }
    
    if(active_page == 4)
    {
        document.getElementById("div_creations").style.animation = "fadeOut 2s steps(40, end)";
    }
    active_page = 5;

}

*/