import React, {useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText("mohammedola1234@gmail.com")
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }

    return (
        <section className='c-space my-20' id="about">
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-3 grid-cols-1 gap-5 h-full'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/me-pat.png"
                             alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain'
                        />
                        <div>
                            <p className='grid-headtext'>Hi, I'm Patrick</p>
                            <p className='grid-subtext'>
                                with over 5 years of experience, I have horned my skills in software architecture,
                                frontend and backend development and a special knack for animated 3D websites
                            </p>
                        </div>
                    </div>
                </div>
                <div className='cols-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src='/assets/grid2.png' alt='gris-2' className='w-full sm:w-[276px] h-fit object-contain'/>
                        <div>
                            <p className='grid-headtext'>Tech Stacks</p>
                            <p className='grid-subtext'>Object Oriented Programming
                                Design Patterns
                                Software Architecture
                                Service Oriented Architecture
                                Micro-service Architecture
                                Docker and Kubernetes
                                C#,
                                DOTNET
                                Entity Framework
                                Javascript,
                                TypeScript,
                                React,
                                ReactNative,
                                Material Ui,
                                React Native Paper,
                                Node js
                                Express js,
                                Mongo DB,
                                PosgreSQL,Tailwind CSS, styled component, and GIT.
                                AN EXPERIENCED PAYMENT GATEWAY DEVELOPER</p>

                        </div>
                    </div>

                </div>
                <div className='col-span-1 md:row-span-3'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor='rgba(0,0,0,0)'
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{lat: 6.5244, lng: 3.3792, text: "I'm here", color: 'white', size: 100}]}
                            />
                        </div>
                        <div className='justify-between gap-5'>
                            <p className='grid-headtext'> I work remotely cross most timezones</p>
                            <p className='grid-subtext'>I am based in Lagos Nigeria and open to remote work</p>
                            <Button name='Contact Me' isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>
                </div>
                <div className='md:col-span-2 md:row-span-3'>
                    <div className='grid-container'>
                        <img src='/assets/grid3.png' alt="grid-3" className='h-full sm:h-[266px] h-fit object-contain'/>
                        <div>
                            <p className='grid-headtext'>My passion for problem solving </p>
                            <p className='grid-subtext'>I like to take on challenges and coding is not just my
                                profession - it is my passion</p>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <img src="assets/grid4.png" alt="grid-4"
                             className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me </p>
                            <div className="px-5 copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt='copy'/>
                                <p className="lg:text-xl md:text-xl font-medium text-gray-50">mohammedola1234@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
