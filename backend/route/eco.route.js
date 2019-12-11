module.exports = (app) => {
    const petition = require('../petition/controller/petition.controller.js');
    const signature = require('../petition/controller/signature.controller.js');

    // Create a new Petition
    app.post('/petition', petition.create);

    // Retrieve all petition as List
    app.get('/petition', petition.findAll);

    // Retrieve a single petition with petitionId
    app.get('/petition/:petitionId', petition.findOne);
    
    // Update a Petition with petitionId
    app.put('/petition/:petitionId', petition.update);

    // Delete a Petition with petitionId
    app.delete('/petition/:petitionId', petition.delete);

    //Retrieve petition by emailId
    app.get('/petition/email/:email',petition.findByEmailId);

    // Create a new Signature
    app.post('/signature', signature.create);

    // Retrieve all signature as List
    app.get('/signature', signature.findAll);

    // Retrieve a single signature with petitionId
    app.get('/signature/:petitionId', signature.findOne);

    // Retrieve a signature count with petitionId
    app.get('/signature/total/count', signature.getSignatureDocumentCount);

    // Retrieve a signature count with petitionId
    app.get('/signature/count/:petitionId', signature.getSignatureCount);
 
    // Retrieve a signature by emailId
    app.get('/signature/email/:email', signature.findByEmailId);

 
}