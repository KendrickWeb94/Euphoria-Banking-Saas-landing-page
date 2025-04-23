import { LogoImg } from "../../constants"

export const Logo = () => {
    return (
        <a href="/" className=" max-w-32 min-w-24">
            <img src={LogoImg} alt="Euphoria Banking website logo" />
        </a>
    )
}