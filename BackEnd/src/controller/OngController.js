const generateUniqueID = require('../utils/generateUniqueId')
const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
   
        return response.json(ongs);
    },

    async create(request, response) {
        try {
            const {name, email, whatsapp, city, uf} = request.body;
    
            console.log(name,email,whatsapp,city,uf);
    
            const id = generateUniqueID();
    
            await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf
            })
    
            return response.json({ id });
    
        } catch (err) {
            console.log(err);
        }
    }
};