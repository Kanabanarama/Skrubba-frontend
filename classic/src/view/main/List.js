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

    listeners: {
        select: 'onItemSelected'
    },

    viewConfig: {
        //stripeRows: true,
        getRowClass: function(record, rowIndex, rowParams, store) {
            return record.editorActive ? 'x-grid-item-editable' : '';
        }
    },

    frame: false,

    //disableSelection: true,
    //selType: 'rowmodel',

    columns: [
        {
            text: 'Valve',
            dataIndex: 'valve',
            width: 70,
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
                minValue: 1,
                maxValue: 8
            }
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
            dataIndex: 'on_time',
            flex: 1,
            //xtype: 'timefield'
            //format: 'H:i',
            //submitFormat: 'Y-m-d H:i:s',
            editor: {
                xtype: "timefield",
                format: "H:i:s",
                altFormats: 'H:i:s',
                submitFormat: 'H:i:s'
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
            dataIndex: 'on_duration',
            flex: 1,
            editor: {
                xtype:'textfield'
            }
        },
        {
            text: 'Interval Type',
            dataIndex: 'interval_type',
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
            dataIndex: 'is_active',
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
            xtype: 'actioncolumn',
            width: 40,
            items: [
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
                    //console.log(context.node, context.getNode().getEl())
                    //console.log(context.getRow().el)
                    //Ext.DomHelper.applyStyles(editor.getEditorBody(), { 'color': 'red' });
                },
                'edit': function(editor, element) {
                    var activeEd = this.getActiveEditor();
                    if (activeEd) {
                        activeEd.completeEdit();
                        var grid = element.grid;
                        var store = grid.getStore();
                        store.sync({
                            failure: function(batch, options) {
                                store.rejectChanges();
                                Ext.each(batch.exceptions, function(operation) {
                                    if (operation.hasException()) {
                                        Ext.MessageBox.alert('Error', operation.error);
                                    }
                                });
                            },
                            success: function() {
                                console.log('success', arguments);
                            }
                        });
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
    }]
});