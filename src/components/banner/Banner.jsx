import { FiPlus } from "react-icons/fi";

const appsPromise = async () => {
    const res = await fetch("https://friends-zone-theta.vercel.app/card.json");
    const data = await res.json();
    return data;
};
const Banner = async() => {
    const friends = await appsPromise();
    
    return (<>
        <section className=" py-20 px-6">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                <h1 className="text-[#1F2937] text-3xl md:text-5xl  font-bold mb-4 ">
                    Friends to keep close in your life
                </h1>
                <p className="text-[#64748B] mb-7">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.
                </p>
                <button className="flex items-center gap-2 bg-[#244D3F] hover:bg-[#1d3a2f] text-white btn duration-200">
                    <FiPlus className="text-xl" />
                    <span>Add a Friend</span>
                </button>
            </div>
        </section>
        <section className='container mx-auto grid grid-cols-2 md:grid-cols-4 md:max-w-[1100] max-w-[400] gap-5'>
            <div className=" bg-base-100 shadow-sm gap-2 p-8 flex items-center justify-center flex-col">
                <a className="font-semibold text-3xl text-[#244D3F]">{friends.length}</a>
                <p className='text-[#64748B] font-bold '>Total Friends</p>
            </div>
            <div className=" bg-base-100 shadow-sm gap-2 p-8 flex items-center justify-center flex-col">
                <a className="font-semibold text-3xl text-[#244D3F]">{friends.filter(friend=> friend.status=="On_Track").length}</a>
                <p className='text-[#64748B] font-bold '>On Track</p>
            </div>
            <div className=" bg-base-100 shadow-sm gap-2 p-8 flex items-center justify-center flex-col">
                <a className="font-semibold text-3xl text-[#244D3F]">{friends.filter(friend=> friend.status=="overdue").length}</a>
                <p className='text-[#64748B] font-bold '>Need Attention</p>
            </div>
            <div className=" bg-base-100 shadow-sm gap-2 p-8 flex items-center justify-center flex-col">
                <a className="font-semibold text-3xl text-[#244D3F]">{friends.filter(friend=> friend.days_since_contact >30).length}</a>
                <p className='text-[#64748B] font-bold '>Interactions This Month</p>
            </div>
        </section>
        <p className='max-w-[1100] container mx-auto border border-[#E9E9E9] mt-10 mb-10 '></p>
    </>
    );
};

export default Banner;