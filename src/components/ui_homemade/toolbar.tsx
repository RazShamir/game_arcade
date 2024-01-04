
import reactLogo from '@/assets/react.svg'

export default function Toolbar() {
    return <nav className="flex flex-row justify-between p-4 bg-slate-600">
        <div>
         <img src={reactLogo} className='w-6 h-6'/> 
        </div>
        <div className='flex flex-row gap-4 text-white '>
            <div>Home</div>
            <div>Account</div>
        </div>
    </nav>
}