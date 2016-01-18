Ext.define('Skrubba.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'loginwindow',

    requires: [
        'Skrubba.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',

    title: 'Login',
    bodyPadding: 10,
    closable: false,
    autoShow: true,

    defaultFocus: 0,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});