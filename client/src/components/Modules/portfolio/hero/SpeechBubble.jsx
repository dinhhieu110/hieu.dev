import { TypeAnimation } from 'react-type-animation';
import ImageKit from "../../../Common/ImageKit"

const SpeechBubble = () => {
  return (
    <div className='w-1/2 flex gap-2 justify-between items-end'>
      <div className="w-full h-24 bg-primary-gradient text-white p-6 text-4xl rounded-t-xl rounded-bl-xl rounded-br-none">
        <TypeAnimation
          sequence={[
            1000,
            'I am a Product Engineer',
            1000,
            'I am a Fullstack Engineer',
            1000
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />

      </div>
      <ImageKit src="/avt.jpg" className="w-12 h-12 rounded-full object-cover bg-slate-900" />
    </div>
  )
}

export default SpeechBubble
