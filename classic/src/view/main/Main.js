/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Skrubba.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Skrubba.view.main.MainController',
        'Skrubba.view.main.MainModel',
        'Skrubba.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',
    iconCls: 'title-icon-skrubba',
    bodyStyle: "background-image:url(classic/resources/images/fisheye-placebo.jpg) !important; background-size: 100% 100%;",

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Plants',
        iconCls: 'fa-clock-o',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        items: [{
            xtype: 'settingsform'
        }]
    }, {
        title: 'Statistics',
        iconCls: 'fa-line-chart',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Logs',
        iconCls: 'fa-clipboard',
        items: [{
            xtype: 'loglist'
        }]
    }, {
        title: 'Logout',
        iconCls: 'fa-times',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
