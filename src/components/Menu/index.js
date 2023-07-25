
/**
 * menuData
 * key
 * 
 */

import JSurl from './js.png';
import Image from '../Image';
const menuData = [
  { label: '前端', icon: JSurl },
  { label: '后端', icon: JSurl },
  { label: '后端', icon: JSurl },
  { label: '后端', icon: JSurl },
  { label: '后端', icon: JSurl },
  { label: '后端', icon: JSurl },
  { label: '后端', icon: JSurl },
  { label: '后端', icon: JSurl },
  { label: '后端', icon: JSurl },
  { label: '后端', icon: JSurl },
];

export default function Menu(props) {
  return (
    <div className='p-2 w-64 bg-white rounded-xl shadow-lg border'>
      {
        menuData.map((item, index) => <MenuItem item={item} key={index} />)
      }
    </div>
  )
}

function MenuItem(props) {
  const { item } = props;
  console.log('item?.icon', item?.icon);
  return (
    <div className='
      flex
      text-slate-500
      hover:text-white
      text-ms
      font-medium
      hover:bg-indigo-500
      rounded-md
      p-2
    '>
      <div>
        <Image src={item?.icon} width={24} height={24} />
      </div>
      <div className='ml-2'>{item?.label}</div>
    </div>
  )
}