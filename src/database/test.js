const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela 
//    await saveOrphanage(db, {
//     lat: "-27.222633",
//     lng: "-49.6555874",
//     name:"Lar dos meninos",
//     about: "Presta assistência para meninas de 06 a 15 anos que se encontra em situação de risco e/ou vulnerabilidade social",
//     whatsapp: "98876-9087",
//     images: [

//         "https://images.unsplash.com/photo-1600423809757-8cd9d249bd63?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
//         "https://unsplash.com/photos/OyCl7Y4y0Bk"
//     ].toString(),
//     instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
//     opening_hours: "Horário de visitas Das 18h até 8h",
//     open_on_weekends: "0"
       
//    })

   //consultar dados da tabela 
   const selectedOrphanages = await db.all("SELECT * FROM orphanages")
   console.log(selectedOrphanages)

    //consultar somente 1 orfanato, pelo id
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    //console.log()

    //deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id ='2'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id ='5'")) 
})
