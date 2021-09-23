import express from 'express';
import morgan from 'morgan';

const PORT = 3333;

const app = express();

app.use(morgan('combined'));

app.get('/', (req, res) =>
  res.send({
    message: 'Inveniam Airnode mock web API is running on port ' + PORT + '!',
  })
);

app.get('/v1/sensor/:uuid', (req, res) => {
  const uuid = req.params.uuid;
  // fixed client on this mock, sensor UUID in path
  if (uuid === '31d42f54-ef12-4c83-a5be-19a87368b648') {
    res.status(200).send({
      uuid: '31d42f54-ef12-4c83-a5be-19a87368b648',
      qrCode: 'qr##code##sample##data',
      sensorData: {
        lastTimestamp: '2021-02-01 00:00:00',
        score: 90.8,
        scoreUnit: 'device',
        temperature: 77.9,
        temperatureUnit: 'F',
        humidity: 33.9,
        humidityUnit: 'g/m3',
        co2: 408.8,
        co2Unit: 'ppm',
        voc: 148,
        vocUnit: 'ppm',
        pm25: 2.7,
        pm25Unit: '2.5 micrometers',
        light: 12.8,
        lightUnit: 'lumens',
        noise: 62.2,
        noiseUnit: 'dB',
      },
      location: {
        street: '123 Main Street',
        city: 'Miami',
        state: 'FL',
        zip: '33132',
      },
      category: {
        id: 1,
        name: 'Basic Type',
      },
      status: 'active',
    });
    return;
  }

  res.status(404).send({
    message: 'Unknown sensor UUID.',
  });
});

// curl -X 'GET' \
// 'http://localhost:3333/v1/sensor/31d42f54-ef12-4c83-a5be-19a87368b648' \
// -H 'accept: application/json' \
// | node -e "console.log( JSON.stringify( JSON.parse(require('fs').readFileSync(0) ), 0, 4 ))"

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

/* app.get('/esg', (req, res) => {

    // ESG = ESG Score, environmental data
    // REIT = Real Estate Index Token, valuation data for a collection of real estate assets
    const { scope } = req.query;
  
    // fixed client on this mock, needs tyo query by client info

    if (scope === 'summary') {
        res.status(200).send(
            {
                success: true,
                measurement_title: 'Point_in_Time Environmental, Social, Governance (ESG) Score',
                measurement_description: 'Provide building specific sensors data values (temperature, CO2, etc) by zone (lobby, 1st floor, etc) in a given point in time.',
                pit_option: 'latest',
                pit_executed_at: '2021-09-09T19:51:20.888Z',
                sensor_temperature_unit: 'F (Fahrenheit)',
                sensor_co2_unit: 'PPM (Parts Per Million)'
            }
        );
        return;
    }

    if (scope === 'detail') {
        res.status(200).send(
            {
                success: true,
                client_uuid: 'f1228b5e-125c-11ec-82a8-0242ac130003',
                client_name: 'Sams Buildings',
                building: [
                    {
                        building_uuid: 'c8caff78-2935-4afe-b72c-93389b2b664b',
                        building_name: 'WeWork Trainings',
                        data_collected_at: '2021-09-09T19:51:20.888Z',
                        building_summary_sensor_temp_avg: 64,
                        building_summary_sensor_temp_max: 74,
                        building_summary_sensor_temp_min: 53,
                        building_summary_sensor_co2_avg: 12,
                        building_summary_sensor_co2_max: 19,
                        building_summary_sensor_co2_min: 10,
                        floor: [
                            {
                                floor_level: 0,
                                floor_name: 'Entrance',
                                room_specification: [
                                    {
                                        room_uuid: 'a288527a-075e-4b57-bd27-6bdd62c8121b',
                                        room_name: 'Training A1',
                                        sensor_collected_at: '2021-09-09T19:51:20.888Z',
                                        zone_sensor_temp: 64,
                                        zone_sensor_co2: 12
                                    },
                                    {
                                        room_uuid: '08b14bb4-5604-4ed3-8d42-b44907f2be82',
                                        room_name: 'Training A2',
                                        sensor_collected_at: '2021-09-09T19:51:20.888Z',
                                        zone_sensor_temp: 62,
                                        zone_sensor_co2: 10
                                    }
                                ]
                            },
                            {
                                floor_level: 1,
                                floor_name: '1st Floor',
                                room_specification: [
                                    {
                                        room_uuid: '9ccf80dd-1254-47aa-8de6-1755afbe25fd',
                                        room_name: 'Conference B1',
                                        sensor_collected_at: '2021-09-09T19:51:20.888Z',
                                        zone_sensor_temp: 63,
                                        zone_sensor_co2: 13
                                    },
                                    {
                                        room_uuid: '246264c1-6d77-4eef-8b8d-20e39feb3603',
                                        room_name: 'Training B2',
                                        sensor_collected_at: '2021-09-09T19:51:20.888Z',
                                        zone_sensor_temp: 65,
                                        zone_sensor_co2: 14
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        building_uuid: 'cafb3fd8-15d7-4788-b280-41595217433a',
                        building_name: 'Residences Inn',
                        data_collected_at: '2021-09-09T19:51:20.888Z',
                        building_summary_sensor_temp_avg: 62,
                        building_summary_sensor_temp_max: 72,
                        building_summary_sensor_temp_min: 55,
                        building_summary_sensor_co2_avg: 11,
                        building_summary_sensor_co2_max: 19,
                        building_summary_sensor_co2_min: 11,
                        floor: [
                            {
                                floor_level: 0,
                                floor_name: 'Level 0',
                                room_specification: [
                                    {
                                        room_uuid: 'a288527a-075e-4b57-bd27-6bdd62c8121b',
                                        room_name: 'R 01',
                                        sensor_collected_at: '2021-09-09T19:51:20.888Z',
                                        zone_sensor_temp: 60,
                                        zone_sensor_co2: 15
                                    },
                                    {
                                        room_uuid: '08b14bb4-5604-4ed3-8d42-b44907f2be82',
                                        room_name: 'R 02',
                                        sensor_collected_at: '2021-09-09T19:51:20.888Z',
                                        zone_sensor_temp: 61,
                                        zone_sensor_co2: 17
                                    }
                                ]
                            }
                        ]
                    }
                ],
                client_buildings_summary: [
                    {
                        client_summary_sensor_temp_avg: 64,
                        client_summary_sensor_temp_max: 74,
                        client_summary_sensor_temp_min: 53,
                        client_summary_sensor_co2_avg: 12,
                        client_summary_sensor_co2_max: 19,
                        client_summary_sensor_co2_min: 10
                    }
                ]
            }
        );
        return;
    }

    if (scope === 'compliance') {
        res.status(200).send(
            {
                success: true,
                sensor_temp_threshold_max: 80,
                sensor_temp_threshold_min: 70,
                sensor_co2_threshold_max: 20,
                sensor_co2_threshold_min: 5
        }
        );
        return;
    }

    res.status(404).send(
        { 
            success: false, 
            message: 'Unknown API call'
        }
    );

}); */
