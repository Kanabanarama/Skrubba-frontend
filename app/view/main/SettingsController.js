/**
 * This class is the controller for the settings view for the application. It is specified as
 * the "controller" of the Settings view class.
 */
Ext.define('Skrubba.view.settings.SettingsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.settings',

    onValveAmountSave: function(event, button) {
        valueField = Ext.getCmp('valveAmountField');
        isValid = valueField.validate();
        if(isValid == true) {
            valveAmount = valueField.getValue();
            Ext.Ajax.request({
                url: Ext.widget('Configuration').getProxyUrl() + '/actions/configure',
                method: 'POST',
                jsonData: Ext.JSON.encode({
                    valve_amount: valveAmount
                }),
                success: function(xhr) { console.log('success: '+xhr.responseText); },
                failure: function(xhr) { console.log('failure: '+xhr.statusText); }
            });
        }
    },

    onCredentialsSave: function() {
        Ext.Ajax.request({
            url: Ext.widget('Configuration').getProxyUrl() + '/serveroff',
            method: 'POST',
            success: function() {
                console.log(this, arguments);
            },
            failure: function() {
                console.log(this, arguments);
            }
        });
    },

    onServerOffClick: function() {
        Ext.Msg.confirm('Shutdown flask server', 'Are you sure you want to shutdown the flask server? It can only started via reboot or over ssh.', function (selection) {
            if (selection === 'yes') {
                console.log('Shutting down...');
                //Ext.get('ajaxpanel').load({ url: 'http://192.168.0.205:2525/shutdown' });
                Ext.Ajax.request({
                    url: Ext.widget('Configuration').getProxyUrl() + '/serveroff',
                    method: 'POST',
                    success: function() {
                        console.log(this, arguments);
                    },
                    failure: function() {
                        console.log(this, arguments);
                    }
                });
            }
        }, this);
    },

    onRebootClick: function() {
        Ext.Msg.confirm('Reboot', 'Do you want to reboot the system?', function (selection) {
            if (selection === 'yes') {
                console.log('Rebooting...');
                Ext.Ajax.request({
                    url: Ext.widget('Configuration').getProxyUrl() + '/reboot',
                    method: 'POST',
                    success: function() {
                        console.log(this, arguments);
                    },
                    failure: function() {
                        console.log(this, arguments);
                    }
                });
            }
        }, this);
    },

    onShutdownClick: function() {
        Ext.Msg.confirm('Shutdown', 'Do you want to shut down the system? It can\'t be powered on except manually.', function (selection) {
            if (selection === 'yes') {
                console.log('Shutting down...');
                Ext.Ajax.request({
                    url: Ext.widget('Configuration').getProxyUrl() + '/shutdown',
                    method: 'POST',
                    success: function() {
                        console.log(this, arguments);
                    },
                    failure: function() {
                        console.log(this, arguments);
                    }
                });
            }
        }, this);
    }
});