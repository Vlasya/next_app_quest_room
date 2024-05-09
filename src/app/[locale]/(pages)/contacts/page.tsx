import React from 'react';

const ContactsPage = async () => {
  return (
    <div className='flex flex-col py-[120px] px-[136px]'>
      <div className='flex flex-col mb-[30px] pb-8'>
        <h1 className='mb-1 text-activeOrange'>Ігри у Дніпрі</h1>
        <p className='text-6xl font-bold'>Контакти</p>
      </div>
      <div className='flex justify-between text-lightText ml-[30px]'>
        <div>
          <p className='mb-2 font-bold'>Адреса</p>
          <p className='mb-9'>Дніпро, вулиця Січеславська Набережна 5</p>
          <p className='mb-2 font-bold'>Години роботи</p>
          <p className='mb-9'>Цілодобово</p>
          <p className='mb-2 font-bold'>Телефон</p>
          <p className='mb-9'>8 (800) 333-55-99</p>
          <p className='mb-2 font-bold'>E-mail</p>
          <p>dnipro.games@game.ua</p>
        </div>

        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10578.819023689271!2d35.0287329!3d48.4813765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2f3c1caeb99%3A0xd1b02ea3d4568565!2z0J3QtdC00L7QsdGD0LTQvtCy0LDQvdC40Lkg0LPQvtGC0LXQu9GMICLQn9Cw0YDRg9GBIg!5e0!3m2!1suk!2sua!4v1712778215264!5m2!1suk!2sua'
          width='650'
          height='300'
          loading='lazy'
          style={{ borderRadius: '16px' }}
        ></iframe>
      </div>
    </div>
  );
};

export default ContactsPage;
