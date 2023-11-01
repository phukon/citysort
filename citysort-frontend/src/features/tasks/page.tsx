// import { promises as fs } from 'fs';
// import path from 'path';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import { UserNav } from './components/user-nav';
import { taskSchema } from './data/schema';
import im1 from '@/assets/im1.jpg';


type Task = {
  id: string;
  title: string;
  status: string;
  label: string;
  priority: string;
};

async function getTasks(): Promise<Task[]> {
  const data = [
    {
      id: 'TASK-9581',
      title:
        "You can't index the port without hacking the cross-platform XSS monitor!",
      status: 'backlog',
      label: 'documentation',
      priority: 'low',
    },
    {
      id: 'TASK-8806',
      title: 'We need to bypass the back-end SSL panel!',
      status: 'done',
      label: 'bug',
      priority: 'medium',
    },
    {
      id: 'TASK-6542',
      title:
        'Try to quantify the RSS firewall, maybe it will quantify the open-source system!',
      status: 'done',
      label: 'feature',
      priority: 'low',
    },
    {
      id: 'TASK-6806',
      title:
        'The VGA protocol is down, reboot the back-end matrix so we can parse the CSS panel!',
      status: 'canceled',
      label: 'documentation',
      priority: 'low',
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
      <div className="md:hidden">
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
      </div>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
