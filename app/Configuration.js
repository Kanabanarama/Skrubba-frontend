/**
 * The configuration class
 */
Ext.define('Skrubba.util.Configuration', {
    alias:'widget.Configuration',
    config:{
        proxyUrl : Ext.manifest.backendUrl
    },
    constructor : function(options){
        this.initConfig(options);
    }
});