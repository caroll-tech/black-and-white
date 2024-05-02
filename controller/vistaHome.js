


export const vistaHome = ( req , res) => {
        console.log('Salida del home----->')
        res.render("home", {
            layout:"main",
            title : "Bienvenidos a Node Express y Handlebars 2024",
        })
}