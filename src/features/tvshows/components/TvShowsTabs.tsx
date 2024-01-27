function TvShowsTabs(props : {selectedIndex :number, onClick: (index:number)=>void}){
    return <div className={'mx-4 select-none  w-[90%] font-medium justify-evenly sm:w-fit flex rounded-full text-sm sm:text-lg text-center text-white border-darkerRed border-2 bg-darkerRed'}>
        <div onClick={()=>props.onClick(0)} className={`w-[8rem] ${props.selectedIndex == 0 ? 'bg-white text-primaryDark' : 'bg-transparent'} hover:bg-white hover:text-primaryDark transition-all transform duration-300 text-center rounded-full px-2.5 py-1`}>Airing Today</div>
        <div onClick={()=>props.onClick(1)} className={`w-[8rem] ${props.selectedIndex == 1 ? 'bg-white text-primaryDark' : 'bg-transparent'} hover:bg-white hover:text-primaryDark transition-all transform duration-300 text-center rounded-full px-2.5 py-1`}>Popular</div>
        <div onClick={()=>props.onClick(2)} className={`w-[8rem] ${props.selectedIndex == 2 ? 'bg-white text-primaryDark' : 'bg-transparent'} hover:bg-white hover:text-primaryDark transition-all transform duration-300 text-center rounded-full px-2.5 py-1`}>Top Rated</div>
    </div>
}

export default TvShowsTabs;