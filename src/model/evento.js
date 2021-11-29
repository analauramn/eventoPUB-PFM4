class Event {
    
    constructor(NOME_EVENTO, QTD_PESSOAS, ATRACOES, TIPO_INGRESSO, VALOR) {
        this.NOME_EVENTO = this.verificaNomeEvento(NOME_EVENTO)
        this.QTD_PESSOAS = this.verificaQtdPessoas(QTD_PESSOAS)
        this.ATRACOES = this.verificaAtracoes(ATRACOES)
        this.TIPO_INGRESSO = this.verificaTipoIngresso(TIPO_INGRESSO)
        this.VALOR = this.verificaValor(VALOR)
    }
    
    verificaNomeEvento(NOME_EVENTO){
        if(NOME_EVENTO !== "" ){
            return NOME_EVENTO
        }else {
            return 0 
        }
    }

         verificaQtdPessoas(QTD_PESSOAS){
        if(QTD_PESSOAS >= 0  || QTD_PESSOAS !== ''){
            return QTD_PESSOAS
        }else {
            return -1  
          
        }
    }

    verificaAtracoes(ATRACOES){
        if(ATRACOES !== "" ){
            return ATRACOES
        }else {
          return 0
        }
    }

    verificaTipoIngresso(TIPO_INGRESSO){
        if(TIPO_INGRESSO !== "" ){
            return TIPO_INGRESSO
        }else {
          return 0
        }
    }

    verificaValor(VALOR){
        if(VALOR >= 0  || VALOR !== ''){
            return VALOR
        }else {
            return -1  
          
        }
    }

}

module.exports = Event