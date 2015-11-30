Ext.define('Skrubba.store.Log', {
    extend: 'Ext.data.Store',
    alias: 'store.log',
    reference: 'LogStore',
    model: 'Skrubba.model.Log'
    /*data: {
     users: [
     {'date': new Date(), 'line': 'Started logging...'}
     ]
     }*/
});