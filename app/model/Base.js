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
            api: {
                create: 'http://localhost:2525/data/{entityName:lowercase}.json?action=create',
                read: 'http://localhost:2525/data/{entityName:lowercase}.json?action=read',
                update: 'http://localhost:2525/data/{entityName:lowercase}.json?action=update',
                destroy: 'http://localhost:2525/data/{entityName:lowercase}.json?action=destroy'
            },
            reader: {
                type: 'json',
                rootProperty: '{entityName:lowercase}'
                //transform: {
                    //fn: function(data) {
                        // do some manipulation of the raw data object
                        //return data;
                    //},
                    //scope: this
                //}
            },
            writer: {
                type: "json",
                encode: true,
                writeAllFields: true,
                rootProperty: '{entityName:lowercase}'
            }
        }
    }
});

// *://*/*