// import React ,{useState}from "react";
// import "./Navebar.css";
// import { useRef,useEffect } from "react";
// import PatientAppointment from "./PatientAppointment"
// import {Link} from "react";
// // import { useNavigate } from "react-router-dom";

// const Navbar=()=> {
  
//   // const navigate=useNavigate();
//   //   const handleSignUp=()=>{
//   //     navigate("/signUp");
//   //   }
  
//     const templates = [
//         {
//           image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s',
//           title: 'Draft email replies to customers',
//           link: '#',
//         },
//         {
//           image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s',
//           title: 'Summarize sales calls using OpenAI',
//           link: '#',
//         },
//         {
//           image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s',
//           title: 'Talk to leads 24/7 with a custom sales chatbot',
//           link: '#',
//           icon: true,
//         },
//         {
//           image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s',
//           title: 'Supercharge your support with an AI-powered FAQ bot',
//           link: '#',
//           icon: true,
//         },
//         {
//           image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s',
//           title: 'Use AI to generate relevant content ideas',
//           link: '#',
//         },
//         {
//           image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s',
//           title: 'Turn Slack messages into a prioritized task list',
//           link: '#',
//         },
//       ];

      

//     const items = [
//         { title: "Marketing campaigns", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s" },
//         { title: "Data management", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s" },
//         { title: "IT helpdesk", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s" },
//         { title: "Support tickets", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s" },
//         { title: "Lead management", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s" },
//       ];
      
//       // Triple the items to simulate infinite scroll
//       const infiniteItems = [...items, ...items, ...items];
      

//       const carouselRef = useRef(null);

//       const scroll = (direction) => {
//         const scrollAmount = 300;
//         if (carouselRef.current) {
//           carouselRef.current.scrollBy({
//             left: direction === "left" ? -scrollAmount : scrollAmount,
//             behavior: "smooth",
//           });
//         }
//       };
    
//       useEffect(() => {
//         const { current } = carouselRef;
//         if (!current) return;
    
//         const handleScroll = () => {
//           const maxScroll = current.scrollWidth - current.clientWidth;
    
//           if (current.scrollLeft >= maxScroll - 10) {
//             current.scrollLeft = current.scrollWidth / 3;
//           }
//           if (current.scrollLeft <= 10) {
//             current.scrollLeft = current.scrollWidth / 3;
//           }
//         };
    
//         current.addEventListener("scroll", handleScroll);
//         current.scrollLeft = current.scrollWidth / 3;
    
//         return () => current.removeEventListener("scroll", handleScroll);
//       }, []);




//     const [openDropdown, setOpenDropdown] = useState(null);

//     const handleDropdown = (menu) => {
//       setOpenDropdown(openDropdown === menu ? null : menu);
//     };

     
  
//     return (
//         <>
//       <nav className="navbar">
//              <div className="navbar__left">
//         <div className="navbar__logo"> 
//           <img src="https://cdn.discordapp.com/attachments/1362796877317407064/1362797045278048528/NephroFlow.png?ex=6803b327&is=680261a7&hm=7d26e9b2231962f1cbc4e23f2eaee269bd44cf581b92327b0d35c771a6c7de16& " className="logo-image"/>
//         </div>
  
//         <div className="navbar__links">
//           <div className="dropdown">
//             <button
//               className="dropbtn"
//               onClick={() => handleDropdown("products")}
//             >
//               Products ▾
//             </button>
//             {openDropdown === "products" && (
//               <div className="dropdown-content">
//                 <a href="#">App Integrations</a>
//                 <a href="#">Zap Editor</a>
//                 <a href="#">AI Features</a>
//               </div>
//             )}
//           </div>
  
//           <div className="dropdown">
//             <button
//               className="dropbtn"
//               onClick={() => handleDropdown("solutions")}
//             >
//               Solutions ▾
//             </button>
//             {openDropdown === "solutions" && (
//               <div className="dropdown-content">
//                 <a href="#">Marketing</a>
//                 <a href="#">Sales</a>
//                 <a href="#">Customer Support</a>
//               </div>
//             )}
//           </div>
  
//           <div className="dropdown">
//             <button
//               className="dropbtn"
//               onClick={() => handleDropdown("resources")}
//             >
//               Resources ▾
//             </button>
//             {openDropdown === "resources" && (
//               <div className="dropdown-content">
//                 <a href="#">Blog</a>
//                 <a href="#">Help Center</a>
//                 <a href="#">Guides</a>
//               </div>
//             )}
//           </div>
  
