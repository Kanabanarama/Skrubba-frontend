Ext.define('Skrubba.model.Base', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'id',
        type: 'int'
    }],

    schema: {
        namespace: 'Skrubba.model',

        proxy: {
            type: 'ajax',
            url: 'http://localhost:2525/data/{entityName:lowercase}.json',
            reader: {
                type: 'json',
                rootProperty: '{entityName:lowercase}'
                /*transform: {
                    fn: function(data) {
                        // do some manipulation of the raw data object
                        return data;
                    },
                    scope: this
                }*/
            }
        }
    }
});

// *://*/*