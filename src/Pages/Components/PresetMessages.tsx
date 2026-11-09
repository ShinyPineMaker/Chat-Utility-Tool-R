export type Message = {
    id: number,
    text: string,
    altText?: string,
    isAlt?: boolean
};


const getPresetMessages = () => {

    function getTimeofDay(date: Date = new Date()): string {
        const h = date.getHours(); // 0–23, local time
        if (h >= 6 && h < 12) return "Bom dia";
        if (h >= 12 && h < 19) return "Boa tarde";
        return "Boa noite"; // 19:00–23:59 and 00:00–05:59
    }
    const name = localStorage.getItem("name");
    const presetMessages: Message[] = [

        

        //cumprimento/saudação
        { id: 0, text: `${getTimeofDay()}, meu nome é ${name}, sou do suporte técnico, como posso ajudar?`},

        //solicitações
        { id: 1, text: `Poderia informar o CPF do titular?` },

        { id: 2, text: `Realizei alguns procedimentos padrões, pode desligar o roteador e modem da tomada por 5 minutos?` },

        { id: 3, text: `Poderia enviar uma foto ou vídeo dos aparelhos de internet?` },

        //agendamento
        { id: 4, text: `Nesse caso, posso agendar uma visita do técnico, quando você teria disponibilidade?`, altText: `Nesse caso, posso agendar uma visita do técnico, você teria disponibilidade a partir de amanhã?`, isAlt: false },

        { id: 5, text: `Atendimento agendado para hoje, nós entraremos em contato quando o técnico for ao local, só aguardar. Caso o técnico não consiga ir hoje até as 18:00 o atendimento é reagendado para amanhã. Qualquer outra questão só entrar em contato, tenha uma ${getTimeofDay()}!`, altText: `Atendimento agendado para amanhã, nós entraremos em contato quando o técnico for ao local. Nossos técnicos de campo atendem das 9:00 às 18:00 todos os dias, qualquer outra questão pode entrar em contato novamente, tenha uma ${getTimeofDay()}!` },

        { id: 6, text: `Nossos técnicos de campo atendem das 9 às 18 todo dia, entramos em contato com você alguns minutos antes do técnico ir ao local. Não fazemos atendimento com horário fixo pois a agenda dos técnicos muda durante o dia e não tem como garantir prioridade para todo cliente. Caso não entramos em contato ou o técnico não compareça até às 18 o atendimento é reagendado para o dia seguinte, com prioridade.`, altText: `Seu atendimento já está na agenda do tecnico, só aguardar que assim que possivel o tecnico vai no local.`, isAlt: false },
        

        //encerramento
        { id: 7, text: `Atendimento encerrado devido à falta de comunicação, Fleetnet agradece o contato. Caso necessário, pode enviar uma nova mensagem para esse contato que abrimos um novo atendimento para resolver seu problema.` },

        //transferência
        { id: 8, text: `Para verificar sobre assuntos financeiros, cancelamento, planos disponíveis, aplicativos, canais de TV, mudança de endereço ou titularidade, apenas com o setor comercial, vou transferir a conversa, só um momento.`, altText: `Para verificar sobre assuntos financeiros, cancelamento, planos disponíveis, aplicativos, canais de TV, mudança de endereço ou titularidade, apenas com o setor comercial, como eles já encerraram atendimento por hoje será necessário que você entre em contato novamente amanhã, durante horário comercial`, isAlt: false },

        
        //outros
        { id: 9, text: `Para ativar os aplicativos acesse esse site:

https://www.portaldoassinante.com/fleetnet/login

Para entrar no aplicativo através do cadastro fleetnet siga as instruções no link:

https://comologar.com.br/` },

        { id: 10, text: `Esses tipos de aparelhos não são homologados pela Anatel, e podem interferir com a conexão da sua rede, posso agendar para um técnico verificar a conexão da sua casa mas caso o problema seja nesse aparelho nós não prestamos manutenção, teria que ficar por conta de um técnico particular.` },        

        { id: 11, text: `Seu plano foi habilitado provisoriamente por 72 horas, caso o pagamento não seja identificado pelo sistema ele será inativado novamente.` },

        { id: 12, text: `Houve um rompimento na sua região, só aguardar que nossos técnicos estão verificando.` },
];

    return presetMessages
}

export default getPresetMessages;