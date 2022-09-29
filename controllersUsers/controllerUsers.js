const fetch = require('node-fetch-commonjs')

const getUsers = (req, res) => {
    fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(data => {
        res.render("users", {
            users:data
        })
    })
}

const getForm = (req, res) => {
    res.render('formUsers')
}

const saveUsers = async(req, res) => {

    try {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                edad: req.body.edad,
                id: Date.now()
            })
        }
    
        fetch('http://localhost:3000/users', options)

        res.redirect('/users/lista')
        
    } catch (error) {
        console.log(error);
    }
}

const putFormUsers = (req, res) => {

    fetch("http://localhost:3000/users/"+req.params.id)
    .then(response => response.json())
    .then(data => {
        res.render("putFormUsers", {
            user:data
        })
    })

}

const deleteUser = (req, res) => {
    fetch("http://localhost:3000/users/"+req.params.id)
    .then(response => response.json())
    .then(data => {
        res.render("detailUser", {
            user:data
        })
    })

}

module.exports = {
    getUsers,
    getForm,
    saveUsers,
    putFormUsers,
    deleteUser
} 