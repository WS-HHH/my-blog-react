import Image from "../Image";
import JSImg from '../../assets/img/js.png'
export default function Item(props) {
  const { img, title, content } = props;
  return (
    <div className='flex w-full py-4'>
      <div className='w-11/12  flex justify-center items-center'>
        <Image url={img} width={128} height={64} />
        {/* <img src="../../logo.svg" alt="-"></img> */}
      </div>
      <div className=''>
      <div className='text-xl font-bold'>{title}</div>
      <div className='h-32'>
        <p className='text-base text-gray-700 text-ellipsis overflow-hidden'>
          {content}
        </p>
      </div>
      <div className='flex text-sm text-gray-700'>
        <div className='
          border border-slate-400 rounded-full
          px-4
          outline outline-offset-1 outline-2 outline-indigo-500
        '>
          <div className='py-0'>UI</div>
        </div>
        <div className='ml-2'>Apr 26</div>
      </div>
      </div>
      <div className='divide-y'></div>
    </div>
  )
}

// const styles = {
//   'truncate': {
//     display: '-webkit-box',
//     '-webkit-line-clamp': 4, /* Set the number of lines you want to show */
//     '-webkit-box-orient': 'vertical',
//     overflow: 'hidden',
//   }
// }