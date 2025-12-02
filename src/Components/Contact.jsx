import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact(){
    return (
        <>
        <footer class="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
            <div class="w-full mx-auto max-w-screen-xl p-4 flex justify-center items-center">
            
            <ul class="flex flex-wrap items-center gap-20 mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <EmailIcon className='mr-2'/>
                    Email : zoyayusuf04@gmail.com
                </li>
                <li>
                    <LinkedInIcon className='mr-2'/>
                    LinkedIn : <a href="https://www.linkedin.com/in/zoya-yusuf/" class="hover:underline">Zoya Yusuf</a>
                </li>
                <li>
                    <GitHubIcon className='mr-2'/>
                    GitHub : <a href="https://github.com/ZoyaYusuf" class="hover:underline text-white">ZoyaYusuf</a>
                </li>
            </ul>
            </div>
        </footer>

        </>
    )
}