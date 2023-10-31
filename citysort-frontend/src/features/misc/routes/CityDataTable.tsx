import React from 'react';

interface City {
  name: string;
  parameters: string[];
}

interface CityDataTableProps {
  cities: City[];
}

const CityDataTable: React.FC<CityDataTableProps> = ({ cities }) => {
  const parameters: string[] = [
    'State',
    '24x7 Electricity',
    '24x7 Water',
    'Safe',
    'Education',
    'Jobs',
    'Parameter 7',
    'Parameter 8',
    'Parameter 9',
    'Parameter 10',
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-collapse shadow-md rounded-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="border-b p-3 font-semibold text-sm text-gray-600">
              City
            </th>
            {parameters.map((param, index) => (
              <th
                key={index}
                className="border-b p-3 font-semibold text-sm text-gray-600"
              >
                {param}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cities.map((city, cityIndex) => (
            <tr
              key={cityIndex}
              className={cityIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              <td className="border-b p-3">{city.name}</td>
              {parameters.map((_, paramIndex) => (
                <td key={paramIndex} className="border-b p-3">
                  {city.parameters[paramIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CityDataTable;
