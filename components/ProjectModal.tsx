import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";

import Image from 'next/image';
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    des: string;
    longDes: string;
    screenshots: string[];
  } | null;
}

const formatDescription = (description: string) => {
  return description.replace(/\n/g, '<br />').replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
};

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
      const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) return null;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % project.screenshots.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + project.screenshots.length) % project.screenshots.length);
  };
  const close = () => {
    onClose();
    setCurrentIndex(0);
    };
  
    return (
   <Dialog open={isOpen} onOpenChange={close} modal={true}>
      <DialogContent className="w-full max-w-4xl h-full max-h-[90vh] p-6 bg-black-100">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
           <div className="relative flex justify-center">
          <Image src={project.screenshots[currentIndex]} alt={`Screenshot ${currentIndex + 1}`} className="w-[75%] h-auto" width={750} height={0}/>
          <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
           <FaArrowLeft />
          </button>
          <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            <FaArrowRight />
          </button>
        </div>
            <p className="text-center text-gray-600 mt-2">
                {currentIndex + 1} / {project.screenshots.length}
            </p>

          <DialogDescription className="mt-4" dangerouslySetInnerHTML={{ __html: formatDescription(project.longDes) }} />
        <DialogFooter className="flex justify-center mt-4">
          <button onClick={close} className="btn">Close</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
