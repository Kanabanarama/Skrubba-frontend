Ext.define('Skrubba.model.Plant', {
    extend: 'Skrubba.model.Base',

    editorActive: false,

    idProperty: 'extId',
    //identifier: 'negative',

    fields: [
        { name: 'extId', type: 'int' },
        { name: 'id', type: 'int' },
        { name: 'valve', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'on_time', type: 'auto',
            convert: function(value, record) {
                if(value instanceof Date) {
                    var formattedValue = Ext.Date.format(value, 'H:i:s');
                } else {
                    var valueDate = Ext.Date.parse(value, 'H:i:s');
                    var formattedValue = Ext.Date.format(valueDate, 'H:i:s');
                }
                return formattedValue;
            }
        },
        { name: 'on_duration', type: 'int' },
        { name: 'interval_type', type: 'string' },
        { name: 'is_active', type: 'boolean' }
    ]

    /*set: function (name, value) {
        this.callParent(arguments); // original set functions
        //if(name !== 'editorActive') {
            //console.log(this.store.save());
            console.log('save');
            //this.store.commitChanges()
        //}
    }*/

        /*schema: {
            proxy: {
                url: 'data/plant'
            }
        }*/
});
