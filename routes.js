const express = require('express')
const routes = express.Router()



routes.get('/Logear', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM perfil;', (err, rows)=>{
            if(err) return res.send(err)
            
            res.json(rows)
        })
    })
})

routes.get('/PerfilNombre', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT Nombre FROM perfil Where id_perfil = 1;', (err, rows)=>{
            if(err) return res.send(err)
            
            res.json(rows)
        })
    })
})

routes.get('/Perfil', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT Nombre, Email, Telefono FROM perfil Where id_perfil = 1;', (err, rows)=>{
            if(err) return res.send(err)
            
            res.json(rows)
        })
    })
})

routes.post('/Perfil', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
      
        conn.query('INSERT INTO perfil set ?;',[req.body], (err, rows)=>{
            if(err) return res.send(err)
            
            res.send("Perfil agregado!")
        })
    })
})

routes.get('/Login', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
      
        conn.query('SELECT * From perfil Where Usuario = ? and Password = ?;',[req.body], (err, rows)=>{
            if(err) return res.send(err)
            console.log(req.body)
            res.send("Perfil correcto!")
        })
    })
})

routes.put('/Perfil/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
      
        conn.query('UPDATE perfil set ? WHERE id_perfil = ?;',[req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            
            res.send("Perfil actualizado!")
        })
    })
})

module.exports = routes