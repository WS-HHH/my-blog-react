import Item from "./item";
import JSImg from '../../assets/img/js.png'

const articleList = [
  {
    img: JSImg,
    title: 'I Asked ChatGPT How To Earn $1000 Online. It Was Hilarious.',
    content: 'Peering in the hive mind can be really helpful, but it can also be so stupid it’s funny —  Y’all fair warning. I have a weird sense of humor. Probably because I’m Canadian. When you live where there’s snow half the year, and it’s hot enough to fry eggs on the sidewalk the other half, maybe a person can’t help being a bit off the beaten track. Anyway. Unless',
  },
  {
    img: JSImg,
    title: 'I Asked ChatGPT How To Earn $1000 Online. It Was Hilarious.',
    content: 'Peering in the hive mind can be really helpful, but it can also be so stupid it’s funny —  Y’all fair warning. I have a weird sense of humor. Probably because I’m Canadian. When you live where there’s snow half the year, and it’s hot enough to fry eggs on the sidewalk the other half, maybe a person can’t help being a bit off the beaten track. Anyway. Unless',
  },
  {
    img: JSImg,
    title: 'I Asked ChatGPT How To Earn $1000 Online. It Was Hilarious.',
    content: 'Peering in the hive mind can be really helpful, but it can also be so stupid it’s funny —  Y’all fair warning. I have a weird sense of humor. Probably because I’m Canadian. When you live where there’s snow half the year, and it’s hot enough to fry eggs on the sidewalk the other half, maybe a person can’t help being a bit off the beaten track. Anyway. Unless',
  },
  {
    img: JSImg,
    title: 'I Asked ChatGPT How To Earn $1000 Online. It Was Hilarious.',
    content: 'Peering in the hive mind can be really helpful, but it can also be so stupid it’s funny —  Y’all fair warning. I have a weird sense of humor. Probably because I’m Canadian. When you live where there’s snow half the year, and it’s hot enough to fry eggs on the sidewalk the other half, maybe a person can’t help being a bit off the beaten track. Anyway. Unless',
  },
  {
    img: JSImg,
    title: 'I Asked ChatGPT How To Earn $1000 Online. It Was Hilarious.',
    content: 'Peering in the hive mind can be really helpful, but it can also be so stupid it’s funny —  Y’all fair warning. I have a weird sense of humor. Probably because I’m Canadian. When you live where there’s snow half the year, and it’s hot enough to fry eggs on the sidewalk the other half, maybe a person can’t help being a bit off the beaten track. Anyway. Unless',
  },
];
export default function List() {

  return (
    <div className='flex flex-col-reverse divide-y divide-y-reverse'>
      {
        articleList.map((item, index) => <Item img={item?.img} title={item.title} content={item?.content}/>)
      }
    </div>
  )
}

