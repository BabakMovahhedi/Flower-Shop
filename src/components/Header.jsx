const Header = () => {
    return (
        <div className="bg-emerald-100 flex justify-around p-2 w-full h-10  "  >
            <div className="flex">
                <h1 className="mr-8" >LOGO</h1>
                <p>item 1</p>
                <p>item 2</p>
                <p>item 3</p>
            </div>
            <div className="flex">
                <form  >
                    <input className="bg-stone-200 rounded-md" type="text" placeholder="SEARCH" />
                </form>
                <button className="ml-8">DARK</button>
            </div>
        </div>
    );
}

export default Header;