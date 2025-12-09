const ListGroup = () => {
    const cities = ['Bhaktapur', 'Kathmandu', 'Lalitpur', 'Pokhara', 'Biratnagar', 'Dhangadhi'];
    // cities = [];



    return (
        <>
            <div className="flex flex-col h-screen justify-center items-center">
                <div className="text-3xl text-center mb-5">These are the lists!!</div>
                {cities.length === 0 ? (<p>Sorry!! No cities</p>) : (
                    <ul className="flex flex-col justify-center items-center list-inside list-disc">
                        {cities.map((item, index) => <li key={index} className="border-b p-5">{item}</li>)}

                    </ul>
                )}

            </div>
        </>
    )
}

export default ListGroup;