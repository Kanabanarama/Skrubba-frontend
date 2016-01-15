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

    height: 400,
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
        html: '<p>This setting prevents that more valves can be added and configured than are physically present.</p>'
    },
    {
        title: 'User',
        region: 'center',
        html: '<p>TODO</p>'
    },
    {
        title: 'About',
        region: 'south',
        height: 100,
        minHeight: 75,
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