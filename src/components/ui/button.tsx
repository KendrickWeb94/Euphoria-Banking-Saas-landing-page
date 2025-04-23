import { ArrowRight } from "@phosphor-icons/react"


interface Button {
    name: string
}

export const Button = (props: Button) => {
    return (
        <button className="flex items-center w-full cursor-pointer xds:w-fit hover:gap-4 smooth text-white font-medium rounded-3xl gap-2 text-sm flex-center py-3 px-6 bg-primary">
            <p className="">{props.name}</p>
            <ArrowRight size={18} />
        </button>
    )
}