import bgHeaderDesktop from '../assets/bg-header-desktop.svg';
import bgHeaderMobile from '../assets/bg-header-mobile.svg';

const BackGround = () => {
    return (
        <picture className='jobs__background'>
            <source media='(max-width: 375px)' srcSet={bgHeaderMobile} />
            <source media='(min-width: 376px)' srcSet={bgHeaderDesktop} />
            <img src={bgHeaderDesktop} alt='background' />
        </picture>
    )
}

export default BackGround