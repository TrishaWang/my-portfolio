import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <div
      id='contact'
      className='w-screen min-h-[15vh] flex flex-row justify-center items-center'
    >
      <div className='my-[1.5rem] '>
        <div className='px-[0.4rem] '>
          {/* <h1 className='text-[white] capitalize'>socials</h1> */}
          <div className=' flex justify-between mb-[1.2rem]'>
            <SocialIcon
              style={{ height: 40, width: 40 }}
              bgColor='white'
              url='https://twitter.com/jaketrent'
            />
            <SocialIcon
              style={{ height: 40, width: 40 }}
              bgColor='white'
              url='https://linkedin.com/in/trishareginewang'
            />
            <SocialIcon
              style={{ height: 40, width: 40 }}
              bgColor='white'
              url='https://github.com/trishawang'
            />
            <SocialIcon
              style={{ height: 40, width: 40 }}
              bgColor='white'
              url='https://wa.me/6597557810'
            />
          </div>
        </div>
        <button className=' mx-auto my-[0.5rem]'>
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
