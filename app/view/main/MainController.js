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
        //Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onClickWaterManually: function(view, rowIndex, colIndex, metadata, event, record, rowEl) {
        Ext.Ajax.request({
            url: 'http://localhost:2525/actions/manualwatering',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            /*params: {
                id: record.id
                //duration: 5
            },*/
            jsonData: Ext.JSON.encode({
                id: record.id,
                duration: 5
            }),
            success: function(xhr) { console.log('success: '+xhr.responseText); },
            failure: function(xhr) { console.log('failure: '+xhr.statusText); }
        });
    },

    onAddNewPlantClick: function(params) {
        console.log(params);
    }
});