'use strict'
const Route = use('Route')
const Database = use('Database')
const User = use('App/Models/User')
class DatosChatController {

    async GetAllUser() //traer todos los usuarios
    {
        return await Database.select('*').from('users')
    }

    async GetAllGroups() //traer todos los grupos
    {
        return await Database.select('*').from('grupos')
    }

    async GetUser({ params, response })//solo un usuario
    {
        if (!params.id) {
            return response.json({ status: 200, data: 'id vacios' })
        }
        else {
            return await Database.select('*').from('users').where('id', params.id)
        }
    }

    async GetGroup({ params, response })//solo un grupo
    {
        if (!params.id) {
            return response.json({ status: 200, data: 'id vacios' })
        }
        else {
            return await Database.select('*').from('grupo').where('id', params.id)
        }
    }
    async GetChat({ params, response })//solo un grupo
    {
        if (!params.id) {
            return response.json({ status: 200, data: 'id vacios' })
        }
        else {
            return await Database.select('*').from('grupo').where('id', params.id)
        }
    }

    async AddUser({ params, request, response }) {
        if (!request.input('usu') || !request.input('email') || !request.input('psw') ) {
            return response.json({ status: 200, data: 'Campos vacios' })
        }
        else {
            

            const user = new User()
            user.username = request.input('usu')
            user.email = request.input('email')
            user.password = request.input('psw')

           return await user.save()
            // return await Database.table('users')
            //     .insert({
            //         username: request.input('usu'),
            //         email: request.input('email'),
            //         password: request.input('psw')
            //     }).returning('id')
        }
    }

    async Login({ params, request, response,auth }) {
        if (!request.input('usu') || !request.input('psw') ) {
            return response.json({ status: 200, data: 'Campos vacios' })
        }
        else {
            return { 
                sesion: await auth
                    .withRefreshToken()
                    .attempt(request.input('usu'), request.input('psw')),
                user: await User
                    .query()
                    .where('username',request.input('usu'))
                    .first()
            }
        }
    }
    async UpdateConect({ params, request ,response })//editar conectado
    {
        if (!request.input('conect')) 
        {
            return response.json({ status:200,data:'Campos vacios'})      
        }
        else
        {
            return await Database.select('*').from('users').where('id', params.id)
            .update({
                conectado: request.input('conect')
            })
        }
    }

    async AddGroup({ params, request, response }) //añadir usuario
    {
        if (!request.input('Nom') || !request.input('inte')|| !request.input('mens')) {
            return response.json({ status: 200, data: 'Campos vacios' })
        }
        else {
            return await Database.table('grupo')
                .insert({
                    numero: request.input('Num'),
                    nombre: request.input('Nom'),
                    integrantes: request.input('inte'),
                    Mensage: request.input('mens')
                }).returning('id')
        }
    }

    async AddChat({ params, request, response }) //añadir usuario
    {
        if (!request.input('Nom') || !request.input('inte') || !request.input('mens') || !request.input('fecha')) {
            return response.json({ status: 200, data: 'Campos vacios' })
        }
        else {
            return await Database.table('chat')
                .insert({
                    recivido: request.input('rec'),
                    enviado: request.input('env'),
                    mensage: request.input('mens'),
                    fecha: request.input('fecha'),
                }).returning('id')
        }
    }
}

module.exports = DatosChatController
