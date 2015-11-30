Ext.define('Skrubba.model.Log', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'date', type: 'date' },
        { name: 'line', type: 'string' }
    ],

    proxy: {
        type: 'localstorage',
        id: 'logs'
    }
});