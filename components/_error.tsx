import { NextPageContext } from 'next'
import Link from 'next/link'

interface ErrorProps {
  statusCode?: number
}

const Error: React.FC<ErrorProps> = ({ statusCode }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-juche-light-gray">
      <h1 className="text-4xl font-bold text-juche-blue mb-4">
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </h1>
      <p className="text-juche-dark-gray mb-8">We apologize for the inconvenience.</p>
      <Link href="/">
        <a className="bg-juche-red text-juche-white px-6 py-3 rounded-full hover:bg-juche-gold hover:text-juche-blue transition duration-300">
          Return to Homepage
        </a>
      </Link>
    </div>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error

