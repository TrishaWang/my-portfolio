import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <div
      id='contact'
      className='w-screen min-h-[15vh] flex flex-row justify-center items-center'
    >
      <div className='my-[2rem] '>
        {/* <h1 className='text-[white] capitalize'>socials</h1> */}
        <div className=' flex justify-between mb-[2rem]'>
          <SocialIcon bgColor='white' url='https://twitter.com/jaketrent' />
          <SocialIcon
            bgColor='white'
            url='https://linkedin.com/in/trishareginewang'
          />
          <SocialIcon bgColor='white' url='https://github.com/trishawang' />
          <SocialIcon bgColor='white' url='https://wa.me/6597557810' />
        </div>
        <button className=' mx-auto my-[1rem]'>
          <a
            className=''
            href="mailto:trish.regine@gmail.com?subject=🤘 Hi Trisha, I'd like to hire you"
          >
            email me <span className='wave'>👋</span>
          </a>
        </button>
      </div>
    </div>
  );
};
export default Contact;
