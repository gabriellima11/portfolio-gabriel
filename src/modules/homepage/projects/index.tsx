import { ProjectList } from './projects';

import { Button } from '@/components/ui/button';

export const Projects = () => {
    return (
        <section id='projects'>
            <hr className="mb-20" />
            <div className="min-h-screen py-4 md:h-auto flex flex-col items-center">
                <h2 className="text-4xl font-medium">Projetos</h2>
                <div className="grid grid-cols-2 md:grid-cols-1 justify-center gap-10 mt-8">
                    {
                        ProjectList.map((project) => (
                            <div key={project.name} className='relative w-96 hover:scale-110 transition ease-in-out duration-300 cursor-pointer'>
                                <img src={project.image} className='w-96 brightnessProjects' />
                                <div className='absolute inset-0 flex items-center justify-center flex-col text-white'>
                                    <h2 className="text-2xl font-bold">{project.name}</h2>
                                    <div className='flex gap-2 bg-black p-3 rounded-full'>
                                        {project.icons}
                                    </div>
                                    <div className='space-x-4 space-y-4'>
                                        {project.link &&<Button className='bg-black shadow-sm shadow-purple-800 dark:text-white transition ease-in duration-300 hover:scale-110'><a href={project.link} target='_blank'>Link</a></Button>}
                                        <Button className='bg-black shadow-sm mt-4 shadow-purple-800  dark:text-white transition ease-in duration-300 hover:scale-110'><a href={project.gitHub} target='_blank'>GitHub</a></Button>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
