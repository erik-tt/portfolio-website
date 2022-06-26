import React from "react"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';




export default function Footer () {


    return (
        <>
            <footer className='footer'>
                
               <div className="footer-icons">
                    <div className='linkedin-icon' >
                        <a href='https://www.linkedin.com/in/erik-torvbråten-4252301b8/'>
                            <LinkedInIcon style={{ color: 'white' }}/>
                        </a>
                    </div>

                    <div className='github-icon'>                        
                        <a  href='https://github.com/erik-tt'>
                            <GitHubIcon style={{ color: 'white' }}/>
                        </a>
                    </div>
                </div>
                
                <a href="#home" style={{ color: 'white' }}>to the top</a>
            </footer>
        </>
    );
};

