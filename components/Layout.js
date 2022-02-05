import Head from "next/head"
import Image from "next/image"
import headerPicture from "../public/entete.jpg"
import Button from "../components/Button"
import Link from "next/link"

const Layout = ({ children, props }) => {
  return (
    <>
      <Head>
        <title>Eazy Accounting</title>
      </Head>
      <header>
        <Image
          src={headerPicture}
          alt="headerPicture"
          height={500}
          objectFit="cover"
        ></Image>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate flex items-center p-2 ">
            {props}
          </h1>
          <div className="flex justify-end">
            <Link href="/" passHref>
              <a>
                <Button type="button" variant="secondary" size="lg">
                  👀 Journal
                </Button>
              </a>
            </Link>

            <Link href="/add-entry" passHref>
              <a>
                <Button type="button" variant="primary" size="lg">
                  💰 Add Entry
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </header>
      {children}
    </>
  )
}

export default Layout
