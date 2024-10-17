/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyAp3GK3xZNMzU3mgAw1HDlAfmkhwv0LlH0";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run() {
  const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          { text: "so you are an ats " },
          {
            text: "the user will add his resume which ill convert and give it to you in tet format and also the job description he is applying for what u need to do is you need to perform and ATS analysis and tell the user how fit he is for the job, changes in every section like section wise changes, things to add and remove, also give score and feedbacks based on the job description and then finally give a last verdict saying if the user is ready for the job or not. ",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Okay, I can help you with that! I can analyze a resume and job description and provide feedback on how well the candidate is matched for the position. Here's how I can approach this:\n\n**1.  Input:**\n\n* **Resume:** Provide the resume text in plain text format (no formatting, just the content).\n* **Job Description:** Provide the job description text in plain text format.\n\n**2. ATS Analysis:**\n\n* **Keyword Matching:** I'll analyze the resume for keywords that match the job description. I'll identify any missing keywords and suggest additions.\n* **Skills Assessment:** I'll analyze the skills mentioned in the resume against the skills required in the job description.  I'll point out any gaps and suggest ways to highlight relevant skills more effectively.\n* **Experience Evaluation:** I'll assess the candidate's work experience against the job description's requirements. I'll identify any relevant experience that should be emphasized and any gaps that need addressing.\n* **Education Assessment:** I'll review the candidate's education and compare it to the job description's requirements. I'll suggest highlighting relevant coursework or qualifications. \n\n**3.  Feedback and Recommendations:**\n\n* **Section-Specific Recommendations:** I'll provide specific recommendations for each section of the resume (e.g., summary, skills, experience, education) based on the ATS analysis. \n* **Changes to Make:** I'll suggest specific additions, deletions, or rephrasing within each section to improve the resume's effectiveness for the specific job.\n* **Score and Feedback:** I'll assign a numerical score (e.g., on a scale of 1 to 10) to reflect the candidate's overall fit for the job, considering the ATS analysis. I'll provide detailed feedback explaining the score.\n\n**4.  Final Verdict:**\n\n* **Ready for the Job?:** Based on the analysis, I'll provide a final verdict on whether the candidate is ready for the job as it currently stands. I'll explain my reasoning and highlight any areas that need further improvement.\n\n**Example Input:**\n\n**Resume (text format):**\n\n```\nJohn Doe\n123 Main Street, Anytown, CA 12345\n(123) 456-7890\njohn.doe@email.com\n\nSummary\nHighly motivated and results-oriented software engineer with 5+ years of experience in developing and deploying web applications. Proven expertise in Python, JavaScript, and SQL. Strong problem-solving and communication skills.\n\nSkills\n* Python\n* JavaScript\n* SQL\n* Git\n* Agile methodologies\n\nExperience\nSoftware Engineer, Acme Corporation, Anytown, CA\n* Developed and deployed web applications using Python, Django, and React\n* Collaborated with a team of engineers to implement new features\n* Improved application performance through optimization and code refactoring\n\nEducation\nBachelor of Science in Computer Science, University of California, Berkeley\n```\n\n**Job Description (text format):**\n\n```\nSoftware Engineer\nAcme Corporation is seeking a talented and experienced Software Engineer to join our growing team. The ideal candidate will have a strong understanding of Python, Django, and web development best practices. \n\nResponsibilities:\n* Develop and maintain web applications using Python, Django, and React\n* Work collaboratively within a team to deliver high-quality software\n* Participate in all phases of the software development lifecycle\n\nQualifications:\n* Bachelor's degree in Computer Science or a related field\n* 3+ years of experience developing web applications with Python and Django\n* Proficiency in JavaScript, HTML, and CSS\n* Strong understanding of Agile methodologies\n* Excellent problem-solving and communication skills\n```\n\n**I'll then analyze the resume and job description and provide you with detailed feedback, score, and recommendations.**\n\nPlease provide me with the resume and job description text, and I'll generate an ATS analysis and feedback! \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "lets test it a few times \n" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Okay, I'm ready for the test!  Give me a resume and job description in plain text format for each test case. I'll do my best to analyze them and provide you with detailed feedback. 😊 \n",
          },
        ],
      },
      {
        role: "user",
        parts: [
          { text: "resume " },
          {
            text: "Kunal Chaturvedi\n# kunalmanu2468@gmail.com H +91 7999250587 ï Linkedin § GitHub q Dribbble Ð LeetCode\nEDUCATION\nKJ Somaiya College of Engineering, Mumbai Aug 2021 - May 2025\nBachelor of Technology (Major in Computer Science) CGPA - 8.6\n• Algorithms, Data Structures, Relational Database Management System, Soft Computing, Automata Compiler Design\n• Honors in Data Science and Analytic ( 2022-2025), OEHM in Product Management and OET in Cyber Security\nEXPERIENCE\nConnectwise- Mumbai May 2024 - Aug 2024\nSWE Intern\n• Part of the Cloud and DevOps team, working on an ELK management project at ConnectWise, utilizing OpenSearch,\nElasticsearch, AWS S3, EC2, Docker, Go, and Python.\n• Developed a cost-optimized and quickly accessible solution for the retrieval of logs from cold tier storage using Python,\nOpenSearch client, and Docker.\nComputer Society of India - KJSCE- Mumbai Nov 2022 - Jun 2023\nCreative Head (Jun 2023 - present)\n• Spearheaded and hosted impactful events, such as ”Road to Programming,” ”Fullstack Bootcamp,” and ”Dawn of AI,”\ncaptivating over 5000 participants and fostering a dynamic community of learning and engagement.\n• Part and design lead of Eventio development team, An app for the college which helps to conduct, schedule and manage\ncollege events and fests.\nCreative Team Member (Nov 2022 - May 2023)\n• Developed and designed the official website for Hackerstellar a national-level hackathon with 1500+ registrations and\n200 participants, and conducted workshops on UI/UX, Machine Learning, and AI for over 1000 attendees.\nSMB Digital - Dubai Aug 2023 - Sep 2023\nSoftware Developement Intern\n• Architected and deployed operational full-stack websites and platforms, coupled with hands-on experience in API inte\u0002gration, service workers, and backend development. Currently used by over 5000 people.\n• Mastered a diverse tech toolkit encompassing Next.js, React.js, Tailwind CSS, Postman, Node.js, Express.js, showcasing\nversatility in creating modern and efficient digital solutions.\nPROJECTS\nEventio : Official Event/Fests management app for my college, the app allows you to host, promote and monitor any event\nwith attendance record and ticket system to ensure security and maintenance. Live version\nTech Stack- React, React Native, Tailwind, Firebase\nSanjeevni :A hackathon project, Sanjeevni redefines Indian healthcare with a unified digital platform. It centralizes health\ndata, appointments, and analytics for streamlined processes and improved outcomes. Know More\nTech Stack- Typescript, React, Mongo, Node, Express\nAudiLook : A cli based Python music app that allowed you to upload, skip, play/pause, time leap, cut, merge and save\nyour audio files. Based on several different python pakages. Know More\nTech Stack - Mutagen, Pygame, FFMpeg ( Libraries )\nGoSafe :GoSafe is a machine learning-based routing app that finds the most efficient and safe route for users, while also\nallowing them to report and track road maintenance in order to improve road safety in India. Know More\nTech Stack - Python, Sckitlearn, MongoDB, React\nSKILLS\nLanguages Python, C, Cpp, Javascript, Java, Typescript.\nDevelopment tech ReactJs, NextJs, Firebase, APIs. Typescript, React-Native, Mongo, Node, PostgreSQL, MySQL\nDesigning Tools Figma, Illustrator, Photoshop, Premiere Pro, Canva\nSoft Skills Detail Oriented, Management, Creative, Product management\nACHIEVEMENTS\n• Won First Prize at Ideate Hackathon as a team of 3 ( NIF mumbai )\n• Runner up at DotSlash 6.0 Hackathon as a part of a team of 3. ( SVNIT Surat)\n• Runner up at Clash of Codes Hackathon as a part of a team of 4. ( DJSCE )\n• Runner up Ideate Hackathon as a team of 3 ( UNL Global )\n\n",
          },
          { text: "JD \n" },
          {
            text: "This position reports to the Human Resources (HR) director and\ninterfaces with company managers and HR staff. Company XYZ is\ncommitted to an employee-orientated, high performance culture that\nemphasizes empowerment, quality, continuous improvement, and the\nrecruitment and ongoing development of a superior workforce",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: '## ATS Analysis and Feedback for Kunal Chaturvedi\n\n**Overall Score:** 6.5/10\n\n**Feedback:** Kunal has a strong foundation in technical skills and impressive project experience. However, the resume needs some restructuring and adjustments to better align with the specific job description provided. \n\n**Section-Specific Recommendations:**\n\n**1.  Contact Information:**\n\n* **Remove Social Media Links:** While impressive, they are not relevant for this specific job description. Keep it professional by focusing on email and phone.\n* **Format:** Use a consistent format for the contact information. Separate elements with commas or spaces for better readability.\n\n**2.  Education:**\n\n* **Highlight Relevant Courses:**  Emphasize courses directly related to the job description.  For example, mention any database courses (MySQL, PostgreSQL) or software development courses.\n* **Quantify Achievements:**  Mention GPA (already included) but consider adding specific academic achievements, like awards or honors received.\n* **Project/Experience:**  Include relevant projects done during your studies. This is a great way to showcase practical skills.\n\n**3.  Experience:**\n\n* **Focus on Relevant Experience:**  The job description emphasizes a focus on HR. While your technical skills are impressive, highlight experiences where you demonstrated soft skills like communication, teamwork, or problem-solving relevant to HR.\n* **Quantify Impact:**  Use numbers to showcase your achievements. For example, instead of saying "Spearheaded and hosted impactful events," quantify the success by mentioning the number of attendees or participants you reached.\n* **Tailor Language:** Use language from the job description to highlight keywords like "employee-oriented," "high performance," or "continuous improvement." \n\n**4.  Projects:**\n\n* **Prioritize Relevant Projects:**  Focus on projects that demonstrate relevant skills for HR, such as those involving database management, communication tools, or team collaboration.\n* **Clearer Descriptions:**  Provide brief and clear descriptions of your project contributions, emphasizing their impact. \n\n**5. Skills:**\n\n* **Organize by Category:**  Group skills logically, separating technical skills, design tools, and soft skills.\n* **Highlight Specific Skills:**  Prioritize skills mentioned in the job description, like "problem-solving" and "communication skills."\n* **Tailor to the Job:** Include skills relevant to the HR role, such as communication, interpersonal skills,  conflict resolution, and HR software proficiency.\n\n**6.  Achievements:**\n\n* **Focus on Relevant Achievements:**  Highlight achievements that demonstrate your abilities in teamwork, communication, leadership, or problem-solving.\n* **Contextualize:** Briefly explain how your achievements demonstrate the desired skills for the HR role.\n\n**Final Verdict:**\n\nWhile Kunal possesses strong technical skills and project experience, the resume currently focuses too heavily on software development and not enough on HR-related skills.  By making the recommended adjustments and focusing on the specific requirements of the job description, Kunal can significantly improve his chances of landing the HR position.\n\n**Actionable Suggestions:**\n\n1. **Rework Resume Structure:**  Tailor the resume to focus on HR skills and experience. \n2. **Highlight Relevant Skills:**  Emphasize communication, teamwork, problem-solving, and leadership skills.\n3. **Quantify Achievements:**  Use numbers to illustrate the impact of your accomplishments.\n4. **Prioritize Relevant Projects:** Focus on projects demonstrating HR-related skills.\n\nI hope this feedback is helpful! Good luck with your application! \n',
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "if the resume has social links of linkedin and some portfolio website than it is fine ",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "You are absolutely right!  It's perfectly fine to include LinkedIn and a portfolio website on a resume, especially if they are relevant to the job you are applying for.\n\nHere's why those links can be beneficial:\n\n* **LinkedIn:** Provides a more detailed overview of your professional experience, skills, and connections. Recruiters often use LinkedIn to verify information and learn more about candidates.\n* **Portfolio Website:** Showcases your work and projects, allowing recruiters to see your skills in action. It's particularly valuable for creative fields or roles where demonstrating your work is crucial. \n\n**How to Include Them:**\n\n* **Keep it Concise:** Use a clear and concise format for the links.  \n* **Place Them Strategically:**  Put the links at the top of the resume, usually after your contact information. \n* **Use Appropriate Icons:**  Consider using icons for LinkedIn and your website to make them visually appealing. \n\nFor Kunal's resume, I would suggest adding these links to the top, after his contact information, like this:\n\n**Kunal Chaturvedi**\n# kunalmanu2468@gmail.com\nH +91 7999250587\n**LinkedIn:** [link to LinkedIn profile] \n**Portfolio:** [link to portfolio website] \n\n**Remember:** Always tailor your resume to the specific job description. If the job description emphasizes HR skills,  you should still prioritize those skills on your resume even if you include your LinkedIn and portfolio links. \n",
          },
        ],
      },
      {
        role: "user",
        parts: [
          { text: "Give percentage and points for each section also " },
          { text: "rerun and do the changes" },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: 'Okay, here\'s the revised ATS analysis with percentages and points for each section, along with the suggested changes to Kunal\'s resume:\n\n**ATS Analysis and Feedback for Kunal Chaturvedi**\n\n**Overall Score:** 65% (out of 100)\n\n**Feedback:** Kunal has a strong foundation in technical skills and impressive project experience. However, the resume needs some restructuring and adjustments to better align with the specific job description provided. \n\n**Section-Specific Recommendations:**\n\n**1.  Contact Information (10%):**\n\n* **Points:** 8/10\n* **Changes:** \n    * **Remove Social Media Links (Except LinkedIn):** Keep it professional by focusing on email, phone, and LinkedIn. \n    * **Format:** Use a consistent format for the contact information. Separate elements with commas or spaces for better readability.\n\n**2.  Education (15%):**\n\n* **Points:** 12/15\n* **Changes:** \n    * **Highlight Relevant Courses:**  Emphasize courses directly related to the job description. For example, mention any database courses (MySQL, PostgreSQL) or software development courses.\n    * **Quantify Achievements:**  Mention GPA (already included) but consider adding specific academic achievements, like awards or honors received.\n    * **Project/Experience:**  Include relevant projects done during your studies. This is a great way to showcase practical skills.\n\n**3.  Experience (30%):**\n\n* **Points:** 18/30\n* **Changes:** \n    * **Focus on Relevant Experience:**  Highlight experiences where you demonstrated soft skills like communication, teamwork, or problem-solving relevant to HR.\n    * **Quantify Impact:**  Use numbers to showcase your achievements. For example, instead of saying "Spearheaded and hosted impactful events," quantify the success by mentioning the number of attendees or participants you reached.\n    * **Tailor Language:** Use language from the job description to highlight keywords like "employee-oriented," "high performance," or "continuous improvement." \n    * **Focus on Leadership:**  Highlight leadership roles where you took initiative, managed projects, or collaborated with teams.\n\n**4.  Projects (15%):**\n\n* **Points:** 10/15\n* **Changes:** \n    * **Prioritize Relevant Projects:**  Focus on projects that demonstrate relevant skills for HR, such as those involving database management, communication tools, or team collaboration.\n    * **Clearer Descriptions:**  Provide brief and clear descriptions of your project contributions, emphasizing their impact. \n\n**5. Skills (15%):**\n\n* **Points:** 12/15\n* **Changes:** \n    * **Organize by Category:**  Group skills logically, separating technical skills, design tools, and soft skills.\n    * **Highlight Specific Skills:**  Prioritize skills mentioned in the job description, like "problem-solving" and "communication skills."\n    * **Tailor to the Job:** Include skills relevant to the HR role, such as communication, interpersonal skills,  conflict resolution, and HR software proficiency.\n\n**6.  Achievements (15%):**\n\n* **Points:** 10/15\n* **Changes:** \n    * **Focus on Relevant Achievements:**  Highlight achievements that demonstrate your abilities in teamwork, communication, leadership, or problem-solving.\n    * **Contextualize:** Briefly explain how your achievements demonstrate the desired skills for the HR role.\n\n**Final Verdict:**\n\nWhile Kunal possesses strong technical skills and project experience, the resume currently focuses too heavily on software development and not enough on HR-related skills.  By making the recommended adjustments and focusing on the specific requirements of the job description, Kunal can significantly improve his chances of landing the HR position.\n\n**Actionable Suggestions:**\n\n1. **Rework Resume Structure:**  Tailor the resume to focus on HR skills and experience. \n2. **Highlight Relevant Skills:**  Emphasize communication, teamwork, problem-solving, and leadership skills.\n3. **Quantify Achievements:**  Use numbers to illustrate the impact of your accomplishments.\n4. **Prioritize Relevant Projects:** Focus on projects demonstrating HR-related skills.\n\nI hope this more detailed analysis is helpful! Good luck with your application! \n',
          },
        ],
      },
      {
        role: "user",
        parts: [
          { text: "ok so now same resume and different job description \n" },
          {
            text: "Job brief\nWe are looking for a Software Developer to build and implement functional programs. You will work with other Developers and Product Managers throughout the software development life cycle.\n\nIn this role, you should be a team player with a keen eye for detail and problem-solving skills. If you also have experience in Agile frameworks and popular coding languages (e.g. JavaScript), we’d like to meet you.\n\nYour goal will be to build efficient programs and systems that serve user needs.\n\nResponsibilities\nWork with developers to design algorithms and flowcharts\nProduce clean, efficient code based on specifications\nIntegrate software components and third-party programs\nVerify and deploy programs and systems\nTroubleshoot, debug and upgrade existing software\nGather and evaluate user feedback\nRecommend and execute improvements\nCreate technical documentation for reference and reporting\n",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: 'Okay, here\'s the ATS analysis for Kunal\'s resume, tailored to this new Software Developer job description: \n\n**ATS Analysis and Feedback for Kunal Chaturvedi**\n\n**Overall Score:** 85% (out of 100)\n\n**Feedback:**  Kunal has a very strong resume for this Software Developer role. His technical skills, project experience, and demonstrated proficiency in relevant technologies align well with the job requirements. With a few minor adjustments, his resume will be even more compelling.\n\n**Section-Specific Recommendations:**\n\n**1.  Contact Information (10%):**\n\n* **Points:** 10/10\n* **Changes:**  \n    * Keep it as is. The inclusion of LinkedIn is a good addition for this role.\n\n**2.  Education (15%):**\n\n* **Points:** 15/15\n* **Changes:** \n    * **Highlight Relevant Courses:** Emphasize courses like Algorithms, Data Structures, Compiler Design, and any relevant programming courses related to the job description. \n    * **Project/Experience:**  Include relevant projects done during your studies, especially those focused on software development.\n\n**3.  Experience (30%):**\n\n* **Points:** 28/30\n* **Changes:** \n    * **Prioritize Software Development Experience:**  Focus on experiences where you developed software, integrated systems, or worked on projects aligned with the job description. \n    * **Quantify Impact:**  Use numbers to showcase your achievements. For example, "Developed a cost-optimized solution for log retrieval, resulting in a 20% reduction in retrieval time." \n    * **Highlight Relevant Technologies:**  Mention keywords from the job description, such as "Agile frameworks," "JavaScript," and "Python."\n\n**4.  Projects (15%):**\n\n* **Points:** 15/15\n* **Changes:** \n    * **Prioritize Software Development Projects:** Emphasize projects like "Eventio," "Sanjeevni," "AudiLook," and "GoSafe"  as they showcase your technical skills and relevant programming experience.\n    * **Clearer Descriptions:**  Provide brief and clear descriptions of your project contributions, highlighting the technologies used and the outcome. \n\n**5. Skills (15%):**\n\n* **Points:** 14/15\n* **Changes:** \n    * **Organize by Category:** Group skills logically, separating programming languages, development technologies, and design tools.\n    * **Highlight Relevant Skills:**  Prioritize skills like Python, JavaScript, React.js, Next.js, React-Native, Node.js, Express.js, MongoDB, PostgreSQL, MySQL, and Agile methodologies.\n    * **Add Specific Skills:**  Mention skills like debugging, troubleshooting, and software integration, if applicable.\n\n**6.  Achievements (15%):**\n\n* **Points:** 13/15\n* **Changes:**\n    * **Focus on Software Development Achievements:**  Highlight achievements that demonstrate your technical expertise and software development accomplishments.\n    * **Contextualize:** Briefly explain how your achievements demonstrate your ability to build, implement, and improve software systems.\n\n**Final Verdict:**\n\nKunal\'s resume is a strong match for this Software Developer position. His technical skills, project experience, and demonstrated proficiency in relevant technologies align very well with the job requirements. \n\n**Actionable Suggestions:**\n\n1. **Prioritize Software Development Experience:**  Ensure the resume highlights your software development expertise throughout. \n2. **Quantify Impact:**  Use numbers to showcase the impact of your accomplishments. \n3. **Tailor Language:**  Use keywords from the job description to highlight your skills.\n\nThis revised resume should make a good impression on potential employers. Good luck with your application! \n',
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "ok good goiing do one thing also that give a final fit number at the end which is a no. out of 10 which displays the following ",
          },
          {
            text: "out of 10 \nbelow 6 needs tailoring \nabove 8 good to apply \n6-8 minor changes needed but still can apply \n4-6 can improve a lot \nbelow 4 not jd and resume doesnt match ",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: 'Okay, here is the updated ATS analysis, including the final "Fit Number" score out of 10:\n\n**ATS Analysis and Feedback for Kunal Chaturvedi**\n\n**Overall Score:** 85% (out of 100)\n\n**Feedback:**  Kunal has a very strong resume for this Software Developer role. His technical skills, project experience, and demonstrated proficiency in relevant technologies align well with the job requirements. With a few minor adjustments, his resume will be even more compelling.\n\n**Section-Specific Recommendations:**\n\n**1.  Contact Information (10%):**\n\n* **Points:** 10/10\n* **Changes:**  \n    * Keep it as is. The inclusion of LinkedIn is a good addition for this role.\n\n**2.  Education (15%):**\n\n* **Points:** 15/15\n* **Changes:** \n    * **Highlight Relevant Courses:** Emphasize courses like Algorithms, Data Structures, Compiler Design, and any relevant programming courses related to the job description. \n    * **Project/Experience:**  Include relevant projects done during your studies, especially those focused on software development.\n\n**3.  Experience (30%):**\n\n* **Points:** 28/30\n* **Changes:** \n    * **Prioritize Software Development Experience:**  Focus on experiences where you developed software, integrated systems, or worked on projects aligned with the job description. \n    * **Quantify Impact:**  Use numbers to showcase your achievements. For example, "Developed a cost-optimized solution for log retrieval, resulting in a 20% reduction in retrieval time." \n    * **Highlight Relevant Technologies:**  Mention keywords from the job description, such as "Agile frameworks," "JavaScript," and "Python."\n\n**4.  Projects (15%):**\n\n* **Points:** 15/15\n* **Changes:** \n    * **Prioritize Software Development Projects:** Emphasize projects like "Eventio," "Sanjeevni," "AudiLook," and "GoSafe"  as they showcase your technical skills and relevant programming experience.\n    * **Clearer Descriptions:**  Provide brief and clear descriptions of your project contributions, highlighting the technologies used and the outcome. \n\n**5. Skills (15%):**\n\n* **Points:** 14/15\n* **Changes:** \n    * **Organize by Category:** Group skills logically, separating programming languages, development technologies, and design tools.\n    * **Highlight Relevant Skills:**  Prioritize skills like Python, JavaScript, React.js, Next.js, React-Native, Node.js, Express.js, MongoDB, PostgreSQL, MySQL, and Agile methodologies.\n    * **Add Specific Skills:**  Mention skills like debugging, troubleshooting, and software integration, if applicable.\n\n**6.  Achievements (15%):**\n\n* **Points:** 13/15\n* **Changes:**\n    * **Focus on Software Development Achievements:**  Highlight achievements that demonstrate your technical expertise and software development accomplishments.\n    * **Contextualize:** Briefly explain how your achievements demonstrate your ability to build, implement, and improve software systems.\n\n**Final Verdict:**\n\nKunal\'s resume is a strong match for this Software Developer position. His technical skills, project experience, and demonstrated proficiency in relevant technologies align very well with the job requirements. \n\n**Final Fit Number:** 8/10\n\n**Interpretation:** Kunal\'s resume is excellent for this job description.  With a few minor changes, his resume should be ready to apply. \n\n\n',
          },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  console.log(result.response.text());
}

run();
