const d = document;
const $input = d.getElementById("search");
const $main = d.querySelector("main");

const showSearch = (query) =>{
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        for(let i = 0; i < data.length; i++){
            $main.innerHTML += `
                    <figure class= "show">
                        <h2>${data[i].show.name}</h2>
                        <p>${data[i].show.summary}</p>
                        <img src="${data[i].show.image.medium}" alt="${data[i].show.name}">
                    </figure>
                    `;
        }
    })
}

$input.addEventListener('keypress', e =>{
     
    if(e.key === "Enter"){
        e.preventDefault();
        showSearch($input.value.toLowerCase());    
    }
})

$input.addEventListener("click", e =>{
    $main.innerHTML = "";
})



