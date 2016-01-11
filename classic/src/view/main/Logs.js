/**
 * This view is an example list of people.
 */
Ext.define('Skrubba.view.main.Logs', {
    extend: 'Ext.grid.Panel',
    xtype: 'loglist',
    id: 'grid-logs',

    requires: [
        'Skrubba.store.Log'
    ],

    title: 'Logs',

    store: {
        type: 'log'
    },

    //autoLoad: true,

    listeners: {
        beforeRender: function () {
            //console.log('beforeRender', this, arguments);
            //console.log(this.getStore());
            this.getStore().load();
            //this.callParent(arguments);
        }
    },

    frame: false,

    columns: [
        {
            text: 'Valve',
            dataIndex: 'valve',
            width: 70
        },
        {
            text: 'Name',
            dataIndex: 'name',
            flex: 1
        },
        {
            text: 'On Time',
            dataIndex: 'onTime',
            flex: 1
        },
        {
            text: 'On Duration',
            dataIndex: 'onDuration',
            flex: 1
        },
        {
            text: 'Interval Type',
            dataIndex: 'intervalType',
            flex: 1
        },
        {
            text: 'Last activation',
            dataIndex: 'lastOnDate',
            flex: 1
        }
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        pageSize: 10,
        //store: 'plants',
        displayInfo: true
    },

    buttons: [{
        text: 'Delete Logs',
        handler: 'onDeleteLogsClick'
    }]
});