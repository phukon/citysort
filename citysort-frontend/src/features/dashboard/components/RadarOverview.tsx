import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';


export function RadarOverview ({data}: any) {
  const transformedData =  [
    {
      subject: 'Good Roads 🛣',
      A: data?.roads,
      B: (data?.total_records - data?.roads),
      fullMark: data?.total_records,
    },
    {
      subject: 'Good Education infra 🏫',
      A: data?.education,
      B: (data?.total_records - data?.education),
      fullMark: data?.total_records,
    },
    {
      subject: 'Good Hospitals 🏥',
      A: data?.hospitals,
      B: (data?.total_records - data?.hospitals),
      fullMark: data?.total_records,
    },
    {
      subject: 'Clean Air 🎐',
      A: data?.air,
      B: (data?.total_records - data?.air),
      fullMark: data?.total_records,
    },
    {
      subject: 'Job Opportunities 💼',
      A: data?.jobs,
      B: (data?.total_records - data?.jobs),
      fullMark: data?.total_records,
    },
    {
      subject: 'Safe 🚓',
      A: data?.safe,
      B: (data?.total_records - data?.safe),
      fullMark: data?.total_records,
    },
    {
      subject: '24X7⚡',
      A: data?.electricity,
      B: (data?.total_records - data?.electricity),
      fullMark: data?.total_records,
    },
    {
      subject: '24X7 🚿',
      A: data?.water,
      B: (data?.total_records - data?.water),
      fullMark: data?.total_records,
    },
    {
      subject: 'Fast internet 📶',
      A: data?.internet,
      B: (data?.total_records - data?.internet),
      fullMark: data?.total_records,
    },
  ]
  // console.log(transformedData);

   return (
     <ResponsiveContainer width="100%" height={400}>
       <RadarChart cx="50%" cy="50%" outerRadius="80%" data={transformedData}>
         <PolarGrid />
         <PolarAngleAxis dataKey="subject" />
         <PolarRadiusAxis angle={50} domain={[0, 7]} />
         <Radar
           name="Yes"
           dataKey="A"
           stroke="#8884d8"
           fill="#8884d8"
           fillOpacity={0.6}
         />
         <Radar
           name="No"
           dataKey="B"
           stroke="#82ca9d"
           fill="#82ca9d"
           fillOpacity={0.6}
         />
         <Legend />
       </RadarChart>
     </ResponsiveContainer>
   );
}