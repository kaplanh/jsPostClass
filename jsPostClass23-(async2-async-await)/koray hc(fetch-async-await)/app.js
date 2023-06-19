

const api = "https://api.github.com/users"

let yeniData = []

fetch("https://api.github.com/users").then((response)=>{


    // //false ise
    if(!response.ok){

        throw new Error('hata var')
       
    }
    //true ise
    else{

        return response.json()
    }

    // return response.json()

}).then((data) =>{

    console.log(data);

    domaYaz(data)

}).catch((err)=>{

    const ht = document.querySelector('.hata')
    ht.textContent=err

})


const domaYaz=(data)=>{

  
    const usr = document.querySelector('.users')

    data.forEach(element => {
        
    usr.innerHTML +=`
    
        <li>${element.login}</li>
    `
        
    });

}


//! AWAIT YAPISI


window.addEventListener('load',()=> {
    getData();
})

const getData=async ()=>{



    try {
        
        const response=await fetch("https://api.github.com/users")

        if(!response.ok){

            throw new Error('hata var')
        }
        else{

            const data = await  response.json()

            console.log(data);
            domaYaz2(data)
            
        }

    } catch (error) {
        console.log(error);
    }
    

}


// getData()


const domaYaz2=(gelenData)=>{

    const usr = document.querySelector('.users')

    gelenData.map(elemets =>{


        usr.innerHTML +=`

           
            <li><img src="${elemets.avatar_url}" alt="" width="100px" ></li>
        
        `
    })

}
