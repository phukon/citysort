import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';


const data = [
  {
    subject: 'Good Roads 🛣',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Good Education infra 🏫',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Good Hospitals 🏥',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Clean Air 🎐',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Job Opportunities 💼',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Safe 🚓',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: '24X7⚡',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: '24X7 🚿',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Fast internet 📶',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export function RadarOverview () {
   return (
     <ResponsiveContainer width="100%" height={400}>
       <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
         <PolarGrid />
         <PolarAngleAxis dataKey="subject" />
         <PolarRadiusAxis angle={50} domain={[0, 200]} />
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