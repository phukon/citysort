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

type Task = {
  id: string;
  title: string;
  profile: string;
  label: string;
  hra: string;
};

async function getTasks(): Promise<Task[]> {
  const data = [
    {
      id: '81',
      title: 'Jorhat',
      profile: 'tourist',
      label: 'assam',
      hra: 'low',
    },
    {
      id: '06',
      title: 'Kanpur',
      profile: 'rh',
      label: 'uttar-pradesh',
      hra: 'medium',
    },
    {
      id: '542',
      title: 'Gangtok',
      profile: 'nature',
      label: 'sikkim',
      hra: 'low',
    },
    {
      id: '542',
      title: 'Mumbai',
      profile: 'budget',
      label: 'maharashtra',
      hra: 'high',
    },
    {
      id: '06',
      title: 'Kohima',
      profile: 'clean',
      label: 'nagaland',
      hra: 'low',
    },
  ];

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
