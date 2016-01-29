/**
 * The configuration class
 */
Ext.define('Skrubba.util.Configuration', {
    alias:'widget.Configuration',
    config:{
        proxyUrl : Ext.manifest.backendUrl + Ext.manifest.backendPort
    },
    constructor : function(options){
        this.initConfig(options);
    }
});