class EventoDAO {
    constructor(bdEvento) {
        this._bdEvento = bdEvento

    }
    select_evento() {
        return new Promise((resolve, reject) => {
            this._bdEvento.all('SELECT * FROM EVENTO', (err, linhas) => {
                if (err) {
                    reject(({ "mensagem": err.message, "error": true }))
                } else {
                    resolve({
                        "eventos": linhas,
                        "count": linhas.length,
                        "error": false
                    })
                }
            })
        })
    }
    select_evento_id(id){
        return new Promise((resolve, reject) => {
            this._bdEvento.all(`SELECT * FROM EVENTO WHERE ID = ${id}`, (err, linhas) => {
                if (err) {
                    reject(({ "mensagem": err.message, "error": true }))
                } else {
                    resolve({
                        "eventos": linhas,
                        "count": linhas.length,
                        "error": false
                    })
                }
            })
        })
    }

    insert_evento(novoEvento) {
        return new Promise((resolve, reject) => {
            this._bdEvento.run(`INSERT INTO EVENTO (NOME_EVENTO, QTD_PESSOAS, ATRACOES, TIPO_INGRESSO, VALOR) VALUES  (?, ?, ?, ?, ?)`, 
           [novoEvento.NOME_EVENTO, novoEvento.QTD_PESSOAS, novoEvento.ATRACOES, novoEvento.TIPO_INGRESSO, novoEvento.VALOR], (error) => {
                if (error) {
                    reject({
                        "evento": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "evento": novoEvento,
                        "erro": false
                    })
                }
            })
        })
    }

    update_evento(id, novoEvento){
        return new Promise((resolve, reject) => {
            this._bdEvento.run(`UPDATE EVENTO SET (NOME_EVENTO, QTD_PESSOAS, ATRACOES, TIPO_INGRESSO, VALOR) = (?, ?, ?, ?, ?) WHERE ID = ${id}`, 
           [novoEvento.NOME_EVENTO, novoEvento.QTD_PESSOAS, novoEvento.ATRACOES, novoEvento.TIPO_INGRESSO, novoEvento.VALOR], (error) => {
                if (error) {
                    reject({
                        "evento": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "evento": novoEvento,
                        "erro": false
                    })
                }
            })
        })
    }

    delete_evento(id){
        return new Promise((resolve, reject) => {
            this._bdEvento.run(`DELETE FROM EVENTO WHERE ID = ${id}`, 
             (error) => {
                if (error) {
                    reject({
                        "evento": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "message": "Erro excluído com sucesso!",
                        "erro": false
                    })
                }
            })
        })
    }

}

module.exports = EventoDAO