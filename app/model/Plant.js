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
        { name: 'onTime', type: 'auto',
            convert: function(value, record) {
                if(value instanceof Date) {
                    var formattedValue = Ext.Date.format(value, 'H:i');
                } else {
                    var valueDate = Ext.Date.parse(value, 'H:i');
                    var formattedValue = Ext.Date.format(valueDate, 'H:i');
                }
                return formattedValue;
            }
        },
        { name: 'onDuration', type: 'int' },
        { name: 'intervalType', type: 'string' },
        { name: 'isActive', type: 'boolean' }
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
