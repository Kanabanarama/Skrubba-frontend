Ext.define('Skrubba.store.Plants', {
    extend: 'Ext.data.Store',

    alias: 'store.plants',

    model: 'Skrubba.model.Plant',

    autoLoad: true
    //autoSync: true

    //url: 'http://localhost:2525/data/{entityName:lowercase}.json'
    //storeId: 'myStore',
    // reader configs
    //root: 'images',
    //idProperty: 'name',
    //fields: ['name', 'url', {name:'size', type: 'float'}, {name:'lastmod', type:'date'}]

    //editorActiveOnIndex: -1

    /*fields: [
        'id', 'name', 'onTime', 'onDuration', 'intervalType', 'isActive'
    ],*/

    /*data: { plants: [
        { id: 1, name: "Pachira aquatica", onTime: "18:30", onDuration: 15, intervalType: 'daily', measures: [40,30,20,60,20,50,10], isActive: 1 },
        { id: 2, name: "Beaucarnea recurvata", onTime: "18:30", onDuration: 15, intervalType: 'weekly', measures: [40,30,30,40,40,30,40], isActive: 1 },
        { id: 3, name: "Euphorbia trigona", onTime: "18:30", onDuration: 15, intervalType: 'weekly', measures: [40,30,40,60,40,50,50], isActive: 1 },
        { id: 4, name: "Ficus elastica", onTime: "18:30", onDuration: 15, intervalType: 'daily', measures: [40,30,20,60,20,50,10], isActive: 1 },
        { id: 5, name: "Citrus sinensis", onTime: "18:30", onDuration: 15, intervalType: 'daily', measures: [40,30,40,60,40,50,50], isActive: 1 },
        { id: 6, name: "Zamioculcas Zamiifolia", onTime: "18:30", onDuration: 15, intervalType: 'daily', measures: [40,30,30,40,40,30,40], isActive: 1 },
        { id: 7, name: "Alocasia Polly", onTime: "18:30", onDuration: 15, intervalType: 'daily', measures: [40,30,40,60,40,50,50], isActive: 1 },
        { id: 8, name: "Sansevieria Cylindrica", onTime: "18:30", onDuration: 15, intervalType: 'weekly', measures: [40,30,20,60,20,50,10], isActive: 1 }
    ]}*/

    /*proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }*/
});

/*Ext.define('Skrubba.store.Plants', {
    extend: 'Ext.data.Store',
    alias: 'store.plants',
    model: 'Skrubba.model.Plant',
    autoLoad : true
});*/