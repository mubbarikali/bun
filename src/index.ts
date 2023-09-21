import fetchUser from "./githubApi.ts";


(async ()=>{
    const userData = await fetchUser('mubbarikali');
    document.querySelector('h1').innerHTML = JSON.stringify(userData);
})();