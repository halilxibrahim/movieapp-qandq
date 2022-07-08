
function Header() {
  return <header>
        <div className="flex items-center space-x-2 md:space-x-10">
            <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQHWQxfc-rYnYA/company-logo_200_200/0/1654710056271?e=1665619200&v=beta&t=FiM_zyAHHVuOgVey9FR5O0uzKjU10Hk5p2OZxc8Sg9k"
            width={100}
            height={100}
            className="cursor-pointer object-contain"
            />
            
            <ul>
                <li>Ana Sayfa</li>
                <li>TV</li>
                <li>Filmler</li>
                <li>Popüler</li>
                <li>Benim Listem</li>
            </ul>
        </div>
        <div></div>
    </header>
  
}

export default Header