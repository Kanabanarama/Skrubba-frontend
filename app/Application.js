/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Skrubba.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Skrubba',

    stores: [
        'Settings'
    ],

    views: [
        'Skrubba.view.login.Login',
        'Skrubba.view.main.Main'
    ],
    
    launch: function () {
        var loggedIn = localStorage.getItem("SkrubbaLogin");
        if(loggedIn) {
            Ext.widget('app-main');
        } else {
            settingsStore = Ext.data.StoreManager.lookup('Settings');
            settingsStore.on('load', function(store, records, successful, operation, eOpts) {
                modelData = store.getAt(0).getData();
                if(modelData['username']) {
                    Ext.widget(loggedIn ? 'app-main' : 'loginwindow');
                } else {
                    Ext.widget('app-main');
                }
            });
            settingsStore.load();
        }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
