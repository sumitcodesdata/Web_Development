let apiKey= "f3078aa2b5cfca7a98b1412f7e166c18";
const btn = document.querySelector("#btn");
const inp =document.querySelector("#inp");

const geoUrl = (cityName) => {
    return ''
};
btn.addEventListener("click",() => {
    // console.log(inp.value.trim());
    let value = inp.value.trim();
    let url = geoUrl(inp,value);
    inp.value ="";
    

});