import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { user } = useAuth();
  return (
  <div className='container mx-auto my-12 p-4 space-y-9'>
      <h1 className='text-2xl font-bold mb-6'>About WordWave Blog</h1>
      <p className="text-xl">
        WordWave <strong>Blog</strong> is a platform that connects creators with readers, sharing their stories,
        insights, and inspiration. Our mission is to empower individuals to discover new stories, 
        connect with others, and learn from their experiences. As a creative platform, 
        we strive to foster a sense of community, collaboration, and shared purpose among our users.
      </p>
      <p className="text-xl">
       <span className='text-lg'>WordWave</span> Blog is a community-driven project.
        We're here to help you explore, share, and connect with your creative journey.
        We're always looking for more talented individuals who want to contribute to our mission.
      </p>
      <p className="text-xl">
       At <span className='text-lg'>WordWave</span> we foster a culture of collaboration and
        engagement, where readers don’t just consume content but become a part of the conversation.
        We encourage meaningful interactions, discussions, and exchanges of ideas, 
        making it a true community-driven experience. Whether you're looking for inspiration,
        seeking knowledge, or hoping to connect with like-minded individuals,
        WordWave Blog is your space to explore, learn, and grow. Together, we celebrate 
        the art of storytelling and the power of words to shape perspectives, spark change,
        and leave a lasting impact.
      </p>
      <h2 className='font-semibold text-blue-800 text-xl'>
      To Write a Blog Just Register/Signup With Your Account As Admin Role And share your thoughts !
      </h2>
      <p className="text-lg">
         User can choose different variety of topics to write a blog
      </p>
      <ul class="grid grid-rows-5 grid-flow-col gap-2 text-xs md:grid-rows-3 text-textlightWhite
       font-mono tracking-widest mt-3">
      <li>
      <span class="text-blue-500 font-bold">▹</span>
      <span>TECHNOLOGY</span>
      </li>
      <li>
      <span class="text-blue-500 font-bold">▹</span>
      <span>SPORTS</span>
      </li>
      <li>
      <span class="text-blue-500 font-bold">▹</span>
      <span>EDUCATION</span>
      </li>
      <li>
      <span class="text-blue-500 font-bold">▹</span>
      <span>POLITICAL</span>
      </li>
      <li>
      <span class="text-blue-500 font-bold">▹</span>
      <span>ENTERTAINMENT</span>
      </li>
      <li>
      <span class="text-blue-500 font-bold">▹</span>
      <span>CURRENT AFFAIRS</span>
      </li>
      </ul>
    </div>
  );
}

export default About;
