import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto mt-5 p-5 flex flex-col justify-center items-center text-textlightWhite space-y-3">
      <h4 class="text-lg font-mono">Build with 💙 By - Basavaraj Revani</h4>
      <ul class="w-full flex justify-center gap-6 items-center">
        <li class="cursor-pointer hover:text-textgreen">
          <a href="https://www.instagram.com/basavaraj_revani" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" 
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
             class="w-[20px] h-[20px]">
             <title>Instagram</title>
             <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
             <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
             <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </li>
        <li class="cursor-pointer hover:text-textgreen">
  <a href="https://www.linkedin.com/in/basavarajrevani" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor" 
      class="w-[24px] h-[24px]">
      <title>LinkedIn</title>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 
      0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.436c-.966
       0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75
        1.75zm13.5 11.436h-3v-5.569c0-1.33-.027-3.041-1.854-3.041-1.857 0-2.143
         1.451-2.143 2.948v5.662h-3v-10h2.857v1.367h.04c.398-.755 1.371-1.553
          2.822-1.553 3.017 0 3.578 1.985 3.578 4.561v5.625z"/>
    </svg>
  </a>
</li>

<li class="cursor-pointer hover:text-textgreen">
  <a href="https://github.com/basavarajrevani" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor" 
      class="w-[20px] h-[20px]">
      <title>GitHub</title>
      <path d="M12 2c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.23-.01-.85-.01-1.67-2.78.62-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1 .07 1.52 1.04 1.52 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.27.1-2.65 0 0 .83-.27 2.75 1.02a9.63 9.63 0 012.49-.32c.84 0 1.69.11 2.49.32 1.92-1.29 2.75-1.02 2.75-1.02.55 1.38.21 2.4.11 2.65.63.7 1.02 1.59 1.02 2.68 0 3.85-2.33 4.7-4.56 4.94.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.73 0 .27.18.58.69.48 3.97-1.32 6.84-5.07 6.84-9.49 0-5.52-4.48-10-10-10z"/>
    </svg>
  </a>
</li>
      </ul>      
    </div>
    </>
  );
};

export default Footer;
