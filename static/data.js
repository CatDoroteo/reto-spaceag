// 20210921230726
// https://analytics.spaceag.co/static/challenges_info/one_polygon_carto.json

export default {
  crs: {
    type: 'name',
    properties: {
      name: 'EPSG:4326',
    },
  },
  setup: {
    cartography: {
      unit_name: 'lote',
      id: 442,
      name: 'Cartografía de lote',
    },
    data_type: 'int',
    'variable_group:': null,
    inverted_legend: false,
    real_setup: true,
    variable: {
      category: 'Producción',
      name: 'Produccion',
      requires_time: false,
    },
    measurement_unit: 'Kg',
    display_total_in_dashboard: true,
    legend: [10.0, 20.0, 25.0],
  },
  type: 'FeatureCollection',
  features: [
    {
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-75.80318792584497, -14.010508830892729],
            [-75.80357604197151, -14.010098485803613],
            [-75.80341123599916, -14.008264647434418],
            [-75.80337347726918, -14.00830884788491],
            [-75.8032888725298, -14.00845576747385],
            [-75.80314660182964, -14.00875662139284],
            [-75.80301632487944, -14.008850357467912],
            [-75.80283545211566, -14.008914402120103],
            [-75.80272291099085, -14.009033547353713],
            [-75.80266265796831, -14.009107336060822],
            [-75.80255993524152, -14.009115853708527],
            [-75.80185152559181, -14.009703043588672],
            [-75.80228836137502, -14.009679340032271],
            [-75.80222537770697, -14.010590959989404],
            [-75.8026809899508, -14.010567922073863],
            [-75.80318792584497, -14.010508830892729],
          ],
        ],
      },
      type: 'Feature',
      properties: {
        values: [
          {
            measurement_unit: 'Kg',
            date_stamp: '2017-10-16',
            value: 15,
            time_stamp: '00:00:00',
          },
        ],
        unit: {
          state: {
            area: 2.4907858163,
            year_of_planting: ['2016'],
            variety: ['tango 1'],
          },
          metadata: [
            {
              level_name: 'lote',
              name: '46',
              level: -1,
            },
          ],
          name: '46',
          full_name: 'lote 46',
          id: 35023,
        },
      },
    },
  ],
};
