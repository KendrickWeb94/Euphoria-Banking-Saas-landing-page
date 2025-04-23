interface SectionBage {
    id: number,
    name: String,
}

export const SectionBadge = (props: SectionBage) => {
    return (
        <button className="w-fit cursor-not-allowed h-auto py-1 flex items-center justify-center gap-2 px-3 font-medium border rounded-3xl text-sm text-primary">
          <div className="w-2 h-2 rounded-full bg-primary"></div> {props.name}
        </button>
    )
}