Ext.define('Skrubba.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function(button, event) {
        loginView = this.getView();
        loginForm = button.up('form').getForm();
        username = loginForm.findField('username').getValue();
        password = loginForm.findField('password').getValue();
        Ext.Ajax.request({
            url: Ext.widget('Configuration').getProxyUrl() + '/action/login',
            method: 'POST',
            jsonData: Ext.JSON.encode({
                username: username,
                password: password
            }),
            failure: function(xhr) {
                console.log('error', this, arguments);
            },
            success:  function(xhr, request) {
                responseObj = Ext.util.JSON.decode(xhr.responseText);
                if (responseObj.success == 'true') {
                    // successfull login
                    localStorage.setItem("SkrubbaLogin", true);
                    loginView.destroy();
                    Ext.widget('app-main');
                } else {
                    Ext.MessageBox.alert('Error', responseObj.message);
                }
            }
        });
    }
});

//  loginForm.getForm().reset();