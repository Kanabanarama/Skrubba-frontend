Ext.define('Skrubba.view.log.Log', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.app-log',

    controller: 'log',

    viewModel: {
        type: 'log'
    },

    layout: {
        type: 'fit'
    },

    bind: {
        store: '{logs}'
    },

    columns: [
        { header: 'Date', dataIndex: 'date', width: 320 },
        { header: 'Line', dataIndex: 'line', flex: 1 }
    ]
});