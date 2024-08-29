interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string
}
export function TextBox ({label, type = 'text', ...props}: InputProps) {
  return (
    <div className='flex items-center justify-between mt-3 text-[0.8rem] '>
      <label htmlFor={props.id} className='text-gray-500'>{label}</label>
      <input type={type} {...props} className=' w-[120px] rounded-md text-gray-700 bg-gray-200/80 h-8 px-2 outline-blue-500 focus:outline focus:outline-1' />
    </div>
  )
}