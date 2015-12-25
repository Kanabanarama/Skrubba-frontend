/**
 * This view is an example list of people.
 */
Ext.define('Skrubba.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    //alias: 'mainlist',
    //id: 'mainlist',

    requires: [
        'Skrubba.store.Plants'
    ],

    title: 'Plants',

    store: {
        type: 'plants'
    },

    viewConfig: {
        //stripeRows: true,
        getRowClass: function(record, rowIndex, rowParams, store) {
            return record.editorActive ? 'x-grid-item-editable' : '';
        }/*,
        listeners: {
            beforecellmousedown: function(view, cell, cellIdx, record, row, rowIdx, eOpts) {
                console.log(cellIdx);
                if(cellIdx === 0){
                    return false;
                }
            }
        }*/
    },

    frame: false,

    //disableSelection: true,
    //selType: 'rowmodel',

    columns: [
        {
            text: 'Valve',
            dataIndex: 'valve',
            width: 60
        },
        {
            text: 'Name',
            dataIndex: 'name',
            flex: 1,
            editor: {
                xtype:'textfield'
            }
        },
        {
            text: 'On Time',
            dataIndex: 'onTime',
            flex: 1,
            //xtype: 'timefield'
            //format: 'H:i',
            //submitFormat: 'Y-m-d H:i:s',
            editor: {
                xtype: "timefield",
                format: "H:i",
                altFormats: 'H:i',
                submitFormat: 'H:i'
            }
            /*renderer : function(value, metaData, record, rowIndex, colIndex, store, view) {
                timeFieldDate = new Date(value);
                //timeFieldDisplayValue = timeFieldDate.format('H:i');
                console.log(value);
                return value;
            }*/
        },
        {
            text: 'On Duration',
            dataIndex: 'onDuration',
            flex: 1,
            editor: {
                xtype:'textfield'
            }
        },
        {
            text: 'Interval Type',
            dataIndex: 'intervalType',
            flex: 1,
            editor: {
                xtype:'combo',
                store: new Ext.data.ArrayStore({
                    fields: ['value', 'text'],
                    data : [
                        ['daily', 'daily'],
                        ['weekly', 'weekly'],
                        ['monthly', 'monthly']
                    ]
                }),
                displayField:'text',
                valueField: 'value',
                mode: 'local',
                typeAhead: false,
                emptyText: 'Select interval'
            }
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
                    handler: 'onClickPlantEdit'
                },
                {
                    iconCls: 'fa fa-flask',
                    tooltip: 'Water manually',
                    handler: 'onClickWaterManually'
                },
                {
                    iconCls: 'fa fa-trash',
                    tooltip: 'Delete plant',
                    handler: 'onClickPlantDelete'
                }
            ]
        }
    ],

    plugins: [
        //Ext.create('Ext.grid.plugin.RowEditing', {
        Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1,
            listeners: {
                'beforeedit': function(editor, context, eOpts) {
                    return (context.record.editorActive === true);
                },
                'edit': function(editor, element) {
                    console.log(this, arguments);
                    var activeEd = this.getActiveEditor();
                    if (activeEd) {
                        activeEd.completeEdit();
                        //var grid = this.getView().down('mainlist');
                        var grid = element.grid;
                        var store = grid.getStore();
                        store.sync();
                    }
                }
            }
        })
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        pageSize: 10,
        //store: 'plants',
        displayInfo: true
    },

    buttons: [{
        text: 'Add New Plant',
        //scope: 'plantlist',
        handler: 'onAddNewPlantClick'
    }],

    listeners: {
        select: 'onItemSelected'
    }
});