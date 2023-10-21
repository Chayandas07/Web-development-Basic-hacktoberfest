import React, { useEffect, useState , useLayoutEffect} from 'react'
import {getNews} from '../Service/getNews'
import moment from 'moment';
import alanBtn from '@alan-ai/alan-sdk-web';
export default function NewsData() {
    const [newsdata,setNewsData]=useState([])
    const alankey= `a92021a931c1ef820da2127deb69249d2e956eca572e1d8b807a3e2338fdd0dc/stage`
    const [selectOption,setSelectOption]=useState('')
    const getallnews=async()=>{
        let data=await getNews(selectOption)
        setNewsData(data.data.articles)
    }

    const selectCategory=(e)=>{
        setSelectOption(e.target.value)
    }
   
    useLayoutEffect(() => {
        function updateScreen(time) {
            // Make visual updates here.
            alanBtn({
                key: alankey,
                onCommand: (commandData) => {
                   setSelectOption(commandData.data)
                  }
            })
        }
    
        requestAnimationFrame(updateScreen);
    }, [])
    
      
      useEffect(()=>{
        getallnews()
    },[selectOption])
  return (
    <div className='main'>
        <h1>Voice News</h1>
        <div className='select'>
        <label for="cars">Choose a Category  : </label>

            <select name="category" id="category" className='select-box' onChange={selectCategory} value={selectOption}>
            <option value="general">General</option>
            <option value="health">Health</option>
            <option value="business">Business</option>
            <option value="Sports">Sports</option>
            </select>
            </div>
        <div className='grid-main'>
        {newsdata?.map((news)=>{
            return (
                <div className='grid-child'>
                    <img src={news.urlToImage} className='news-image'></img>
                    <p className='news-title'>{news?.title}</p>
                    <p className='news-content'>{news?.content}</p>
                    <div className='space-between'>
                    <p className='news-author'>Author : {news?.author ? news?.author : 'Author name not available'}</p>
                    <p className='news-date'>  Date : {moment(news?.publishedAt).format('LL')}</p>
                    </div>
                    <a href={news.url} target="_blank">Read More..</a>
                </div>
            )
        })}
        </div>
    </div>
  )
}
