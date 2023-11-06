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

async function getData(): Promise<Task[]> {
  console.log('getData');
  const data = await pb.collection('citysort').getFullList({
    sort: 'created',
    page: 1,
    perPage: 1,
    skipTotal: true,
  });
  console.log(data);

  const capitalizedData = data.map((task) => {
    const capitalizedTitle =
      task.title.charAt(0).toUpperCase() + task.title.slice(1);

    return {
      ...task,
      title: capitalizedTitle,
    };
  });

  return z.array(taskSchema).parse(capitalizedData);
}

export default function TaskPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
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
