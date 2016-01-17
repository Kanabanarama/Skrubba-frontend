/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Skrubba.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        record.store.each(function(record, idx) {
            record.editorActive = false;
        });
        record.editorActive = true;
        sender.view.refresh();
    },

    onClickWaterManually: function(view, rowIndex, colIndex, metadata, event, record, rowEl) {
        Ext.Ajax.request({
            url: Ext.widget('Configuration').getProxyUrl() + '/actions/manualwatering',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            jsonData: Ext.JSON.encode({
                valve: record.get('valve'),
                duration: 5
            }),
            success: function(xhr) { console.log('success: '+xhr.responseText); },
            failure: function(xhr) { console.log('failure: '+xhr.statusText); }
        });
    },

    onClickPlantDelete: function(grid, rowIndex, colIndex, metadata, event, record, rowEl) {
        Ext.Msg.confirm('Delete plant', 'Are you sure you want to delete '+record.get('name')+'?', function (selection) {
            if (selection === 'yes') {
                console.log('deleted', record)
                var store = grid.getStore();
                store.remove(record);
                store.sync({
                    failure: function(batch, options) {
                        store.rejectChanges();
                        Ext.each(batch.exceptions, function(operation) {
                            if (operation.hasException()) {
                                console.log(operation);
                                Ext.MessageBox.alert('Error', operation.error);
                            }
                        });
                    },
                    success: function() {
                        console.log('success', arguments);
                    }
                });
            }
        }, this);
    },

    onAddNewPlantClick: function(button, event) {
        var grid = this.getView().down('mainlist');
        var store = grid.getStore();
        var newRecord = new Skrubba.model.Plant({
            name: 'New plant'
        });
        store.add(newRecord);
        store.sync({
            failure: function(batch, options) {
                store.rejectChanges();
                Ext.each(batch.exceptions, function(operation) {
                    if (operation.hasException()) {
                        console.log(operation);
                        Ext.MessageBox.alert('Error', operation.error);
                    }
                });
            },
            success: function() {
                console.log('success', arguments);
            }
        });
    }
});