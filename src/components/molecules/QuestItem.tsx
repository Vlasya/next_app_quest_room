import { Quests } from '@/types/quests';
import React from 'react';

interface Props{
    item:Quests
}

const QuestItem = ({item}:Props) => {
    return (
    <div
    // style={`background-image: url(${})`}
     className={`w-[344px] h-[232px] bg-[url(/img/cover-mars-2056.jpg)]`} >
            {item.title}
        </div>
    );
};

export default QuestItem;