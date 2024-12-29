import Footer from '@/components/Footer';
import MagicButton from '@/components/MagicButton';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { navItems,education, workExperience, skills } from '@/data';
import React from 'react';
import { FaDownload } from 'react-icons/fa6';

const formatDescription = (description: string) => {
  return description.replace(/\n/g, '<br/>').replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
};

const Resume = () => {
  return (
    <div className='bg-black-100 p-6'>
       <FloatingNav navItems={navItems}  />

    <div className="container mx-auto shadow-lg rounded-lg  pt-28 p-10 lg:p-28">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold ">Said Abderrahmane</h1>
        <p className="text-lg text-gray-300">hadjsaid.abder@gmail.com | +(33) 7 44 91 68 99 </p>
        <p className="text-lg text-gray-300">Bidart, Nouvelle-Aquitaine, France 64210</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-200 border-b border-gray-200 pb-2">Experience</h2>
      {workExperience.map((card) => (
        <div key={card.id} className="mt-4">
          <h3 className="text-xl font-bold text-gray-200">{card.title}</h3>
          <p className="text-lg text-gray-400">{card.company} | {card.period}</p>
          <p className='text-gray-400' dangerouslySetInnerHTML={{ __html: formatDescription(card.desc) }}></p>
        </div>
        ))}
        {/* Add more job experiences as needed */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-200 border-b border-gray-200 pb-2">Education</h2>
        {education.map((card) => (  
        <div  key={card.id} className="mt-4">
          <h3 className="text-xl font-bold text-gray-200">{card.title}</h3>
          <p className="text-lg text-gray-400">{card.school} | {card.period}</p>
          <p className="text-lg text-gray-400"  dangerouslySetInnerHTML={{ __html: formatDescription(card.desc) }}></p>
        </div>
      ))}
        {/* Add more education entries as needed */}

      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-200 border-b border-gray-200 pb-2">Skills</h2>
        <ul className="list-disc list-inside mt-4 text-gray-400">
       {Object.entries(skills).map(([category, skillList]) => (
         <div key={category}>
           <h3 className="text-xl font-bold text-gray-200">{category}</h3>
           <div className="inline mt-2 text-gray-400">
             {skillList.map((skill,index) => (
               <span key={skill.name}>{skill.name}{index === skillList.length - 1 ? "" : ", "}</span>
             ))}
           </div>
         </div>
       ))}
        </ul>
      </section>
    </div>
    <section className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-2 00">Download Resume</h2>
        <div className="mt-4">
          <a href="/english-resume.pdf" download className="text-blue-500 hover:underline">
          <MagicButton
              title=" Download Resume (English)"
              icon={<FaDownload />}
              position="right"
            />
          </a>
        </div>
        <div className="mt-2">
          <a href="/french-resume.pdf" download className="text-blue-500 hover:underline">
          <MagicButton
              title=" Download Resume (French)"
              icon={<FaDownload />}
              position="right"
            />
          </a>
        </div>
      </section>
    <Footer/>
    </div>
  );
};

export default Resume;
