/**
 * The configuration class
 */
Ext.define('Skrubba.util.Configuration', {
    alias:'widget.Configuration',
    config:{
        //proxyUrl : 'http://localhost:2525'
        proxyUrl: 'http://192.168.0.205:2525'
    },
    constructor : function(options){
        this.initConfig(options);
    }
});