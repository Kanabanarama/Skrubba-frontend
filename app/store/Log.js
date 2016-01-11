Ext.define('Skrubba.store.Log', {
    extend: 'Ext.data.Store',
    alias: 'store.log',

    model: 'Skrubba.model.Log',

    //autoLoad: true,

    sorters: [{
        property: 'lastOnDate',
        direction: 'ASC'
    }]

    //reference: 'LogStore'
    //model: 'Skrubba.model.Log'
    /*data: {
     users: [
     {'date': new Date(), 'line': 'Started logging...'}
     ]
     }*/
});