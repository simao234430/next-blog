
import { useEffect, useState } from 'react'

const ScrollTopAndComment = (props: { slug: string }) => {
  const [show, setShow] = useState(false)
  // const {asPath} = useRouter()
 
  // console.log( asPath.split('#')[0].split('?')[0]);

  useEffect(() => {
    
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const pdf_download = () => {
    window.location.href="http://localhost:3000/api/pdfs/"+ props.slug

 

  }

  const handleScrollToComment = () => {
    // document.getElementById('comment').scrollIntoView()
  }
  return (
    <div
      className={`fixed flex-col hidden gap-3 right-8 bottom-8 ${show ? 'md:flex' : 'md:hidden'}`}
    >
      <button
        aria-label="Scroll To Comment"
        type="button"
        onClick={handleScrollToComment}
        className="p-2 text-gray-500 transition-all bg-gray-200 rounded-full dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300"
      >
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <button
        aria-label="Download pdf"
        type="button"
        onClick={pdf_download}
        className="p-2 text-gray-500 transition-all bg-gray-200 rounded-full dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300"
      >
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path
            fillRule="evenodd"
            d="M3.875 17.188v-1.73h12.25v1.73ZM10 13.958 5.833 9.792l1.229-1.209 2.063 2.063V2.812h1.75v7.834l2.063-2.063 1.229 1.209Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <button
        aria-label="Scroll To Top"
        type="button"
        onClick={handleScrollTop}
        className="p-2 text-gray-500 transition-all bg-gray-200 rounded-full dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300"
      >
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

export default ScrollTopAndComment
