import Avatar from "@/app/component/Utilities/Avatar"

const TeamSec = () => {
    return(
        <section>
        <div className="bg-team flex flex-col justify-center items-center text-white gap-20">
            <h1 className="text-4xl font-bold">OUR TEAM</h1>
            <p className="text-center font-bold px-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, doloremque, sint quia aliquam corporis corrupti voluptatem suscipit adipisci, similique eaque soluta? Neque saepe modi magnam a tempore vel, officiis exercitationem reprehenderit rem nihil, consectetur delectus? Ullam a adipisci ea reiciendis nisi harum voluptatum tempora fugit voluptates nihil? Praesentium, vero eum.</p>
            <div className="flex flex-wrap justify-center gap-10">
                    <Avatar ImgProfil="/infoimg.jpg" />
                    <Avatar ImgProfil="/services1.jpg" />
                    <Avatar ImgProfil="/services2.jpg" />
                    <Avatar ImgProfil="/services3.jpg" />
                </div>
        </div>
    </section>
    )
}

export default TeamSec