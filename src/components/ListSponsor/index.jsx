import { useState } from 'react';

const ListSponsor = () => {
  const [sponsor, setSponsor] = useState([
    'Logo sponsor_05',
    'Logo sponsor_04',
    'Logo sponsor_02',
    'Logo sponsor_01',
    'Logo sponsor_01-1',
    'Logo sponsor_01-2',
    'Logo sponsor_01-3',
    'Logo sponsor_01-4',
  ]);
  return (
    <div className='flex items-center gap-10 flex-wrap justify-evenly bg-neutral-700'>
      {sponsor.map((sponsorItem) => (
        <img
          key={sponsorItem}
          className='w-36 h-24'
          src={`${sponsorItem}.png`}
        />
      ))}
    </div>
  );
};

export default ListSponsor;
