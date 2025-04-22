import React from 'react'

const HeaderBox = ({type="title",title,user,subtext}: HeaderBoxProps) => {
  return (
    <div className='header-box'>
        <div className='header-box-title'>
            {title}
            {type==='greeting' && (
                <span className='text-bankGradient'>
                    &nbsp;{user}
                </span>
            )}
            <p className='header-box-subtext'>{subtext}</p>
        </div>
    </div>
  )
}

export default HeaderBox