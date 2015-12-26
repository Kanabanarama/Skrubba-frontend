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
                idProperty: 'extId',
                rootProperty: '{entityName:lowercase}',
                successProperty: 'success',
                messageProperty : 'message'/*,
                listeners: {
                    exception: function(proxy, response, operation){
                        Ext.MessageBox.show({
                            title: 'REMOTE EXCEPTION',
                            msg: operation.getError(),
                            icon: Ext.MessageBox.ERROR,
                            buttons: Ext.Msg.OK
                        });
                    }
                }*/
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