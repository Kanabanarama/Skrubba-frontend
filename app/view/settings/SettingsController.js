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
                url: Ext.widget('Configuration').getProxyUrl() + '/set/maxvalves',
                method: 'POST',
                jsonData: Ext.JSON.encode({
                    valve_amount: valveAmount
                }),
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
    },

    onCredentialsSave: function(event, button) {
        usernameField = Ext.getCmp('settingUsernameField');
        passwordField = Ext.getCmp('settingPasswordField');
        passwordConfirmField = Ext.getCmp('settingPasswordConfirmField');
        isValid = usernameField.validate() && passwordField.validate() && passwordConfirmField.validate();
        if(isValid == true) {
            Ext.Ajax.request({
                url: Ext.widget('Configuration').getProxyUrl() + '/set/credentials',
                method: 'POST',
                jsonData: Ext.JSON.encode({
                    username: usernameField.getValue(),
                    password: passwordField.getValue()
                }),
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
    },

    onServerOffClick: function() {
        Ext.Msg.confirm('Shutdown flask server', 'Are you sure you want to shutdown the flask server? It can only started via reboot or over ssh.', function (selection) {
            if (selection === 'yes') {
                console.log('Shutting down...');
                //Ext.get('ajaxpanel').load({ url: 'http://192.168.0.205:2525/shutdown' });
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