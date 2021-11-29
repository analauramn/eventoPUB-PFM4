const Evento_DAO = require('../DAO/Evento_DAO')
const Evento = require('../model/evento')
const Valida_Id = require('../model/valida_Id')

const evento = (app, bdEvento) => {
    const evento_Dao = new Evento_DAO(bdEvento);
    app.get('/evento', async (req, res) => {
        try {
            const respEvento = await evento_Dao.select_evento();
            res.status(200).json(respEvento)
        } catch (error) {
            res.status(404).json({ error })
        }
    })

    app.get('/evento/:id', async (req, res) => {
        try {
            const id = req.params.id
            const respEvento = await evento_Dao.select_evento_id(id);
            res.status(200).json(respEvento)
        } catch (error) {
            res.status(404).json({ error })
        }
    })

    app.post('/evento', async (req, res) => {
        const body = req.body
        try {
            const novoEvento = new Evento(body.NOME_EVENTO, body.QTD_PESSOAS, body.ATRACOES, body.TIPO_INGRESSO, body.VALOR)
            const respNovoEvento = await evento_Dao.insert_evento(novoEvento);
            res.status(200).json(respNovoEvento)
        } catch (error) {
            res.status(404).json({ error })
        }
    })

    app.put('/evento/:id', async (req, res) => {
        const id = req.params.id;
        const body = req.body
        try {
            const respEvento = await evento_Dao.select_evento_id(id);
            const confirmaId = new Valida_Id (respEvento.eventos.length)
            if (confirmaId.id === -1) {
               res.send("Evento não encontrado")
            } else {
                const novoEvento = new Evento(body.NOME_EVENTO, body.QTD_PESSOAS, body.ATRACOES, body.TIPO_INGRESSO, body.VALOR)
                const respNovoEvento = await evento_Dao.update_evento(id, novoEvento);
                res.status(200).json(respNovoEvento)
            }
            } catch (error) {
            res.status(404).json({ error })
            }
    })

    app.delete('/delete/:id', async (req, res) => {
        const id = req.params.id;
        try {
            const respEvento = await evento_Dao.select_evento_id(id);
            const confirmaId = new Valida_Id (respEvento.eventos.length)
            if (confirmaId.id === -1) {
               res.send("Evento não encontrado")
            } else {
            const respNovoEvento = await evento_Dao.delete_evento(id);
            res.status(200).json(respNovoEvento)
            }
        } catch (error) {
            res.status(404).json({ error })
        }
    })



}


module.exports = evento