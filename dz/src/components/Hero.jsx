export function Hero(props) {
 
    return (
        <div className="
        flex
        flex-col
        items-center
        justify-center
        relative
        z-20
        mb-14
        ">
            <p className="md:px-0 px-8 font-semibold md:text-8xl text-6xl text-white mb-8">{props.content}</p>
            <p className="text-center md:px-0 md:w-1/2 px-10 font-thin w-full md:text-lg text-sm text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab illum quod quae, placeat, vitae ullam minus enim iusto maiores laboriosam repellat quisquam minima at nemo quos ipsum dicta ad illo.</p>
        </div>
    )
}