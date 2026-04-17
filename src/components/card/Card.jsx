
import AllCard from './allCard';
const appsPromise = async () => {
    const res = await fetch("http://localhost:3000//card.json");
    const data = await res.json();
    return data;
};

const Card = async () => {
    const friendsData = await appsPromise();

    return (
        <main className="bg-[#f8fafd] min-h-screen py-16 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">

                <header className="mb-12">
                    <h1 className="text-4xl font-black text-[#1e293b]">Your Friends</h1>
                </header>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {friendsData.map((individualFriend) => (
                        <AllCard
                            key={individualFriend.id}
                            friend={individualFriend}
                        />
                    ))}
                </div>

            </div>
        </main>
    );
};

export default Card;