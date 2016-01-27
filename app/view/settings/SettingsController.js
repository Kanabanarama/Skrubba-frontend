/**
 * This class is the controller for the settings view for the application. It is specified as
 * the "controller" of the Settings view class.
 */
Ext.define('Skrubba.view.settings.SettingsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.settings',

    onFormSave: function(button, event) {
        var form = button.up('form');
        if(form.isValid()) {
            console.log('settingsSave:', form.getRecord(), form.getValues());
            settingsRecord = form.getRecord();
            settingsRecord.set(form.getValues());
            settingsRecord.save({
                callback: function(record, operation, success) {
                    if (success === false) {
                        if (operation.error !== undefined) {
                            Ext.MessageBox.alert('Error', operation.error);
                        }
                        //record.reject();
                        //settingsRecord.reject();
                        form.reset();
                    }
                }
            });

            mainPanel = button.up('app-main');
            mainPanel.fireEvent('aftersettings', mainPanel);
        }
    },

    onFormDelete: function(button, event) {
        var form = button.up('form');
        var formValues = form.getValues();
        var settingsRecord = form.getRecord();
        settingsRecord.beginEdit();
        Ext.Object.each(formValues, function(key, value) {
            settingsRecord.set(key, '-DELETE-');
        });
        settingsRecord.endEdit();
        settingsRecord.erase();
        form.reset();

        mainPanel = button.up('app-main');
        mainPanel.fireEvent('aftersettings', mainPanel);
    },

    onServerOffClick: function() {
        Ext.Msg.confirm('Shutdown flask server', 'Are you sure you want to shutdown the flask server? It can only started via reboot or over ssh.', function (selection) {
            if (selection === 'yes') {
                console.log('Shutting down...');
                Ext.Ajax.request({
                    url: Ext.widget('Configuration').getProxyUrl() + '/action/serveroff',
                    method: 'POST',
                    failure: function(xhr) {
                        console.log('error', this, arguments);
                    },
                    success:  function(xhr, request) {
                        responseObj = Ext.util.JSON.decode(xhr.responseText);
                        if (responseObj.success == 'false') {
                            Ext.MessageBox.alert('Error', responseObj.message);
                        }
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
                    url: Ext.widget('Configuration').getProxyUrl() + '/action/reboot',
                    method: 'POST',
                    failure: function(xhr) {
                        console.log('error', this, arguments);
                    },
                    success:  function(xhr, request) {
                        responseObj = Ext.util.JSON.decode(xhr.responseText);
                        if (responseObj.success == 'false') {
                            Ext.MessageBox.alert('Error', responseObj.message);
                        }
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
                    url: Ext.widget('Configuration').getProxyUrl() + '/action/shutdown',
                    method: 'POST',
                    failure: function(xhr) {
                        console.log('error', this, arguments);
                    },
                    success:  function(xhr, request) {
                        responseObj = Ext.util.JSON.decode(xhr.responseText);
                        if (responseObj.success == 'false') {
                            Ext.MessageBox.alert('Error', responseObj.message);
                        }
                    }
                });
            }
        }, this);
    }
});