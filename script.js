window.addEventListener('DOMContentLoaded',fetchData)

const valaszto=document.getElementById('valaszto');

let json=[];

valaszto.addEventListener('change',()=>{
    const kivalasztott=valaszto.value;
    if(kivalasztott==="Összes"){
        displayData(json)
    } else {
        displayData(json.filter(x=>x.category===kivalasztott))
    }


})

async function fetchData() {
    const response=await fetch('https://nodejs111.dszcbaross.edu.hu/api/news');
    json=await response.json();
    displayData(json);
}

function displayData(json){
    const tarolo=document.getElementById('tarolo');
    tarolo.innerHTML="";

    json.forEach(hirek => {
        const kartya=`
        <div class="col">
            <div class="border border-primary rounded h-100 p-3">
                <div class="fw-bold fs-3">${hirek.title}</div>
                <div class="fs-3">${hirek.details}</div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex">
                        <div class="border me-2 border-primary text-primary rounded p-2 border-2 fw-bold">${hirek.date}</div>
                        <div class="border me-2 border-primary text-primary rounded p-2 border-2 fw-bold">${hirek.category}</div>
                    </div>
                    <div><button onclick="megnyit('${hirek.link}')" class="btn btn-primary">Részletek</button></div>
                    
                </div>
            </div>
        </div>
        `
        tarolo.innerHTML+=kartya;
        //tarolo.insertAdjacentHTML('beforeend',kartya);
    });
}

function megnyit(link){
    window.open(link,"_blank")
}