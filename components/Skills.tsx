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

import { skills, SkillCategory } from '@/data';



const Skills = () => {

    const [activeTab, setActiveTab] = useState<SkillCategory>('frontend');

    return (
        <section id="stack" className="mt-5 p-6 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold p-6">
                Tech Stack
            </h1>

            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as SkillCategory)}>
                <TabsList className='rounded-lg p-4 mb-4 bg-black-300'>
                    <TabsTrigger value="frontend">Frontend</TabsTrigger>
                    <TabsTrigger value="backend">Backend</TabsTrigger>
                    <TabsTrigger value="mobile">Mobile</TabsTrigger>
                    <TabsTrigger value="devops">DevOps</TabsTrigger>
                    <TabsTrigger value="data science">Data Science</TabsTrigger>
                    <TabsTrigger value="tools">Tools</TabsTrigger>
                </TabsList>
                {Object.entries(skills).map(([category, skillsList]) => (
                    <TabsContent key={category} value={category}>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                            {skillsList.map((skill, index) => (
                                <Card key={index} className="bg-black-200">
                                    <CardHeader>
                                        <CardTitle>
                                            <div className='flex flex-row'>
                                            <Image src={skill.icon}  alt="Postman logo" width={24} height={24} /><span className="ml-3">{skill.name}</span>
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
