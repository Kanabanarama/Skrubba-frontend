/**
 * This view is an example list of people.
 */
Ext.define('Skrubba.view.main.Settings', {
    extend: 'Ext.form.Panel',
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
        beforeRender: function () {
            settingsStore = Ext.data.StoreManager.lookup('Settings');
            settingModel = settingsStore.getAt(0);
            if(settingModel) {
                form = this.getForm();
                form.loadRecord(settingModel);
            }
        }
    },

    formBind: true,

    /*store: {
        type: 'settings'
    },*/

    //store: 'Settings',

    initComponent : function() {
        /*var AjaxRead =
            Ext.Ajax.request({
                url: 'json.html',
                method: 'GET',
                success: function (response){
                    fs.getForm().load(response.responseText);
                }
            });*/
        //console.log(this.getForm());
        //var store = Ext.data.StoreManager.lookup('settings');
        //var store = Ext.data.StoreManager.get('settings');
        //if (!store) {
        //    store = Ext.create('settings');
        //}
        //console.log(this.getStore());
        //this.store = store;
        this.callParent(arguments);
    },

    items: [{
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
            listeners: {
                render: function (field) {
                    //console.log(this.up('form').getForm().loadRecord());
                    //console.log(this.ownerCt);
                    //field.setValue(16);
                }
            },
            displayField:'text',
            valueField: 'value',
            //bind: 'settings',
            //value: '{settings.valveAmount}',
            //value: this.myStore.first().get('aFieldName')
            width: '100%',
            queryMode: 'local',
            //autoSelect: true,
            editable: false,
            allowBlank: false,
            msgTarget : 'side',
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
            //{
                //xtype: 'fieldcontainer',
                //layout: 'hbox',
                //items: [
                    {
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
                    },
                //]},


            {
                xtype: 'fieldcontainer',
                //combineErrors: true,
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