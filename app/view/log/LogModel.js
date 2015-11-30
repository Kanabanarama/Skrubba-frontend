/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Skrubba.view.log.LogModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.log',

    requires: [
        'Skrubba.model.Log'
    ],

    stores: {
        logs: {
            model: 'Skrubba.model.Log',
            autoLoad: true,
            remoteFilter: false
        }
    }
});