/**
 * This view is an example list of people.
 */
Ext.define('Skrubba.view.main.Settings', {
    extend: 'Ext.panel.Panel',
    xtype: 'settings',
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

    items: [{
        title: 'Valves',
        region:'west',
        width: 300,
        height: 200,
        collapsible: false,
        items: [
        {
            xtype:'combo',
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
            mode: 'local',
            editable: false,
            emptyText: 'How many valves are installed?'
        }],
        html: '<p>This setting prevents that more valves can be added and configured than are physically present.</p>',
        buttons: [{
            text: 'Save',
            handler: 'onValveAmountSave'
        }]
    },
    {
        title: 'User',
        region: 'center',
        height: 200,
        collapsible: false,
        items: [
            {
                xtype: 'fieldcontainer',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'textfield',
                        layout: 'vbox',
                        align: 'stretch',
                        itemId: 'username',
                        inputId: 'username',
                        fieldLabel: 'Username',
                        labelWidth: 120,
                        allowBlank: false,
                        msgTarget : 'side'
                    }
                ]},


            {
                xtype: 'fieldcontainer',
                //combineErrors: true,
                msgTarget : 'side',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'textfield',
                        inputType: 'password',
                        fieldLabel: 'Password',
                        labelWidth: 120,
                        margin: '0 30 0 0',
                        allowBlank: false,
                        msgTarget : 'side',
                        id: 'configSetPassword'
                    },
                    {
                        xtype: 'textfield',
                        inputType: 'password',
                        fieldLabel: 'Confirm Password',
                        labelWidth: 120,
                        allowBlank: false,
                        validationEvent: 'blur',
                        msgTarget: 'side',
                        id: 'configSetPasswordConfirm',
                        validator: function() {
                            var password = Ext.getCmp('configSetPassword').getValue();
                            var passwordConfirm = Ext.getCmp('configSetPasswordConfirm').getValue();
                            var validationResult = (password == passwordConfirm) ? true : 'Passwords do not match!';
                            return validationResult;
                        }
                    }
                ]
            }

        ],
        html: '<p>It is strongly recommended to set a password for the configuration interface or anyone in your network can change the settings!</p>',
        buttons: [{
            text: 'Save',
            handler: 'onCredentialsSave'
        }]
    },
    {
        title: 'About',
        region: 'south',
        height: 100,
        collapsible: false,
        //minHeight: 75,
        html: '<p>TODO</p>'
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