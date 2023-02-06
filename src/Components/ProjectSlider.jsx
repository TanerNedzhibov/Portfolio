import React, { useState } from 'react'
import Button from '@mui/material/Button';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Slide from './Slide'
import ImgContainer from './ImgContainer';

const ProjectSlider = () => {
    
    const [pageNumber, setPageNumber] = useState(0)
    var secondSlideNum = pageNumber === ImgContainer.length -1 ? 0 : pageNumber + 1;
  return (
    <div className='projectSliderContainer'>
        <div className='projectSlider'>
            <Button sx={{width: "60px", height: "60px", borderRadius: "50%", color: "black"}} 
                    className='skipButtons' 
                    variant="text"
                    onClick={() => pageNumber === 0 ? setPageNumber(ImgContainer.length -2) : setPageNumber(pageNum => pageNum - 1)}> <NavigateBeforeIcon fontSize='large'/> </Button>
            <div className="slideMainContainer">
                {ImgContainer.map((element) => (
                  <div key={element.Id} className={`slidingItem${pageNumber}`}>
                  <Slide key={element.Id} appName={element.AppName} appImg={element.AppImg} pageNumber={pageNumber} />
                  </div>))}
            </div>

            <Button sx={{width: "60px", height: "60px", borderRadius: "50%", color: "black"}} 
                    className='skipButtons' 
                    variant="text"
                    onClick={() => pageNumber === ImgContainer.length -2 ? setPageNumber(0) : setPageNumber(pageNum => pageNum + 1)}> <NavigateNextIcon fontSize='large' /> </Button>
        </div>
        <div className='dotContainer'>
                  <div className={pageNumber === 0 ? "dotActive" : 'dotNotActive'} 
                      onClick={() => setPageNumber(0)}></div>
                  <div className={pageNumber === 1 ? "dotActive" : 'dotNotActive'} 
                      onClick={() => setPageNumber(1)}></div>
                  <div className={pageNumber === 2 ? "dotActive" : 'dotNotActive'}
                      onClick={() => setPageNumber(2)}></div>
        </div>
    </div>
  )
}

export default ProjectSlider