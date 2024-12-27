import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import Image from 'next/image';


type SkillCategory = 'frontend' | 'backend' | 'mobile' | 'devops' | 'tools';

const skills: Record<SkillCategory, { name: string, icon: JSX.Element, description: string }[]> = {
    frontend: [
        { name: 'JavaScript', icon: <Image src="/js.svg" alt="JavaScript logo" width={24} height={24} />, description: 'A versatile programming language mainly used for web development.' },
        { name: 'React', icon: <Image src="/react.svg" alt="React logo" width={24} height={24} />, description: 'A JavaScript library for building user interfaces.' },
        { name: 'TypeScript', icon: <Image src="/ts.svg" alt="TypeScript logo" width={24} height={24} />, description: 'A typed superset of JavaScript that compiles to plain JavaScript.' },
        { name: 'Tailwind', icon: <Image src="/tail.svg" alt="Tailwind CSS logo" width={24} height={24} />, description: 'A utility-first CSS framework for rapid UI development.' },
        { name: 'Bootstrap', icon: <Image src="/bootstrap.svg" alt="Bootstrap logo" width={24} height={24} />, description: 'A popular CSS framework for developing responsive and mobile-first websites.' }
    ],
    backend: [
        { name: 'Node.js', icon: <Image src="/node.svg" alt="Node.js logo" width={24} height={24} />, description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
        { name: 'Express', icon: <Image src="/js.svg" alt="Express logo" width={24} height={24} />, description: 'A minimal and flexible Node.js web application framework.' },
        { name: 'MongoDB', icon: <Image src="/mongodb.svg" alt="MongoDB logo" width={24} height={24} />, description: 'A document-oriented NoSQL database used for high volume data storage.' },
        { name: 'MySQL', icon: <Image src="/mysql.svg" alt="MySQL logo" width={24} height={24} />, description: 'An open-source relational database management system.' }
    ],
    mobile: [
        { name: 'Flutter', icon: <Image src="/flutter.svg" alt="Flutter logo" width={24} height={24} />, description: 'A UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.' },
        { name: 'React Native', icon: <Image src="/react.svg" alt="React Native logo" width={24} height={24} />, description: 'A framework for building native apps using React.' },
    ],
    devops: [
        { name: 'Git', icon: <Image src="/git.svg" alt="Git logo" width={24} height={24} />, description: 'A distributed version control system for tracking changes in source code.' },
        { name: 'GitHub Actions', icon: <Image src="/github.svg" alt="GitHub logo" width={24} height={24} />, description: 'A CI/CD service that allows you to automate your software workflows.' },
        { name: 'Docker', icon: <Image src="/docker.svg" alt="Docker logo" width={24} height={24} />, description: 'A platform for developing, shipping, and running applications in containers.' }
    ],
    tools: [
        { name: 'VSCode', icon: <Image src="/vscode.svg" alt="VSCode logo" width={24} height={24} />, description: 'A source-code editor made by Microsoft for Windows, Linux and macOS.' },
        { name: 'Jira', icon: <Image src="/jira.svg" alt="Jira logo" width={24} height={24} />, description: 'A proprietary issue tracking product developed by Atlassian.' },
        { name: 'Postman', icon: <Image src="/postman.svg" alt="Postman logo" width={24} height={24} />, description: 'An API platform for building and using APIs.' }
    ]
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState<SkillCategory>('frontend');

    return (
        <section id="stack" className="mt-5 p-6 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold p-6">
                Tech Stack
            </h1>

            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as SkillCategory)}>
                <TabsList className='rounded-lg p-4 mb-4'>
                    <TabsTrigger value="frontend">Frontend</TabsTrigger>
                    <TabsTrigger value="backend">Backend</TabsTrigger>
                    <TabsTrigger value="mobile">Mobile</TabsTrigger>
                    <TabsTrigger value="tools">Tools</TabsTrigger>
                    <TabsTrigger value="devops">DevOps</TabsTrigger>
                </TabsList>
                {Object.entries(skills).map(([category, skillsList]) => (
                    <TabsContent key={category} value={category}>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                            {skillsList.map((skill, index) => (
                                <Card key={index} className="">
                                    <CardHeader>
                                        <CardTitle>
                                            <div className='flex flex-row'>
                                                {skill.icon} <span className="ml-3">{skill.name}</span>
                                            </div>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{skill.description}</CardDescription>
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    );
};

export default Skills;

// ...existing code...
