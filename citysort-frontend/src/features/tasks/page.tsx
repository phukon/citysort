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
      id: 'TASK-8782',
      title:
        "You can't compress the program without quantifying the open-source SSD pixel!",
      status: 'in progress',
      label: 'documentation',
      priority: 'medium',
    },
    {
      id: 'TASK-7878',
      title:
        'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
      status: 'backlog',
      label: 'documentation',
      priority: 'medium',
    },
    {
      id: 'TASK-7839',
      title: 'We need to bypass the neural TCP card!',
      status: 'todo',
      label: 'bug',
      priority: 'high',
    },
    {
      id: 'TASK-1280',
      title:
        'Use the digital TLS panel, then you can transmit the haptic system!',
      status: 'done',
      label: 'bug',
      priority: 'high',
    },
    {
      id: 'TASK-7262',
      title:
        'The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!',
      status: 'done',
      label: 'feature',
      priority: 'high',
    },
    {
      id: 'TASK-1138',
      title:
        "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
      status: 'in progress',
      label: 'feature',
      priority: 'medium',
    },
    {
      id: 'TASK-7184',
      title: 'We need to program the back-end THX pixel!',
      status: 'todo',
      label: 'feature',
      priority: 'low',
    },
    {
      id: 'TASK-5160',
      title:
        "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
      status: 'in progress',
      label: 'documentation',
      priority: 'high',
    },
    {
      id: 'TASK-5618',
      title:
        "Generating the driver won't do anything, we need to index the online SSL application!",
      status: 'done',
      label: 'documentation',
      priority: 'medium',
    },
    {
      id: 'TASK-6699',
      title:
        "I'll transmit the wireless JBOD capacitor, that should hard drive the SSD feed!",
      status: 'backlog',
      label: 'documentation',
      priority: 'medium',
    },
    {
      id: 'TASK-2858',
      title: 'We need to override the online UDP bus!',
      status: 'backlog',
      label: 'bug',
      priority: 'medium',
    },
    {
      id: 'TASK-9864',
      title:
        "I'll reboot the 1080p FTP panel, that should matrix the HEX hard drive!",
      status: 'done',
      label: 'bug',
      priority: 'high',
    },
    {
      id: 'TASK-8404',
      title: 'We need to generate the virtual HEX alarm!',
      status: 'in progress',
      label: 'bug',
      priority: 'low',
    },
    {
      id: 'TASK-5365',
      title:
        "Backing up the pixel won't do anything, we need to transmit the primary IB array!",
      status: 'in progress',
      label: 'documentation',
      priority: 'low',
    },
    {
      id: 'TASK-1780',
      title:
        'The CSS feed is down, index the bluetooth transmitter so we can compress the CLI protocol!',
      status: 'todo',
      label: 'documentation',
      priority: 'high',
    },
    {
      id: 'TASK-6938',
      title:
        'Use the redundant SCSI application, then you can hack the optical alarm!',
      status: 'todo',
      label: 'documentation',
      priority: 'high',
    },
    {
      id: 'TASK-9885',
      title: 'We need to compress the auxiliary VGA driver!',
      status: 'backlog',
      label: 'bug',
      priority: 'high',
    },
    {
      id: 'TASK-3216',
      title:
        "Transmitting the transmitter won't do anything, we need to compress the virtual HDD sensor!",
      status: 'backlog',
      label: 'documentation',
      priority: 'medium',
    },
    {
      id: 'TASK-9285',
      title:
        'The IP monitor is down, copy the haptic alarm so we can generate the HTTP transmitter!',
      status: 'todo',
      label: 'bug',
      priority: 'high',
    },
    {
      id: 'TASK-1024',
      title:
        "Overriding the microchip won't do anything, we need to transmit the digital OCR transmitter!",
      status: 'in progress',
      label: 'documentation',
      priority: 'low',
    },
    {
      id: 'TASK-7068',
      title:
        "You can't generate the capacitor without indexing the wireless HEX pixel!",
      status: 'canceled',
      label: 'bug',
      priority: 'low',
    },
    {
      id: 'TASK-6502',
      title:
        "Navigating the microchip won't do anything, we need to bypass the back-end SQL bus!",
      status: 'todo',
      label: 'bug',
      priority: 'high',
    },
    {
      id: 'TASK-5326',
      title: 'We need to hack the redundant UTF8 transmitter!',
      status: 'todo',
      label: 'bug',
      priority: 'low',
    },
    {
      id: 'TASK-6274',
      title:
        'Use the virtual PCI circuit, then you can parse the bluetooth alarm!',
      status: 'canceled',
      label: 'documentation',
      priority: 'low',
    },
    {
      id: 'TASK-1571',
      title:
        "I'll input the neural DRAM circuit, that should protocol the SMTP interface!",
      status: 'in progress',
      label: 'feature',
      priority: 'medium',
    },
    {
      id: 'TASK-9518',
      title:
        "Compressing the interface won't do anything, we need to compress the online SDD matrix!",
      status: 'canceled',
      label: 'documentation',
      priority: 'medium',
    },
    {
      id: 'TASK-5581',
      title:
        "I'll synthesize the digital COM pixel, that should transmitter the UTF8 protocol!",
      status: 'backlog',
      label: 'documentation',
      priority: 'high',
    },
    {
      id: 'TASK-2197',
      title:
        "Parsing the feed won't do anything, we need to copy the bluetooth DRAM bus!",
      status: 'todo',
      label: 'documentation',
      priority: 'low',
    },
    {
      id: 'TASK-8484',
      title: 'We need to parse the solid state UDP firewall!',
      status: 'in progress',
      label: 'bug',
      priority: 'low',
    },
    {
      id: 'TASK-9892',
      title:
        'If we back up the application, we can get to the UDP application through the multi-byte THX capacitor!',
      status: 'done',
      label: 'documentation',
      priority: 'high',
    },
    {
      id: 'TASK-9616',
      title: 'We need to synthesize the cross-platform ASCII pixel!',
      status: 'in progress',
      label: 'feature',
      priority: 'medium',
    },
    {
      id: 'TASK-9744',
      title:
        'Use the back-end IP card, then you can input the solid state hard drive!',
      status: 'done',
      label: 'documentation',
      priority: 'low',
    },
    {
      id: 'TASK-1376',
      title:
        "Generating the alarm won't do anything, we need to generate the mobile IP capacitor!",
      status: 'backlog',
      label: 'documentation',
      priority: 'low',
    },
    {
      id: 'TASK-7382',
      title:
        'If we back up the firewall, we can get to the RAM alarm through the primary UTF8 pixel!',
      status: 'todo',
      label: 'feature',
      priority: 'low',
    },
    {
      id: 'TASK-2290',
      title:
        "I'll compress the virtual JSON panel, that should application the UTF8 bus!",
      status: 'canceled',
      label: 'documentation',
      priority: 'high',
    },
    {
      id: 'TASK-1533',
      title:
        "You can't input the firewall without overriding the wireless TCP firewall!",
      status: 'done',
      label: 'bug',
      priority: 'high',
    },
    {
      id: 'TASK-4920',
      title:
        "Bypassing the hard drive won't do anything, we need to input the bluetooth JSON program!",
      status: 'in progress',
      label: 'bug',
      priority: 'high',
    },
    {
      id: 'TASK-5168',
      title:
        'If we synthesize the bus, we can get to the IP panel through the virtual TLS array!',
      status: 'in progress',
      label: 'feature',
      priority: 'low',
    },
    {
      id: 'TASK-7103',
      title: 'We need to parse the multi-byte EXE bandwidth!',
      status: 'canceled',
      label: 'feature',
      priority: 'low',
    },
    {
      id: 'TASK-4314',
      title:
        'If we compress the program, we can get to the XML alarm through the multi-byte COM matrix!',
      status: 'in progress',
      label: 'bug',
      priority: 'high',
    },
    {
      id: 'TASK-3415',
      title:
        'Use the cross-platform XML application, then you can quantify the solid state feed!',
      status: 'todo',
      label: 'feature',
      priority: 'high',
    },
    {
      id: 'TASK-8339',
      title:
        'Try to calculate the DNS interface, maybe it will input the bluetooth capacitor!',
      status: 'in progress',
      label: 'feature',
      priority: 'low',
    },
    {
      id: 'TASK-6995',
      title:
        'Try to hack the XSS bandwidth, maybe it will override the bluetooth matrix!',
      status: 'todo',
      label: 'feature',
      priority: 'high',
    },
    {
      id: 'TASK-8053',
      title:
        'If we connect the program, we can get to the UTF8 matrix through the digital UDP protocol!',
      status: 'todo',
      label: 'feature',
      priority: 'medium',
    },
    {
      id: 'TASK-4336',
      title:
        'If we synthesize the microchip, we can get to the SAS sensor through the optical UDP program!',
      status: 'todo',
      label: 'documentation',
      priority: 'low',
    },
    {
      id: 'TASK-8790',
      title:
        "I'll back up the optical COM alarm, that should alarm the RSS capacitor!",
      status: 'done',
      label: 'bug',
      priority: 'medium',
    },
    {
      id: 'TASK-8980',
      title:
        'Try to navigate the SQL transmitter, maybe it will back up the virtual firewall!',
      status: 'canceled',
      label: 'bug',
      priority: 'low',
    },
    {
      id: 'TASK-7342',
      title: 'Use the neural CLI card, then you can parse the online port!',
      status: 'backlog',
      label: 'documentation',
      priority: 'low',
    },
    {
      id: 'TASK-5608',
      title:
        "I'll hack the haptic SSL program, that should bus the UDP transmitter!",
      status: 'canceled',
      label: 'documentation',
      priority: 'low',
    },
    {
      id: 'TASK-1606',
      title:
        "I'll generate the bluetooth PNG firewall, that should pixel the SSL driver!",
      status: 'done',
      label: 'feature',
      priority: 'medium',
    },
    {
      id: 'TASK-7872',
      title:
        "Transmitting the circuit won't do anything, we need to reboot the 1080p RSS monitor!",
      status: 'canceled',
      label: 'feature',
      priority: 'medium',
    },
    {
      id: 'TASK-4167',
      title:
        'Use the cross-platform SMS circuit, then you can synthesize the optical feed!',
      status: 'canceled',
      label: 'bug',
      priority: 'medium',
    },
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
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
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
