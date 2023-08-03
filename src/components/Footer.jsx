export default function Footer(){
    return(
        <footer className=" bg-[#8B85AF]">
            <div className="container mx-auto flex justify-between items-center py-4 border-t-2 border-[#292631]/[.55] text-[#fff]">
                <h2 className="text-xl font-sans">Iskander</h2>
                <div className="flex flex-col ">
                    <a href="https://github.com/iskanderqq" className="font-sans" target="_blank">GitHub</a>
                    <a href="https://t.me/IskanderNV" className="font-sans" target="_blank">Telegram</a>
                </div>
            </div>
        </footer>
    )
}