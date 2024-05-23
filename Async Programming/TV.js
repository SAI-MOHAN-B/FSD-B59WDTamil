document.querySelector("button").addEventListener("click",result)

async function result(){
    try {
        var ask = document.getElementById("Shows").value; 
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${ask}`);
        var res = await data.json();
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
