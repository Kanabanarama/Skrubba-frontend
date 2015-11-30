/**
 * This view is an example list of people.
 */
Ext.define('Skrubba.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Skrubba.store.Plants'
    ],

    title: 'Plants',

    store: {
        type: 'plants'
    },

    columns: [
        {
            text: 'ID',
            dataIndex: 'id',
            width: 60
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
            text: 'Measurement History',
            dataIndex: 'measures',
            flex: 1,
            xtype: 'widgetcolumn',
            widget: {
                xtype: 'sparklineline'
            }
        },
        {
            text: 'Active',
            dataIndex: 'isActive',
            xtype : 'booleancolumn',
            width: 70,
            trueText : "Active",
            falseText : "Inactive",
            editor : {
                xtype : "checkbox"
            }
        },
        {
            header: 'Status',
            width: 100,
            xtype: 'widgetcolumn',
            align: 'right',
            widget: {
                xtype: 'progressbarwidget',
                textTpl: '{value:percent}'
            }
        },{
            header: 'Edit',
            xtype: 'actioncolumn',
            width: 60,
            items: [
                {
                    iconCls: 'fa fa-pencil',
                    tooltip: 'Edit plant',
                    handler: 'onClickPlantShow'
                },
                {
                    iconCls: 'fa fa-flask',
                    tooltip: 'Water manually',
                    handler: 'onClickWaterManually'
                },
                {
                    iconCls: 'fa fa-trash',
                    tooltip: 'Delete plant',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        alert("Delete " + rec.get('name') + "?");
                    }
                }
            ]
        }
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        pageSize: 10,
        //store: 'plants',
        displayInfo: true
    },

    buttons: [{
        text: 'Add New Plant',
        handler: 'onAddNewPlantClick'
    }],

    listeners: {
        select: 'onItemSelected'
    }
});