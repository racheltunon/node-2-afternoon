let messages = []
let id = 0;


module.exports = {
    create: (req, res)=> {
        const {text, time} = req.body; //this is off the request body//
        messages.push({id, text, time});
        id++;
        res.status(200).send(messages); //return messages array// 
    },
    read: (req, res)=> {
        res.status(200).send(messages); //return messages array//
    },
    update: (req, res)=> {
        const {text}= req.body;
        const updateID = req.params.id; //url parameter//
        const messageIndex = messages.findIndex(message => message.id == updateID);
        let message = messages[messageIndex];

        messages[messageIndex]={
            id: message.id,
            text: text || message.text, 
            time: message.time
        };
        res.status(200).send(messages); //return messages array//
    },

    delete: (req, res) => {
        const deleteID = req.params.id; // url parameter//
        messageIndex = messages.findIndex(message => message.id == deleteID);
        messages.splice(messageIndex, 1);
        res.status(200).send(messages);
    }
}; 
