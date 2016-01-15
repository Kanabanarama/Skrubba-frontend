Ext.define('Skrubba.model.Base', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'id',
        type: 'int'
    }],

    schema: {
        namespace: 'Skrubba.model',
        urlPrefix: Ext.widget('Configuration').getProxyUrl(),
        proxy: {
            type: 'ajax',

            url: '{prefix}/{entityName:lowercase}.json',
            api: {
                create: '{prefix}/data/{entityName:lowercase}.json?action=create',
                read: '{prefix}/data/{entityName:lowercase}.json?action=read',
                update: '{prefix}/data/{entityName:lowercase}.json?action=update',
                destroy: '{prefix}/data/{entityName:lowercase}.json?action=destroy'
            },
            reader: {
                type: 'json',
                idProperty: 'extId',
                rootProperty: '{entityName:lowercase}',
                totalProperty: 'count',
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