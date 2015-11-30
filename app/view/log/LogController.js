Ext.define('Skrubba.view.log.LogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.log',

    /*onLoggableEvent: function(view, rowInded, colIndex, item, event, record) {
        console.log('onLoggableEvent', view);
        this.fireEvent('logevent', this, record);
    },*/

    listen: {
        controller: {
            '*': {
                logevent: 'onLogEvent',
                clearlog: 'onClearLog'
            }
        }
    },

    getLogStore: function() {
        //var logPanel = this.getReferences().mainTabPanel.getComponent('logPanel');
        //var logStore = logPanel.getViewModel().getStore('logs');
        var logStore = this.getViewModel().getStore('logs');
        return logStore;
    },

    onLogEvent: function(sender, record, action) {
        var logStore = this.getLogStore();
        var plantName = record.getData().name;
        switch(action) {
            case 'add':
                lineStart = 'Added';
                break;
            default:
                lineStart = 'Changed';
                break;
        }
        logStore.add({date: new Date(), line: lineStart+' entry ['+plantName+']'});
        logStore.sync();
    },

    onClearLog: function(sender) {
        var logStore = this.getLogStore();
        logStore.removeAll();
        logStore.sync();
    }

});
