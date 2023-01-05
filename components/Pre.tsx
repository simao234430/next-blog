import { DetailedHTMLProps, HTMLAttributes, useRef, useState } from 'react'

const Pre = ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => {
  const textInput = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [copied, setCopied] = useState(false)

  const onEnter = () => {
    setHovered(true)
  }
  const onExit = () => {
    setHovered(false)
    setCopied(false)
  }
  const onCopy = () => {
    setCopied(true)
    navigator.clipboard.writeText(textInput.current?.textContent as string)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div ref={textInput} onMouseEnter={onEnter} onMouseLeave={onExit} className="relative">
      {hovered && (
        <button
          aria-label="Copy code"
          type="button"
          className={`clipboard-button absolute right-2 top-2 w-8 h-8 p-1 rounded  bg-gray-700 dark:bg-gray-800 ${
            copied ? 'focus:outline-none focus:border-sky-400 border-sky-400' : 'border-gray-300'
          }`}
          onClick={onCopy}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
 
            aria-hidden="true" height="16" 
            viewBox="0 0 16 16"

            fill="#61AFEF"
            className={copied ? 'text-sky-400' : 'text-gray-300'}
          >
            {copied ? (
              <>
                <path 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z">

                </path>
              </>
            ) : (
              <>
              <path 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
              d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fillRule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z">

              </path>
              </>
            )}
          </svg>
        </button>
      )}
      <pre>{children}</pre>
    </div>
  )
}

export default Pre
