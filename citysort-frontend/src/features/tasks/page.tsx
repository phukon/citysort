// import { promises as fs } from 'fs';
// import path from 'path';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';
// import { UserNav } from './components/user-nav';
import { taskSchema } from './data/schema';
// import im1 from '@/assets/im1.jpg';
import Form from '../form/Form';
import pb from '@/lib/pocketbase';

type Task = {
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  id: string;
  score: number;
  title: string;
  profile: string;
  label: string;
  hra: string;
  population: number;
  internet_speed: number;
  language: string;
  json: string;
};

async function getTasks(): Promise<Task[]> {
  const data = await pb.collection('citysort').getFullList({
    sort: '-created',
  });

  // const data = [
  //   {
  //     id: 'jorhat11',
  //     score: 5,
  //     title: 'Jorhat',
  //     profile: 'historic',
  //     label: 'assam',
  //     hra: 't3',
  //   },
  //   {
  //     id: 'kanpur11',
  //     score: 5,
  //     title: 'Kanpur',
  //     profile: 'nightlife',
  //     label: 'uttar-pradesh',
  //     hra: 't2',
  //   },
  //   {
  //     id: 'gangtok11',
  //     score: 5,
  //     title: 'Gangtok',
  //     profile: 'nature',
  //     label: 'sikkim',
  //     hra: 't3',
  //   },
  //   {
  //     id: 'mumbai11',
  //     score: 5,
  //     title: 'Mumbai',
  //     profile: 'budget',
  //     label: 'maharashtra',
  //     hra: 't1',
  //   },
  //   {
  //     id: 'kohima11',
  //     score: 5,
  //     title: 'Kohima',
  //     profile: 'clean',
  //     label: 'nagaland',
  //     hra: 't3',
  //   },
  //   {
  //     id: 'delhi11',
  //     score: 5,
  //     title: 'Delhi',
  //     profile: 'tourist',
  //     label: 'delhi',
  //     hra: 't1',
  //   },
  //   {
  //     id: 'ahmedabad11',
  //     score: 5,
  //     title: 'Ahmedabad',
  //     profile: 'budget',
  //     label: 'gujarat',
  //     hra: 't1',
  //   },
  //   {
  //     id: 'hyderabad11',
  //     score: 5,
  //     title: 'Hyderabad',
  //     profile: 'tourist',
  //     label: 'telangana',
  //     hra: 't1',
  //   },
  //   {
  //     id: 'jaipur11',
  //     score: 5,
  //     title: 'Jaipur',
  //     profile: 'historic',
  //     label: 'rajasthan',
  //     hra: 't2',
  //   },
  //   {
  //     id: 'bangalore11',
  //     score: 5,
  //     title: 'Bangalore',
  //     profile: 'rh',
  //     label: 'karnataka',
  //     hra: 't1',
  //   },
  //   {
  //     id: 'chennai11',
  //     score: 5,
  //     title: 'Chennai',
  //     profile: 'beach',
  //     label: 'tamil-nadu',
  //     hra: 't1',
  //   },
  //   {
  //     id: 'lucknow11',
  //     score: 5,
  //     title: 'Lucknow',
  //     profile: 'historical',
  //     label: 'uttar-pradesh',
  //     hra: 't2',
  //   },
  //   {
  //     id: 'pune11',
  //     score: 5,
  //     title: 'Pune',
  //     profile: 'foodie',
  //     label: 'maharashtra',
  //     hra: 't1',
  //   },
  //   {
  //     id: 'bhubaneswar11',
  //     score: 5,
  //     title: 'Bhubaneswar',
  //     profile: 'temples',
  //     label: 'odisha',
  //     hra: 't2',
  //   },
  //   {
  //     id: 'cochin11',
  //     score: 5,
  //     title: 'Cochin',
  //     profile: 'seafood',
  //     label: 'kerala',
  //     hra: 't2',
  //   },
  //   {
  //     id: 'nagpur11',
  //     score: 5,
  //     title: 'Nagpur',
  //     profile: 'orange',
  //     label: 'maharashtra',
  //     hra: 't2',
  //   },
  //   {
  //     id: 'indore11',
  //     score: 5,
  //     title: 'Indore',
  //     profile: 'culture',
  //     label: 'madhya-pradesh',
  //     hra: 't2',
  //   },
  //   {
  //     id: 'varanasi11',
  //     score: 5,
  //     title: 'Varanasi',
  //     profile: 'spiritual',
  //     label: 'uttar-pradesh',
  //     hra: 't2',
  //   },
  //   {
  //     id: 'guwahati11',
  //     score: 5,
  //     title: 'Guwahati',
  //     profile: 'riverside',
  //     label: 'assam',
  //     hra: 't2',
  //   },
  //   {
  //     id: 'dehradun11',
  //     score: 5,
  //     title: 'Dehradun',
  //     profile: 'mountains',
  //     label: 'uttarakhand',
  //     hra: 't2',
  //   },
  //   {
  //     id: 'ajmer11',
  //     score: 5,
  //     title: 'Ajmer',
  //     profile: 'pilgrimage',
  //     label: 'rajasthan',
  //     hra: 't2',
  //   },
  //   {
  //     id: 'faridabad11',
  //     score: 5,
  //     title: 'Faridabad',
  //     profile: 'industrial',
  //     label: 'haryana',
  //     hra: 't2',
  //   },
  //   {
  //     id: 'thane11',
  //     score: 5,
  //     title: 'Thane',
  //     profile: 'lakes',
  //     label: 'maharashtra',
  //     hra: 't2',
  //   },
  //   {
  //     id: 'srinagar11',
  //     score: 5,
  //     title: 'Srinagar',
  //     profile: 'lakeside',
  //     label: 'jammu-and-kashmir',
  //     hra: 't2',
  //   },
  //   {
  //     id: 'amritsar11',
  //     score: 5,
  //     title: 'Amritsar',
  //     profile: 'golden-temple',
  //     label: 'punjab',
  //     hra: 't2',
  //   },
  //   {
  //     id: 'patna11',
  //     score: 5,
  //     title: 'Patna',
  //     profile: 'political',
  //     label: 'bihar',
  //     hra: 't2',
  //   },
  //   {
  //     id: 'agra11',
  //     score: 5,
  //     title: 'Agra',
  //     profile: 'monuments',
  //     label: 'uttar-pradesh',
  //     hra: 't2',
  //   },
  //   {
  //     id: 'nashik11',
  //     score: 5,
  //     title: 'Nashik',
  //     profile: 'wineries',
  //     label: 'maharashtra',
  //     hra: 't2',
  //   },
  //   {
  //     id: 'rajkot11',
  //     score: 5,
  //     title: 'Rajkot',
  //     profile: 'business',
  //     label: 'gujarat',
  //     hra: 't2',
  //   },
  //   {
  //     id: 'meerut11',
  //     score: 5,
  //     title: 'Meerut',
  //     profile: 'martial',
  //     label: 'uttar-pradesh',
  //     hra: 't2',
  //   },
  // ];
  console.log(data)
  return z.array(taskSchema).parse(data);
}

export default function TaskPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        // Handle errors
        console.error('Error fetching tasks:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* <div className="md:hidden">
        <img
          src={im1}
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <img
          src={im1}
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div> */}
      <div className="h-full flex-1 flex-col space-y-8 p-2 md:p-16 justify-center md:flex">
        <div className="flex items-center justify-between space-y-2 max-[600px]:p-5">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">India</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of cities so far!
            </p>
          </div>
          {/* <div className="flex items-center space-x-2">
            <UserNav />
          </div> */}
        </div>
        <DataTable data={tasks} columns={columns} />
        <div className="p-3 md:p-16">
          <Form />
        </div>
      </div>
    </>
  );
}