//           <a href="#" className="navbar__link">Enterprise</a>
//           <a href="#" className="navbar__link">Pricing</a>
//         </div>
//         </div>
  
//         <div className="navbar__actions">
//           <a href="#" className="navbar__link">Explore apps</a>
//           <a href="#" className="navbar__link">Contact sales</a>
//           <a href="#" className="navbar__link">Log in</a>
//            <button className="signup-btn"  >Sign up</button> 
//         </div>
       
        
//       </nav>
//       <hr className="navbar-divider "/>


//       <section className="hero-with-image">
//         <div className="hero">
//           <h1 className="hero__title">
//             Automate <br /> without limits
//           </h1>
//           <p className="hero__subtitle">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, nobis eligendi tempore ex et laborum similique sequi atque fugit necessitatibus!
//           </p>
//           <div className="hero__buttons">
//             <button className="email-btn">Start free with email</button>
//             <button className="google-btn">
//               <img src="google-icon.png" alt="Google Icon" className="google-icon" />
//               Start free with Google
//             </button>
//           </div>
//         </div>

//         <div className="hero__image">
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s" alt="Automation Illustration" />
//         </div>
//       </section>




      
//       <div className="carousel-wrapper">
//       <h2 className="carousel-heading">WHAT WILL YOU AUTOMATE TODAY?</h2>
//       <div className="carousel-controls">
       

//         <div className="carousel-container" ref={carouselRef}>
//           {infiniteItems.map((item, index) => (
//             <div className="carousel-card" key={index}>
//               <div className="card-image" style={{ backgroundImage: `url(${item.image})` }}></div>
//               <div className="card-title">{item.title}</div>
//             </div>
//           ))}
//         </div>

         
//       </div>
//       <div className="scroll-buttons-bottom">
//     <button className="scroll-button left" onClick={() => scroll("left")}>←</button>
//     <button className="scroll-button right" onClick={() => scroll("right")}>→</button>
//   </div>
//     </div>
 


 

//     <div className="workflow-container">
//       <h1 className="workflow-heading">Build powerful workflows<br/> incredibly fast</h1>
//       <p className="workflow-subheading">
//         Whether you're a team of one or a thousand, <span className="highlighted">Brainiacs</span> puts the power of automation in your hands—no coding required.
//         Take your workflows to the next level with our suite of automation tools.
//       </p>

//       <div className="workflow-image">
//         <img src="https://media.discordapp.net/attachments/1358118497460293954/1361560562814947498/Group_47.png?ex=68012dd6&is=67ffdc56&hm=4371f57c1dd71da206b0b9a497f5c2b90cd099a4cf5779f4db511d0e3fe3dbcf&=&format=webp&quality=lossless&width=874&height=431" alt="Workflow Example" />
//       </div>

//       <h3 className="automation-heading">MEET OUR AUTOMATION PRODUCTS</h3>

//       <div className="automation-products">
//         <div className="product-card">
//           <span className="icon">⚡</span>
//           <h4>Zaps</h4>
//           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, repellendus.</p>
//           <a href="#">Explore Zaps →</a>
//         </div>

//         <div className="product-card">
//           <span className="icon">▭</span>
//           <h4>Interfaces</h4>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, sequi?</p>
//           <a href="#">Explore Interfaces →</a>
//         </div>

//         <div className="product-card">
//           <span className="icon">▥</span>
//           <h4>Tables</h4>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veritatis.</p>
//           <a href="#">Explore Tables →</a>
//         </div>
//       </div>
//     </div>






//     <div className="templates-wrapper">
//       <h2 className="templates-title">Get started right now with our <br/>library of templates</h2>
//       <p className="templates-subtitle">
//         No need to start from scratch. Get a head start on building your perfect workflow and experience the magic of automation in minutes.
//       </p>
//       <div className="templates-grid">
//         {templates.map((template, index) => (
//           <div className="template-card" key={index}>
//             <div className="template-img">
//               <img src={template.image} alt={template.title} />
//             </div>
//             <h4>{template.title}</h4>
//             {/* <a href={template.link}>Get started →</a> */}
//           </div>
//         ))}
//       </div>
//     </div>




