import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { State } from '../redux/reduxType'
import { setFontSize, setGhari, setTranslate} from '../redux/setting'

const Setting = () => {
  const dispatch = useDispatch()
  const setting = useSelector((state: State) => state.setting.value);
  return (
    <div className='bg-isabelline sm:w-4/5 md:w-3/5 lg:w-2/5 xl:2/5 w-full h-screen'>
      <div className='overflow-hidden flex flex-col box-border m-4 p-4 justify-center items-center gap-2 bg-pacificBlue z-10 text-white rounded-md shadow-pacificBlue'>
        <div>
          تنظیمات
        </div>
      </div>
      <div className='flex flex-col border-b-2 border-b-pacificBlue m-5 p-5'>
        <label htmlFor="">
          <input className='mx-2' type="radio" name='qari' onChange={() => dispatch(setGhari('Minshawy_Murattal'))} checked={setting.ghari === 'Minshawy_Murattal'}/>
          <span className='mx-3'>
            منشاوی
          </span>
        </label>
        <label htmlFor="">
          <input className='mx-2' type="radio" name='qari' onChange={() => dispatch(setGhari('Husary'))} checked={setting.ghari === 'Husary'}/>
          <span className='mx-3'>
            خلیل الحصری
          </span>
        </label>
      </div>
      <div className='flex flex-col border-b-2 border-b-pacificBlue m-5 p-5'>
        <label htmlFor="">
          <input className='mx-2' type="radio" name='tarjome' onChange={() => dispatch(setTranslate('ansarian'))} checked={setting.translate === 'ansarian'}/>
          <span className='mx-3'>
            انصاریان
          </span>
        </label>
        <label htmlFor="">
          <input className='mx-2' type="radio" name='tarjome' onChange={() => dispatch(setTranslate('makarem'))} checked={setting.translate === 'makarem'}/>
          <span className='mx-3'>
            مکارم
          </span>
        </label>
      </div>
      <div className='flex flex-col border-b-2 border-b-pacificBlue m-5 p-5'>
        <label htmlFor="">
          <input className='mx-2' type="radio" name="font-size" onChange={() => dispatch(setFontSize('text-sm'))} checked={setting.fontSize === 'text-sm'}/>
          <span className='mx-3'>
            کوچک
          </span>
        </label>
        <label htmlFor="">
          <input className='mx-2' type="radio" name="font-size" onChange={() => dispatch(setFontSize('text-base'))} checked={setting.fontSize === 'text-base'}/>
          <span className='mx-3'>
            متوسط
          </span>
        </label>
        <label htmlFor="">
          <input className='mx-2' type="radio" name="font-size" onChange={() => dispatch(setFontSize('text-lg'))} checked={setting.fontSize === 'text-lg'}/>
          <span className='mx-3'>
            بزرگ
          </span>
        </label>
      </div>
    </div>
  )
}

export default Setting
