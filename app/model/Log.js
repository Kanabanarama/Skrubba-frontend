Ext.define('Skrubba.model.Log', {
    extend: 'Skrubba.model.Base',

    fields: [
        { name: 'valve_config_id', type: 'int' },
        { name: 'valve', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'on_time', type: 'auto' },
        { name: 'on_duration', type: 'int' },
        { name: 'interval_type', type: 'string' },
        { name: 'last_on_date', type: 'date' }
    ]
});