//     <section className="automation-section">
//       <div className="content-wrapper">
//         <div className="text-content">
//           <p className="label">ENTERPRISE</p>
//           <h2 className="heading">Automation for every team, approved by IT</h2>
//           <p className="subtext">
//             Progress stalls when teams have to wait for technical help. Brainiacs empowers everyone
//             in your business to safely automate their work in minutes—not months.
//           </p>
//           <div className="buttons">
//             <button className="primary-btn">Meet Brainiacs for Enterprise</button>
//             <button className="secondary-btn">Contact Sales</button>
//           </div>
//         </div>

//         <div className="quote-section">
//           <div className="quote">
//             <div className="logo-text">
//               <span className="logo">R</span>
//               <span className="company">remote</span>
//             </div>
//             <p className="quote-text">
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit laborum fugit modi officia, sequi tempora quidem laudantium eum deserunt ipsam, quisquam repudiandae praesentium. Blanditiis fugit eum vero quis. Neque, hic?
//             </p>
//             <p className="author">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aperiam fuga aspernatur iusto, quam corrupti nostrum doloremque ad quisquam est porro explicabo accusantium et facilis fugit? Consequatur iusto culpa sequi?<br /> </p>
//           </div>
//           <div className="analytics-image">
//             <img src="/path-to-your-screenshot.png" alt="Analytics dashboard" />
//           </div>
//         </div>
//       </div>
//     </section>

//     <PatientAppointment/>









   
    
//       </>
      

//   );
// }
// export default Navbar;






