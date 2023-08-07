'use client';
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
            Find, book, or get a solar engineer - quickly and easily!
        </h1>

        <p className='hero__subtitle'>
            Don't abandon your solar system, repair and maintain them easily.
        </p>

        <CustomButton 
            title="Find Installer"
            containerStyles = "bg-primary-blue text-white rounded-full mt-10"
            handleClick = {handleScroll}
        />
      </div>

      <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src={"/hero.png"} 
                alt='Get a solar engineer' 
                fill 
                className='object-contain'
                />
            </div>
            <div className='hero__image-overlay'></div>
      </div>
    </div>
  )
}

export default Hero
