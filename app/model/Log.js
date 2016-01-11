Ext.define('Skrubba.model.Log', {
    extend: 'Skrubba.model.Base',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'valve', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'onTime', type: 'auto' },
        { name: 'onDuration', type: 'int' },
        { name: 'intervalType', type: 'string' },
        { name: 'lastOnDate', type: 'date' }
    ]
});