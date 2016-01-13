/**
 * This view is an example list of people.
 */
Ext.define('Skrubba.view.main.Settings', {
    extend: 'Ext.panel.Panel',
    xtype: 'settings',
    controller: 'settings',

    title: 'Settings',

    frame: false,

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