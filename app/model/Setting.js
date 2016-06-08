Ext.define('Skrubba.model.Setting', {
    extend: 'Skrubba.model.Base',

    fields: [
        { name: 'valve_amount', type: 'auto' },
        { name: 'username', type: 'auto' }
    ]

    /*proxy: {
        writer: {
            writeAllFields: false
        }
    }*/
});