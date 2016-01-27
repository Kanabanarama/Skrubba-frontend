/**
 * This view is an example list of people.
 */
Ext.define('Skrubba.view.main.Settings', {
    //extend: 'Ext.form.Panel',
    extend: 'Ext.panel.Panel',
    xtype: 'settingsform',

    /*requires: [
        'Skrubba.store.Settings'
    ],*/

    controller: 'settings',

    title: 'Settings',

    frame: true,
    layout: 'border',
    height: 450,
    bodyPadding: 10,

    defaults: {
        split: true,
        frame: true,
        bodyPadding: 10
    },

    listeners: {
        // binding a store to the form panel didn't work for some reason..
        beforeRender: function (panel, eOpts) {
            //if(settingModel) {
            //    form = this.getForm();
            //    form.loadRecord(settingModel);
            //}
            // set model data to all form items this panel contains
            settingsStore = Ext.data.StoreManager.lookup('Settings');
            settingModel = settingsStore.getAt(0);
            var forms = panel.query('form');
            Ext.Array.each(forms, function(form, index) {
                form.loadRecord(settingModel);
            });
        }
    },

    items: [{
        xtype: 'form',
        name: 'valves',
        title: 'Valves',
        region:'west',
        width: 300,
        height: 200,
        collapsible: false,
        items: [
        {
            xtype: 'combo',
            name: 'valve_amount',
            id: 'valveAmountField',
            store: new Ext.data.ArrayStore({
                fields: ['value', 'text'],
                data : [
                    [8, '8'],
                    [16, '16'],
                    [24, '24'],
                    [32, '32']
                ]
            }),
            displayField:'text',
            valueField: 'value',
            width: '100%',
            queryMode: 'local',
            editable: false,
            allowBlank: false,
            msgTarget : 'side',
            emptyText: 'How many valves are installed?'
        }],
        html: '<p>This setting prevents that more valves can be added and configured than are physically present.</p>',
        buttons: [{
            text: 'Save',
            formBind: true,
            //handler: 'onValveAmountSave'
            handler: 'onFormSave'
        }]
    },
    {
        xtype: 'form',
        name: 'user',
        title: 'User',
        region: 'center',
        height: 200,
        collapsible: false,
        items: [{
            xtype: 'textfield',
            name: 'username',
            id: 'settingUsernameField',
            layout: 'vbox',
            align: 'stretch',
            itemId: 'username',
            inputId: 'username',
            fieldLabel: 'Username',
            labelWidth: 120,
            allowBlank: false,
            msgTarget : 'side'
        }, {
            xtype: 'fieldcontainer',
            msgTarget : 'side',
            layout: 'hbox',
            items: [
                {
                    xtype: 'textfield',
                    name: 'password',
                    inputType: 'password',
                    fieldLabel: 'Password',
                    labelWidth: 120,
                    margin: '0 30 0 0',
                    allowBlank: false,
                    msgTarget : 'side',
                    id: 'settingPasswordField'
                },
                {
                    xtype: 'textfield',
                    inputType: 'password',
                    fieldLabel: 'Confirm Password',
                    labelWidth: 120,
                    //allowBlank: false,
                    validationEvent: 'blur',
                    msgTarget: 'side',
                    id: 'settingPasswordConfirmField',
                    validator: function() {
                        var password = Ext.getCmp('settingPasswordField').getValue();
                        var passwordConfirm = Ext.getCmp('settingPasswordConfirmField').getValue();

                        var validationResult = (password == passwordConfirm) ? true : 'Passwords do not match!';
                        return validationResult;
                    }
                }
            ]
        }],
        html: '<p>It is strongly recommended to set a password for the configuration interface or anyone in your network can change the settings!</p>',
        buttons: [{
            text: 'Save',
            formBind: true,
            handler: 'onFormSave'
        }]
    },
    {
        title: 'About',
        region: 'south',
        height: 100,
        collapsible: false,
        //minHeight: 75,
        html: '<p><a href="https://github.com/Kanabanarama/Skrubba">https://github.com/Kanabanarama/Skrubba</a></p>'
    }],

    buttons: [
    {
        text: 'ServerOff',
        handler: 'onServerOffClick'
    },
    {
        text: 'Reboot',
        handler: 'onRebootClick'
    },
    {
        text: 'Shutdown',
        handler: 'onShutdownClick'
    }]
});