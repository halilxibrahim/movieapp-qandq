import Image from 'next/image'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import Link from 'next/link'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => { {/* Burada useEffect kullanarak Scroll hareket ettirildi */}
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#000000]'}`}> {/*Scroll aşağıya kaydığında header buradaki renk oluşuyor */}
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D0BAQHWQxfc-rYnYA/company-logo_200_200/0/1654710056271?e=1665619200&v=beta&t=FiM_zyAHHVuOgVey9FR5O0uzKjU10Hk5p2OZxc8Sg9k"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />


        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">
            Ana Sayfa
          </li>
          <li className="headerLink">Diziler</li>
          <li className="headerLink">Filmler</li>
          <li className="headerLink">Popüler</li>
          <li className="headerLink">Benim Listem</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header