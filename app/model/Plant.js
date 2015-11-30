Ext.define('Skrubba.model.Plant', {
    extend: 'Skrubba.model.Base',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'auto' },
        { name: 'onTime', type: 'auto' },
        { name: 'onDuration', type: 'auto' },
        { name: 'intervalType', type: 'auto' },
        { name: 'isActive', type: 'auto' }
    ]

    /*schema: {
        proxy: {
            url: 'data/plant'
        }
    }*/
});
