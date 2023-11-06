import { z } from 'zod';
import { useEffect, useState } from 'react';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';
// import { UserNav } from './components/user-nav';
import { taskSchema } from './data/schema';
import Form from '../form/Form';
import { notify, guide } from './components/formInfo';

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

const url = import.meta.env.VITE_URL;

async function getData(): Promise<Task[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();

    const capitalizedData = data.items.map((task: Task) => {
      const capitalizedTitle =
        task.title.charAt(0).toUpperCase() + task.title.slice(1);

      return {
        ...task,
        title: capitalizedTitle,
      };
    });

    return z.array(taskSchema).parse(capitalizedData);
  } catch (error) {
    // Handle errors
    console.error('Error fetching tasks:', error);
    return [];
  }
}

export default function TaskPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [canToast, setCanToast] = useState(true);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const handleResize = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
  };

  useEffect(() => {
    if (canToast && scrollPosition > 300 && screenWidth > 300) {
      // Trigger an event or function when conditions are met
      console.log('Toast!');
      notify();
      setCanToast(false);

      setTimeout(() => {
        console.log('Resuming handleScroll events!');
        setCanToast(true);
      }, 1000 * 60);
    }

    // if (canGuide && scrollPosition > 406 && screenWidth > 300)
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollPosition, screenWidth]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setTasks(data);
        setLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        setError('Error fetching tasks'); // Set error state if fetching data fails
        setLoading(false); // Set loading state to false due to the error
      }
    };

    fetchData();
  }, []);

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    setTimeout(() => { guide();}, 1500)
  }, []);

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-2 md:p-10 justify-center md:flex">
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
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="text-4xl font-bold text-gray-700">Loading...</div>
          </div>
        ) : (
          <DataTable data={tasks} columns={columns} />
        )}
        <div className="p-3 md:p-16">
          <Form />
        </div>
      </div>
    </>
  );
}