import React ,{useState}from "react";
import "./Navebar.css";
import { useRef,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
 

import Signup from "./SignUp";
 
// import { AuthForm} from "./Signup";

const Navbar=()=> {
  
    
  const navigate=useNavigate();
    const templates = [
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s',
          title: 'Global Healthcare and Network Advancement',
          link: '#',
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s',
          title: 'Real-time Resource Management',
          link: '#',
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s',
          title: 'Support in Research and Clinical Trials',
          link: '#',
          icon: true,
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s',
          title: 'Supercharge your support with an AI-powered FAQ bot',
          link: '#',
          icon: true,
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s',
          title: '24/7 Availablity',
          link: '#',
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s',
          title: 'Fast Issue Resolution',
          link: '#',
        },
      ];

      

    const items = [
        { title: "Book an Appointment", image: "https://cdn.discordapp.com/attachments/1362796877317407064/1362849976199282858/045627d1-331c-4ecd-b237-83fdacfc70af.png?ex=6803e472&is=680292f2&hm=c84d7b1dec329688348d210d23a3753d9c39fe637312e79ac18cea50d7926a36&"},
        { title: "Data Management", image: "https://cdn.discordapp.com/attachments/1362796877317407064/1362840091579387954/ChatGPT_Image_Apr_18_2025_10_49_33_PM.png?ex=6803db3e&is=680289be&hm=5c6fc9c5621eb20a4b43fb4d3a27e1a4b9b22d1ac4403e56316fd126c1df359e&"},
        { title: "Access Health Records	", image: "https://cdn.discordapp.com/attachments/1362796877317407064/1362842256750674180/ChatGPT_Image_Apr_18_2025_10_58_15_PM.png?ex=6803dd42&is=68028bc2&hm=f78112ba067bcc0d7ba1593b6da81ccfa3072a03bcf2c6f7a9786e75b434d6c3&"},
        { title: "Check Billing Summary	", image: "https://cdn.discordapp.com/attachments/1362796877317407064/1362846441915027709/ChatGPT_Image_Apr_18_2025_11_14_48_PM.png?ex=6803e128&is=68028fa8&hm=f83931209213da4ac6d342d9541b637ac8d6ffaaac41de671fb7a7d2c931d99e&"},
        { title: "Explore Hospital Location", image: "https://cdn.discordapp.com/attachments/1362796877317407064/1362848055929471047/9ef07096-7cb4-48b8-9edf-45022037d034.png?ex=6803e2a9&is=68029129&hm=3ce02f1157a2ad1d02e5c3f746fb6dd215843af62f478d572c5d2b932295cf9e&"},
      ];
      
      // Triple the items to simulate infinite scroll
      const infiniteItems = [...items, ...items, ...items];
      

      const carouselRef = useRef(null);

      const scroll = (direction) => {
        const scrollAmount = 300;
        if (carouselRef.current) {
          carouselRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
          });
        }
      };
    
      useEffect(() => {
        const { current } = carouselRef;
        if (!current) return;
    
        const handleScroll = () => {
          const maxScroll = current.scrollWidth - current.clientWidth;
    
          if (current.scrollLeft >= maxScroll - 10) {
            current.scrollLeft = current.scrollWidth / 3;
          }
          if (current.scrollLeft <= 10) {
            current.scrollLeft = current.scrollWidth / 3;
          }
        };
    
        current.addEventListener("scroll", handleScroll);
        current.scrollLeft = current.scrollWidth / 3;
    
        return () => current.removeEventListener("scroll", handleScroll);
      }, []);




    const [openDropdown, setOpenDropdown] = useState(null);
    

    const handleDropdown = (menu) => {
      setOpenDropdown(openDropdown === menu ? null : menu);
    };
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogout = () => {
      // Perform logout logic here (e.g., clear tokens, session, etc.)
      setIsLoggedIn(false);
      navigate("/login");
    };
    const gotoAppointment=()=>
    {
      setIsLoggedIn(false);
      navigate("/appointments");
    }
    
  
    return (
        <>
      <nav className="navbar">
             <div className="navbar__left">
             <div className="navbar__logo">
  <img src="https://cdn.discordapp.com/attachments/1362796877317407064/1362800761146445844/NephroFlow.png?ex=6803b69d&is=6802651d&hm=1db31adb8932a5c4e01487f85e204b20d4b92586a10eb3ae64f34a41e2f18d2f&" alt="Logo" className="logo_image"/>
</div>
{/*   
        <div className="navbar__links">
          <div className="dropdown">
            <button
              className="dropbtn"
              onClick={() => handleDropdown("products")}
            >
              Products ▾
            </button>
            {openDropdown === "products" && (
              <div className="dropdown-content">
                <a href="#">App Integrations</a>
                <a href="#">Zap Editor</a>
                <a href="#">AI Features</a>
              </div>
            )}
          </div>
  
          <div className="dropdown">
            <button
              className="dropbtn"
              onClick={() => handleDropdown("solutions")}
            >
              Solutions ▾
            </button>
            {openDropdown === "solutions" && (
              <div className="dropdown-content">
                <a href="#">Marketing</a>
                <a href="#">Sales</a>
                <a href="#">Customer Support</a>
              </div>
            )}
          </div>
  
          <div className="dropdown">
            <button
              className="dropbtn"
              onClick={() => handleDropdown("resources")}
            >
              Resources ▾
            </button>
            {openDropdown === "resources" && (
              <div className="dropdown-content">
                <a href="#">Blog</a>
                <a href="#">Help Center</a>
                <a href="#">Guides</a>
              </div>
            )}
          </div>
  
          
        </div> */}
        </div>
  
        
          <div className="navbar__actions">
        
          <Link  to="/login" className="navbar__link">Log in</Link>
          <Link to="/signUp" className="signup-btn" >Sign Up/Patient</Link>
          <Link to="/admin"  className="signup-btn">Sign Up/Admin</Link>
            
        </div>
       
        
      </nav>
      <hr className="navbar-divider "/>


      <section className="hero-with-image">
        <div className="hero">
          <h1 className="hero__title">
          Modernizing <br />Clincal Workflows
          </h1>signup
          <p className="hero__subtitle">
          From scheduling to medical records and billing, automate routine tasks with intelligent assistants tailored for specialty units like nephrology. No tech team required.

          </p>
           <div className="hero__buttons">
            <button className="email-btn"  >Book Appointment</button>
            {/* <button className="google-btn">
              <img src="google-icon.png" alt="Google Icon" classNa  me="google-icon" />
              Access Records
            </button> */}
          </div>
        </div>

        <div className="hero__image">
          <img src="https://cdn.discordapp.com/attachments/1362796877317407064/1362808145503715368/new_robot.png?ex=6803bd7d&is=68026bfd&hm=032ec07cfd8b5b5fc8771a1c1695903af2f84513e27a77061f061a472d713083&" alt="Automation Illustration" />
        </div>
      </section>




      
      <div className="carousel-wrapper">
      <h2 className="carousel-heading">WHAT WILL YOU AUTOMATE TODAY?</h2>
      <div className="carousel-controls">
       

        <div className="carousel-container" ref={carouselRef}>
          {infiniteItems.map((item, index) => (
            <div className="carousel-card" key={index}>
              <div className="card-image" style={{ backgroundImage: `url(${item.image})` }}></div>
              <div className="card-title">{item.title}</div>
            </div>
          ))}
        </div>

         
      </div>
      <div className="scroll-buttons-bottom">
    <button className="scroll-button left" onClick={() => scroll("left")}>←</button>
    <button className="scroll-button right" onClick={() => scroll("right")}>→</button>
  </div>
    </div>
 


 

    <div className="workflow-container">
      <h1 className="workflow-heading">Comfort and Confidence<br/>with NephroFlow</h1>
      <p className="workflow-subheading">
      NephroFlow makes your hospital journey smoother—from check-ins to reports. We take care of the behind-the-scenes work so your care feels easier, faster, and more personal.


      </p>


      <h3 className="automation-heading">MEET OUR AUTOMATION PRODUCTS</h3>

      <div className="automation-products">
        <div className="product-card">
          <span className="icon">⚡</span>
          <h4>Smart Actions</h4>
          <p>Skip the waiting. From appointments to follow-ups, everything moves faster and smoother—just the way it should.</p>
          <a href="#">Explore Zaps →</a>
        </div>

        <div className="product-card">
          <span className="icon">▭</span>
          <h4>Patient Touchpoints</h4>
          <p>No more messy paperwork. Get clean, clear forms and updates—right when you need them.</p>
          <a href="#">Explore Interfaces →</a>
        </div>

        <div className="product-card">
          <span className="icon">▥</span>
          <h4>Health Records Hub</h4>
          <p>Your medical info, neatly organized, safely stored, and always ready when needed for your healthcare.
          </p>
          <a href="#">Explore Tables →</a>
        </div>
      </div>
    </div>






    <div className="templates-wrapper">
      <h2 className="templates-title">Experience the scopes <br/>of healthcare workflows</h2>
      <p className="templates-subtitle">
        Witness the future scope of automation in healthcare with our solutions.
      </p>
      <div className="templates-grid">
        {templates.map((template, index) => (
          <div className="template-card" key={index}>
            <div className="template-img">
              <img src={template.image} alt={template.title} />
            </div>
            <h4>{template.title}</h4>
            {/* <a href={template.link}>Get started →</a> */}
          </div>
        ))}
      </div>
    </div>




    {/* <section className="automation-section">
      <div className="content-wrapper">
        <div className="text-content">
          <p className="label">ENTERPRISE</p>
          <h2 className="heading">Automation for every team, approved by IT</h2>
          <p className="subtext">
            Progress stalls when teams have to wait for technical help. NephroFlow empowers everyone
            in your business to safely automate their work in minutes—not months.
          </p>
          <div className="buttons">
            <button className="primary-btn">Meet NephroFlow for Enterprise</button>
            <button className="secondary-btn">Contact Sales</button>
          </div>
        </div>

        <div className="quote-section">
          <div className="quote">
            <div className="logo-text">
              <span className="logo">R</span>
              <span className="company">remote</span>
            </div>
            <p className="quote-text">
              "Just last month, we had 1,100 help desk requests from our 1,700 employees.
              Normally, that many requests would overwhelm our team of three, but through
              our help desk workflows in NephroFlow, we resolved them easily. Our team of three
              is able to perform like a team of 10."
            </p>
            <p className="author">—Marcus Saito<br />Director of IT, Remote.com</p>
          </div>
          <div className="analytics-image">
            <img src="/path-to-your-screenshot.png" alt="Analytics dashboard" />
          </div>
        </div>
      </div>
    </section> */}
        
    <footer className="footer">
      <img
        src="https://cdn.discordapp.com/attachments/1362796877317407064/1362800761146445844/NephroFlow.png?ex=6803b69d&is=6802651d&hm=1db31adb8932a5c4e01487f85e204b20d4b92586a10eb3ae64f34a41e2f18d2f&" 
        alt="Your Logo"
        className="footer-logo"
      />
    </footer>

    
        {/* <AuthForm mode="signup"/> */}

        

    
      </>
      

  );
}
export default Navbar;
