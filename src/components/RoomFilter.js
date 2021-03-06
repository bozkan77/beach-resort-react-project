import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';
//get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
const RoomFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  console.log(context);
  // unique tip getir
  let types = getUnique(rooms, 'type');
  //add all
  types = ['all', ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className='filter-container'>
      <Title title='oda ara' />
      {/*tip seç*/}
      <form className='filter-form'>
        <div className='form-group'>
          <label htmlFor='type'>oda tipi</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}
          >
            {types}
          </select>
          <option value='single'>single</option>
        </div>
      </form>
      {/*son tip seç*/}

      {/* misafir tipi */}
      <form className='filter-form'>
        <div className='form-group'>
          <label htmlFor='capacity'>Guests</label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            className='form-control'
            onChange={handleChange}
          >
            {people}
          </select>
          <option value='single'>single</option>
        </div>
      </form>
      {/* son misafir tipi */}
      {/* oda fiyatı */}
      <div className='form-group filter-form'>
        <label htmlFor='price'>oda fiyatı {price} TL</label>
        <input
          type='range'
          name='price'
          min={minPrice}
          max={maxPrice}
          id={price}
          value={price}
          onChange={handleChange}
          className='form-control'
        />
      </div>
      {/* son oda fiyatı */}
      {/* oda boyutu */}
      <div className='form-group filter-form'>
        <label htmlFor='size'>Oda büyüklüğü</label>
        <div className='size-inputs'>
          <input
            type='number'
            name='minSize'
            id='size'
            value={minSize}
            onChange={handleChange}
            className='size-input'
          />
          <input
            type='number'
            name='maxSize'
            id='size'
            value={maxSize}
            onChange={handleChange}
            className='size-input'
          />
        </div>
      </div>
      {/* son oda boyutu */}
      {/* ekstralar */}
      <div className='form-group filter-form'>
        <div className='single-extra'>
          <input
            type='checkbox'
            name='breakfast'
            id='breakfast'
            checked={breakfast}
            onChange={handleChange}
          />
          <label htmlFor='breakfast'>Kahvaltı</label>
        </div>
        <div className='single-extra'>
          <input
            type='checkbox'
            name='pets'
            id='pets'
            checked={pets}
            onChange={handleChange}
          />
          <label htmlFor='pets'>Evcil hayvan</label>
        </div>
      </div>
      {/* son ekstralar */}
    </section>
  );
};

export default RoomFilter;
