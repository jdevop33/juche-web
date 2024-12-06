import Image from 'next/image'

const ChollimaSculpture: React.FC = () => {
  return (
    <div className="flex justify-center items-center my-8">
      <div className="relative w-64 h-64">
        <Image
          src="/images/chollima.png"
          alt="Chollima Sculpture"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  )
}

export default ChollimaSculpture

