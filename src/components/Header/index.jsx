import './header.css';
import Button from '../Button';
import { useState, useEffect } from 'react';

function Header() {
    const [windowsWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, []);

    return (
        <header>
            <div className='logo'>
                <svg xmlns="http://www.w3.org/2000/svg" width="256" height="60" viewBox="0 0 256 60" fill="none">
                    <path d="M206.883 19.9446C210.127 19.9446 212.722 21.3826 214.155 24.3063H221.123C219.089 18.0637 213.635 14.4448 206.93 14.4448C198.231 14.4448 191.608 20.9056 191.608 30.0242C191.608 39.1429 198.231 45.5559 206.93 45.5559C213.635 45.5559 219.089 41.978 221.123 35.6944H214.155C212.729 38.659 210.127 40.1038 206.883 40.1038C201.604 40.1038 197.839 36.1783 197.839 30.0242C197.839 23.8225 201.604 19.9446 206.883 19.9446Z" fill="white"></path>
                    <path d="M117.301 14.7924L131.021 35.7353V14.7924H137.077V45.297H131.021L117.301 24.3949V45.297H111.245V14.7924H117.301Z" fill="white"></path>
                    <path d="M79.9984 37.4868L70.3873 14.8332H63.5068V45.2969H69.5628V25.4853L77.7004 45.2969H82.2896L90.38 25.4853V45.2969H96.4426V14.8332H89.6027L79.9984 37.4868Z" fill="white"></path>
                    <path d="M106.865 14.8333H100.809V45.2902H106.865V14.8333Z" fill="white"></path>
                    <path d="M161.226 35.7353L147.506 14.7924H141.45V45.297H147.506V24.3949L161.226 45.297H167.282V14.7924H161.226V35.7353Z" fill="white"></path>
                    <path d="M189.181 45.297H171.655V14.7924H189.181V19.7675H177.718V27.4004H187.883V32.246H177.718V40.3219H189.181V45.297Z" fill="white"></path>
                    <path d="M223.111 19.7675V14.8333H245.272V19.7675H237.223V45.297H231.16V19.7675H223.111Z" fill="white"></path>
                    <path d="M37.6811 38.7193C41.1443 36.6897 44.6 34.6524 48.0631 32.6305C48.2815 32.5079 48.3492 32.3624 48.3492 32.1173C48.3417 27.9049 48.3417 23.6925 48.3492 19.48C48.3492 19.212 48.2589 19.0664 48.033 18.9439C46.8585 18.2623 45.6841 17.5653 44.5171 16.8683C39.7063 14.0345 34.888 11.193 30.0847 8.35157C29.8588 8.22136 29.7007 8.2137 29.4749 8.34391C28.067 9.19405 26.6441 10.0212 25.2287 10.856C20.6588 13.5443 16.0889 16.2326 11.5115 18.9133C11.263 19.0588 11.1576 19.212 11.1576 19.5107C11.1651 25.0864 11.1651 30.6621 11.1651 36.2455V36.751C11.3082 36.682 11.391 36.6514 11.4588 36.6055C12.445 36.0157 13.4237 35.4107 14.4175 34.8439C14.7262 34.6677 14.8391 34.4763 14.8391 34.1086C14.8241 29.9958 14.8316 25.8829 14.8241 21.7777C14.8241 21.4177 14.9069 21.2033 15.2306 21.0348C15.8329 20.7208 16.4126 20.3532 16.9999 20.0162C21.1331 17.5883 25.2663 15.168 29.3996 12.7325C29.6781 12.564 29.8814 12.564 30.16 12.7325C30.9204 13.2073 31.6958 13.6516 32.4637 14.1034C36.4238 16.4318 40.3839 18.7601 44.3515 21.0808C44.5322 21.188 44.6903 21.2722 44.6903 21.5556C44.6752 24.3894 44.6828 27.2232 44.6752 30.0494C44.6752 30.1873 44.5698 30.3787 44.4494 30.4477C43.4556 31.0527 42.4543 31.6425 41.453 32.2322C41.3626 32.2858 41.2648 32.3164 41.1368 32.3701V31.8033C41.1368 29.1303 41.1368 26.4573 41.1292 23.7844C41.1292 23.6235 41.0765 23.3784 40.9636 23.3095C39.9096 22.6432 38.8405 22.0075 37.8016 21.3795C35.1063 24.0907 32.4412 26.7714 29.7459 29.4826C27.0958 26.779 24.4307 24.0677 21.7655 21.3488C20.7642 21.9539 19.8081 22.5589 18.8218 23.118C18.483 23.3095 18.3701 23.5316 18.3701 23.9222C18.3851 28.0351 18.3776 32.1479 18.3851 36.2608C18.3851 36.5595 18.2948 36.7203 18.0463 36.8659C16.6912 37.6624 15.3436 38.4819 13.9959 39.2938C13.085 39.8452 12.1815 40.3966 11.2329 40.9634C11.3232 41.0323 11.3534 41.063 11.3835 41.086C17.444 44.632 23.4971 48.1781 29.5652 51.7089C29.6857 51.7779 29.9191 51.7549 30.047 51.6783C30.9956 51.1422 31.9367 50.5754 32.8778 50.024C37.9296 47.0599 42.9738 44.0883 48.0255 41.1319C48.2664 40.994 48.3568 40.8409 48.3492 40.5575C48.3342 39.3933 48.3417 38.2292 48.3417 37.065C48.3417 36.9348 48.3191 36.7969 48.3116 36.6208C48.1761 36.6974 48.0933 36.7433 48.0104 36.7893C42.0628 40.2971 36.1151 43.8049 30.1675 47.3203C29.8889 47.4812 29.7007 47.5042 29.4071 47.3357C26.6742 45.712 23.9338 44.1112 21.1933 42.5029C20.3426 42.005 19.4918 41.4995 18.5959 40.9711C19.6801 40.3124 20.704 39.6767 21.7429 39.0716C22.014 38.9108 22.0968 38.7346 22.0968 38.4206C22.0892 34.9128 22.0892 31.405 22.0892 27.8972C22.0892 27.7134 22.0892 27.5296 22.0892 27.3381C22.1495 27.3075 22.2097 27.2845 22.2699 27.2615C24.7619 29.8503 27.2464 32.4313 29.8136 35.089C32.3659 32.4773 34.8804 29.9115 37.4402 27.2922V38.8266C37.5606 38.7729 37.6209 38.75 37.6811 38.7193Z" fill="white"></path>
                    <path d="M29.7574 0C13.3281 0 0 13.4292 0 30C0 46.5632 13.3206 60 29.7574 60C46.1942 60 59.5073 46.5708 59.5073 30C59.5148 13.4292 46.1942 0 29.7574 0ZM29.8175 35.0265C27.2645 32.3997 24.7791 29.8486 22.2936 27.2975C22.2336 27.3278 22.1735 27.3505 22.1134 27.3732C22.1134 27.5549 22.1134 27.7441 22.1134 27.9258C22.1134 31.3929 22.1059 34.86 22.1209 38.327C22.1209 38.6374 22.0308 38.8115 21.768 38.9705C20.7318 39.5685 19.7106 40.1968 18.6293 40.8478C19.5229 41.3702 20.3714 41.8698 21.2199 42.3618C23.9531 43.9515 26.6863 45.5337 29.412 47.1385C29.6973 47.3051 29.8925 47.2899 30.1704 47.1234C36.1023 43.6488 42.0343 40.1817 47.9662 36.7146C48.0488 36.6692 48.1389 36.6238 48.2666 36.5481C48.2816 36.7222 48.2966 36.8509 48.2966 36.9871C48.2966 38.1378 48.2891 39.2884 48.3041 40.4391C48.3116 40.7192 48.2215 40.863 47.9813 41.0068C42.9429 43.9288 37.9044 46.8584 32.8735 49.7956C31.9349 50.3407 31.0039 50.9008 30.0502 51.4307C29.9226 51.5064 29.6898 51.5291 29.5697 51.461C23.5176 47.9712 17.4805 44.4663 11.4359 40.9614C11.3984 40.9387 11.3683 40.9084 11.2857 40.8403C12.2243 40.2801 13.1329 39.7351 14.0415 39.19C15.3855 38.3876 16.7296 37.5776 18.0812 36.7903C18.3365 36.6465 18.4191 36.4799 18.4191 36.1923C18.4116 32.1272 18.4191 28.0621 18.4041 24.0045C18.4041 23.6109 18.5167 23.3989 18.8546 23.2097C19.8383 22.6571 20.7919 22.059 21.7905 21.461C24.4487 24.1484 27.1068 26.8282 29.7499 29.5004C32.438 26.8206 35.1037 24.1711 37.7843 21.4913C38.8205 22.112 39.8943 22.7404 40.938 23.3989C41.0506 23.4671 41.1032 23.7093 41.1032 23.8683C41.1107 26.5102 41.1107 29.1522 41.1107 31.7941V32.3543C41.2308 32.3013 41.336 32.271 41.4261 32.218C42.4247 31.6351 43.4309 31.0522 44.4146 30.4542C44.5272 30.3861 44.6323 30.1968 44.6398 30.0606C44.6549 27.2597 44.6398 24.4587 44.6549 21.6654C44.6549 21.3853 44.4972 21.302 44.317 21.1961C40.3673 18.8948 36.4177 16.5935 32.4606 14.2998C31.6947 13.8531 30.9213 13.4141 30.1629 12.9447C29.885 12.7706 29.6823 12.7782 29.4045 12.9447C25.2897 15.352 21.1598 17.7441 17.0375 20.1438C16.4518 20.4845 15.8811 20.8478 15.2729 21.1506C14.9425 21.3172 14.8599 21.5291 14.8674 21.8849C14.8824 25.95 14.8674 30.0151 14.8825 34.0727C14.8825 34.436 14.7698 34.6253 14.462 34.7994C13.4708 35.3596 12.4946 35.9576 11.511 36.5405C11.4434 36.5784 11.3683 36.6162 11.2182 36.6843V36.1847C11.2182 30.6737 11.2182 25.1552 11.2106 19.6442C11.2106 19.3414 11.3158 19.19 11.5636 19.0537C16.1289 16.4042 20.6868 13.7472 25.2446 11.0901C26.6563 10.265 28.0754 9.44739 29.4796 8.60712C29.7048 8.47086 29.855 8.47843 30.0878 8.61469C34.8859 11.4232 39.684 14.2316 44.4822 17.0326C45.6535 17.7139 46.8174 18.4027 47.9888 19.084C48.2065 19.2127 48.3041 19.349 48.3041 19.6139C48.2966 23.7774 48.2966 27.941 48.3041 32.1045C48.3041 32.3467 48.2366 32.4905 48.0188 32.6117C44.5648 34.6101 41.1182 36.6238 37.6642 38.6298C37.6041 38.6601 37.5365 38.6904 37.4239 38.7434V27.3202C34.8634 29.9092 32.3629 32.4451 29.8175 35.0265Z" fill="black"></path>
                </svg>
            </div>
            <nav>
                <a href="#">Entre os Melhores</a>
                <a href="#">Torne-se um Especialista</a>
                <a href="#">Reservar um Podcast</a>
                <a href="#">Imprensa</a>
                <a href="#">Perguntas Frequentes</a>
                <a href="#">Carreiras</a>
            </nav>
            <Button background="red" color="white" width="140px" height="40px" fontSize="16px" weight="400" content="Baixe o App" display={windowsWidth <= 1024 ? 'none' : ""}/>
        </header>
    )
}

export default Header;